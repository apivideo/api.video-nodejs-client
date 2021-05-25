# WebhooksApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](WebhooksApi.md#delete) | **DELETE** /webhooks/{webhookId} | Delete a Webhook
[**get**](WebhooksApi.md#get) | **GET** /webhooks/{webhookId} | Show Webhook details
[**list**](WebhooksApi.md#list) | **GET** /webhooks | List all webhooks
[**create**](WebhooksApi.md#create) | **POST** /webhooks | Create Webhook


<a name="delete"></a>
## **delete**


### Example
```js
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

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **string**| The webhook you wish to delete. | [default to undefined]

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

        const webhookId = 'webhookId_example'; // The unique webhook you wish to retreive details on.

        // Webhook
        const result = await client.webhooks.get(webhookId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | **string**| The unique webhook you wish to retreive details on. | [default to undefined]

### Return type

[**Webhook**](../model/Webhook.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

<a name="list"></a>
## **list**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const events = 'video.encoding.quality.completed'; // The webhook event that you wish to filter on.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // Page<>
        const result = await client.webhooks.list({ events, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **events** | **string**| The webhook event that you wish to filter on. | [optional] [default to undefined]
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

<a name="create"></a>
## **create**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const webhooksCreationPayload = ''; // 
                webhooksCreationPayload.setEvents(); // A list of the webhooks that you are subscribing to. Currently &quot;video.encoding.quality.completed&quot; is the only option. video.encoding.quality.completed - a video encoding quality is ready for the video (for example the 720p quality hls encoding video is ready.)
                webhooksCreationPayload.setUrl(); // The the url to which HTTP notifications are sent. It could be any http or https URL.

        // Webhook
        const result = await client.webhooks.create(webhooksCreationPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhooksCreationPayload** | [**WebhooksCreationPayload**](WebhooksCreationPayload.md)|  |

### Return type

[**Webhook**](../model/Webhook.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |

