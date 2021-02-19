## @api.video/typescript-api-client@1.0.0


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


### AccountApi


#### Retrieve an instance of AccountApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const account = apiVideoClient.account;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
**(deprecated)** [**get**](doc/AccountApi.md#get) | **GET** /account | Show account


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


### LiveApi


#### Retrieve an instance of LiveApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const live = apiVideoClient.live;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/LiveApi.md#delete) | **DELETE** /live-streams/{liveStreamId} | Delete a live stream
[**deleteThumbnail**](doc/LiveApi.md#deleteThumbnail) | **DELETE** /live-streams/{liveStreamId}/thumbnail | Delete a thumbnail
[**list**](doc/LiveApi.md#list) | **GET** /live-streams | List all live streams
[**get**](doc/LiveApi.md#get) | **GET** /live-streams/{liveStreamId} | Show live stream
[**update**](doc/LiveApi.md#update) | **PATCH** /live-streams/{liveStreamId} | Update a live stream
[**create**](doc/LiveApi.md#create) | **POST** /live-streams | Create live stream
[**uploadThumbnail**](doc/LiveApi.md#uploadThumbnail) | **POST** /live-streams/{liveStreamId}/thumbnail | Upload a thumbnail


### PlayersApi


#### Retrieve an instance of PlayersApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const players = apiVideoClient.players;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](doc/PlayersApi.md#delete) | **DELETE** /players/{playerId} | Delete a player
[**deleteLogo**](doc/PlayersApi.md#deleteLogo) | **DELETE** /players/{playerId}/logo | Delete logo
[**list**](doc/PlayersApi.md#list) | **GET** /players | List all players
[**get**](doc/PlayersApi.md#get) | **GET** /players/{playerId} | Show a player
[**update**](doc/PlayersApi.md#update) | **PATCH** /players/{playerId} | Update a player
[**create**](doc/PlayersApi.md#create) | **POST** /players | Create a player
[**uploadLogo**](doc/PlayersApi.md#uploadLogo) | **POST** /players/{playerId}/logo | Upload a logo


### RawStatisticsApi


#### Retrieve an instance of RawStatisticsApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const rawStatistics = apiVideoClient.rawStatistics;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLiveStreamAnalytics**](doc/RawStatisticsApi.md#getLiveStreamAnalytics) | **GET** /analytics/live-streams/{liveStreamId} | List live stream player sessions
[**listPlayerSessionEvents**](doc/RawStatisticsApi.md#listPlayerSessionEvents) | **GET** /analytics/sessions/{sessionId}/events | List player session events
[**listSessions**](doc/RawStatisticsApi.md#listSessions) | **GET** /analytics/videos/{videoId} | List video player sessions


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
[**getVideoStatus**](doc/VideosApi.md#getVideoStatus) | **GET** /videos/{videoId}/status | Show video status
[**list**](doc/VideosApi.md#list) | **GET** /videos | List all videos
[**update**](doc/VideosApi.md#update) | **PATCH** /videos/{videoId} | Update a video
[**pickThumbnail**](doc/VideosApi.md#pickThumbnail) | **PATCH** /videos/{videoId}/thumbnail | Pick a thumbnail
[**create**](doc/VideosApi.md#create) | **POST** /videos | Create a video
[**upload**](doc/VideosApi.md#upload) | **POST** /videos/{videoId}/source | Upload a video
[**uploadThumbnail**](doc/VideosApi.md#uploadThumbnail) | **POST** /videos/{videoId}/thumbnail | Upload a thumbnail


### VideosDelegatedUploadApi


#### Retrieve an instance of VideosDelegatedUploadApi:
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });
const videosDelegatedUpload = apiVideoClient.videosDelegatedUpload;
```

#### Endpoints

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteToken**](doc/VideosDelegatedUploadApi.md#deleteToken) | **DELETE** /upload-tokens/{uploadToken} | Delete an upload token
[**listTokens**](doc/VideosDelegatedUploadApi.md#listTokens) | **GET** /upload-tokens | List all active upload tokens.
[**getToken**](doc/VideosDelegatedUploadApi.md#getToken) | **GET** /upload-tokens/{uploadToken} | Show upload token
[**upload**](doc/VideosDelegatedUploadApi.md#upload) | **POST** /upload | Upload with an upload token
[**createToken**](doc/VideosDelegatedUploadApi.md#createToken) | **POST** /upload-tokens | Generate an upload token


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
 - [CaptionsListResponse](doc/CaptionsListResponse.md)
 - [CaptionsUpdatePayload](doc/CaptionsUpdatePayload.md)
 - [Chapter](doc/Chapter.md)
 - [ChaptersListResponse](doc/ChaptersListResponse.md)
 - [Link](doc/Link.md)
 - [LiveStream](doc/LiveStream.md)
 - [LiveStreamAssets](doc/LiveStreamAssets.md)
 - [LiveStreamCreatePayload](doc/LiveStreamCreatePayload.md)
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
 - [Player](doc/Player.md)
 - [PlayerAllOf](doc/PlayerAllOf.md)
 - [PlayerAllOfAssets](doc/PlayerAllOfAssets.md)
 - [PlayerCreationPayload](doc/PlayerCreationPayload.md)
 - [PlayerSessionEvent](doc/PlayerSessionEvent.md)
 - [PlayerUpdatePayload](doc/PlayerUpdatePayload.md)
 - [Playerinput](doc/Playerinput.md)
 - [PlayersListResponse](doc/PlayersListResponse.md)
 - [Quality](doc/Quality.md)
 - [RawStatisticsListLiveStreamAnalyticsResponse](doc/RawStatisticsListLiveStreamAnalyticsResponse.md)
 - [RawStatisticsListPlayerSessionEventsResponse](doc/RawStatisticsListPlayerSessionEventsResponse.md)
 - [RawStatisticsListSessionsResponse](doc/RawStatisticsListSessionsResponse.md)
 - [RefreshTokenPayload](doc/RefreshTokenPayload.md)
 - [Subtitle](doc/Subtitle.md)
 - [TokenCreatePayload](doc/TokenCreatePayload.md)
 - [TokenListResponse](doc/TokenListResponse.md)
 - [UploadToken](doc/UploadToken.md)
 - [Video](doc/Video.md)
 - [VideoAssets](doc/VideoAssets.md)
 - [VideoCreatePayload](doc/VideoCreatePayload.md)
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
 - [VideoThumbnailPickPayload](doc/VideoThumbnailPickPayload.md)
 - [VideoUpdatePayload](doc/VideoUpdatePayload.md)
 - [VideosListResponse](doc/VideosListResponse.md)
 - [Videostatus](doc/Videostatus.md)
 - [VideostatusEncoding](doc/VideostatusEncoding.md)
 - [VideostatusEncodingMetadata](doc/VideostatusEncodingMetadata.md)
 - [VideostatusIngest](doc/VideostatusIngest.md)
 - [Webhook](doc/Webhook.md)
 - [WebhooksCreatePayload](doc/WebhooksCreatePayload.md)
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


