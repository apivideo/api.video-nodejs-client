# PlayerThemesApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](PlayerThemesApi.md#create) | Create a player | **POST** /players |
| [**get()**](PlayerThemesApi.md#get) | Retrieve a player | **GET** /players/{playerId} |
| [**update()**](PlayerThemesApi.md#update) | Update a player | **PATCH** /players/{playerId} |
| [**delete()**](PlayerThemesApi.md#delete) | Delete a player | **DELETE** /players/{playerId} |
| [**list()**](PlayerThemesApi.md#list) | List all player themes | **GET** /players |
| [**uploadLogo()**](PlayerThemesApi.md#uploadLogo) | Upload a logo | **POST** /players/{playerId}/logo |
| [**deleteLogo()**](PlayerThemesApi.md#deleteLogo) | Delete logo | **DELETE** /players/{playerId}/logo |


<a name="create"></a>
## **`create()` - Create a player**


Create a player for your video, and customise it.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerThemeCreationPayload** | [**PlayerThemeCreationPayload**](../model/PlayerThemeCreationPayload.md)| **yes**|  |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const playerThemeCreationPayload = {
  text: "rgba(255, 255, 255, 1)", // RGBA color for timer text. Default: rgba(255, 255, 255, 1)
  link: "rgba(255, 255, 255, 1)", // RGBA color for all controls. Default: rgba(255, 255, 255, 1)
  linkHover: "rgba(255, 255, 255, 1)", // RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)
  trackPlayed: "rgba(255, 255, 255, 1)", // RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)
  trackUnplayed: "rgba(255, 255, 255, 1)", // RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)
  trackBackground: "rgba(255, 255, 255, 1)", // RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)
  backgroundTop: "rgba(255, 255, 255, 1)", // RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)
  backgroundBottom: "rgba(255, 255, 255, 1)", // RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)
  backgroundText: "rgba(255, 255, 255, 1)", // RGBA color for title text. Default: rgba(255, 255, 255, 1)
  enableApi: true, // enable/disable player SDK access. Default: true
  enableControls: true, // enable/disable player controls. Default: true
  forceAutoplay: true, // enable/disable player autoplay. Default: false
  hideTitle: true, // enable/disable title. Default: false
  forceLoop: true, // enable/disable looping. Default: false
}; 
 
const playerTheme = await client.playerThemes.create(playerThemeCreationPayload); 
```


---

<a name="get"></a>
## **`get()` - Retrieve a player**


Retreive a player theme by player id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerId** | **string**| **yes**| The unique identifier for the player you want to retrieve.  |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player you want to retrieve. 
const playerTheme = await client.playerThemes.get(playerId); 
```


---

<a name="update"></a>
## **`update()` - Update a player**


Use a player ID to update specific details for a player. 

NOTE: It may take up to 10 min before the new player configuration is available from our CDN.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerId** | **string**| **yes**| The unique identifier for the player. |
 | **playerThemeUpdatePayload** | [**PlayerThemeUpdatePayload**](../model/PlayerThemeUpdatePayload.md)| **yes**|  |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player.
const playerThemeUpdatePayload = {
  text: "rgba(255, 255, 255, 1)", // RGBA color for timer text. Default: rgba(255, 255, 255, 1)
  link: "rgba(255, 255, 255, 1)", // RGBA color for all controls. Default: rgba(255, 255, 255, 1)
  linkHover: "rgba(255, 255, 255, 1)", // RGBA color for all controls when hovered. Default: rgba(255, 255, 255, 1)
  trackPlayed: "rgba(255, 255, 255, 1)", // RGBA color playback bar: played content. Default: rgba(88, 131, 255, .95)
  trackUnplayed: "rgba(255, 255, 255, 1)", // RGBA color playback bar: downloaded but unplayed (buffered) content. Default: rgba(255, 255, 255, .35)
  trackBackground: "rgba(255, 255, 255, 1)", // RGBA color playback bar: background. Default: rgba(255, 255, 255, .2)
  backgroundTop: "rgba(255, 255, 255, 1)", // RGBA color: top 50% of background. Default: rgba(0, 0, 0, .7)
  backgroundBottom: "rgba(255, 255, 255, 1)", // RGBA color: bottom 50% of background. Default: rgba(0, 0, 0, .7)
  backgroundText: "rgba(255, 255, 255, 1)", // RGBA color for title text. Default: rgba(255, 255, 255, 1)
  enableApi: true, // enable/disable player SDK access. Default: true
  enableControls: true, // enable/disable player controls. Default: true
  forceAutoplay: true, // enable/disable player autoplay. Default: false
  hideTitle: true, // enable/disable title. Default: false
  forceLoop: true, // enable/disable looping. Default: false
}; 

const playerTheme = await client.playerThemes.update(playerId, playerThemeUpdatePayload); 
```


---

<a name="delete"></a>
## **`delete()` - Delete a player**


Delete a player if you no longer need it. You can delete any player that you have the player ID for.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerId** | **string**| **yes**| The unique identifier for the player you want to delete. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player you want to delete.
await client.playerThemes.delete(playerId); 
```


---

<a name="list"></a>
## **`list()` - List all player themes**


Retrieve a list of all the player themes you created, as well as details about each one.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **sortBy** | **&#39;name&#39; \| &#39;createdAt&#39; \| &#39;updatedAt&#39;**| no| createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format. |
 | **sortOrder** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**PlayerThemesListResponse**](../model/PlayerThemesListResponse.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const sortBy = 'createdAt'; // createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
const sortOrder = 'asc'; // Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
const currentPage = 2; // Choose the number of search results to return per page. Minimum value: 1
const pageSize = 30; // Results per page. Allowed values 1-100, default is 25.

// PlayerThemesListResponse
const playerThemes = await client.playerThemes.list({ sortBy, sortOrder, currentPage, pageSize }); 
```


---

<a name="uploadLogo"></a>
## **`uploadLogo()` - Upload a logo**


Upload an image logo for a player.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerId** | **string**| **yes**| The unique identifier for the player. |
 | **file** | **string \| Readable \| Buffer**| **yes**| The name of the file you want to use for your logo. |
 | **link** | **string**| no| A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address. |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const playerId = 'pl14Db6oMJRH6SRVoOwORacK'; // The unique identifier for the player.
const file = './company-logo.jpg'; // The name of the file you want to use for your logo.
const link = 'https://my-company.org'; // A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address.

const playerTheme = await client.playerThemes.uploadLogo(playerId, file, link); 
```


---

<a name="deleteLogo"></a>
## **`deleteLogo()` - Delete logo**


Delete the logo associated to a player.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerId** | **string**| **yes**| The unique identifier for the player. |


### Return type

Promise<[**void**](../model/.md)>.


### Example
```js
const client = new ApiVideoClient({ apiKey: "YOUR_API_KEY" });

const playerId = 'pl45d5vFFGrfdsdsd156dGhh'; // The unique identifier for the player whose logo you want to delete.
await client.playerThemes.deleteLogo(playerId); 
```


---

