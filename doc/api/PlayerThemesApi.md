# PlayerThemesApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**delete**](PlayerThemesApi.md#delete) | Delete a player | **DELETE** /players/{playerId} |
| [**deleteLogo**](PlayerThemesApi.md#deleteLogo) | Delete logo | **DELETE** /players/{playerId}/logo |
| [**list**](PlayerThemesApi.md#list) | List all player themes | **GET** /players |
| [**get**](PlayerThemesApi.md#get) | Show a player | **GET** /players/{playerId} |
| [**update**](PlayerThemesApi.md#update) | Update a player | **PATCH** /players/{playerId} |
| [**create**](PlayerThemesApi.md#create) | Create a player | **POST** /players |
| [**uploadLogo**](PlayerThemesApi.md#uploadLogo) | Upload a logo | **POST** /players/{playerId}/logo |


<a name="delete"></a>
## **`delete` - Delete a player**


Delete a player if you no longer need it. You can delete any player that you have the player ID for.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **playerId** | **string**| The unique identifier for the player you want to delete. |


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

        const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player you want to delete.

        // void
        const result = await client.playerThemes.delete(playerId);
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

<a name="deleteLogo"></a>
## **`deleteLogo` - Delete logo**


### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **playerId** | **string**| The unique identifier for the player. |


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

        const playerId = 'pl14Db6oMJRH6SRVoOwORacK'; // The unique identifier for the player.

        // void
        const result = await client.playerThemes.deleteLogo(playerId);
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

<a name="list"></a>
## **`list` - List all player themes**


Retrieve a list of all the player themes you created, as well as details about each one.
Tutorials that use the [player endpoint](https://api.video/blog/endpoints/player).

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **sortBy** | **&#39;name&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39;**| createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format. |
 | **sortOrder** | **&#39;asc&#39; | &#39;desc&#39;**| Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. |
 | **currentPage** | **number**| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**PlayerThemesListResponse**](../model/PlayerThemesListResponse.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const sortBy = 'createdAt'; // createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
        const sortOrder = 'asc'; // Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
        const currentPage = '2'; // Choose the number of search results to return per page. Minimum value: 1
        const pageSize = '30'; // Results per page. Allowed values 1-100, default is 25.

        // PlayerThemesListResponse
        const result = await client.playerThemes.list({ sortBy, sortOrder, currentPage, pageSize })
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
| **400** | Bad Request |  -  |


---

<a name="get"></a>
## **`get` - Show a player**


Use a player ID to retrieve details about the player and display it for viewers.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **playerId** | **string**| The unique identifier for the player you want to retrieve.  |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
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



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **404** | Not Found |  -  |


---

<a name="update"></a>
## **`update` - Update a player**


Use a player ID to update specific details for a player. NOTE: It may take up to 10 min before the new player configuration is available from our CDN.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **playerId** | **string**| The unique identifier for the player. |
 | **playerThemeUpdatePayload** | [**PlayerThemeUpdatePayload**](../model/PlayerThemeUpdatePayload.md)|  |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player.
        const playerThemeUpdatePayload = {
      text: "text_example", // RGBA color for timer text. Default: rgba(255, 255, 255, 1)
      link: "link_example", // RGBA color for all controls. Default: rgba(255, 255, 255, 1)
      linkHover: "linkHover_example", // RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)
      trackPlayed: "trackPlayed_example", // RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)
      trackUnplayed: "trackUnplayed_example", // RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)
      trackBackground: "trackBackground_example", // RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)
      backgroundTop: "backgroundTop_example", // RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)
      backgroundBottom: "backgroundBottom_example", // RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)
      backgroundText: "backgroundText_example", // RGBA color for title text. Default: rgba(255, 255, 255, 1)
      enableApi: true, // enable/disable player SDK access. Default: true
      enableControls: true, // enable/disable player controls. Default: true
      forceAutoplay: true, // enable/disable player autoplay. Default: false
      hideTitle: true, // enable/disable title. Default: false
      forceLoop: true, // enable/disable looping. Default: false
    }; 

        // PlayerTheme
        const result = await client.playerThemes.update(playerId, playerThemeUpdatePayload);
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
| **404** | Not Found |  -  |


---

<a name="create"></a>
## **`create` - Create a player**


Create a player for your video, and customise it.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **playerThemeCreationPayload** | [**PlayerThemeCreationPayload**](../model/PlayerThemeCreationPayload.md)|  |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerThemeCreationPayload = {
      text: "text_example", // RGBA color for timer text. Default: rgba(255, 255, 255, 1)
      link: "link_example", // RGBA color for all controls. Default: rgba(255, 255, 255, 1)
      linkHover: "linkHover_example", // RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)
      trackPlayed: "trackPlayed_example", // RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)
      trackUnplayed: "trackUnplayed_example", // RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)
      trackBackground: "trackBackground_example", // RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)
      backgroundTop: "backgroundTop_example", // RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)
      backgroundBottom: "backgroundBottom_example", // RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)
      backgroundText: "backgroundText_example", // RGBA color for title text. Default: rgba(255, 255, 255, 1)
      enableApi: true, // enable/disable player SDK access. Default: true
      enableControls: true, // enable/disable player controls. Default: true
      forceAutoplay: true, // enable/disable player autoplay. Default: false
      hideTitle: true, // enable/disable title. Default: false
      forceLoop: true, // enable/disable looping. Default: false
    }; 

        // PlayerTheme
        const result = await client.playerThemes.create(playerThemeCreationPayload);
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


---

<a name="uploadLogo"></a>
## **`uploadLogo` - Upload a logo**


The uploaded image maximum size should be 200x100 and its weight should be 100KB.  It will be scaled down to 30px height and converted to PNG to be displayed in the player.

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **playerId** | **string**| The unique identifier for the player. |
 | **file** | **string**| The name of the file you want to use for your logo. |
 | **link** | **string**| A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address. |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
//install the module with npm or yarn
//npm install @api.video/nodejs-client --save
//yarn add @api.video/nodejs-client
(async () => {
    try {
        const client = new ApiVideoClient({ apiKey: "YOUR_API_TOKEN" });

        const playerId = 'pl14Db6oMJRH6SRVoOwORacK'; // The unique identifier for the player.
        const file = 'BINARY_DATA_HERE'; // The name of the file you want to use for your logo.
        const link = 'link_example'; // A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address.

        // PlayerTheme
        const result = await client.playerThemes.uploadLogo(playerId, file, link);
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
| **404** | Not Found |  -  |


---

