# WatermarksApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**delete**](WatermarksApi.md#delete) | Delete a watermark | **DELETE** /watermarks/{watermarkId} |
| [**list**](WatermarksApi.md#list) | List all watermarks | **GET** /watermarks |
| [**upload**](WatermarksApi.md#upload) | Upload a watermark | **POST** /watermarks |


<a name="delete"></a>
## **`delete` - Delete a watermark**


Delete a watermark. A watermark is a static image, directly burnt-into a video.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **watermarkId** | **string**| The watermark ID for the watermark you want to delete. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
// instantiate the client 
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" }); 

const watermarkId = 'watermark_1Bji68oeAAwR44dAb5ZhML'; // The watermark ID for the watermark you want to delete.

client.watermarks.delete(watermarkId);
```



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Not Found |  -  |


---

<a name="list"></a>
## **`list` - List all watermarks**


List all watermarks. A watermark is a static image, directly burnt into a video. After you have created your watermark, you can define its placement and aspect when you [create a video](https://docs.api.video/reference/post-video).

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **sortBy** | **string**| Allowed: createdAt. You can search by the time watermark were created at. |
 | **sortOrder** | **string**| Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A. |
 | **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**WatermarksListResponse**](../model/WatermarksListResponse.md)>.


### Example
```js
// instantiate the client 
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" }); 

// retrieve the first page of all watermarks
const watermarks = await client.watermarks.list({});

// retrieve the 5 first watermarks, ordered by creation date
const watermarks2 = await client.watermarks.list({});
createdAt
```



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |


---

<a name="upload"></a>
## **`upload` - Upload a watermark**


Create a new watermark by uploading a `JPG` or a `PNG` image. A watermark is a static image, directly burnt into a video. After you have created your watermark, you can define its placement and aspect when you [create a video](https://docs.api.video/reference/post-video).

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **file** | **string**| The &#x60;.jpg&#x60; or &#x60;.png&#x60; image to be added as a watermark. |


### Return type

Promise<[**Watermark**](../model/Watermark.md)>.


### Example
```js
// instantiate the client 
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

// Upload a watermark
const watermark = await client.watermarks.upload('test/data/test.jpg');

// create a video with watermark
const watermarkVideo = await client.videos.create({
  title: 'Nodejs - watermark',
  watermark: {
    id: watermark.watermarkId,
    top: '0px',
    left: '0px',
    width: '100px',
    height: '100px',
  },
});
```



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |


---

