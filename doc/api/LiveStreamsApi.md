# LiveStreamsApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](LiveStreamsApi.md#create) | Create live stream | **POST** /live-streams |
| [**get()**](LiveStreamsApi.md#get) | Retrieve live stream | **GET** /live-streams/{liveStreamId} |
| [**update()**](LiveStreamsApi.md#update) | Update a live stream | **PATCH** /live-streams/{liveStreamId} |
| [**delete()**](LiveStreamsApi.md#delete) | Delete a live stream | **DELETE** /live-streams/{liveStreamId} |
| [**list()**](LiveStreamsApi.md#list) | List all live streams | **GET** /live-streams |
| [**uploadThumbnail()**](LiveStreamsApi.md#uploadThumbnail) | Upload a thumbnail | **POST** /live-streams/{liveStreamId}/thumbnail |
| [**deleteThumbnail()**](LiveStreamsApi.md#deleteThumbnail) | Delete a thumbnail | **DELETE** /live-streams/{liveStreamId}/thumbnail |


<a name="create"></a>
## **`create()` - Create live stream**


Creates a livestream object.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **liveStreamCreationPayload** | [**LiveStreamCreationPayload**](../model/LiveStreamCreationPayload.md)| **yes**|  |


### Return type

Promise<[**LiveStream**](../model/LiveStream.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const liveStreamCreationPayload = {
    record: false, // Whether you are recording or not. True for record, false for not record.
    name: "My Live Stream", // Add a name for your live stream here.
    _public: true, // Whether your video can be viewed by everyone, or requires authentication to see it. 
    playerId: "pl4f4ferf5erfr5zed4fsdd", // The unique identifier for the player.
    restreams: [ // Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations.
      {
        streamKey: "dw-dew8-q6w9-k67w-1ws8",
        serverUrl: "rtmp://my.broadcast.example.com/app",
        name: "My RTMP server",
      },
    ],
}; 

const liveStream = await client.liveStreams.create(liveStreamCreationPayload);
```


---

<a name="get"></a>
## **`get()` - Retrieve live stream**


Get a livestream by id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **liveStreamId** | **string**| **yes**| The unique ID for the live stream you want to watch. |


### Return type

Promise<[**LiveStream**](../model/LiveStream.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const liveStreamId = 'li400mYKSgQ6xs7taUeSaEKr'; // The unique ID for the live stream you want to retrieve.

const liveStream = await client.liveStreams.get(liveStreamId);
```


---

<a name="update"></a>
## **`update()` - Update a live stream**


Updates the livestream object.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **liveStreamId** | **string**| **yes**| The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off. |
 | **liveStreamUpdatePayload** | [**LiveStreamUpdatePayload**](../model/LiveStreamUpdatePayload.md)| **yes**|  |


### Return type

Promise<[**LiveStream**](../model/LiveStream.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const liveStreamId = 'li400mYKSgQ6xs7taUeSaEKr'; // The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.
const liveStreamUpdatePayload = {
  name: "My Live Stream Video", // The name you want to use for your live stream.
  _public: true, // Whether your video can be viewed by everyone, or requires authentication to see it. 
  record: true, // Use this to indicate whether you want the recording on or off. On is true, off is false.
  playerId: "pl45KFKdlddgk654dspkze", // The unique ID for the player associated with a live stream that you want to update.
  restreams: [ // Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations.
    {
      streamKey: "dw-dew8-q6w9-k67w-1ws8",
      serverUrl: "rtmp://my.broadcast.example.com/app",
      name: "My RTMP server",
    },
  ],
};

const liveStream = await client.liveStreams.update(liveStreamId, liveStreamUpdatePayload); 
```


---

<a name="delete"></a>
## **`delete()` - Delete a live stream**


If you do not need a live stream any longer, you can send a request to delete it. All you need is the liveStreamId.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **liveStreamId** | **string**| **yes**| The unique ID for the live stream that you want to remove. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const liveStreamId = 'li400mYKSgQ6xs7taUeSaEKr'; // The unique identifier of the live stream whose thumbnail you want to delete.

const liveStream = await client.liveStreams.deleteThumbnail(liveStreamId);
    
```


---

<a name="list"></a>
## **`list()` - List all live streams**


Get the list of livestreams on the workspace.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **streamKey** | **string**| no| The unique stream key that allows you to stream videos. |
 | **name** | **string**| no| You can filter live streams by their name or a part of their name. |
 | **sortBy** | **string**| no| Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format. |
 | **sortOrder** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**LiveStreamListResponse**](../model/LiveStreamListResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

// retrieve the first page of all livestreams
const liveStreams = await client.liveStreams.list({ });

// retrieve the livestreams having a given name
const liveStreams2 = await client.liveStreams.list({
  name: 'My livestream'
});

// retrieve the livestreams having a given stream key
const liveStreams2 = await client.liveStreams.list({
  streamKey:'30087931-229e-42cf-b5f9-e91bcc1f7332'
});

// retrieve the second page of 30 items sorted by name desc
const liveStreams3 = await client.liveStreams.list({
  sortBy: 'name',
  sortOrder: 'desc',
  currentPage: 2,
  pageSize: 30
});
```


---

<a name="uploadThumbnail"></a>
## **`uploadThumbnail()` - Upload a thumbnail**


Upload the thumbnail for the livestream.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **liveStreamId** | **string**| **yes**| The unique ID for the live stream you want to upload. |
 | **file** | **string \| Readable \| Buffer**| **yes**| The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB. |


### Return type

Promise<[**LiveStream**](../model/LiveStream.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const liveStreamId = 'vi4k0jvEUuaTdRAEjQ4Jfrgz'; // The unique ID for the live stream you want to upload.
const file = './thumbnail.jpg'; // The image to be added as a thumbnail.

const livestream = await client.liveStreams.uploadThumbnail(liveStreamId, file);
```


---

<a name="deleteThumbnail"></a>
## **`deleteThumbnail()` - Delete a thumbnail**


Send the unique identifier for a live stream to delete its thumbnail.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **liveStreamId** | **string**| **yes**| The unique identifier of the live stream whose thumbnail you want to delete. |


### Return type

Promise<[**LiveStream**](../model/LiveStream.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const liveStreamId = 'li400mYKSgQ6xs7taUeSaEKr'; // The unique ID for the live stream whose thumbnail you want to delete.

const liveStream = await client.liveStreams.deleteThumbnail(liveStreamId); 
```


---

