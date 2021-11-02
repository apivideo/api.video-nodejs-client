[![badge](https://img.shields.io/twitter/follow/api_video?style=social)](https://twitter.com/intent/follow?screen_name=api_video)

[![badge](https://img.shields.io/github/stars/apivideo/nodejs-api-client?style=social)](https://github.com/apivideo/nodejs-api-client)

[![badge](https://img.shields.io/discourse/topics?server=https%3A%2F%2Fcommunity.api.video)](https://community.api.video)

![](https://github.com/apivideo/API_OAS_file/blob/master/apivideo_banner.png)

[api.video](https://api.video) is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

# @api.video/nodejs-client

A lightweight client built in `TypeScript` for `nodejs`.

> This client is part of our generated clients built upon our [Open API schema definition](https://github.com/apivideo/API_OAS_file).

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.

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

## API resources

All URIs are relative to *https://ws.api.video*


### CaptionsApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const captions = apiVideoClient.captions;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/api/CaptionsApi.md#delete) | **DELETE** /videos/{videoId}/captions/{language} | Delete a caption
[**list**](doc/api/CaptionsApi.md#list) | **GET** /videos/{videoId}/captions | List video captions
[**get**](doc/api/CaptionsApi.md#get) | **GET** /videos/{videoId}/captions/{language} | Show a caption
[**update**](doc/api/CaptionsApi.md#update) | **PATCH** /videos/{videoId}/captions/{language} | Update caption
[**upload**](doc/api/CaptionsApi.md#upload) | **POST** /videos/{videoId}/captions/{language} | Upload a caption


### ChaptersApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const chapters = apiVideoClient.chapters;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/api/ChaptersApi.md#delete) | **DELETE** /videos/{videoId}/chapters/{language} | Delete a chapter
[**list**](doc/api/ChaptersApi.md#list) | **GET** /videos/{videoId}/chapters | List video chapters
[**get**](doc/api/ChaptersApi.md#get) | **GET** /videos/{videoId}/chapters/{language} | Show a chapter
[**upload**](doc/api/ChaptersApi.md#upload) | **POST** /videos/{videoId}/chapters/{language} | Upload a chapter


### LiveStreamsApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const liveStreams = apiVideoClient.liveStreams;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/api/LiveStreamsApi.md#delete) | **DELETE** /live-streams/{liveStreamId} | Delete a live stream
[**deleteThumbnail**](doc/api/LiveStreamsApi.md#deleteThumbnail) | **DELETE** /live-streams/{liveStreamId}/thumbnail | Delete a thumbnail
[**list**](doc/api/LiveStreamsApi.md#list) | **GET** /live-streams | List all live streams
[**get**](doc/api/LiveStreamsApi.md#get) | **GET** /live-streams/{liveStreamId} | Show live stream
[**update**](doc/api/LiveStreamsApi.md#update) | **PATCH** /live-streams/{liveStreamId} | Update a live stream
[**create**](doc/api/LiveStreamsApi.md#create) | **POST** /live-streams | Create live stream
[**uploadThumbnail**](doc/api/LiveStreamsApi.md#uploadThumbnail) | **POST** /live-streams/{liveStreamId}/thumbnail | Upload a thumbnail


### PlayerThemesApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const playerThemes = apiVideoClient.playerThemes;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/api/PlayerThemesApi.md#delete) | **DELETE** /players/{playerId} | Delete a player
[**deleteLogo**](doc/api/PlayerThemesApi.md#deleteLogo) | **DELETE** /players/{playerId}/logo | Delete logo
[**list**](doc/api/PlayerThemesApi.md#list) | **GET** /players | List all players
[**get**](doc/api/PlayerThemesApi.md#get) | **GET** /players/{playerId} | Show a player
[**update**](doc/api/PlayerThemesApi.md#update) | **PATCH** /players/{playerId} | Update a player
[**create**](doc/api/PlayerThemesApi.md#create) | **POST** /players | Create a player
[**uploadLogo**](doc/api/PlayerThemesApi.md#uploadLogo) | **POST** /players/{playerId}/logo | Upload a logo


### RawStatisticsApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const rawStatistics = apiVideoClient.rawStatistics;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLiveStreamSessions**](doc/api/RawStatisticsApi.md#listLiveStreamSessions) | **GET** /analytics/live-streams/{liveStreamId} | List live stream player sessions
[**listSessionEvents**](doc/api/RawStatisticsApi.md#listSessionEvents) | **GET** /analytics/sessions/{sessionId}/events | List player session events
[**listVideoSessions**](doc/api/RawStatisticsApi.md#listVideoSessions) | **GET** /analytics/videos/{videoId} | List video player sessions


### UploadTokensApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const uploadTokens = apiVideoClient.uploadTokens;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteToken**](doc/api/UploadTokensApi.md#deleteToken) | **DELETE** /upload-tokens/{uploadToken} | Delete an upload token
[**list**](doc/api/UploadTokensApi.md#list) | **GET** /upload-tokens | List all active upload tokens.
[**getToken**](doc/api/UploadTokensApi.md#getToken) | **GET** /upload-tokens/{uploadToken} | Show upload token
[**createToken**](doc/api/UploadTokensApi.md#createToken) | **POST** /upload-tokens | Generate an upload token


### VideosApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const videos = apiVideoClient.videos;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/api/VideosApi.md#delete) | **DELETE** /videos/{videoId} | Delete a video
[**get**](doc/api/VideosApi.md#get) | **GET** /videos/{videoId} | Show a video
[**getStatus**](doc/api/VideosApi.md#getStatus) | **GET** /videos/{videoId}/status | Show video status
[**list**](doc/api/VideosApi.md#list) | **GET** /videos | List all videos
[**update**](doc/api/VideosApi.md#update) | **PATCH** /videos/{videoId} | Update a video
[**pickThumbnail**](doc/api/VideosApi.md#pickThumbnail) | **PATCH** /videos/{videoId}/thumbnail | Pick a thumbnail
[**uploadWithUploadToken**](doc/api/VideosApi.md#uploadWithUploadToken) | **POST** /upload | Upload with an upload token
[**create**](doc/api/VideosApi.md#create) | **POST** /videos | Create a video
[**upload**](doc/api/VideosApi.md#upload) | **POST** /videos/{videoId}/source | Upload a video
[**uploadThumbnail**](doc/api/VideosApi.md#uploadThumbnail) | **POST** /videos/{videoId}/thumbnail | Upload a thumbnail


### WebhooksApi

```js
const ApiVideoClient = require('@api.video/nodejs-client');

const apiVideoClient = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const webhooks = apiVideoClient.webhooks;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/api/WebhooksApi.md#delete) | **DELETE** /webhooks/{webhookId} | Delete a Webhook
[**get**](doc/api/WebhooksApi.md#get) | **GET** /webhooks/{webhookId} | Show Webhook details
[**list**](doc/api/WebhooksApi.md#list) | **GET** /webhooks | List all webhooks
[**create**](doc/api/WebhooksApi.md#create) | **POST** /webhooks | Create Webhook



## API Models

 - [AccessToken](doc/model/AccessToken.md)
 - [Account](doc/model/Account.md)
 - [AccountQuota](doc/model/AccountQuota.md)
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
 - [TokenCreationPayload](doc/model/TokenCreationPayload.md)
 - [TokenListResponse](doc/model/TokenListResponse.md)
 - [UploadToken](doc/model/UploadToken.md)
 - [Video](doc/model/Video.md)
 - [VideoAssets](doc/model/VideoAssets.md)
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
 - [VideoThumbnailPickPayload](doc/model/VideoThumbnailPickPayload.md)
 - [VideoUpdatePayload](doc/model/VideoUpdatePayload.md)
 - [VideosListResponse](doc/model/VideosListResponse.md)
 - [Webhook](doc/model/Webhook.md)
 - [WebhooksCreationPayload](doc/model/WebhooksCreationPayload.md)
 - [WebhooksListResponse](doc/model/WebhooksListResponse.md)


## Authorization

### API token

Most endpoints required to be authenticated using the API token mechanism described in our [documentation](https://docs.api.video/reference#authentication).
The access token generation mechanism is automatically handled by the client.

All you have to do is provide an API token when instantiating the ApiVideoClient:
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
```

### Get the access token

If you need to access the access-token value obtained using the API key, you can use the getAccessToken() method of the client:
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });
const accessToken = await client.getAccessToken();
```

### Public endpoints

Some endpoints don't require authentication. These one can be called with an ApiVideoClient instantiated without API token:
```js
const client = new ApiVideoClient();
```

## Have you gotten use from this API client?

Please take a moment to leave a star on the client ⭐

This helps other users to find the clients and also helps us understand which clients are most popular. Thank you!
