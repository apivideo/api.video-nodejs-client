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




---

