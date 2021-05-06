*mostly copy/paste from java version, must be adapted*

# RawStatisticsApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLiveStreamSessions**](RawStatisticsApi.md#listLiveStreamSessions) | **GET** /analytics/live-streams/{liveStreamId} | List live stream player sessions
[**listSessionEvents**](RawStatisticsApi.md#listSessionEvents) | **GET** /analytics/sessions/{sessionId}/events | List player session events
[**listVideoSessions**](RawStatisticsApi.md#listVideoSessions) | **GET** /analytics/videos/{videoId} | List video player sessions


<a name="listLiveStreamSessions"></a>
# **listLiveStreamSessions**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.rawStatistics;

//TODO from java generator, to be adapted
/*


    string liveStreamId = vi4k0jvEUuaTdRAEjQ4Jfrgz; // The unique identifier for the live stream you want to retrieve analytics for.
    string period = 2019-01-01; // Period must have one of the following formats:   - For a day : \"2018-01-01\", - For a week: \"2018-W01\",  - For a month: \"2018-01\" - For a year: \"2018\"  For a range period:  -  Date range: \"2018-01-01/2018-01-15\" 
    number currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
    number pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

try {
    Page<> result = apiInstance.listLiveStreamSessions(liveStreamId)
    .period(period)
    .currentPage(currentPage)
    .pageSize(pageSize)
    .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling RawStatisticsApi#listLiveStreamSessions");
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
 **liveStreamId** | **string**| The unique identifier for the live stream you want to retrieve analytics for. | [default to undefined]
 **period** | **string**| Period must have one of the following formats:   - For a day : \&quot;2018-01-01\&quot;, - For a week: \&quot;2018-W01\&quot;,  - For a month: \&quot;2018-01\&quot; - For a year: \&quot;2018\&quot;  For a range period:  -  Date range: \&quot;2018-01-01/2018-01-15\&quot;  | [optional] [default to undefined]
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

<a name="listSessionEvents"></a>
# **listSessionEvents**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.rawStatistics;

//TODO from java generator, to be adapted
/*


    string sessionId = psEmFwGQUAXR2lFHj5nDOpy; // A unique identifier you can use to reference and track a session with.
    number currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
    number pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

try {
    Page<> result = apiInstance.listSessionEvents(sessionId)
    .currentPage(currentPage)
    .pageSize(pageSize)
    .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling RawStatisticsApi#listSessionEvents");
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
 **sessionId** | **string**| A unique identifier you can use to reference and track a session with. | [default to undefined]
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

<a name="listVideoSessions"></a>
# **listVideoSessions**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.rawStatistics;

//TODO from java generator, to be adapted
/*


    string videoId = vi4k0jvEUuaTdRAEjQ4Prklg; // The unique identifier for the video you want to retrieve session information for.
    string period = period_example; // Period must have one of the following formats:   - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018  For a range period:  -  Date range: 2018-01-01/2018-01-15 
    Array<string> metadata = [{"key": "Author", "value": "John Doe"}, {"key": "Format", "value": "Tutorial"}]; // Metadata and Dynamic Metadata filter. Send an array of key value pairs you want to filter sessios with.
    number currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
    number pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

try {
    Page<> result = apiInstance.listVideoSessions(videoId)
    .period(period)
    .metadata(metadata)
    .currentPage(currentPage)
    .pageSize(pageSize)
    .execute();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling RawStatisticsApi#listVideoSessions");
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
 **videoId** | **string**| The unique identifier for the video you want to retrieve session information for. | [default to undefined]
 **period** | **string**| Period must have one of the following formats:   - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018  For a range period:  -  Date range: 2018-01-01/2018-01-15  | [optional] [default to undefined]
 **metadata** | [**Array&lt;string&gt;**](string.md)| Metadata and Dynamic Metadata filter. Send an array of key value pairs you want to filter sessios with. | [optional]
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

