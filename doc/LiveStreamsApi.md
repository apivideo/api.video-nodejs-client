*mostly copy/paste from java version, must be adapted*

# LiveStreamsApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](LiveStreamsApi.md#delete) | **DELETE** /live-streams/{liveStreamId} | Delete a live stream
[**deleteThumbnail**](LiveStreamsApi.md#deleteThumbnail) | **DELETE** /live-streams/{liveStreamId}/thumbnail | Delete a thumbnail
[**list**](LiveStreamsApi.md#list) | **GET** /live-streams | List all live streams
[**get**](LiveStreamsApi.md#get) | **GET** /live-streams/{liveStreamId} | Show live stream
[**update**](LiveStreamsApi.md#update) | **PATCH** /live-streams/{liveStreamId} | Update a live stream
[**create**](LiveStreamsApi.md#create) | **POST** /live-streams | Create live stream
[**uploadThumbnail**](LiveStreamsApi.md#uploadThumbnail) | **POST** /live-streams/{liveStreamId}/thumbnail | Upload a thumbnail


<a name="delete"></a>
# **delete**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.liveStreams;

//TODO from java generator, to be adapted
/*


    string liveStreamId = li400mYKSgQ6xs7taUeSaEKr; // The unique ID for the live stream that you want to remove.

try {
    void result = apiInstance.delete(liveStreamId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LiveStreamsApi#delete");
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
 **liveStreamId** | **string**| The unique ID for the live stream that you want to remove. | [default to undefined]

### Return type


[**void**](.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

<a name="deleteThumbnail"></a>
# **deleteThumbnail**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.liveStreams;

//TODO from java generator, to be adapted
/*


    string liveStreamId = li400mYKSgQ6xs7taUeSaEKr; // The unique identifier for the live stream you want to delete. 

try {
    LiveStream result = apiInstance.deleteThumbnail(liveStreamId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LiveStreamsApi#deleteThumbnail");
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
 **liveStreamId** | **string**| The unique identifier for the live stream you want to delete.  | [default to undefined]

### Return type


[**LiveStream**](LiveStream.md)

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

<a name="list"></a>
# **list**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.liveStreams;

//TODO from java generator, to be adapted
/*


    string streamKey = 30087931-229e-42cf-b5f9-e91bcc1f7332; // The unique stream key that allows you to stream videos.
    string name = My Video; // You can filter live streams by their name or a part of their name.
    string sortBy = createdAt; // Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format.
    'asc' | 'desc' sortOrder = desc; // Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.
    number currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
    number pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

try {
    Page<> result = apiInstance.list()
    .streamKey(streamKey)
    .name(name)
    .sortBy(sortBy)
    .sortOrder(sortOrder)
    .currentPage(currentPage)
    .pageSize(pageSize)
    .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LiveStreamsApi#list");
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
 **streamKey** | **string**| The unique stream key that allows you to stream videos. | [optional] [default to undefined]
 **name** | **string**| You can filter live streams by their name or a part of their name. | [optional] [default to undefined]
 **sortBy** | **string**| Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format. | [optional] [default to undefined]
 **sortOrder** | **&#39;asc&#39; | &#39;desc&#39;**| Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending. | [optional] [default to undefined] [enum: asc, desc]
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

<a name="get"></a>
# **get**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.liveStreams;

//TODO from java generator, to be adapted
/*


    string liveStreamId = li400mYKSgQ6xs7taUeSaEKr; // The unique ID for the live stream you want to watch.

try {
    LiveStream result = apiInstance.get(liveStreamId);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LiveStreamsApi#get");
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
 **liveStreamId** | **string**| The unique ID for the live stream you want to watch. | [default to undefined]

### Return type


[**LiveStream**](LiveStream.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="update"></a>
# **update**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.liveStreams;

//TODO from java generator, to be adapted
/*


    string liveStreamId = li400mYKSgQ6xs7taUeSaEKr; // The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.
    LiveStreamUpdatePayload liveStreamUpdatePayload = ; // 
        liveStreamUpdatePayload.setName(); // The name you want to use for your live stream.
        liveStreamUpdatePayload.setPublic(); // BETA FEATURE Please limit all public &#x3D; false (&quot;private&quot;) livestreams to 3,000 users.
Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.
        liveStreamUpdatePayload.setRecord(); // Use this to indicate whether you want the recording on or off. On is true, off is false.
        liveStreamUpdatePayload.setPlayerId(); // The unique ID for the player associated with a live stream that you want to update.


try {
    LiveStream result = apiInstance.update(liveStreamId, liveStreamUpdatePayload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LiveStreamsApi#update");
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
 **liveStreamId** | **string**| The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off. | [default to undefined]
 **liveStreamUpdatePayload** | [**LiveStreamUpdatePayload**](LiveStreamUpdatePayload.md)|  |

### Return type


[**LiveStream**](LiveStream.md)

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

<a name="create"></a>
# **create**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.liveStreams;

//TODO from java generator, to be adapted
/*


    LiveStreamCreationPayload liveStreamCreationPayload = ; // 
        liveStreamCreationPayload.setName(); // Add a name for your live stream here.
        liveStreamCreationPayload.setRecord(); // Whether you are recording or not. True for record, false for not record.
        liveStreamCreationPayload.setPublic(); // BETA FEATURE Please limit all public &#x3D; false (&quot;private&quot;) livestreams to 3,000 users. Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.
        liveStreamCreationPayload.setPlayerId(); // The unique identifier for the player.


try {
    LiveStream result = apiInstance.create(liveStreamCreationPayload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LiveStreamsApi#create");
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
 **liveStreamCreationPayload** | [**LiveStreamCreationPayload**](LiveStreamCreationPayload.md)|  |

### Return type


[**LiveStream**](LiveStream.md)

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

<a name="uploadThumbnail"></a>
# **uploadThumbnail**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.liveStreams;

//TODO from java generator, to be adapted
/*


    string liveStreamId = vi4k0jvEUuaTdRAEjQ4Jfrgz; // The unique ID for the live stream you want to upload.
    File file = BINARY_DATA_HERE; // The image to be added as a thumbnail.

try {
    LiveStream result = apiInstance.uploadThumbnail(liveStreamId, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling LiveStreamsApi#uploadThumbnail");
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
 **liveStreamId** | **string**| The unique ID for the live stream you want to upload. | [default to undefined]
 **file** | **File**| The image to be added as a thumbnail. | [default to undefined]

### Return type


[**LiveStream**](LiveStream.md)

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

