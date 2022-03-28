# RawStatisticsApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**listLiveStreamSessions**](RawStatisticsApi.md#listLiveStreamSessions) | List live stream player sessions | **GET** /analytics/live-streams/{liveStreamId} |
| [**listSessionEvents**](RawStatisticsApi.md#listSessionEvents) | List player session events | **GET** /analytics/sessions/{sessionId}/events |
| [**listVideoSessions**](RawStatisticsApi.md#listVideoSessions) | List video player sessions | **GET** /analytics/videos/{videoId} |


<a name="listLiveStreamSessions"></a>
## **`listLiveStreamSessions` - List live stream player sessions**


### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **liveStreamId** | **string**| The unique identifier for the live stream you want to retrieve analytics for. |
 | **period** | **string**| Period must have one of the following formats:  - For a day : \&quot;2018-01-01\&quot;, - For a week: \&quot;2018-W01\&quot;,  - For a month: \&quot;2018-01\&quot; - For a year: \&quot;2018\&quot; For a range period:  -  Date range: \&quot;2018-01-01/2018-01-15\&quot;  |
 | **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**RawStatisticsListLiveStreamAnalyticsResponse**](../model/RawStatisticsListLiveStreamAnalyticsResponse.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

        const liveStreamId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the live stream you want to retrieve analytics for.
        const period = '2019-01-01'; // Period must have one of the following formats:  - For a day : "2018-01-01", - For a week: "2018-W01", - For a month: "2018-01" - For a year: "2018"  For a range period: -  Date range: "2018-01-01/2018-01-15" 
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



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **404** | Not Found |  -  |


---

<a name="listSessionEvents"></a>
## **`listSessionEvents` - List player session events**


Useful to track and measure video's engagement.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **sessionId** | **string**| A unique identifier you can use to reference and track a session with. |
 | **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**RawStatisticsListPlayerSessionEventsResponse**](../model/RawStatisticsListPlayerSessionEventsResponse.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

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



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **404** | Not Found |  -  |


---

<a name="listVideoSessions"></a>
## **`listVideoSessions` - List video player sessions**


Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **videoId** | **string**| The unique identifier for the video you want to retrieve session information for. |
 | **period** | **string**| Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018 For a range period:  -  Date range: 2018-01-01/2018-01-15  |
 | **metadata** | **{ [key: string]: string; }**| Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with. |
 | **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**RawStatisticsListSessionsResponse**](../model/RawStatisticsListSessionsResponse.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want to retrieve session information for.
        const period = 'period_example'; // Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01, - For a month: 2018-01 - For a year: 2018  For a range period: -  Date range: 2018-01-01/2018-01-15 
        const metadata = 'metadata[Author]=John Doe&amp;metadata[Format]=Tutorial'; // Metadata and Dynamic Metadata filter. Send an array of key value pairs you want to filter sessios with.
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



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **404** | Not Found |  -  |


---

