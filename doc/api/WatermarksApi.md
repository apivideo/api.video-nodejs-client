# WatermarksApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](WatermarksApi.md#delete) | **DELETE** /watermarks/{watermarkId} | Delete a watermark
[**list**](WatermarksApi.md#list) | **GET** /watermarks | List all watermarks
[**upload**](WatermarksApi.md#upload) | **POST** /watermarks | Upload a watermark


<a name="delete"></a>
## **delete**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const watermarkId = 'watermark_1BWr2L5MTQwxGkuxKjzh6i'; // The watermark ID for the watermark you want to delete.

        // void
        const result = await client.watermarks.delete(watermarkId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **watermarkId** | **string**| The watermark ID for the watermark you want to delete. | [default to undefined]

### Return type
[**void**](../model/.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**404** | Not Found |  -  |

<a name="list"></a>
## **list**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const sortBy = 'createdAt'; // Allowed: createdAt. You can search by the time watermark were created at.
        const sortOrder = 'asc'; // Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // WatermarksListResponse
        const result = await client.watermarks.list({ sortBy, sortOrder, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **string**| Allowed: createdAt. You can search by the time watermark were created at. | [optional] [default to undefined]
 **sortOrder** | **string**| Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A. | [optional] [default to undefined]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**WatermarksListResponse**](../model/WatermarksListResponse.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

<a name="upload"></a>
## **upload**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const file = 'BINARY_DATA_HERE'; // The `.jpg` or `.png` image to be added as a watermark.

        // Watermark
        const result = await client.watermarks.upload(file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **string**| The &#x60;.jpg&#x60; or &#x60;.png&#x60; image to be added as a watermark. | [default to undefined]

### Return type
[**Watermark**](../model/Watermark.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

