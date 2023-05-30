# WatermarksApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**upload()**](WatermarksApi.md#upload) | Upload a watermark | **POST** /watermarks |
| [**delete()**](WatermarksApi.md#delete) | Delete a watermark | **DELETE** /watermarks/{watermarkId} |
| [**list()**](WatermarksApi.md#list) | List all watermarks | **GET** /watermarks |


<a name="upload"></a>
## **`upload()` - Upload a watermark**


Create a new watermark by uploading a `JPG` or a `PNG` image.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **file** | **string \| Readable \| Buffer**| **yes**| The &#x60;.jpg&#x60; or &#x60;.png&#x60; image to be added as a watermark. |


### Return type

Promise<[**Watermark**](../model/Watermark.md)>.


### Example
```js
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


---

<a name="delete"></a>
## **`delete()` - Delete a watermark**


Delete a watermark.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **watermarkId** | **string**| **yes**| The watermark ID for the watermark you want to delete. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" }); 

const watermarkId = 'watermark_1Bji68oeAAwR44dAb5ZhML'; // The watermark ID for the watermark you want to delete.

client.watermarks.delete(watermarkId);
```


---

<a name="list"></a>
## **`list()` - List all watermarks**


List all watermarks associated with your workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **sortBy** | **string**| no| Allowed: createdAt. You can search by the time watermark were created at. |
 | **sortOrder** | **string**| no| Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**WatermarksListResponse**](../model/WatermarksListResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" }); 

// retrieve the first page of all watermarks
const watermarks = await client.watermarks.list({});

// retrieve the 5 first watermarks, ordered by creation date
const watermarks2 = await client.watermarks.list({});
createdAt
```


---

