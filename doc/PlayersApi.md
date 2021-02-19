*mostly copy/paste from java version, must be adapted*

# PlayersApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](PlayersApi.md#delete) | **DELETE** /players/{playerId} | Delete a player
[**deleteLogo**](PlayersApi.md#deleteLogo) | **DELETE** /players/{playerId}/logo | Delete logo
[**list**](PlayersApi.md#list) | **GET** /players | List all players
[**get**](PlayersApi.md#get) | **GET** /players/{playerId} | Show a player
[**update**](PlayersApi.md#update) | **PATCH** /players/{playerId} | Update a player
[**create**](PlayersApi.md#create) | **POST** /players | Create a player
[**uploadLogo**](PlayersApi.md#uploadLogo) | **POST** /players/{playerId}/logo | Upload a logo


<a name="delete"></a>
# **delete**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.players;

//TODO from java generator, to be adapted
/*


    string playerId = pl45d5vFFGrfdsdsd156dGhh; // The unique identifier for the player you want to delete.

try {
    void result = apiInstance.delete(playerId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlayersApi#delete");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player you want to delete. | [default to undefined]

### Return type


[**void**](.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Not Found |  -  |

<a name="deleteLogo"></a>
# **deleteLogo**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.players;

//TODO from java generator, to be adapted
/*


    string playerId = pl14Db6oMJRH6SRVoOwORacK; // The unique identifier for the player.

try {
    any result = apiInstance.deleteLogo(playerId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlayersApi#deleteLogo");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player. | [default to undefined]

### Return type


**any**

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Not Found |  -  |

<a name="list"></a>
# **list**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.players;

//TODO from java generator, to be adapted
/*


    'createdAt' | 'updatedAt' sortBy = createdAt; // createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
    'asc' | 'desc' sortOrder = asc; // Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
    number currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
    number pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

try {
    Page<> result = apiInstance.list()
    .sortBy(sortBy)
    .sortOrder(sortOrder)
    .currentPage(currentPage)
    .pageSize(pageSize)
    .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlayersApi#list");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **&#39;createdAt&#39; | &#39;updatedAt&#39;**| createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format. | [optional] [default to undefined] [enum: createdAt, updatedAt]
 **sortOrder** | **&#39;asc&#39; | &#39;desc&#39;**| Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. | [optional] [default to undefined] [enum: asc, desc]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type

[**Page**](pagination.md)<[****](.md)>


### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

<a name="get"></a>
# **get**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.players;

//TODO from java generator, to be adapted
/*


    string playerId = pl45d5vFFGrfdsdsd156dGhh; // The unique identifier for the player you want to retrieve. 

try {
    Player result = apiInstance.get(playerId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlayersApi#get");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player you want to retrieve.  | [default to undefined]

### Return type


[**Player**](Player.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="update"></a>
# **update**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.players;

//TODO from java generator, to be adapted
/*


    string playerId = pl45d5vFFGrfdsdsd156dGhh; // The unique identifier for the player.
    PlayerUpdatePayload playerUpdatePayload = ; // 


try {
    Player result = apiInstance.update(playerId, playerUpdatePayload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlayersApi#update");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player. | [default to undefined]
 **playerUpdatePayload** | [**PlayerUpdatePayload**](PlayerUpdatePayload.md)|  |

### Return type


[**Player**](Player.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="create"></a>
# **create**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.players;

//TODO from java generator, to be adapted
/*


    PlayerCreationPayload playerCreationPayload = ; // 


try {
    Player result = apiInstance.create(playerCreationPayload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlayersApi#create");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerCreationPayload** | [**PlayerCreationPayload**](PlayerCreationPayload.md)|  |

### Return type


[**Player**](Player.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

<a name="uploadLogo"></a>
# **uploadLogo**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.players;

//TODO from java generator, to be adapted
/*


    string playerId = pl14Db6oMJRH6SRVoOwORacK; // The unique identifier for the player.
    File file = BINARY_DATA_HERE; // The name of the file you want to use for your logo.
    string link = link_example; // The path to the file you want to upload and use as a logo.

try {
    Player result = apiInstance.uploadLogo(playerId, file, link);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling PlayersApi#uploadLogo");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player. | [default to undefined]
 **file** | **File**| The name of the file you want to use for your logo. | [default to undefined]
 **link** | **string**| The path to the file you want to upload and use as a logo. | [default to undefined]

### Return type


[**Player**](Player.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

