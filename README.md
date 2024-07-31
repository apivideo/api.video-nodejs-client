<!--<documentation_excluded>-->
[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video) &nbsp; [![badge](https://img.shields.io/github/stars/apivideo/api.video-nodejs-client?style=social)](https://github.com/apivideo/api.video-nodejs-client) &nbsp; [![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)
![](https://github.com/apivideo/.github/blob/main/assets/apivideo_banner.png)
<h1 align="center">api.video Node.js client</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

## Table of contents

- [Project description](#project-description)
- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Migration](#migration)
  - [Development](#development)
  - [Code sample](#code-sample)
- [Documentation](#documentation)
  - [API Endpoints](#api-endpoints)
    - [AnalyticsApi](#analyticsapi)
    - [CaptionsApi](#captionsapi)
    - [ChaptersApi](#chaptersapi)
    - [LiveStreamsApi](#livestreamsapi)
    - [PlayerThemesApi](#playerthemesapi)
    - [UploadTokensApi](#uploadtokensapi)
    - [VideosApi](#videosapi)
    - [WatermarksApi](#watermarksapi)
    - [WebhooksApi](#webhooksapi)
  - [Models](#models)
  - [Rate Limiting](#rate-limiting)
  - [Authorization](#authorization)
    - [API key](#api-key)
    - [Get the access token](#get-the-access-token)
    - [Public endpoints](#public-endpoints)
- [Have you gotten use from this API client?](#have-you-gotten-use-from-this-api-client-)
- [Contribution](#contribution)
<!--</documentation_excluded>-->
<!--<documentation_only>
---
title: Node.js API client
meta: 
  description: The official Node.js API client for api.video. [api.video](https://api.video/) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.
---

# api.video Node.js API client

[api.video](https://api.video/) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.
</documentation_only>-->

## Project description

api.video's Java Node.js is a lightweight client built in `TypeScript` that streamlines the coding process. Chunking files is handled for you, as is pagination and refreshing your tokens.

## Getting started

### Installation
With `npm`:
```
npm install @api.video/nodejs-client --save
```

...or with `yarn`:
```
yarn add @api.video/nodejs-client
```

### Migration

If you're coming from [@api.video/nodejs-sdk](https://github.com/apivideo/nodejs-sdk) make sure to read our [Migration guide](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/MIGRATE.md) first.

### Development

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Code sample

```typescript
const ApiVideoClient = require('@api.video/nodejs-client');
// or: import ApiVideoClient from '@api.video/nodejs-client';

(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

        // create a video
        const videoCreationPayload = {
            title: "Maths video", // The title of your new video.
            description: "A video about string theory.", // A brief description of your video.
        };
        const video = await client.videos.create(videoCreationPayload);

        // upload a video file into the video container
        await client.videos.upload(video.videoId, "my-video-file.mp4");
    } catch (e) {
        console.error(e);
    }
})();
```

## Documentation

### API Endpoints


#### AnalyticsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**getAggregatedMetrics()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/AnalyticsApi.md#getAggregatedMetrics) | Retrieve aggregated metrics | **GET** `/data/metrics/{metric}/{aggregation}`
[**getMetricsBreakdown()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/AnalyticsApi.md#getMetricsBreakdown) | Retrieve metrics in a breakdown of dimensions | **GET** `/data/buckets/{metric}/{breakdown}`
[**getMetricsOverTime()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/AnalyticsApi.md#getMetricsOverTime) | Retrieve metrics over time | **GET** `/data/timeseries/{metric}`


#### CaptionsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/CaptionsApi.md#upload) | Upload a caption | **POST** `/videos/{videoId}/captions/{language}`
[**get()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/CaptionsApi.md#get) | Retrieve a caption | **GET** `/videos/{videoId}/captions/{language}`
[**update()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/CaptionsApi.md#update) | Update a caption | **PATCH** `/videos/{videoId}/captions/{language}`
[**delete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/CaptionsApi.md#delete) | Delete a caption | **DELETE** `/videos/{videoId}/captions/{language}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/CaptionsApi.md#list) | List video captions | **GET** `/videos/{videoId}/captions`


#### ChaptersApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/ChaptersApi.md#upload) | Upload a chapter | **POST** `/videos/{videoId}/chapters/{language}`
[**get()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/ChaptersApi.md#get) | Retrieve a chapter | **GET** `/videos/{videoId}/chapters/{language}`
[**delete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/ChaptersApi.md#delete) | Delete a chapter | **DELETE** `/videos/{videoId}/chapters/{language}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/ChaptersApi.md#list) | List video chapters | **GET** `/videos/{videoId}/chapters`


#### LiveStreamsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#create) | Create live stream | **POST** `/live-streams`
[**get()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#get) | Retrieve live stream | **GET** `/live-streams/{liveStreamId}`
[**update()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#update) | Update a live stream | **PATCH** `/live-streams/{liveStreamId}`
[**delete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#delete) | Delete a live stream | **DELETE** `/live-streams/{liveStreamId}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#list) | List all live streams | **GET** `/live-streams`
[**uploadThumbnail()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#uploadThumbnail) | Upload a thumbnail | **POST** `/live-streams/{liveStreamId}/thumbnail`
[**deleteThumbnail()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#deleteThumbnail) | Delete a thumbnail | **DELETE** `/live-streams/{liveStreamId}/thumbnail`
[**complete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/LiveStreamsApi.md#complete) | Complete a live stream | **PUT** `/live-streams/{liveStreamId}/complete`


#### PlayerThemesApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/PlayerThemesApi.md#create) | Create a player | **POST** `/players`
[**get()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/PlayerThemesApi.md#get) | Retrieve a player | **GET** `/players/{playerId}`
[**update()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/PlayerThemesApi.md#update) | Update a player | **PATCH** `/players/{playerId}`
[**delete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/PlayerThemesApi.md#delete) | Delete a player | **DELETE** `/players/{playerId}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/PlayerThemesApi.md#list) | List all player themes | **GET** `/players`
[**uploadLogo()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/PlayerThemesApi.md#uploadLogo) | Upload a logo | **POST** `/players/{playerId}/logo`
[**deleteLogo()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/PlayerThemesApi.md#deleteLogo) | Delete logo | **DELETE** `/players/{playerId}/logo`


#### UploadTokensApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**createToken()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/UploadTokensApi.md#createToken) | Generate an upload token | **POST** `/upload-tokens`
[**getToken()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/UploadTokensApi.md#getToken) | Retrieve upload token | **GET** `/upload-tokens/{uploadToken}`
[**deleteToken()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/UploadTokensApi.md#deleteToken) | Delete an upload token | **DELETE** `/upload-tokens/{uploadToken}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/UploadTokensApi.md#list) | List all active upload tokens | **GET** `/upload-tokens`


#### VideosApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#create) | Create a video object | **POST** `/videos`
[**upload()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#upload) | Upload a video | **POST** `/videos/{videoId}/source`
[**uploadWithUploadToken()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#uploadWithUploadToken) | Upload with an delegated upload token | **POST** `/upload`
[**get()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#get) | Retrieve a video object | **GET** `/videos/{videoId}`
[**update()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#update) | Update a video object | **PATCH** `/videos/{videoId}`
[**delete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#delete) | Delete a video object | **DELETE** `/videos/{videoId}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#list) | List all video objects | **GET** `/videos`
[**uploadThumbnail()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#uploadThumbnail) | Upload a thumbnail | **POST** `/videos/{videoId}/thumbnail`
[**pickThumbnail()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#pickThumbnail) | Set a thumbnail | **PATCH** `/videos/{videoId}/thumbnail`
[**getStatus()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/VideosApi.md#getStatus) | Retrieve video status and details | **GET** `/videos/{videoId}/status`


#### WatermarksApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/WatermarksApi.md#upload) | Upload a watermark | **POST** `/watermarks`
[**delete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/WatermarksApi.md#delete) | Delete a watermark | **DELETE** `/watermarks/{watermarkId}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/WatermarksApi.md#list) | List all watermarks | **GET** `/watermarks`


#### WebhooksApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/WebhooksApi.md#create) | Create Webhook | **POST** `/webhooks`
[**get()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/WebhooksApi.md#get) | Retrieve Webhook details | **GET** `/webhooks/{webhookId}`
[**delete()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/WebhooksApi.md#delete) | Delete a Webhook | **DELETE** `/webhooks/{webhookId}`
[**list()**](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/api/WebhooksApi.md#list) | List all webhooks | **GET** `/webhooks`



### Models

 - [AccessToken](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AccessToken.md)
 - [AdditionalBadRequestErrors](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AdditionalBadRequestErrors.md)
 - [AnalyticsAggregatedMetricsResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsAggregatedMetricsResponse.md)
 - [AnalyticsAggregatedMetricsResponseContext](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsAggregatedMetricsResponseContext.md)
 - [AnalyticsAggregatedMetricsResponseContextTimeframe](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsAggregatedMetricsResponseContextTimeframe.md)
 - [AnalyticsData](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsData.md)
 - [AnalyticsMetricsBreakdownResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsMetricsBreakdownResponse.md)
 - [AnalyticsMetricsBreakdownResponseContext](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsMetricsBreakdownResponseContext.md)
 - [AnalyticsMetricsBreakdownResponseData](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsMetricsBreakdownResponseData.md)
 - [AnalyticsMetricsOverTimeResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsMetricsOverTimeResponse.md)
 - [AnalyticsMetricsOverTimeResponseContext](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsMetricsOverTimeResponseContext.md)
 - [AnalyticsMetricsOverTimeResponseData](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsMetricsOverTimeResponseData.md)
 - [AnalyticsPlays400Error](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsPlays400Error.md)
 - [AnalyticsPlaysResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AnalyticsPlaysResponse.md)
 - [AuthenticatePayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/AuthenticatePayload.md)
 - [BadRequest](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/BadRequest.md)
 - [BytesRange](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/BytesRange.md)
 - [Caption](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Caption.md)
 - [CaptionsListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/CaptionsListResponse.md)
 - [CaptionsUpdatePayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/CaptionsUpdatePayload.md)
 - [Chapter](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Chapter.md)
 - [ChaptersListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/ChaptersListResponse.md)
 - [FilterBy](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/FilterBy.md)
 - [FilterBy1](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/FilterBy1.md)
 - [FilterBy2](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/FilterBy2.md)
 - [Link](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Link.md)
 - [LiveStream](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/LiveStream.md)
 - [LiveStreamAssets](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/LiveStreamAssets.md)
 - [LiveStreamCreationPayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/LiveStreamCreationPayload.md)
 - [LiveStreamListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/LiveStreamListResponse.md)
 - [LiveStreamUpdatePayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/LiveStreamUpdatePayload.md)
 - [Metadata](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Metadata.md)
 - [Model403ErrorSchema](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Model403ErrorSchema.md)
 - [NotFound](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/NotFound.md)
 - [Pagination](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Pagination.md)
 - [PaginationLink](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/PaginationLink.md)
 - [PlayerSessionEvent](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/PlayerSessionEvent.md)
 - [PlayerTheme](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/PlayerTheme.md)
 - [PlayerThemeAssets](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/PlayerThemeAssets.md)
 - [PlayerThemeCreationPayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/PlayerThemeCreationPayload.md)
 - [PlayerThemeUpdatePayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/PlayerThemeUpdatePayload.md)
 - [PlayerThemesListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/PlayerThemesListResponse.md)
 - [Quality](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Quality.md)
 - [RefreshTokenPayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/RefreshTokenPayload.md)
 - [RestreamsRequestObject](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/RestreamsRequestObject.md)
 - [RestreamsResponseObject](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/RestreamsResponseObject.md)
 - [TokenCreationPayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/TokenCreationPayload.md)
 - [TokenListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/TokenListResponse.md)
 - [TooManyRequests](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/TooManyRequests.md)
 - [UnrecognizedRequestUrl](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/UnrecognizedRequestUrl.md)
 - [UploadToken](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/UploadToken.md)
 - [Video](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Video.md)
 - [VideoAssets](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoAssets.md)
 - [VideoClip](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoClip.md)
 - [VideoCreationPayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoCreationPayload.md)
 - [VideoSource](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoSource.md)
 - [VideoSourceLiveStream](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoSourceLiveStream.md)
 - [VideoSourceLiveStreamLink](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoSourceLiveStreamLink.md)
 - [VideoStatus](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoStatus.md)
 - [VideoStatusEncoding](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoStatusEncoding.md)
 - [VideoStatusEncodingMetadata](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoStatusEncodingMetadata.md)
 - [VideoStatusIngest](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoStatusIngest.md)
 - [VideoStatusIngestReceivedParts](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoStatusIngestReceivedParts.md)
 - [VideoThumbnailPickPayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoThumbnailPickPayload.md)
 - [VideoUpdatePayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoUpdatePayload.md)
 - [VideoWatermark](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideoWatermark.md)
 - [VideosListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/VideosListResponse.md)
 - [Watermark](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Watermark.md)
 - [WatermarksListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/WatermarksListResponse.md)
 - [Webhook](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/Webhook.md)
 - [WebhooksCreationPayload](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/WebhooksCreationPayload.md)
 - [WebhooksListResponse](https://github.com/apivideo/api.video-nodejs-client/blob/main/docs/model/WebhooksListResponse.md)


### Rate Limiting

api.video implements rate limiting to ensure fair usage and stability of the service. The API provides the rate limit values in the response headers for any API requests you make. The /auth endpoint is the only route without rate limitation.

In this Node.js client, you can access these headers by using the `*WithResponseHeaders()` versions of the methods. These methods return both the response body and the headers, allowing you to check the `X-RateLimit-Limit`, `X-RateLimit-Remaining`, and `X-RateLimit-Retry-After` headers to understand your current rate limit status.

Read more about these response headers in the [API reference](https://docs.api.video/reference#limitation).

Here is an example of how to use these methods:

```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });
const { body: videos, headers } = await client.videos.listWithResponseHeaders();
console.log('Rate Limit:', headers['x-ratelimit-limit']);
console.log('Rate Limit Remaining:', headers['x-ratelimit-remaining']);
console.log('Rate Limit Retry after:', headers['x-ratelimit-retry-after']);
```

### Authorization

#### API key

Most endpoints required to be authenticated using the API key mechanism described in our [documentation](https://docs.api.video/reference#authentication).
The access token generation mechanism is automatically handled by the client.

All you have to do is provide an API key when instantiating the ApiVideoClient:
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });
```

#### Get the access token

If you need to access the access-token value obtained using the API key, you can use the getAccessToken() method of the client:
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });
const accessToken = await client.getAccessToken();
```

#### Public endpoints

Some endpoints don't require authentication. These one can be called with an ApiVideoClient instantiated without API key:
```js
const client = new ApiVideoClient();
```

## Have you gotten use from this API client?

Please take a moment to leave a star on the client ⭐

This helps other users to find the clients and also helps us understand which clients are most popular. Thank you!


## Contribution

Since this API client is generated from an OpenAPI description, we cannot accept pull requests made directly to the repository. If you want to contribute, you can open a pull request on the repository of our [client generator](https://github.com/apivideo/api-client-generator). Otherwise, you can also simply open an issue detailing your need on this repository.