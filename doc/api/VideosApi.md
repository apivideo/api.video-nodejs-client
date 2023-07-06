# VideosApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](VideosApi.md#create) | Create a video object | **POST** /videos |
| [**upload()**](VideosApi.md#upload) | Upload a video | **POST** /videos/{videoId}/source |
| [**uploadWithUploadToken()**](VideosApi.md#uploadWithUploadToken) | Upload with an delegated upload token | **POST** /upload |
| [**get()**](VideosApi.md#get) | Retrieve a video object | **GET** /videos/{videoId} |
| [**update()**](VideosApi.md#update) | Update a video object | **PATCH** /videos/{videoId} |
| [**delete()**](VideosApi.md#delete) | Delete a video object | **DELETE** /videos/{videoId} |
| [**list()**](VideosApi.md#list) | List all video objects | **GET** /videos |
| [**uploadThumbnail()**](VideosApi.md#uploadThumbnail) | Upload a thumbnail | **POST** /videos/{videoId}/thumbnail |
| [**pickThumbnail()**](VideosApi.md#pickThumbnail) | Set a thumbnail | **PATCH** /videos/{videoId}/thumbnail |
| [**getStatus()**](VideosApi.md#getStatus) | Retrieve video status and details | **GET** /videos/{videoId}/status |


<a name="create"></a>
## **`create()` - Create a video object**


Creates a video object. More information on video objects can be found [here](https://docs.api.video/reference/videos-1).



### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoCreationPayload** | [**VideoCreationPayload**](../model/VideoCreationPayload.md)| **yes**| video to create |


### Return type

Promise<[**Video**](../model/Video.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

// create a simple video
const video = await client.videos.create({ title: "Maths video" });

// create a video using an existing source
const existingSourceVideo = await client.videos.create({
  title: "Video using an existing source", 
  source: "https://www.myvideo.url.com/video.mp4", 
});

// create a private video
const privateVideo = await client.videos.create({
  title: "Video using an existing source", 
  _public: false,
});

// create a video using all available attributes
const video = await client.videos.create({
  title: "Maths video", // The title of your new video.
  description: "A video about string theory.", // A brief description of your video.
  source: "https://www.myvideo.url.com/video.mp4", // If you add a video already on the web, this is where you enter the url for the video.
  _public: true, // Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view.
  panoramic: false, // Indicates if your video is a 360/immersive video.
  mp4Support: true, // Enables mp4 version in addition to streamed version.
  playerId: "pl45KFKdlddgk654dspkze", // The unique identification number for your video player.
  tags: ["maths", "string theory", "video"], // A list of tags you want to use to describe your video.
  metadata: [{"key": "Author", "value": "John Doe"}], // A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. You can also just use the pairs as another way to tag and categorize your videos.
});
```


---

<a name="upload"></a>
## **`upload()` - Upload a video**


To upload a video to the videoId you created. You can only upload your video to the videoId once.



We offer 2 types of upload: 

* Regular upload 

* Progressive upload

The latter allows you to split a video source into X chunks and send those chunks independently (concurrently or sequentially). The 2 main goals for our users are to

  * allow the upload of video sources > 200 MiB (200 MiB = the max. allowed file size for regular upload)

  * allow to send a video source "progressively", i.e., before before knowing the total size of the video.

  Once all chunks have been sent, they are reaggregated to one source file. The video source is considered as "completely sent" when the "last" chunk is sent (i.e., the chunk that "completes" the upload).



### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| Enter the videoId you want to use to upload your video. |
 | **file** | **string \| Readable \| Buffer**| **yes**| The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\&quot;/videos\\\&quot; endpoint and add the \\\&quot;source\\\&quot; parameter when you create a new video. |
| **progressListener** | **(event: UploadProgressEvent) => void \| undefined** | no | Optional upload progress listener |

### Return type

Promise<[**Video**](../model/Video.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Enter the videoId you want to use to upload your video.
const file = './my-video.mp4'; // The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the "/videos" endpoint and add the "source" parameter when you create a new video.
      
const video = await client.videos.upload(videoId, file);

// if needed you can define an upload progress listener:
const video2 = await client.videos.upload(videoId, file, (event) => {
  console.log("uploadedBytes: " + event.uploadedBytes);
  console.log("totalBytes: " + event.totalBytes);
  console.log("chunksCount: " + event.chunksCount);
  console.log("currentChunk: " + event.currentChunk);
  console.log("currentChunkTotalBytes: " + event.currentChunkTotalBytes);
  console.log("currentChunkUploadedBytes: " + event.currentChunkUploadedBytes);
});
```

### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `chunkSize` parameter when you instanciate the ApiVideoClient:

```js
const client = new ApiVideoClient({
    apiKey: "YOUR_API_KEY",
    chunkSize: 50 * 1024 * 1024, // 50mb chunks
});
```

### Progressive uploads

Progressive uploads make it possible to upload a video source "progressively," i.e., before knowing the total size of the video. This is done by sending chunks of the video source file sequentially.
The last chunk is sent by calling a different method, so api.video knows that it is time to reassemble the different chunks that were received.

```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Enter the videoId you want to use to upload your video.

const uploadSession = client.createUploadProgressiveSession(videoId);

await uploadSession.uploadPart('test/data/10m.mp4.part.a');
await uploadSession.uploadPart('test/data/10m.mp4.part.b');
const res = await uploadSession.uploadLastPart('test/data/10m.mp4.part.c');  // Video 

console.log(result);
```

---

<a name="uploadWithUploadToken"></a>
## **`uploadWithUploadToken()` - Upload with an delegated upload token**


This method allows you to send a video using an upload token. Upload tokens are especially useful when the upload is done from the client side. If you want to upload a video from your server-side application, you'd better use the [standard upload method](#upload).

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **token** | **string**| **yes**| The unique identifier for the token you want to use to upload a video. |
 | **file** | **string \| Readable \| Buffer**| **yes**| The path to the video you want to upload. |
| **progressListener** | **(event: UploadProgressEvent) => void \| undefined** | no | Optional upload progress listener |

### Return type

Promise<[**Video**](../model/Video.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const token = 'to4k0jvEUuaTdRAEjQ4Jfrgz'; // Enter the unique identifier for the token you want to use to upload a video.
const file = './my-video.mp4'; // The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the "/videos" endpoint and add the "source" parameter when you create a new video.
      
const video = await client.videos.uploadWithUploadToken(token, file);
```

### Upload chunks

Large files are broken into chunks for upload. You can control the size of the chunks using the `chunkSize` parameter when you instanciate the ApiVideoClient:

```js
const client = new ApiVideoClient({
    apiKey: "YOUR_API_KEY",
    chunkSize: 50 * 1024 * 1024, // 50mb chunks
});
```

### Progressive uploads

Progressive uploads make it possible to upload a video source "progressively," i.e., before knowing the total size of the video. This is done by sending chunks of the video source file sequentially.
The last chunk is sent by calling a different method, so api.video knows that it is time to reassemble the different chunks that were received.

```js
const client = new ApiVideoClient();

const token = 'to1tcmSFHeYY5KzyhOqVKMKb'; // The unique identifier for the token you want to use to upload a video.

const uploadSession = client.createUploadWithUploadTokenProgressiveSession(token);

await uploadSession.uploadPart('test/data/10m.mp4.part.a');
await uploadSession.uploadPart('test/data/10m.mp4.part.b');
const res = await uploadSession.uploadLastPart('test/data/10m.mp4.part.c');  // Video 

console.log(result);
```

---

<a name="get"></a>
## **`get()` - Retrieve a video object**


This call provides the same information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want details about. |


### Return type

Promise<[**Video**](../model/Video.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want to retrieve.
const result = await client.videos.get(videoId);  
```


---

<a name="update"></a>
## **`update()` - Update a video object**


Updates the parameters associated with a video ID. The video object you are updating is determined by the video ID you provide. 



NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it.



### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The video ID for the video you want to update. |
 | **videoUpdatePayload** | [**VideoUpdatePayload**](../model/VideoUpdatePayload.md)| **yes**|  |


### Return type

Promise<[**Video**](../model/Video.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The video ID for the video you want to update.

// define the value you want to update
const videoUpdatePayload = {
    playerId: "pl4k0jvEUuaTdRAEjQ4Jfrgz", // The unique ID for the player you want to associate with your video.
    title: "title_example", // The title you want to use for your video.
    description: "A film about good books.", // A brief description of the video.
    _public: true, // Whether the video is publicly available or not. False means it is set to private.
    panoramic: false, // Whether the video is a 360 degree or immersive video.
    mp4Support: true, // Whether the player supports the mp4 format.
    tags: ["maths", "string theory", "video"], // A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.
    metadata: [{"key": "Author", "value": "John Doe"}], // A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video.
}; 


const updatedVideo = await client.videos.update(videoId, videoUpdatePayload);
```


---

<a name="delete"></a>
## **`delete()` - Delete a video object**


If you do not need a video any longer, you can send a request to delete it. All you need is the videoId.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The video ID for the video you want to delete. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // the id of the video to delete
await client.videos.delete(videoId); 
```


---

<a name="list"></a>
## **`list()` - List all video objects**


This method returns a list of your videos (with all their details). With no parameters added, the API returns the first page of all videos. You can filter videos using the parameters described below.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **title** | **string**| no| The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles. |
 | **tags** | **Array&lt;string&gt;**| no| A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned. |
 | **metadata** | **{ [key: string]: string; }**| no| Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair. |
 | **description** | **string**| no| Retrieve video objects by &#x60;description&#x60;. |
 | **liveStreamId** | **string**| no| Retrieve video objects that were recorded from a live stream by &#x60;liveStreamId&#x60;. |
 | **sortBy** | **&#39;title&#39; \| &#39;createdAt&#39; \| &#39;publishedAt&#39; \| &#39;updatedAt&#39;**| no| Use this parameter to sort videos by the their created time, published time, updated time, or by title. |
 | **sortOrder** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**VideosListResponse**](../model/VideosListResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

// list all videos (all pages)
let allVideos = [];
for(let currentPage=1 ; ; currentPage++) {
  const res = await client.videos.list({ currentPage });
  allVideos = [...allVideos, ...res.data];
  if(currentPage >= res.pagination.pagesTotal) {
    break;
  }
}

// list videos that have all the given tags (only first results page)
const videosWithTags = await client.videos.list({ tags: ["tag1", "tag2"] });

// list videos that have all the given metadata values (only first results page)
const videosWithMetadata = await client.videos.list({ metadata: { "key1": "value1", "key2": "value2" } })
```


---

<a name="uploadThumbnail"></a>
## **`uploadThumbnail()` - Upload a thumbnail**


The thumbnail is the poster that appears in the player window before video playback begins.



This endpoint allows you to upload an image for the thumbnail.



To select a still frame from the video using a time stamp, use the [dedicated method](#pickThumbnail) to pick a time in the video.



Note: There may be a short delay before the new thumbnail is delivered to our CDN.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| Unique identifier of the chosen video  |
 | **file** | **string \| Readable \| Buffer**| **yes**| The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB. |


### Return type

Promise<[**Video**](../model/Video.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'videoId_example'; // Unique identifier of the chosen video 
const file = './thumbnail.jpg'; // The image to be added as a thumbnail.

const video = await client.videos.uploadThumbnail(videoId, file);
```


---

<a name="pickThumbnail"></a>
## **`pickThumbnail()` - Set a thumbnail**


Pick a thumbnail from the given time code. 



If you'd like to upload an image for your thumbnail, use the dedicated [method](#uploadThumbnail). 



There may be a short delay for the thumbnail to update.



### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail. |
 | **videoThumbnailPickPayload** | [**VideoThumbnailPickPayload**](../model/VideoThumbnailPickPayload.md)| **yes**|  |


### Return type

Promise<[**Video**](../model/Video.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
const videoThumbnailPickPayload = {
  timecode: "00:01:00.000",  // Frame in video to be used as a placeholder before the video plays. 
}; 

const video = await client.videos.pickThumbnail(videoId, videoThumbnailPickPayload);
```


---

<a name="getStatus"></a>
## **`getStatus()` - Retrieve video status and details**


This method provides upload status &amp; encoding status to determine when the video is uploaded or ready to playback. Once encoding is completed, the response also lists the available stream qualities.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **videoId** | **string**| **yes**| The unique identifier for the video you want the status for. |


### Return type

Promise<[**VideoStatus**](../model/VideoStatus.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const videoId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique identifier for the video you want the status for.
const result = await client.videos.getStatus(videoId); 
```


---

