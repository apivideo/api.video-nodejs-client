# AuthenticationApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**authenticate()**](AuthenticationApi.md#authenticate) | Authenticate | **POST** /auth/api-key |
| [**refresh()**](AuthenticationApi.md#refresh) | Refresh token | **POST** /auth/refresh |


<a name="authenticate"></a>
## **`authenticate()` - Authenticate**


To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication.

All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **authenticatePayload** | [**AuthenticatePayload**](../model/AuthenticatePayload.md)| **yes**|  |


### Return type

Promise<[**AccessToken**](../model/AccessToken.md)>.




---

<a name="refresh"></a>
## **`refresh()` - Refresh token**


Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token. 



### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **refreshTokenPayload** | [**RefreshTokenPayload**](../model/RefreshTokenPayload.md)| **yes**|  |


### Return type

Promise<[**AccessToken**](../model/AccessToken.md)>.




---

