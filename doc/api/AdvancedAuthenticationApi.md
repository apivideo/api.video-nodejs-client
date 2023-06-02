# AdvancedAuthenticationApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**authenticate()**](AdvancedAuthenticationApi.md#authenticate) | Get Bearer Token | **POST** /auth/api-key |
| [**refresh()**](AdvancedAuthenticationApi.md#refresh) | Refresh Bearer Token | **POST** /auth/refresh |


<a name="authenticate"></a>
## **`authenticate()` - Get Bearer Token**


Returns a bearer token that can be used to authenticate other endpoint.



You can find the tutorial on using the disposable bearer token [here](https://docs.api.video/reference/disposable-bearer-token-authentication).

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **authenticatePayload** | [**AuthenticatePayload**](../model/AuthenticatePayload.md)| **yes**|  |


### Return type

Promise<[**AccessToken**](../model/AccessToken.md)>.




---

<a name="refresh"></a>
## **`refresh()` - Refresh Bearer Token**


Accepts the old bearer token and returns a new bearer token that can be used to authenticate other endpoint.



You can find the tutorial on using the disposable bearer token [here](https://docs.api.video/reference/disposable-bearer-token-authentication).

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **refreshTokenPayload** | [**RefreshTokenPayload**](../model/RefreshTokenPayload.md)| **yes**|  |


### Return type

Promise<[**AccessToken**](../model/AccessToken.md)>.




---

