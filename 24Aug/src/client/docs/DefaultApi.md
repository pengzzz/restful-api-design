# DefaultApi

All URIs are relative to *http://petstore.swagger.io/v2*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**addPet**](DefaultApi.md#addPet) | **POST** /pet |  |
| [**deletePet**](DefaultApi.md#deletePet) | **DELETE** /pet/{id} |  |
| [**findPetById**](DefaultApi.md#findPetById) | **GET** /pet/{id} |  |
| [**findPets**](DefaultApi.md#findPets) | **GET** /pet |  |


<a name="addPet"></a>
# **addPet**
> Pet addPet(newPet)



Creates a new pet in the store. Duplicates are allowed

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://petstore.swagger.io/v2");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    NewPet newPet = new NewPet(); // NewPet | Pet to add to the store
    try {
      Pet result = apiInstance.addPet(newPet);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#addPet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **newPet** | [**NewPet**](NewPet.md)| Pet to add to the store | |

### Return type

[**Pet**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | pet response |  -  |
| **0** | unexpected error |  -  |

<a name="deletePet"></a>
# **deletePet**
> deletePet(id)



deletes a single pet based on the ID supplied

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://petstore.swagger.io/v2");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    Long id = 56L; // Long | ID of pet to delete
    try {
      apiInstance.deletePet(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#deletePet");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| ID of pet to delete | |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | pet deleted |  -  |
| **0** | unexpected error |  -  |

<a name="findPetById"></a>
# **findPetById**
> Pet findPetById(id)



Returns a user based on a single ID, if the user does not have access to the pet

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://petstore.swagger.io/v2");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    Long id = 56L; // Long | ID of pet to fetch
    try {
      Pet result = apiInstance.findPetById(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#findPetById");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| ID of pet to fetch | |

### Return type

[**Pet**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | pet response |  -  |
| **0** | unexpected error |  -  |

<a name="findPets"></a>
# **findPets**
> List&lt;Pet&gt; findPets(tags, limit)



Returns all pets from the system that the user has access to Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.  Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien. 

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.DefaultApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://petstore.swagger.io/v2");

    DefaultApi apiInstance = new DefaultApi(defaultClient);
    List<String> tags = Arrays.asList(); // List<String> | tags to filter by
    Integer limit = 56; // Integer | maximum number of results to return
    try {
      List<Pet> result = apiInstance.findPets(tags, limit);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DefaultApi#findPets");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tags** | [**List&lt;String&gt;**](String.md)| tags to filter by | [optional] |
| **limit** | **Integer**| maximum number of results to return | [optional] |

### Return type

[**List&lt;Pet&gt;**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | pet response |  -  |
| **0** | unexpected error |  -  |

