# AuthenticationApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**authenticate**](AuthenticationApi.md#authenticate) | Authenticate | **POST** /auth/api-key |
| [**refresh**](AuthenticationApi.md#refresh) | Refresh token | **POST** /auth/refresh |


<a name="authenticate"></a>
## **`authenticate` - Authenticate**


To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication.
All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)

### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **authenticatePayload** | [**AuthenticatePayload**](../model/AuthenticatePayload.md)|  |


### Return type

Promise<[**AccessToken**](../model/AccessToken.md)>.


### Example
```js
//With the api.video API clients, authentication is taken care of with each client created.
// You get to skip this step!
```



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |


---

<a name="refresh"></a>
## **`refresh` - Refresh token**


Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token. 


### Parameters

| Name | Type | Description |
| ------------- | ------------- | ------------- |
 | **refreshTokenPayload** | [**RefreshTokenPayload**](../model/RefreshTokenPayload.md)|  |


### Return type

Promise<[**AccessToken**](../model/AccessToken.md)>.


### Example
```js
//With the api.video API clients, authentication is taken care of with each client created.
// You get to skip this step!
```



### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | Bad Request |  -  |


---

