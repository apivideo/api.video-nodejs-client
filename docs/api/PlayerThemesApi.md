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




---

<a name="list"></a>
## **`list()` - List all player themes**


Retrieve a list of all the player themes you created, as well as details about each one.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **sortBy** | **&#39;name&#39; \| &#39;createdAt&#39; \| &#39;updatedAt&#39;**| no| createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ATOM UTC format. |
 | **sortOrder** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**PlayerThemesListResponse**](../model/PlayerThemesListResponse.md)>.




---

<a name="uploadLogo"></a>
## **`uploadLogo()` - Upload a logo**


Upload an image file as a logo for your player. The image should fit within these constraints:

- The image mime type must be `image/jpeg` or `image/png`. api.video recommends using `png` images with transparent background.

- The image size should be a maximum of 200px width x 100px.

- The file size should be a maximum of 100 KiB.



### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **playerId** | **string**| **yes**| The unique identifier for the player. |
 | **file** | **string \| Readable \| Buffer**| **yes**| The name of the file you want to use for your logo. |
 | **link** | **string**| no| A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address. |


### Return type

Promise<[**PlayerTheme**](../model/PlayerTheme.md)>.




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




---

