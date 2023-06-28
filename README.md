[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video) &nbsp; [![badge](https://img.shields.io/github/stars/apivideo/api.video-nodejs-client?style=social)](https://github.com/apivideo/api.video-nodejs-client) &nbsp; [![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)
![](https://github.com/apivideo/.github/blob/main/assets/apivideo_banner.png)
<h1 align="center">api.video Node.js client</h1>

[api.video](https://api.video) is the video infrastructure for product builders. Lightning fast video APIs for integrating, scaling, and managing on-demand & low latency live streaming features in your app.

# Table of contents

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
    - [RawStatisticsApi](#rawstatisticsapi)
    - [UploadTokensApi](#uploadtokensapi)
    - [VideosApi](#videosapi)
    - [WatermarksApi](#watermarksapi)
    - [WebhooksApi](#webhooksapi)
  - [Models](#models)
  - [Authorization](#authorization)
    - [API key](#api-key)
    - [Get the access token](#get-the-access-token)
    - [Public endpoints](#public-endpoints)
- [Have you gotten use from this API client?](#have-you-gotten-use-from-this-api-client-)
- [Contribution](#contribution)

# Project description

api.video's Java Node.js is a lightweight client built in `TypeScript` that streamlines the coding process. Chunking files is handled for you, as is pagination and refreshing your tokens.

# Getting started

## Installation
With `npm`:
```
npm install @api.video/nodejs-client --save
```

...or with `yarn`:
```
yarn add @api.video/nodejs-client
```

## Migration

If you're coming from [@api.video/nodejs-sdk](https://github.com/apivideo/nodejs-sdk) make sure to read our [Migration guide](./doc/MIGRATE.md) first.

## Development

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

## Code sample

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

# Documentation

## API Endpoints


### AnalyticsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**getLiveStreamsPlays()**](doc/api/AnalyticsApi.md#getLiveStreamsPlays) | Get play events for live stream | **GET** /analytics/live-streams/plays
[**getVideosPlays()**](doc/api/AnalyticsApi.md#getVideosPlays) | Get play events for video | **GET** /analytics/videos/plays


### CaptionsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](doc/api/CaptionsApi.md#upload) | Upload a caption | **POST** /videos/{videoId}/captions/{language}
[**get()**](doc/api/CaptionsApi.md#get) | Retrieve a caption | **GET** /videos/{videoId}/captions/{language}
[**update()**](doc/api/CaptionsApi.md#update) | Update a caption | **PATCH** /videos/{videoId}/captions/{language}
[**delete()**](doc/api/CaptionsApi.md#delete) | Delete a caption | **DELETE** /videos/{videoId}/captions/{language}
[**list()**](doc/api/CaptionsApi.md#list) | List video captions | **GET** /videos/{videoId}/captions


### ChaptersApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](doc/api/ChaptersApi.md#upload) | Upload a chapter | **POST** /videos/{videoId}/chapters/{language}
[**get()**](doc/api/ChaptersApi.md#get) | Retrieve a chapter | **GET** /videos/{videoId}/chapters/{language}
[**delete()**](doc/api/ChaptersApi.md#delete) | Delete a chapter | **DELETE** /videos/{videoId}/chapters/{language}
[**list()**](doc/api/ChaptersApi.md#list) | List video chapters | **GET** /videos/{videoId}/chapters


### LiveStreamsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](doc/api/LiveStreamsApi.md#create) | Create live stream | **POST** /live-streams
[**get()**](doc/api/LiveStreamsApi.md#get) | Retrieve live stream | **GET** /live-streams/{liveStreamId}
[**update()**](doc/api/LiveStreamsApi.md#update) | Update a live stream | **PATCH** /live-streams/{liveStreamId}
[**delete()**](doc/api/LiveStreamsApi.md#delete) | Delete a live stream | **DELETE** /live-streams/{liveStreamId}
[**list()**](doc/api/LiveStreamsApi.md#list) | List all live streams | **GET** /live-streams
[**uploadThumbnail()**](doc/api/LiveStreamsApi.md#uploadThumbnail) | Upload a thumbnail | **POST** /live-streams/{liveStreamId}/thumbnail
[**deleteThumbnail()**](doc/api/LiveStreamsApi.md#deleteThumbnail) | Delete a thumbnail | **DELETE** /live-streams/{liveStreamId}/thumbnail


### PlayerThemesApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](doc/api/PlayerThemesApi.md#create) | Create a player | **POST** /players
[**get()**](doc/api/PlayerThemesApi.md#get) | Retrieve a player | **GET** /players/{playerId}
[**update()**](doc/api/PlayerThemesApi.md#update) | Update a player | **PATCH** /players/{playerId}
[**delete()**](doc/api/PlayerThemesApi.md#delete) | Delete a player | **DELETE** /players/{playerId}
[**list()**](doc/api/PlayerThemesApi.md#list) | List all player themes | **GET** /players
[**uploadLogo()**](doc/api/PlayerThemesApi.md#uploadLogo) | Upload a logo | **POST** /players/{playerId}/logo
[**deleteLogo()**](doc/api/PlayerThemesApi.md#deleteLogo) | Delete logo | **DELETE** /players/{playerId}/logo


### RawStatisticsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**listLiveStreamSessions()**](doc/api/RawStatisticsApi.md#listLiveStreamSessions) | List live stream player sessions | **GET** /analytics/live-streams/{liveStreamId}
[**listSessionEvents()**](doc/api/RawStatisticsApi.md#listSessionEvents) | List player session events | **GET** /analytics/sessions/{sessionId}/events
[**listVideoSessions()**](doc/api/RawStatisticsApi.md#listVideoSessions) | List video player sessions | **GET** /analytics/videos/{videoId}


### UploadTokensApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**createToken()**](doc/api/UploadTokensApi.md#createToken) | Generate an upload token | **POST** /upload-tokens
[**getToken()**](doc/api/UploadTokensApi.md#getToken) | Retrieve upload token | **GET** /upload-tokens/{uploadToken}
[**deleteToken()**](doc/api/UploadTokensApi.md#deleteToken) | Delete an upload token | **DELETE** /upload-tokens/{uploadToken}
[**list()**](doc/api/UploadTokensApi.md#list) | List all active upload tokens | **GET** /upload-tokens


### VideosApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](doc/api/VideosApi.md#create) | Create a video object | **POST** /videos
[**upload()**](doc/api/VideosApi.md#upload) | Upload a video | **POST** /videos/{videoId}/source
[**uploadWithUploadToken()**](doc/api/VideosApi.md#uploadWithUploadToken) | Upload with an delegated upload token | **POST** /upload
[**get()**](doc/api/VideosApi.md#get) | Retrieve a video object | **GET** /videos/{videoId}
[**update()**](doc/api/VideosApi.md#update) | Update a video object | **PATCH** /videos/{videoId}
[**delete()**](doc/api/VideosApi.md#delete) | Delete a video object | **DELETE** /videos/{videoId}
[**list()**](doc/api/VideosApi.md#list) | List all video objects | **GET** /videos
[**uploadThumbnail()**](doc/api/VideosApi.md#uploadThumbnail) | Upload a thumbnail | **POST** /videos/{videoId}/thumbnail
[**pickThumbnail()**](doc/api/VideosApi.md#pickThumbnail) | Set a thumbnail | **PATCH** /videos/{videoId}/thumbnail
[**getStatus()**](doc/api/VideosApi.md#getStatus) | Retrieve video status and details | **GET** /videos/{videoId}/status


### WatermarksApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](doc/api/WatermarksApi.md#upload) | Upload a watermark | **POST** /watermarks
[**delete()**](doc/api/WatermarksApi.md#delete) | Delete a watermark | **DELETE** /watermarks/{watermarkId}
[**list()**](doc/api/WatermarksApi.md#list) | List all watermarks | **GET** /watermarks


### WebhooksApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](doc/api/WebhooksApi.md#create) | Create Webhook | **POST** /webhooks
[**get()**](doc/api/WebhooksApi.md#get) | Retrieve Webhook details | **GET** /webhooks/{webhookId}
[**delete()**](doc/api/WebhooksApi.md#delete) | Delete a Webhook | **DELETE** /webhooks/{webhookId}
[**list()**](doc/api/WebhooksApi.md#list) | List all webhooks | **GET** /webhooks



## Models

 - [AccessToken](doc/model/AccessToken.md)
 - [AdditionalBadRequestErrors](doc/model/AdditionalBadRequestErrors.md)
 - [AnalyticsData](doc/model/AnalyticsData.md)
 - [AnalyticsPlays400Error](doc/model/AnalyticsPlays400Error.md)
 - [AnalyticsPlaysResponse](doc/model/AnalyticsPlaysResponse.md)
 - [AuthenticatePayload](doc/model/AuthenticatePayload.md)
 - [BadRequest](doc/model/BadRequest.md)
 - [BytesRange](doc/model/BytesRange.md)
 - [Caption](doc/model/Caption.md)
 - [CaptionsListResponse](doc/model/CaptionsListResponse.md)
 - [CaptionsUpdatePayload](doc/model/CaptionsUpdatePayload.md)
 - [Chapter](doc/model/Chapter.md)
 - [ChaptersListResponse](doc/model/ChaptersListResponse.md)
 - [Link](doc/model/Link.md)
 - [LiveStream](doc/model/LiveStream.md)
 - [LiveStreamAssets](doc/model/LiveStreamAssets.md)
 - [LiveStreamCreationPayload](doc/model/LiveStreamCreationPayload.md)
 - [LiveStreamListResponse](doc/model/LiveStreamListResponse.md)
 - [LiveStreamSession](doc/model/LiveStreamSession.md)
 - [LiveStreamSessionClient](doc/model/LiveStreamSessionClient.md)
 - [LiveStreamSessionDevice](doc/model/LiveStreamSessionDevice.md)
 - [LiveStreamSessionLocation](doc/model/LiveStreamSessionLocation.md)
 - [LiveStreamSessionReferrer](doc/model/LiveStreamSessionReferrer.md)
 - [LiveStreamSessionSession](doc/model/LiveStreamSessionSession.md)
 - [LiveStreamUpdatePayload](doc/model/LiveStreamUpdatePayload.md)
 - [Metadata](doc/model/Metadata.md)
 - [Model403ErrorSchema](doc/model/Model403ErrorSchema.md)
 - [NotFound](doc/model/NotFound.md)
 - [Pagination](doc/model/Pagination.md)
 - [PaginationLink](doc/model/PaginationLink.md)
 - [PlayerSessionEvent](doc/model/PlayerSessionEvent.md)
 - [PlayerTheme](doc/model/PlayerTheme.md)
 - [PlayerThemeAssets](doc/model/PlayerThemeAssets.md)
 - [PlayerThemeCreationPayload](doc/model/PlayerThemeCreationPayload.md)
 - [PlayerThemeUpdatePayload](doc/model/PlayerThemeUpdatePayload.md)
 - [PlayerThemesListResponse](doc/model/PlayerThemesListResponse.md)
 - [Quality](doc/model/Quality.md)
 - [RawStatisticsListLiveStreamAnalyticsResponse](doc/model/RawStatisticsListLiveStreamAnalyticsResponse.md)
 - [RawStatisticsListPlayerSessionEventsResponse](doc/model/RawStatisticsListPlayerSessionEventsResponse.md)
 - [RawStatisticsListSessionsResponse](doc/model/RawStatisticsListSessionsResponse.md)
 - [RefreshTokenPayload](doc/model/RefreshTokenPayload.md)
 - [RestreamsRequestObject](doc/model/RestreamsRequestObject.md)
 - [RestreamsResponseObject](doc/model/RestreamsResponseObject.md)
 - [TokenCreationPayload](doc/model/TokenCreationPayload.md)
 - [TokenListResponse](doc/model/TokenListResponse.md)
 - [UploadToken](doc/model/UploadToken.md)
 - [Video](doc/model/Video.md)
 - [VideoAssets](doc/model/VideoAssets.md)
 - [VideoClip](doc/model/VideoClip.md)
 - [VideoCreationPayload](doc/model/VideoCreationPayload.md)
 - [VideoSession](doc/model/VideoSession.md)
 - [VideoSessionClient](doc/model/VideoSessionClient.md)
 - [VideoSessionDevice](doc/model/VideoSessionDevice.md)
 - [VideoSessionLocation](doc/model/VideoSessionLocation.md)
 - [VideoSessionOs](doc/model/VideoSessionOs.md)
 - [VideoSessionReferrer](doc/model/VideoSessionReferrer.md)
 - [VideoSessionSession](doc/model/VideoSessionSession.md)
 - [VideoSource](doc/model/VideoSource.md)
 - [VideoSourceLiveStream](doc/model/VideoSourceLiveStream.md)
 - [VideoSourceLiveStreamLink](doc/model/VideoSourceLiveStreamLink.md)
 - [VideoStatus](doc/model/VideoStatus.md)
 - [VideoStatusEncoding](doc/model/VideoStatusEncoding.md)
 - [VideoStatusEncodingMetadata](doc/model/VideoStatusEncodingMetadata.md)
 - [VideoStatusIngest](doc/model/VideoStatusIngest.md)
 - [VideoStatusIngestReceivedParts](doc/model/VideoStatusIngestReceivedParts.md)
 - [VideoThumbnailPickPayload](doc/model/VideoThumbnailPickPayload.md)
 - [VideoUpdatePayload](doc/model/VideoUpdatePayload.md)
 - [VideoWatermark](doc/model/VideoWatermark.md)
 - [VideosListResponse](doc/model/VideosListResponse.md)
 - [Watermark](doc/model/Watermark.md)
 - [WatermarksListResponse](doc/model/WatermarksListResponse.md)
 - [Webhook](doc/model/Webhook.md)
 - [WebhooksCreationPayload](doc/model/WebhooksCreationPayload.md)
 - [WebhooksListResponse](doc/model/WebhooksListResponse.md)


## Authorization

### API key

Most endpoints required to be authenticated using the API key mechanism described in our [documentation](https://docs.api.video/reference#authentication).
The access token generation mechanism is automatically handled by the client.

All you have to do is provide an API key when instantiating the ApiVideoClient:
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });
```

### Get the access token

If you need to access the access-token value obtained using the API key, you can use the getAccessToken() method of the client:
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });
const accessToken = await client.getAccessToken();
```

### Public endpoints

Some endpoints don't require authentication. These one can be called with an ApiVideoClient instantiated without API key:
```js
const client = new ApiVideoClient();
```

# Have you gotten use from this API client?

Please take a moment to leave a star on the client ⭐

This helps other users to find the clients and also helps us understand which clients are most popular. Thank you!


# Contribution

Since this API client is generated from an OpenAPI description, we cannot accept pull requests made directly to the repository. If you want to contribute, you can open a pull request on the repository of our [client generator](https://github.com/apivideo/api-client-generator). Otherwise, you can also simply open an issue detailing your need on this repository.