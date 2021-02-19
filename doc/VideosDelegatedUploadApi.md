*mostly copy/paste from java version, must be adapted*

# VideosDelegatedUploadApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteToken**](VideosDelegatedUploadApi.md#deleteToken) | **DELETE** /upload-tokens/{uploadToken} | Delete an upload token
[**listTokens**](VideosDelegatedUploadApi.md#listTokens) | **GET** /upload-tokens | List all active upload tokens.
[**getToken**](VideosDelegatedUploadApi.md#getToken) | **GET** /upload-tokens/{uploadToken} | Show upload token
[**upload**](VideosDelegatedUploadApi.md#upload) | **POST** /upload | Upload with an upload token
[**createToken**](VideosDelegatedUploadApi.md#createToken) | **POST** /upload-tokens | Generate an upload token


<a name="deleteToken"></a>
# **deleteToken**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.videosDelegatedUpload;

//TODO from java generator, to be adapted
/*


    string uploadToken = to1tcmSFHeYY5KzyhOqVKMKb; // The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.

try {
    void result = apiInstance.deleteToken(uploadToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VideosDelegatedUploadApi#deleteToken");
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
 **uploadToken** | **string**| The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication. | [default to undefined]

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

<a name="listTokens"></a>
# **listTokens**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.videosDelegatedUpload;

//TODO from java generator, to be adapted
/*


    'createdAt' | 'ttl' sortBy = ttl; // Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.
    'asc' | 'desc' sortOrder = asc; // Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.
    number currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
    number pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

try {
    Page<> result = apiInstance.listTokens()
    .sortBy(sortBy)
    .sortOrder(sortOrder)
    .currentPage(currentPage)
    .pageSize(pageSize)
    .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VideosDelegatedUploadApi#listTokens");
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
 **sortBy** | **&#39;createdAt&#39; | &#39;ttl&#39;**| Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format. | [optional] [default to undefined] [enum: createdAt, ttl]
 **sortOrder** | **&#39;asc&#39; | &#39;desc&#39;**| Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A. | [optional] [default to undefined] [enum: asc, desc]
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

<a name="getToken"></a>
# **getToken**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.videosDelegatedUpload;

//TODO from java generator, to be adapted
/*


    string uploadToken = to1tcmSFHeYY5KzyhOqVKMKb; // The unique identifier for the token you want information about.

try {
    UploadToken result = apiInstance.getToken(uploadToken);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VideosDelegatedUploadApi#getToken");
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
 **uploadToken** | **string**| The unique identifier for the token you want information about. | [default to undefined]

### Return type


[**UploadToken**](UploadToken.md)

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

<a name="upload"></a>
# **upload**


### Example
```javascript
const apiVideoClient = new VideoApiClient();

const api = apiVideoClient.videosDelegatedUpload;

//TODO from java generator, to be adapted
/*


    string token = to1tcmSFHeYY5KzyhOqVKMKb; // The unique identifier for the token you want to use to upload a video.
    File file = BINARY_DATA_HERE; // The path to the video you want to upload.

try {
    Video result = apiInstance.upload(token, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VideosDelegatedUploadApi#upload");
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
 **token** | **string**| The unique identifier for the token you want to use to upload a video. | [default to undefined]
 **file** | **File**| The path to the video you want to upload. | [default to undefined]


### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `setUploadChunkSize()` of method of `ApiVideoClient` before uploading:

```java
apiVideoClient.setUploadChunkSize(50*1024*1024); // use 50MB chunks
apiVideoClient.videosDelegatedUpload().upload(token, file);
```

### Return type


[**Video**](Video.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |

<a name="createToken"></a>
# **createToken**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.videosDelegatedUpload;

//TODO from java generator, to be adapted
/*


    TokenCreatePayload tokenCreatePayload = ; // 
        tokenCreatePayload.setTtl(); // Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.


try {
    UploadToken result = apiInstance.createToken(tokenCreatePayload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling VideosDelegatedUploadApi#createToken");
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
 **tokenCreatePayload** | [**TokenCreatePayload**](TokenCreatePayload.md)|  | [optional]

### Return type


[**UploadToken**](UploadToken.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

