## @api.video/typescript-api-client@1.0.0

hey yo

api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.


### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Consuming

```
npm install @api.video/typescript-api-client@1.0.0 --save
```


## Documentation for API Endpoints

All URIs are relative to *https://ws.api.video*


### CaptionsApi


#### Retrieve an instance of CaptionsApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const captions = apiVideoClient.captions;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/CaptionsApi.md#delete) | **DELETE** /videos/{videoId}/captions/{language} | Delete a caption
[**list**](doc/CaptionsApi.md#list) | **GET** /videos/{videoId}/captions | List video captions
[**get**](doc/CaptionsApi.md#get) | **GET** /videos/{videoId}/captions/{language} | Show a caption
[**update**](doc/CaptionsApi.md#update) | **PATCH** /videos/{videoId}/captions/{language} | Update caption
[**upload**](doc/CaptionsApi.md#upload) | **POST** /videos/{videoId}/captions/{language} | Upload a caption


### ChaptersApi


#### Retrieve an instance of ChaptersApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const chapters = apiVideoClient.chapters;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/ChaptersApi.md#delete) | **DELETE** /videos/{videoId}/chapters/{language} | Delete a chapter
[**list**](doc/ChaptersApi.md#list) | **GET** /videos/{videoId}/chapters | List video chapters
[**get**](doc/ChaptersApi.md#get) | **GET** /videos/{videoId}/chapters/{language} | Show a chapter
[**upload**](doc/ChaptersApi.md#upload) | **POST** /videos/{videoId}/chapters/{language} | Upload a chapter


### LiveStreamsApi


#### Retrieve an instance of LiveStreamsApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const liveStreams = apiVideoClient.liveStreams;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/LiveStreamsApi.md#delete) | **DELETE** /live-streams/{liveStreamId} | Delete a live stream
[**deleteThumbnail**](doc/LiveStreamsApi.md#deleteThumbnail) | **DELETE** /live-streams/{liveStreamId}/thumbnail | Delete a thumbnail
[**list**](doc/LiveStreamsApi.md#list) | **GET** /live-streams | List all live streams
[**get**](doc/LiveStreamsApi.md#get) | **GET** /live-streams/{liveStreamId} | Show live stream
[**update**](doc/LiveStreamsApi.md#update) | **PATCH** /live-streams/{liveStreamId} | Update a live stream
[**create**](doc/LiveStreamsApi.md#create) | **POST** /live-streams | Create live stream
[**uploadThumbnail**](doc/LiveStreamsApi.md#uploadThumbnail) | **POST** /live-streams/{liveStreamId}/thumbnail | Upload a thumbnail


### PlayerThemesApi


#### Retrieve an instance of PlayerThemesApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const playerThemes = apiVideoClient.playerThemes;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/PlayerThemesApi.md#delete) | **DELETE** /players/{playerId} | Delete a player
[**deleteLogo**](doc/PlayerThemesApi.md#deleteLogo) | **DELETE** /players/{playerId}/logo | Delete logo
[**list**](doc/PlayerThemesApi.md#list) | **GET** /players | List all players
[**get**](doc/PlayerThemesApi.md#get) | **GET** /players/{playerId} | Show a player
[**update**](doc/PlayerThemesApi.md#update) | **PATCH** /players/{playerId} | Update a player
[**create**](doc/PlayerThemesApi.md#create) | **POST** /players | Create a player
[**uploadLogo**](doc/PlayerThemesApi.md#uploadLogo) | **POST** /players/{playerId}/logo | Upload a logo


### RawStatisticsApi


#### Retrieve an instance of RawStatisticsApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const rawStatistics = apiVideoClient.rawStatistics;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLiveStreamSessions**](doc/RawStatisticsApi.md#listLiveStreamSessions) | **GET** /analytics/live-streams/{liveStreamId} | List live stream player sessions
[**listSessionEvents**](doc/RawStatisticsApi.md#listSessionEvents) | **GET** /analytics/sessions/{sessionId}/events | List player session events
[**listVideoSessions**](doc/RawStatisticsApi.md#listVideoSessions) | **GET** /analytics/videos/{videoId} | List video player sessions


### UploadTokensApi


#### Retrieve an instance of UploadTokensApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const uploadTokens = apiVideoClient.uploadTokens;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteToken**](doc/UploadTokensApi.md#deleteToken) | **DELETE** /upload-tokens/{uploadToken} | Delete an upload token
[**list**](doc/UploadTokensApi.md#list) | **GET** /upload-tokens | List all active upload tokens.
[**getToken**](doc/UploadTokensApi.md#getToken) | **GET** /upload-tokens/{uploadToken} | Show upload token
[**createToken**](doc/UploadTokensApi.md#createToken) | **POST** /upload-tokens | Generate an upload token


### VideosApi


#### Retrieve an instance of VideosApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const videos = apiVideoClient.videos;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/VideosApi.md#delete) | **DELETE** /videos/{videoId} | Delete a video
[**get**](doc/VideosApi.md#get) | **GET** /videos/{videoId} | Show a video
[**getStatus**](doc/VideosApi.md#getStatus) | **GET** /videos/{videoId}/status | Show video status
[**list**](doc/VideosApi.md#list) | **GET** /videos | List all videos
[**update**](doc/VideosApi.md#update) | **PATCH** /videos/{videoId} | Update a video
[**pickThumbnail**](doc/VideosApi.md#pickThumbnail) | **PATCH** /videos/{videoId}/thumbnail | Pick a thumbnail
[**uploadWithUploadToken**](doc/VideosApi.md#uploadWithUploadToken) | **POST** /upload | Upload with an upload token
[**create**](doc/VideosApi.md#create) | **POST** /videos | Create a video
[**upload**](doc/VideosApi.md#upload) | **POST** /videos/{videoId}/source | Upload a video
[**uploadThumbnail**](doc/VideosApi.md#uploadThumbnail) | **POST** /videos/{videoId}/thumbnail | Upload a thumbnail


### WebhooksApi


#### Retrieve an instance of WebhooksApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const webhooks = apiVideoClient.webhooks;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/WebhooksApi.md#delete) | **DELETE** /webhooks/{webhookId} | Delete a Webhook
[**get**](doc/WebhooksApi.md#get) | **GET** /webhooks/{webhookId} | Show Webhook details
[**list**](doc/WebhooksApi.md#list) | **GET** /webhooks | List all webhooks
[**create**](doc/WebhooksApi.md#create) | **POST** /webhooks | Create Webhook



## Documentation for Models

 - [AccessToken](doc/AccessToken.md)
 - [Account](doc/Account.md)
 - [AccountQuota](doc/AccountQuota.md)
 - [AuthenticatePayload](doc/AuthenticatePayload.md)
 - [BadRequest](doc/BadRequest.md)
 - [BytesRange](doc/BytesRange.md)
 - [Caption](doc/Caption.md)
 - [CaptionsListResponse](doc/CaptionsListResponse.md)
 - [CaptionsUpdatePayload](doc/CaptionsUpdatePayload.md)
 - [Chapter](doc/Chapter.md)
 - [ChaptersListResponse](doc/ChaptersListResponse.md)
 - [Link](doc/Link.md)
 - [LiveStream](doc/LiveStream.md)
 - [LiveStreamAssets](doc/LiveStreamAssets.md)
 - [LiveStreamCreationPayload](doc/LiveStreamCreationPayload.md)
 - [LiveStreamListResponse](doc/LiveStreamListResponse.md)
 - [LiveStreamSession](doc/LiveStreamSession.md)
 - [LiveStreamSessionClient](doc/LiveStreamSessionClient.md)
 - [LiveStreamSessionDevice](doc/LiveStreamSessionDevice.md)
 - [LiveStreamSessionLocation](doc/LiveStreamSessionLocation.md)
 - [LiveStreamSessionReferrer](doc/LiveStreamSessionReferrer.md)
 - [LiveStreamSessionSession](doc/LiveStreamSessionSession.md)
 - [LiveStreamUpdatePayload](doc/LiveStreamUpdatePayload.md)
 - [Metadata](doc/Metadata.md)
 - [NotFound](doc/NotFound.md)
 - [Pagination](doc/Pagination.md)
 - [PaginationLink](doc/PaginationLink.md)
 - [PlayerSessionEvent](doc/PlayerSessionEvent.md)
 - [PlayerTheme](doc/PlayerTheme.md)
 - [PlayerThemeAssets](doc/PlayerThemeAssets.md)
 - [PlayerThemeCreationPayload](doc/PlayerThemeCreationPayload.md)
 - [PlayerThemeUpdatePayload](doc/PlayerThemeUpdatePayload.md)
 - [PlayerThemesListResponse](doc/PlayerThemesListResponse.md)
 - [Quality](doc/Quality.md)
 - [RawStatisticsListLiveStreamAnalyticsResponse](doc/RawStatisticsListLiveStreamAnalyticsResponse.md)
 - [RawStatisticsListPlayerSessionEventsResponse](doc/RawStatisticsListPlayerSessionEventsResponse.md)
 - [RawStatisticsListSessionsResponse](doc/RawStatisticsListSessionsResponse.md)
 - [RefreshTokenPayload](doc/RefreshTokenPayload.md)
 - [TokenCreationPayload](doc/TokenCreationPayload.md)
 - [TokenListResponse](doc/TokenListResponse.md)
 - [UploadToken](doc/UploadToken.md)
 - [Video](doc/Video.md)
 - [VideoAssets](doc/VideoAssets.md)
 - [VideoCreationPayload](doc/VideoCreationPayload.md)
 - [VideoSession](doc/VideoSession.md)
 - [VideoSessionClient](doc/VideoSessionClient.md)
 - [VideoSessionDevice](doc/VideoSessionDevice.md)
 - [VideoSessionLocation](doc/VideoSessionLocation.md)
 - [VideoSessionOs](doc/VideoSessionOs.md)
 - [VideoSessionReferrer](doc/VideoSessionReferrer.md)
 - [VideoSessionSession](doc/VideoSessionSession.md)
 - [VideoSource](doc/VideoSource.md)
 - [VideoSourceLiveStream](doc/VideoSourceLiveStream.md)
 - [VideoSourceLiveStreamLink](doc/VideoSourceLiveStreamLink.md)
 - [VideoStatus](doc/VideoStatus.md)
 - [VideoStatusEncoding](doc/VideoStatusEncoding.md)
 - [VideoStatusEncodingMetadata](doc/VideoStatusEncodingMetadata.md)
 - [VideoStatusIngest](doc/VideoStatusIngest.md)
 - [VideoThumbnailPickPayload](doc/VideoThumbnailPickPayload.md)
 - [VideoUpdatePayload](doc/VideoUpdatePayload.md)
 - [VideosListResponse](doc/VideosListResponse.md)
 - [Webhook](doc/Webhook.md)
 - [WebhooksCreationPayload](doc/WebhooksCreationPayload.md)
 - [WebhooksListResponse](doc/WebhooksListResponse.md)


## Documentation for Authorization

### API token

Most endpoints required to be authenticated using the API token mechanism described in our [documentation](https://docs.api.video/reference#authentication).
The access token generation mechanism is automatically handled by the client. All you have to do is provide an API token when instantiating the ApiVideoClient:
```java
ApiVideoClient apiVideoClient = new ApiVideoClient("YOUR_API_TOKEN");
```

### Public endpoints

Some endpoints don't require authentication. These one can be called with an ApiVideoClient instantiated without API token:
```java
ApiVideoClient apiVideoClient = new ApiVideoClient();
```

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



