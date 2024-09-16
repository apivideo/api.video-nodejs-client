# UploadTokensApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**createToken()**](UploadTokensApi.md#createToken) | Generate an upload token | **POST** /upload-tokens |
| [**getToken()**](UploadTokensApi.md#getToken) | Retrieve upload token | **GET** /upload-tokens/{uploadToken} |
| [**deleteToken()**](UploadTokensApi.md#deleteToken) | Delete an upload token | **DELETE** /upload-tokens/{uploadToken} |
| [**list()**](UploadTokensApi.md#list) | List all active upload tokens | **GET** /upload-tokens |


<a name="createToken"></a>
## **`createToken()` - Generate an upload token**


Generates an upload token that can be used to replace the API Key. More information can be found [here](https://docs.api.video/vod/delegated-upload-tokens)

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **tokenCreationPayload** | [**TokenCreationPayload**](../model/TokenCreationPayload.md)| **yes**|  |


### Return type

Promise<[**UploadToken**](../model/UploadToken.md)>.




---

<a name="getToken"></a>
## **`getToken()` - Retrieve upload token**


Retrieve details about a specific upload token by id.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **uploadToken** | **string**| **yes**| The unique identifier for the token you want information about. |


### Return type

Promise<[**UploadToken**](../model/UploadToken.md)>.




---

<a name="deleteToken"></a>
## **`deleteToken()` - Delete an upload token**


Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **uploadToken** | **string**| **yes**| The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication. |


### Return type

Promise<[**void**](../model/.md)>.




---

<a name="list"></a>
## **`list()` - List all active upload tokens**


Retrieve a list of all currently active delegated tokens.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **sortBy** | **&#39;createdAt&#39; \| &#39;ttl&#39;**| no| Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ATOM UTC format. |
 | **sortOrder** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**TokenListResponse**](../model/TokenListResponse.md)>.




---

