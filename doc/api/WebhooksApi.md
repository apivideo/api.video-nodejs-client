# WebhooksApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**delete**](WebhooksApi.md#delete) | Delete a Webhook | **DELETE** /webhooks/{webhookId} |
| [**get**](WebhooksApi.md#get) | Show Webhook details | **GET** /webhooks/{webhookId} |
| [**list**](WebhooksApi.md#list) | List all webhooks | **GET** /webhooks |
| [**create**](WebhooksApi.md#create) | Create Webhook | **POST** /webhooks |


<a name="delete"></a>
## **`delete` - Delete a Webhook**


This endpoint will delete the indicated webhook.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **webhookId** | **string**| The webhook you wish to delete. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const webhookId = 'webhookId_example'; // The webhook you wish to delete.

        // void
        const result = await client.webhooks.delete(webhookId);
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

<a name="get"></a>
## **`get` - Show Webhook details**


This call provides the same JSON information provided on Webjhook creation.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **webhookId** | **string**| The unique webhook you wish to retreive details on. |


### Return type

Promise<[**Webhook**](../model/Webhook.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const webhookId = 'webhookId_example'; // The unique webhook you wish to retreive details on.

        // Webhook
        const result = await client.webhooks.get(webhookId);
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


---

<a name="list"></a>
## **`list` - List all webhooks**


Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **events** | **string**| The webhook event that you wish to filter on. |
 | **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**WebhooksListResponse**](../model/WebhooksListResponse.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const events = 'video.encoding.quality.completed'; // The webhook event that you wish to filter on.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // WebhooksListResponse
        const result = await client.webhooks.list({ events, currentPage, pageSize })
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


---

<a name="create"></a>
## **`create` - Create Webhook**


Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer four events: 
* ```video.encoding.quality.completed``` Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ \"type\": \"video.encoding.quality.completed\", \"emittedAt\": \"2021-01-29T16:46:25.217+01:00\", \"videoId\": \"viXXXXXXXX\", \"encoding\": \"hls\", \"quality\": \"720p\"} ```. This request says that the 720p HLS encoding was completed.
* ```live-stream.broadcast.started```  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires.
* ```live-stream.broadcast.ended```  This event fires when the live stream has finished broadcasting, and the broadcasting parameter flips from false to true.
* ```video.source.recorded```  This event occurs when a live stream is recorded and submitted for encoding.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **webhooksCreationPayload** | [**WebhooksCreationPayload**](../model/WebhooksCreationPayload.md)|  |


### Return type

Promise<[**Webhook**](../model/Webhook.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const webhooksCreationPayload = {
      events: ["video.encoding.quality.completed"], // A list of the webhooks that you are subscribing to. There are Currently four webhook options: * ```video.encoding.quality.completed```  Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like ```{ "type": "video.encoding.quality.completed", "emittedAt": "2021-01-29T16:46:25.217+01:00", "videoId": "viXXXXXXXX", "encoding": "hls", "quality": "720p"} ```. This request says that the 720p HLS encoding was completed. * ```live-stream.broadcast.started```  When a lives tream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * ```live-stream.broadcast.ended```  This event fires when the live stream has finished broadcasting, and the broadcasting parameter flips from false to true. * ```video.source.recorded```  Occurs when a live stream is recorded and submitted for encoding.
      url: "https://example.com/webhooks", // The url to which HTTP notifications are sent. It could be any http or https URL.
    }; 

        // Webhook
        const result = await client.webhooks.create(webhooksCreationPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created |  -  |
| **400** | Bad Request |  -  |


---

