*mostly copy/paste from java version, must be adapted*

# ChaptersApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](ChaptersApi.md#delete) | **DELETE** /videos/{videoId}/chapters/{language} | Delete a chapter
[**list**](ChaptersApi.md#list) | **GET** /videos/{videoId}/chapters | List video chapters
[**get**](ChaptersApi.md#get) | **GET** /videos/{videoId}/chapters/{language} | Show a chapter
[**upload**](ChaptersApi.md#upload) | **POST** /videos/{videoId}/chapters/{language} | Upload a chapter


<a name="delete"></a>
# **delete**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.chapters;

//TODO from java generator, to be adapted
/*


    string videoId = vi4k0jvEUuaTdRAEjQ4Jfrgz; // The unique identifier for the video you want to delete a chapter from. 
    string language = en; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

try {
    void result = apiInstance.delete(videoId, language);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ChaptersApi#delete");
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
 **videoId** | **string**| The unique identifier for the video you want to delete a chapter from.  | [default to undefined]
 **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. | [default to undefined]

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

<a name="list"></a>
# **list**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.chapters;

//TODO from java generator, to be adapted
/*


    string videoId = vi4k0jvEUuaTdRAEjQ4Jfrgz; // The unique identifier for the video you want to retrieve a list of chapters for.
    number currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
    number pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

try {
    Page<> result = apiInstance.list(videoId)
    .currentPage(currentPage)
    .pageSize(pageSize)
    .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ChaptersApi#list");
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
 **videoId** | **string**| The unique identifier for the video you want to retrieve a list of chapters for. | [default to undefined]
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
**404** | Not Found |  -  |

<a name="get"></a>
# **get**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.chapters;

//TODO from java generator, to be adapted
/*


    string videoId = vi4k0jvEUuaTdRAEjQ4Jfrgz; // The unique identifier for the video you want to show a chapter for.
    string language = en; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

try {
    Chapter result = apiInstance.get(videoId, language);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ChaptersApi#get");
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
 **videoId** | **string**| The unique identifier for the video you want to show a chapter for. | [default to undefined]
 **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. | [default to undefined]

### Return type


[**Chapter**](Chapter.md)

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
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.chapters;

//TODO from java generator, to be adapted
/*


    string videoId = vi4k0jvEUuaTdRAEjQ4Jfrgz; // The unique identifier for the video you want to upload a chapter for.
    string language = en; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
    File file = BINARY_DATA_HERE; // The VTT file describing the chapters you want to upload.

try {
    Chapter result = apiInstance.upload(videoId, language, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling ChaptersApi#upload");
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
 **videoId** | **string**| The unique identifier for the video you want to upload a chapter for. | [default to undefined]
 **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. | [default to undefined]
 **file** | **File**| The VTT file describing the chapters you want to upload. | [default to undefined]

### Return type


[**Chapter**](Chapter.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

