# ChaptersApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**delete**](ChaptersApi.md#delete) | Delete a chapter | **DELETE** /videos/{videoId}/chapters/{language} |
| [**list**](ChaptersApi.md#list) | List video chapters | **GET** /videos/{videoId}/chapters |
| [**get**](ChaptersApi.md#get) | Show a chapter | **GET** /videos/{videoId}/chapters/{language} |
| [**upload**](ChaptersApi.md#upload) | Upload a chapter | **POST** /videos/{videoId}/chapters/{language} |


<a name="delete"></a>
## **`delete` - Delete a chapter**


### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **videoId** | **string**| The unique identifier for the video you want to delete a chapter from. |
 | **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to delete a chapter from.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

        // void
        const result = await client.chapters.delete(videoId, language);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No Content |  -  |
| **404** | Not Found |  -  |


---

<a name="list"></a>
## **`list` - List video chapters**


Retrieve a list of all chapters for a specified video.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **videoId** | **string**| The unique identifier for the video you want to retrieve a list of chapters for. |
 | **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**ChaptersListResponse**](../model/ChaptersListResponse.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to show a chapter for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

        // Chapter
        const result = await client.chapters.get(videoId, language);
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

<a name="get"></a>
## **`get` - Show a chapter**


Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **videoId** | **string**| The unique identifier for the video you want to show a chapter for. |
 | **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |


### Return type

Promise<[**Chapter**](../model/Chapter.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to show a chapter for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

        // Chapter
        const result = await client.chapters.get(videoId, language);
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

<a name="upload"></a>
## **`upload` - Upload a chapter**


Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **videoId** | **string**| The unique identifier for the video you want to upload a chapter for. |
 | **language** | **string**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |
 | **file** | **string**| The VTT file describing the chapters you want to upload. |


### Return type

Promise<[**Chapter**](../model/Chapter.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to upload a chapter for.
        const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
        const file = 'BINARY_DATA_HERE'; // The VTT file describing the chapters you want to upload.

        // Chapter
        const result = await client.chapters.upload(videoId, language, file);
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
| **400** | Bad Request |  -  |
| **404** | Not Found |  -  |


---

