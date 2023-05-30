# CaptionsApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**upload()**](CaptionsApi.md#upload) | Upload a caption | **POST** /videos/{videoId}/captions/{language} |
| [**get()**](CaptionsApi.md#get) | Retrieve a caption | **GET** /videos/{videoId}/captions/{language} |
| [**update()**](CaptionsApi.md#update) | Update a caption | **PATCH** /videos/{videoId}/captions/{language} |
| [**delete()**](CaptionsApi.md#delete) | Delete a caption | **DELETE** /videos/{videoId}/captions/{language} |
| [**list()**](CaptionsApi.md#list) | List video captions | **GET** /videos/{videoId}/captions |


<a name="upload"></a>
## **`upload()` - Upload a caption**


Upload a VTT file to add captions to your video. More information can be found [here](https://docs.api.video/reference/captions)

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to add a caption to. |
 | **language** | **string**| **yes**| A valid BCP 47 language representation. |
 | **file** | **string \| Readable \| Buffer**| **yes**| The video text track (VTT) you want to upload. |


### Return type

Promise<[**Caption**](../model/Caption.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want to add a caption to.
const language = 'en'; // A valid BCP 47 language representation.
const file = './en.vtt'; // The video text track (VTT) you want to upload.

const caption = await client.captions.upload(videoId, language, file); 
```


---

<a name="get"></a>
## **`get()` - Retrieve a caption**


Retrieve a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a error indicating the caption was not found.

Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want captions for. |
 | **language** | **string**| **yes**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation |


### Return type

Promise<[**Caption**](../model/Caption.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want captions for.
const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation

const caption = await client.captions.get(videoId, language);
```


---

<a name="update"></a>
## **`update()` - Update a caption**


To have the captions on automatically, use this method to set default: true.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to have automatic captions for. |
 | **language** | **string**| **yes**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |
 | **captionsUpdatePayload** | [**CaptionsUpdatePayload**](../model/CaptionsUpdatePayload.md)| **yes**|  |


### Return type

Promise<[**Caption**](../model/Caption.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklg'; // The unique identifier for the video you want to have automatic captions for.
const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
const captionsUpdatePayload = {
  _default: true,
}; 
 
const caption = await client.captions.update(videoId, language, captionsUpdatePayload);
        
```


---

<a name="delete"></a>
## **`delete()` - Delete a caption**


Delete a caption in a specific language by by video id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to delete a caption from. |
 | **language** | **string**| **yes**| A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Prklgc'; // The unique identifier for the video you want to delete a caption from.
const language = 'en'; // A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.

await client.captions.delete(videoId, language);
 
```


---

<a name="list"></a>
## **`list()` - List video captions**


Retrieve a list of available captions by video id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want to retrieve a list of captions for. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**CaptionsListResponse**](../model/CaptionsListResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const captions = await client.captions.list({
  videoId 'vi4k0jvEUuaTdRAEjQ4Prklg', // The unique identifier for the video you want to retrieve a list of captions for.
  currentPage: 2, // Choose the number of search results to return per page. Minimum value: 1
  pageSize: 30, // Results per page. Allowed values 1-100, default is 25.
); 
```


---

