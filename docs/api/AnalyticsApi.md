# AnalyticsApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**getLiveStreamsPlays()**](AnalyticsApi.md#getLiveStreamsPlays) | Get play events for live stream | **GET** /analytics/live-streams/plays |
| [**getVideosPlays()**](AnalyticsApi.md#getVideosPlays) | Get play events for video | **GET** /analytics/videos/plays |


<a name="getLiveStreamsPlays"></a>
## **`getLiveStreamsPlays()` - Get play events for live stream**


Retrieve filtered analytics about the number of plays for your live streams in a project.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **from** | **string**| **yes**| Use this query parameter to set the start date for the time period that you want analytics for. - The API returns analytics data including the day you set in &#x60;from&#x60;. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.  |
 | **dimension** | **&#39;liveStreamId&#39; \| &#39;emittedAt&#39; \| &#39;country&#39; \| &#39;deviceType&#39; \| &#39;operatingSystem&#39; \| &#39;browser&#39;**| **yes**| Use this query parameter to define the dimension that you want analytics for. - &#x60;liveStreamId&#x60;: Returns analytics based on the public live stream identifiers. - &#x60;emittedAt&#x60;: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in &#x60;from&#x60; and &#x60;to&#x60; is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals. - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers during the play event. Possible response values are: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers during the play event. Response values include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers during the play event. Response values include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. |
 | **to** | **string**| no| Use this optional query parameter to set the end date for the time period that you want analytics for. - If you do not specify a &#x60;to&#x60; date, the API returns analytics data starting from the &#x60;from&#x60; date up until today, and excluding today. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.  |
 | **filter** | **string**| no| Use this query parameter to filter your results to a specific live stream in a project that you want analytics for. You must use the &#x60;liveStreamId:&#x60; prefix when specifying a live stream ID. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**AnalyticsPlaysResponse**](../model/AnalyticsPlaysResponse.md)>.




---

<a name="getVideosPlays"></a>
## **`getVideosPlays()` - Get play events for video**


Retrieve filtered analytics about the number of plays for your videos in a project.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **from** | **string**| **yes**| Use this query parameter to set the start date for the time period that you want analytics for. - The API returns analytics data including the day you set in &#x60;from&#x60;. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.  |
 | **dimension** | **&#39;videoId&#39; \| &#39;emittedAt&#39; \| &#39;country&#39; \| &#39;deviceType&#39; \| &#39;operatingSystem&#39; \| &#39;browser&#39;**| **yes**| Use this query parameter to define the dimension that you want analytics for. - &#x60;videoId&#x60;: Returns analytics based on the public video identifiers. - &#x60;emittedAt&#x60;: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in &#x60;from&#x60; and &#x60;to&#x60; is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals. - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers during the play event. Possible response values are: &#x60;computer&#x60;, &#x60;phone&#x60;, &#x60;tablet&#x60;, &#x60;tv&#x60;, &#x60;console&#x60;, &#x60;wearable&#x60;, &#x60;unknown&#x60;. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers during the play event. Response values include &#x60;windows&#x60;, &#x60;mac osx&#x60;, &#x60;android&#x60;, &#x60;ios&#x60;, &#x60;linux&#x60;. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers during the play event. Response values include &#x60;chrome&#x60;, &#x60;firefox&#x60;, &#x60;edge&#x60;, &#x60;opera&#x60;. |
 | **to** | **string**| no| Use this optional query parameter to set the end date for the time period that you want analytics for. - If you do not specify a &#x60;to&#x60; date, the API returns analytics data starting from the &#x60;from&#x60; date up until today, and excluding today. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.  |
 | **filter** | **string**| no| Use this query parameter to filter your results to a specific video in a project that you want analytics for. You must use the &#x60;videoId:&#x60; prefix when specifying a video ID. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**AnalyticsPlaysResponse**](../model/AnalyticsPlaysResponse.md)>.




---

