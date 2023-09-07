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

If you're coming from [@api.video/nodejs-sdk](https://github.com/apivideo/nodejs-sdk) make sure to read our [Migration guide](./docs/MIGRATE.md) first.

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
[**getLiveStreamsPlays()**](docs/api/AnalyticsApi.md#getLiveStreamsPlays) | Get play events for live stream | **GET** /analytics/live-streams/plays
[**getVideosPlays()**](docs/api/AnalyticsApi.md#getVideosPlays) | Get play events for video | **GET** /analytics/videos/plays


### CaptionsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](docs/api/CaptionsApi.md#upload) | Upload a caption | **POST** /videos/{videoId}/captions/{language}
[**get()**](docs/api/CaptionsApi.md#get) | Retrieve a caption | **GET** /videos/{videoId}/captions/{language}
[**update()**](docs/api/CaptionsApi.md#update) | Update a caption | **PATCH** /videos/{videoId}/captions/{language}
[**delete()**](docs/api/CaptionsApi.md#delete) | Delete a caption | **DELETE** /videos/{videoId}/captions/{language}
[**list()**](docs/api/CaptionsApi.md#list) | List video captions | **GET** /videos/{videoId}/captions


### ChaptersApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](docs/api/ChaptersApi.md#upload) | Upload a chapter | **POST** /videos/{videoId}/chapters/{language}
[**get()**](docs/api/ChaptersApi.md#get) | Retrieve a chapter | **GET** /videos/{videoId}/chapters/{language}
[**delete()**](docs/api/ChaptersApi.md#delete) | Delete a chapter | **DELETE** /videos/{videoId}/chapters/{language}
[**list()**](docs/api/ChaptersApi.md#list) | List video chapters | **GET** /videos/{videoId}/chapters


### LiveStreamsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](docs/api/LiveStreamsApi.md#create) | Create live stream | **POST** /live-streams
[**get()**](docs/api/LiveStreamsApi.md#get) | Retrieve live stream | **GET** /live-streams/{liveStreamId}
[**update()**](docs/api/LiveStreamsApi.md#update) | Update a live stream | **PATCH** /live-streams/{liveStreamId}
[**delete()**](docs/api/LiveStreamsApi.md#delete) | Delete a live stream | **DELETE** /live-streams/{liveStreamId}
[**list()**](docs/api/LiveStreamsApi.md#list) | List all live streams | **GET** /live-streams
[**uploadThumbnail()**](docs/api/LiveStreamsApi.md#uploadThumbnail) | Upload a thumbnail | **POST** /live-streams/{liveStreamId}/thumbnail
[**deleteThumbnail()**](docs/api/LiveStreamsApi.md#deleteThumbnail) | Delete a thumbnail | **DELETE** /live-streams/{liveStreamId}/thumbnail


### PlayerThemesApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](docs/api/PlayerThemesApi.md#create) | Create a player | **POST** /players
[**get()**](docs/api/PlayerThemesApi.md#get) | Retrieve a player | **GET** /players/{playerId}
[**update()**](docs/api/PlayerThemesApi.md#update) | Update a player | **PATCH** /players/{playerId}
[**delete()**](docs/api/PlayerThemesApi.md#delete) | Delete a player | **DELETE** /players/{playerId}
[**list()**](docs/api/PlayerThemesApi.md#list) | List all player themes | **GET** /players
[**uploadLogo()**](docs/api/PlayerThemesApi.md#uploadLogo) | Upload a logo | **POST** /players/{playerId}/logo
[**deleteLogo()**](docs/api/PlayerThemesApi.md#deleteLogo) | Delete logo | **DELETE** /players/{playerId}/logo


### RawStatisticsApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**listLiveStreamSessions()**](docs/api/RawStatisticsApi.md#listLiveStreamSessions) | List live stream player sessions | **GET** /analytics/live-streams/{liveStreamId}
[**listSessionEvents()**](docs/api/RawStatisticsApi.md#listSessionEvents) | List player session events | **GET** /analytics/sessions/{sessionId}/events
[**listVideoSessions()**](docs/api/RawStatisticsApi.md#listVideoSessions) | List video player sessions | **GET** /analytics/videos/{videoId}


### UploadTokensApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**createToken()**](docs/api/UploadTokensApi.md#createToken) | Generate an upload token | **POST** /upload-tokens
[**getToken()**](docs/api/UploadTokensApi.md#getToken) | Retrieve upload token | **GET** /upload-tokens/{uploadToken}
[**deleteToken()**](docs/api/UploadTokensApi.md#deleteToken) | Delete an upload token | **DELETE** /upload-tokens/{uploadToken}
[**list()**](docs/api/UploadTokensApi.md#list) | List all active upload tokens | **GET** /upload-tokens


### VideosApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](docs/api/VideosApi.md#create) | Create a video object | **POST** /videos
[**upload()**](docs/api/VideosApi.md#upload) | Upload a video | **POST** /videos/{videoId}/source
[**uploadWithUploadToken()**](docs/api/VideosApi.md#uploadWithUploadToken) | Upload with an delegated upload token | **POST** /upload
[**get()**](docs/api/VideosApi.md#get) | Retrieve a video object | **GET** /videos/{videoId}
[**update()**](docs/api/VideosApi.md#update) | Update a video object | **PATCH** /videos/{videoId}
[**delete()**](docs/api/VideosApi.md#delete) | Delete a video object | **DELETE** /videos/{videoId}
[**list()**](docs/api/VideosApi.md#list) | List all video objects | **GET** /videos
[**uploadThumbnail()**](docs/api/VideosApi.md#uploadThumbnail) | Upload a thumbnail | **POST** /videos/{videoId}/thumbnail
[**pickThumbnail()**](docs/api/VideosApi.md#pickThumbnail) | Set a thumbnail | **PATCH** /videos/{videoId}/thumbnail
[**getStatus()**](docs/api/VideosApi.md#getStatus) | Retrieve video status and details | **GET** /videos/{videoId}/status


### WatermarksApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**upload()**](docs/api/WatermarksApi.md#upload) | Upload a watermark | **POST** /watermarks
[**delete()**](docs/api/WatermarksApi.md#delete) | Delete a watermark | **DELETE** /watermarks/{watermarkId}
[**list()**](docs/api/WatermarksApi.md#list) | List all watermarks | **GET** /watermarks


### WebhooksApi

Method | Description | HTTP request
------------- | ------------- | -------------
[**create()**](docs/api/WebhooksApi.md#create) | Create Webhook | **POST** /webhooks
[**get()**](docs/api/WebhooksApi.md#get) | Retrieve Webhook details | **GET** /webhooks/{webhookId}
[**delete()**](docs/api/WebhooksApi.md#delete) | Delete a Webhook | **DELETE** /webhooks/{webhookId}
[**list()**](docs/api/WebhooksApi.md#list) | List all webhooks | **GET** /webhooks



## Models

 - [AccessToken](docs/model/AccessToken.md)
 - [AdditionalBadRequestErrors](docs/model/AdditionalBadRequestErrors.md)
 - [AnalyticsData](docs/model/AnalyticsData.md)
 - [AnalyticsPlays400Error](docs/model/AnalyticsPlays400Error.md)
 - [AnalyticsPlaysResponse](docs/model/AnalyticsPlaysResponse.md)
 - [AuthenticatePayload](docs/model/AuthenticatePayload.md)
 - [BadRequest](docs/model/BadRequest.md)
 - [BytesRange](docs/model/BytesRange.md)
 - [Caption](docs/model/Caption.md)
 - [CaptionsListResponse](docs/model/CaptionsListResponse.md)
 - [CaptionsUpdatePayload](docs/model/CaptionsUpdatePayload.md)
 - [Chapter](docs/model/Chapter.md)
 - [ChaptersListResponse](docs/model/ChaptersListResponse.md)
 - [Link](docs/model/Link.md)
 - [LiveStream](docs/model/LiveStream.md)
 - [LiveStreamAssets](docs/model/LiveStreamAssets.md)
 - [LiveStreamCreationPayload](docs/model/LiveStreamCreationPayload.md)
 - [LiveStreamListResponse](docs/model/LiveStreamListResponse.md)
 - [LiveStreamSession](docs/model/LiveStreamSession.md)
 - [LiveStreamSessionClient](docs/model/LiveStreamSessionClient.md)
 - [LiveStreamSessionDevice](docs/model/LiveStreamSessionDevice.md)
 - [LiveStreamSessionLocation](docs/model/LiveStreamSessionLocation.md)
 - [LiveStreamSessionReferrer](docs/model/LiveStreamSessionReferrer.md)
 - [LiveStreamSessionSession](docs/model/LiveStreamSessionSession.md)
 - [LiveStreamUpdatePayload](docs/model/LiveStreamUpdatePayload.md)
 - [Metadata](docs/model/Metadata.md)
 - [Model403ErrorSchema](docs/model/Model403ErrorSchema.md)
 - [NotFound](docs/model/NotFound.md)
 - [Pagination](docs/model/Pagination.md)
 - [PaginationLink](docs/model/PaginationLink.md)
 - [PlayerSessionEvent](docs/model/PlayerSessionEvent.md)
 - [PlayerTheme](docs/model/PlayerTheme.md)
 - [PlayerThemeAssets](docs/model/PlayerThemeAssets.md)
 - [PlayerThemeCreationPayload](docs/model/PlayerThemeCreationPayload.md)
 - [PlayerThemeUpdatePayload](docs/model/PlayerThemeUpdatePayload.md)
 - [PlayerThemesListResponse](docs/model/PlayerThemesListResponse.md)
 - [Quality](docs/model/Quality.md)
 - [RawStatisticsListLiveStreamAnalyticsResponse](docs/model/RawStatisticsListLiveStreamAnalyticsResponse.md)
 - [RawStatisticsListPlayerSessionEventsResponse](docs/model/RawStatisticsListPlayerSessionEventsResponse.md)
 - [RawStatisticsListSessionsResponse](docs/model/RawStatisticsListSessionsResponse.md)
 - [RefreshTokenPayload](docs/model/RefreshTokenPayload.md)
 - [RestreamsRequestObject](docs/model/RestreamsRequestObject.md)
 - [RestreamsResponseObject](docs/model/RestreamsResponseObject.md)
 - [TokenCreationPayload](docs/model/TokenCreationPayload.md)
 - [TokenListResponse](docs/model/TokenListResponse.md)
 - [UploadToken](docs/model/UploadToken.md)
 - [Video](docs/model/Video.md)
 - [VideoAssets](docs/model/VideoAssets.md)
 - [VideoClip](docs/model/VideoClip.md)
 - [VideoCreationPayload](docs/model/VideoCreationPayload.md)
 - [VideoSession](docs/model/VideoSession.md)
 - [VideoSessionClient](docs/model/VideoSessionClient.md)
 - [VideoSessionDevice](docs/model/VideoSessionDevice.md)
 - [VideoSessionLocation](docs/model/VideoSessionLocation.md)
 - [VideoSessionOs](docs/model/VideoSessionOs.md)
 - [VideoSessionReferrer](docs/model/VideoSessionReferrer.md)
 - [VideoSessionSession](docs/model/VideoSessionSession.md)
 - [VideoSource](docs/model/VideoSource.md)
 - [VideoSourceLiveStream](docs/model/VideoSourceLiveStream.md)
 - [VideoSourceLiveStreamLink](docs/model/VideoSourceLiveStreamLink.md)
 - [VideoStatus](docs/model/VideoStatus.md)
 - [VideoStatusEncoding](docs/model/VideoStatusEncoding.md)
 - [VideoStatusEncodingMetadata](docs/model/VideoStatusEncodingMetadata.md)
 - [VideoStatusIngest](docs/model/VideoStatusIngest.md)
 - [VideoStatusIngestReceivedParts](docs/model/VideoStatusIngestReceivedParts.md)
 - [VideoThumbnailPickPayload](docs/model/VideoThumbnailPickPayload.md)
 - [VideoUpdatePayload](docs/model/VideoUpdatePayload.md)
 - [VideoWatermark](docs/model/VideoWatermark.md)
 - [VideosListResponse](docs/model/VideosListResponse.md)
 - [Watermark](docs/model/Watermark.md)
 - [WatermarksListResponse](docs/model/WatermarksListResponse.md)
 - [Webhook](docs/model/Webhook.md)
 - [WebhooksCreationPayload](docs/model/WebhooksCreationPayload.md)
 - [WebhooksListResponse](docs/model/WebhooksListResponse.md)


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