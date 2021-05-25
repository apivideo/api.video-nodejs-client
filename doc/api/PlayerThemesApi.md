# PlayerThemesApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete**](PlayerThemesApi.md#delete) | **DELETE** /players/{playerId} | Delete a player
[**deleteLogo**](PlayerThemesApi.md#deleteLogo) | **DELETE** /players/{playerId}/logo | Delete logo
[**list**](PlayerThemesApi.md#list) | **GET** /players | List all players
[**get**](PlayerThemesApi.md#get) | **GET** /players/{playerId} | Show a player
[**update**](PlayerThemesApi.md#update) | **PATCH** /players/{playerId} | Update a player
[**create**](PlayerThemesApi.md#create) | **POST** /players | Create a player
[**uploadLogo**](PlayerThemesApi.md#uploadLogo) | **POST** /players/{playerId}/logo | Upload a logo


<a name="delete"></a>
## **delete**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player you want to delete.

        // void
        const result = await client.playerThemes.delete(playerId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player you want to delete. | [default to undefined]

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

<a name="deleteLogo"></a>
## **deleteLogo**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerId = 'pl14Db6oMJRH6SRVoOwORacK'; // The unique identifier for the player.

        // void
        const result = await client.playerThemes.deleteLogo(playerId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player. | [default to undefined]

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

<a name="list"></a>
## **list**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const sortBy = 'createdAt'; // createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
        const sortOrder = 'asc'; // Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // Page<>
        const result = await client.playerThemes.list({ sortBy, sortOrder, currentPage, pageSize })
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sortBy** | **&#39;createdAt&#39; | &#39;updatedAt&#39;**| createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format. | [optional] [default to undefined] [enum: createdAt, updatedAt]
 **sortOrder** | **&#39;asc&#39; | &#39;desc&#39;**| Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. | [optional] [default to undefined] [enum: asc, desc]
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
**400** | Bad Request |  -  |

<a name="get"></a>
## **get**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player you want to retrieve. 

        // PlayerTheme
        const result = await client.playerThemes.get(playerId);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player you want to retrieve.  | [default to undefined]

### Return type

[**PlayerTheme**](../model/PlayerTheme.md)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="update"></a>
## **update**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player.
        const playerThemeUpdatePayload = ''; // 
                playerThemeUpdatePayload.setText(); // RGBA color for timer text. Default: rgba(255, 255, 255, 1)
                playerThemeUpdatePayload.setLink(); // RGBA color for all controls. Default: rgba(255, 255, 255, 1)
                playerThemeUpdatePayload.setLinkHover(); // RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)
                playerThemeUpdatePayload.setTrackPlayed(); // RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)
                playerThemeUpdatePayload.setTrackUnplayed(); // RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)
                playerThemeUpdatePayload.setTrackBackground(); // RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)
                playerThemeUpdatePayload.setBackgroundTop(); // RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)
                playerThemeUpdatePayload.setBackgroundBottom(); // RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)
                playerThemeUpdatePayload.setBackgroundText(); // RGBA color for title text. Default: rgba(255, 255, 255, 1)
                playerThemeUpdatePayload.setEnableApi(); // enable/disable player SDK access. Default: true
                playerThemeUpdatePayload.setEnableControls(); // enable/disable player controls. Default: true
                playerThemeUpdatePayload.setForceAutoplay(); // enable/disable player autoplay. Default: false
                playerThemeUpdatePayload.setHideTitle(); // enable/disable title. Default: false
                playerThemeUpdatePayload.setForceLoop(); // enable/disable looping. Default: false

        // PlayerTheme
        const result = await client.playerThemes.update(playerId, playerThemeUpdatePayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player. | [default to undefined]
 **playerThemeUpdatePayload** | [**PlayerThemeUpdatePayload**](PlayerThemeUpdatePayload.md)|  |

### Return type

[**PlayerTheme**](../model/PlayerTheme.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

<a name="create"></a>
## **create**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerThemeCreationPayload = ''; // 
                playerThemeCreationPayload.setText(); // RGBA color for timer text. Default: rgba(255, 255, 255, 1)
                playerThemeCreationPayload.setLink(); // RGBA color for all controls. Default: rgba(255, 255, 255, 1)
                playerThemeCreationPayload.setLinkHover(); // RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)
                playerThemeCreationPayload.setTrackPlayed(); // RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)
                playerThemeCreationPayload.setTrackUnplayed(); // RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)
                playerThemeCreationPayload.setTrackBackground(); // RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)
                playerThemeCreationPayload.setBackgroundTop(); // RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)
                playerThemeCreationPayload.setBackgroundBottom(); // RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)
                playerThemeCreationPayload.setBackgroundText(); // RGBA color for title text. Default: rgba(255, 255, 255, 1)
                playerThemeCreationPayload.setEnableApi(); // enable/disable player SDK access. Default: true
                playerThemeCreationPayload.setEnableControls(); // enable/disable player controls. Default: true
                playerThemeCreationPayload.setForceAutoplay(); // enable/disable player autoplay. Default: false
                playerThemeCreationPayload.setHideTitle(); // enable/disable title. Default: false
                playerThemeCreationPayload.setForceLoop(); // enable/disable looping. Default: false

        // PlayerTheme
        const result = await client.playerThemes.create(playerThemeCreationPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerThemeCreationPayload** | [**PlayerThemeCreationPayload**](PlayerThemeCreationPayload.md)|  |

### Return type

[**PlayerTheme**](../model/PlayerTheme.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

<a name="uploadLogo"></a>
## **uploadLogo**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerId = 'pl14Db6oMJRH6SRVoOwORacK'; // The unique identifier for the player.
        const file = 'BINARY_DATA_HERE'; // The name of the file you want to use for your logo.
        const link = 'link_example'; // The path to the file you want to upload and use as a logo.

        // PlayerTheme
        const result = await client.playerThemes.uploadLogo(playerId, file, link);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **string**| The unique identifier for the player. | [default to undefined]
 **file** | **string**| The name of the file you want to use for your logo. | [default to undefined]
 **link** | **string**| The path to the file you want to upload and use as a logo. | [default to undefined]

### Return type

[**PlayerTheme**](../model/PlayerTheme.md)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |

