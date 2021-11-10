# RawStatisticsApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLiveStreamSessions**](RawStatisticsApi.md#listLiveStreamSessions) | **GET** /analytics/live-streams/{liveStreamId} | List live stream player sessions
[**listSessionEvents**](RawStatisticsApi.md#listSessionEvents) | **GET** /analytics/sessions/{sessionId}/events | List player session events
[**listVideoSessions**](RawStatisticsApi.md#listVideoSessions) | **GET** /analytics/videos/{videoId} | List video player sessions


<a name="listLiveStreamSessions"></a>
## **listLiveStreamSessions**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const liveStreamId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the live stream you want to retrieve analytics for.
        const period = '2019-01-01'; // Period must have one of the following formats:  - For a day : \"2018-01-01\", - For a week: \"2018-W01\",  - For a month: \"2018-01\" - For a year: \"2018\" For a range period:  -  Date range: \"2018-01-01/2018-01-15\" 
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // RawStatisticsListLiveStreamAnalyticsResponse
        const result = await client.rawStatistics.listLiveStreamSessions({ liveStreamId, period, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **liveStreamId** | **string**| The unique identifier for the live stream you want to retrieve analytics for. | [default to undefined]
 **period** | **string**| Period must have one of the following formats:  - For a day : \&quot;2018-01-01\&quot;, - For a week: \&quot;2018-W01\&quot;,  - For a month: \&quot;2018-01\&quot; - For a year: \&quot;2018\&quot; For a range period:  -  Date range: \&quot;2018-01-01/2018-01-15\&quot;  | [optional] [default to undefined]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**RawStatisticsListLiveStreamAnalyticsResponse**](../model/RawStatisticsListLiveStreamAnalyticsResponse.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="listSessionEvents"></a>
## **listSessionEvents**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const sessionId = 'psEmFwGQUAXR2lFHj5nDOpy'; // A unique identifier you can use to reference and track a session with.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // RawStatisticsListPlayerSessionEventsResponse
        const result = await client.rawStatistics.listSessionEvents({ sessionId, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **string**| A unique identifier you can use to reference and track a session with. | [default to undefined]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**RawStatisticsListPlayerSessionEventsResponse**](../model/RawStatisticsListPlayerSessionEventsResponse.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="listVideoSessions"></a>
## **listVideoSessions**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want to retrieve session information for.
        const period = 'period_example'; // Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018 For a range period:  -  Date range: 2018-01-01/2018-01-15 
        const metadata = 'metadata[Author]=John Doe&metadata[Format]=Tutorial'; // Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // RawStatisticsListSessionsResponse
        const result = await client.rawStatistics.listVideoSessions({ videoId, period, metadata, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want to retrieve session information for. | [default to undefined]
 **period** | **string**| Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018 For a range period:  -  Date range: 2018-01-01/2018-01-15  | [optional] [default to undefined]
 **metadata** | **{ [key: string]: string; }**| Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with. | [optional]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**RawStatisticsListSessionsResponse**](../model/RawStatisticsListSessionsResponse.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

