# RawStatisticsApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**listLiveStreamSessions()**](RawStatisticsApi.md#listLiveStreamSessions) | List live stream player sessions | **GET** /analytics/live-streams/{liveStreamId} |
| [**listSessionEvents()**](RawStatisticsApi.md#listSessionEvents) | List player session events | **GET** /analytics/sessions/{sessionId}/events |
| [**listVideoSessions()**](RawStatisticsApi.md#listVideoSessions) | List video player sessions | **GET** /analytics/videos/{videoId} |


<a name="listLiveStreamSessions"></a>
## **`listLiveStreamSessions()` - List live stream player sessions**


### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **liveStreamId** | **string**| **yes**| The unique identifier for the live stream you want to retrieve analytics for. |
 | **period** | **string**| **yes**| Period must have one of the following formats:  - For a day : \&quot;2018-01-01\&quot;, - For a week: \&quot;2018-W01\&quot;,  - For a month: \&quot;2018-01\&quot; - For a year: \&quot;2018\&quot; For a range period:  -  Date range: \&quot;2018-01-01/2018-01-15\&quot;  |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**RawStatisticsListLiveStreamAnalyticsResponse**](../model/RawStatisticsListLiveStreamAnalyticsResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const liveStreamId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the live stream you want to retrieve analytics for.
const period = '2019-01-01'; // Period must have one of the following formats:  - For a day : "2018-01-01", - For a week: "2018-W01", - For a month: "2018-01" - For a year: "2018"  For a range period: -  Date range: "2018-01-01/2018-01-15" 
const currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
const pageSize = 30; // Results per page. Allowed values 1-100, default is 25.
 
const liveStreamSessions = await client.rawStatistics.listLiveStreamSessions({ liveStreamId, period, currentPage, pageSize })
```


---

<a name="listSessionEvents"></a>
## **`listSessionEvents()` - List player session events**


Useful to track and measure video's engagement.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **sessionId** | **string**| **yes**| A unique identifier you can use to reference and track a session with. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**RawStatisticsListPlayerSessionEventsResponse**](../model/RawStatisticsListPlayerSessionEventsResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const sessionId = 'psEmFwGQUAXR2lFHj5nDOpy'; // A unique identifier you can use to reference and track a session with.
const currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
const pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

const sessionEvents = await client.rawStatistics.listSessionEvents({ sessionId, currentPage, pageSize }) 
```


---

<a name="listVideoSessions"></a>
## **`listVideoSessions()` - List video player sessions**


Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to retrieve session information for. |
 | **period** | **string**| **yes**| Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018 For a range period:  -  Date range: 2018-01-01/2018-01-15  |
 | **metadata** | **{ [key: string]: string; }**| no| Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**RawStatisticsListSessionsResponse**](../model/RawStatisticsListSessionsResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want to retrieve session information for.
const period = '2018-01'; // Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01, - For a month: 2018-01 - For a year: 2018  For a range period: -  Date range: 2018-01-01/2018-01-15 
const metadata = { // Metadata and Dynamic Metadata filter. Send an array of key value pairs you want to filter sessios with.
  metadataKey: "metadataValue"
}; 
const currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
const pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

const videoSessions = await client.rawStatistics.listVideoSessions({ videoId, period, metadata, currentPage, pageSize }); 
```


---

