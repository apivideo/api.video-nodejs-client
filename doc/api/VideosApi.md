# VideosApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](VideosApi.md#delete) | **DELETE** /videos/{videoId} | Delete a video
[**get**](VideosApi.md#get) | **GET** /videos/{videoId} | Show a video
[**getStatus**](VideosApi.md#getStatus) | **GET** /videos/{videoId}/status | Show video status
[**list**](VideosApi.md#list) | **GET** /videos | List all videos
[**update**](VideosApi.md#update) | **PATCH** /videos/{videoId} | Update a video
[**pickThumbnail**](VideosApi.md#pickThumbnail) | **PATCH** /videos/{videoId}/thumbnail | Pick a thumbnail
[**uploadWithUploadToken**](VideosApi.md#uploadWithUploadToken) | **POST** /upload | Upload with an upload token
[**create**](VideosApi.md#create) | **POST** /videos | Create a video
[**upload**](VideosApi.md#upload) | **POST** /videos/{videoId}/source | Upload a video
[**uploadThumbnail**](VideosApi.md#uploadThumbnail) | **POST** /videos/{videoId}/thumbnail | Upload a thumbnail


<a name="delete"></a>
## **delete**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The video ID for the video you want to delete.

        // void
        const result = await client.videos.delete(videoId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The video ID for the video you want to delete. | [default to undefined]

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

<a name="get"></a>
## **get**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'videoId_example'; // The unique identifier for the video you want details about.

        // Video
        const result = await client.videos.get(videoId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want details about. | [default to undefined]

### Return type

[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="getStatus"></a>
## **getStatus**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want the status for.

        // VideoStatus
        const result = await client.videos.getStatus(videoId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The unique identifier for the video you want the status for. | [default to undefined]

### Return type

[**VideoStatus**](../model/VideoStatus.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="list"></a>
## **list**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const title = 'My Video.mp4'; // The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
        const tags = '["captions", "dialogue"]'; // A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
        const metadata = 'metadata[Author]=John Doe&metadata[Format]=Tutorial'; // Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter.
        const description = 'New Zealand'; // If you described a video with a term or sentence, you can add it here to return videos containing this string.
        const liveStreamId = 'li400mYKSgQ6xs7taUeSaEKr'; // If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here.
        const sortBy = 'publishedAt'; // Allowed: publishedAt, title. You can search by the time videos were published at, or by title.
        const sortOrder = 'asc'; // Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // Page<>
        const result = await client.videos.list({ title, tags, metadata, description, liveStreamId, sortBy, sortOrder, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **string**| The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles. | [optional] [default to undefined]
 **tags** | [**Array&lt;string&gt;**](string.md)| A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned. | [optional]
 **metadata** | [**{ [key: string]: string; }**](string.md)| Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. | [optional]
 **description** | **string**| If you described a video with a term or sentence, you can add it here to return videos containing this string. | [optional] [default to undefined]
 **liveStreamId** | **string**| If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here. | [optional] [default to undefined]
 **sortBy** | **string**| Allowed: publishedAt, title. You can search by the time videos were published at, or by title. | [optional] [default to undefined]
 **sortOrder** | **string**| Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A. | [optional] [default to undefined]
 **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 | [optional] [default to 1]
 **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. | [optional] [default to 25]

### Return type
[**Page**](pagination.md)<[****](.md)>


### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

<a name="update"></a>
## **update**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The video ID for the video you want to delete.
        const videoUpdatePayload = ''; // 
                videoUpdatePayload.setPlayerId(); // The unique ID for the player you want to associate with your video.
                videoUpdatePayload.setTitle(); // The title you want to use for your video.
                videoUpdatePayload.setDescription(); // A brief description of the video.
                videoUpdatePayload.setPublic(); // Whether the video is publicly available or not. False means it is set to private.
                videoUpdatePayload.setPanoramic(); // Whether the video is a 360 degree or immersive video.
                videoUpdatePayload.setMp4Support(); // Whether the player supports the mp4 format.
                videoUpdatePayload.setTags(); // A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.
                videoUpdatePayload.setMetadata(); // A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video.

        // Video
        const result = await client.videos.update(videoId, videoUpdatePayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| The video ID for the video you want to delete. | [default to undefined]
 **videoUpdatePayload** | [**VideoUpdatePayload**](VideoUpdatePayload.md)|  |

### Return type

[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

<a name="pickThumbnail"></a>
## **pickThumbnail**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
        const videoThumbnailPickPayload = ''; // 
                videoThumbnailPickPayload.setTimecode(); // Frame in video to be used as a placeholder before the video plays. 
Example: &#39;&quot;00:01:00.000&quot; for 1 minute into the video.&#39;
Valid Patterns: 
&quot;hh:mm:ss.ms&quot;
&quot;hh:mm:ss:frameNumber&quot;
&quot;124&quot; (integer value is reported as seconds) 
If selection is out of range, &quot;00:00:00.00&quot; will be chosen.

        // Video
        const result = await client.videos.pickThumbnail(videoId, videoThumbnailPickPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail. | [default to undefined]
 **videoThumbnailPickPayload** | [**VideoThumbnailPickPayload**](VideoThumbnailPickPayload.md)|  |

### Return type

[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="uploadWithUploadToken"></a>
## **uploadWithUploadToken**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient();

        const token = 'to1tcmSFHeYY5KzyhOqVKMKb'; // The unique identifier for the token you want to use to upload a video.
        const file = 'BINARY_DATA_HERE'; // The path to the video you want to upload.

        // Video
        const result = await client.videos.uploadWithUploadToken(token, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **string**| The unique identifier for the token you want to use to upload a video. | [default to undefined]
 **file** | **string**| The path to the video you want to upload. | [default to undefined]


### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `setUploadChunkSize()` of method of `ApiVideoClient` before uploading:

```java
apiVideoClient.setUploadChunkSize(50*1024*1024); // use 50MB chunks
apiVideoClient.videos().uploadWithUploadToken(token, file);
```

### Return type

[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |

<a name="create"></a>
## **create**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoCreationPayload = ''; // video to create
                videoCreationPayload.setTitle(); // The title of your new video.
                videoCreationPayload.setDescription(); // A brief description of your video.
                videoCreationPayload.setSource(); // If you add a video already on the web, this is where you enter the url for the video.
                videoCreationPayload.setPublic(); // Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.
                videoCreationPayload.setPanoramic(); // Indicates if your video is a 360/immersive video.
                videoCreationPayload.setMp4Support(); // Enables mp4 version in addition to streamed version.
                videoCreationPayload.setPlayerId(); // The unique identification number for your video player.
                videoCreationPayload.setTags(); // A list of tags you want to use to describe your video.
                videoCreationPayload.setMetadata(); // A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. You can also just use the pairs as another way to tag and categorize your videos.
                videoCreationPayload.setPublishedAt(); // The API uses ISO-8601 format for time, and includes 3 places for milliseconds.

        // Video
        const result = await client.videos.create(videoCreationPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoCreationPayload** | [**VideoCreationPayload**](VideoCreationPayload.md)| video to create |

### Return type

[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**202** | Accepted |  -  |
**400** | Bad Request |  -  |

<a name="upload"></a>
## **upload**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Enter the videoId you want to use to upload your video.
        const file = 'BINARY_DATA_HERE'; // The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\"/videos\\\" endpoint and add the \\\"source\\\" parameter when you create a new video.

        // Video
        const result = await client.videos.upload(videoId, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| Enter the videoId you want to use to upload your video. | [default to undefined]
 **file** | **string**| The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\&quot;/videos\\\&quot; endpoint and add the \\\&quot;source\\\&quot; parameter when you create a new video. | [default to undefined]


### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `setUploadChunkSize()` of method of `ApiVideoClient` before uploading:

```java
apiVideoClient.setUploadChunkSize(50*1024*1024); // use 50MB chunks
apiVideoClient.videos().upload(videoId, file);
```

### Return type

[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

<a name="uploadThumbnail"></a>
## **uploadThumbnail**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const videoId = 'videoId_example'; // Unique identifier of the chosen video 
        const file = 'BINARY_DATA_HERE'; // The image to be added as a thumbnail.

        // Video
        const result = await client.videos.uploadThumbnail(videoId, file);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **videoId** | **string**| Unique identifier of the chosen video  | [default to undefined]
 **file** | **string**| The image to be added as a thumbnail. | [default to undefined]

### Return type

[**Video**](../model/Video.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

