# ChaptersApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**delete()**](ChaptersApi.md#delete) | Delete a chapter | **DELETE** /videos/{videoId}/chapters/{language} |
| [**list()**](ChaptersApi.md#list) | List video chapters | **GET** /videos/{videoId}/chapters |
| [**get()**](ChaptersApi.md#get) | Retrieve a chapter | **GET** /videos/{videoId}/chapters/{language} |
| [**upload()**](ChaptersApi.md#upload) | Upload a chapter | **POST** /videos/{videoId}/chapters/{language} |


<a name="delete"></a>
## **`delete()` - Delete a chapter**


Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to delete a chapter from. |
 | **language** | **string**| **yes**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to delete a chapter from.
const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

await client.chapters.delete(videoId, language); 
```


---

<a name="list"></a>
## **`list()` - List video chapters**


Retrieve a list of all chapters for a specified video.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to retrieve a list of chapters for. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**ChaptersListResponse**](../model/ChaptersListResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const captions = await client.chapters.list({
  videoId 'vi4k0jvEUuaTdRAEjQ4Prklg', // The unique identifier for the video you want to retrieve a list of chapters for.
  currentPage: 2, // Choose the number of search results to return per page. Minimum value: 1
  pageSize: 30, // Results per page. Allowed values 1-100, default is 25.
);  
```


---

<a name="get"></a>
## **`get()` - Retrieve a chapter**


Retrieve a chapter for a video in a specific language. 

Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to show a chapter for. |
 | **language** | **string**| **yes**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |


### Return type

Promise<[**Chapter**](../model/Chapter.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to show a chapter for.
const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

const chapter = await client.chapters.get(videoId, language); 
```


---

<a name="upload"></a>
## **`upload()` - Upload a chapter**


Upload a VTT file to add chapters to your video.

Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to upload a chapter for. |
 | **language** | **string**| **yes**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |
 | **file** | **string**| **yes**| The VTT file describing the chapters you want to upload. |


### Return type

Promise<[**Chapter**](../model/Chapter.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to upload a chapter for.
const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
const file = './en.vtt'; // The VTT file describing the chapters you want to upload.

const chapter = await client.chapters.upload(videoId, language, file); 
```


---

