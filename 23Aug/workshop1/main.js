import express from 'express'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import bodyParser from 'body-parser'

// hack 
import range from './node_modules/express-range/index.js'

import { 
	findAllGames, findGamesByName, findGameById, countGames, 
	findCommentsByGameId, findCommentsByUser, findCommentById,
	insertComment
} from './database.js'
import { mkGameUrl, mkCommentUrl, mkError } from './util.js'

const PORT = parseInt(process.env.PORT) || 3000

const app = express()

app.use(morgan("common"))
app.use(bodyParser.json());

// Games
// TODO GET /games
app.get('/games', async (req, resp) => {
	const offset = parseInt(req.query.offset) || 0
	const limit = parseInt(req.query.limit) || 10
	try {
		const result = await findAllGames(offset, limit)
		var data = [];
		result.forEach (function(game) {
			data.push('/game/' + game.id);
		})
		resp.status(200)
		resp.json(data)
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})

// TODO GET /game/<game_id>
app.get('/games/:game_id', async (req, resp) => {
	const game_id = parseInt(req.params.game_id)
	try {
		const result = await findGameById(game_id)
		if (result) {
			resp.status(200)
			resp.json(result)
		}
		else {
			resp.status(404)
		}
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})

app.get('/games/search', async (req, resp) => {
	const q = req.query.q
	if (!q) 
		return resp.status(400).json({ error: `Missing query parameter q` })
	
	try {
		const result = await findGamesByName(q)
		resp.status(200)
		resp.json(mkGameUrl(result))
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})

app.get('/games/count', async (req, resp) => {
	try {
		const result = await countGames()
		resp.status(200)
		resp.json({ count: result })
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})


// Comments
// TODO POST /comment
app.post('/comment', async (req, resp) => {
	console.log(req.body);
	var user = req.body.user
	var rating = req.body.rating
	var c_text = req.body.c_text
	var gid = req.body.gid || -1
	try {
		if (user && rating && c_text && gid) {
			if (rating < 1 || rating > 10) {
				resp.status(400)
				resp.json(mkError('Invalid Rating'))
				return
			}
			const game = await findGameById(gid)
			if (!game) {
				resp.status(400)
				resp.json(mkError('Game ' + gid + ' does not exist.'))
				return
			}
			var comment = {
				user: user,
				rating: rating,
				c_text: c_text,
				gid: gid
			}
			const id = await insertComment(comment);
			resp.status(200)
			resp.json({"id": id})
		}
		else {
			resp.status(400)
			resp.json(mkError('Missing Values'))
		}
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})


app.get('/game/:gameId/comments', async (req, resp) => {
	const gameId = parseInt(req.params.gameId)
	const offset = parseInt(req.query.offset) || 0
	const limit = parseInt(req.query.limit) || 10
	try {
		const result = await findCommentsByGameId(gameId, offset, limit)
		resp.status(200)
		resp.json(mkCommentUrl(result))
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})

app.get('/comments/:user', async (req, resp) => {
	const user = req.params.user
	const offset = parseInt(req.query.offset) || 0
	const limit = parseInt(req.query.limit) || 10
	try {
		const result = await findCommentsByUser(user, offset, limit)
		resp.status(200)
		resp.json(mkCommentUrl(result))
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})

app.get('/comment/:commentId', async (req, resp) => {
	const commentId = req.params.commentId
	try {
		const comment = await findCommentById(commentId)
		if (!comment) {
			resp.status(404)
			return resp.json(mkError({ error: `Comment ${commentId} not found`}))
		}
		resp.status(200)
		resp.json(comment)
	} catch (err) {
		resp.status(500)
		resp.json(mkError(err))
	}
})

app.listen(PORT, () => {
	console.info(`Application started on port ${PORT} at ${new Date()}`)
})
