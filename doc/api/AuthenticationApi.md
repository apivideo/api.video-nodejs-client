# AuthenticationApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate**](AuthenticationApi.md#authenticate) | **POST** /auth/api-key | Authenticate
[**refresh**](AuthenticationApi.md#refresh) | **POST** /auth/refresh | Refresh token


<a name="authenticate"></a>
## **authenticate**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient();

        const authenticatePayload = {
			apiKey: "apiKey_example", // Your account API key. You can use your sandbox API key, or you can use your production API key.
		}; 

        // AccessToken
        const result = await client.authentication.authenticate(authenticatePayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticatePayload** | [**AuthenticatePayload**](../model/AuthenticatePayload.md)|  |

### Return type

[**AccessToken**](../model/AccessToken.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

<a name="refresh"></a>
## **refresh**


### Example
```js
(async () => {
    try {
        const client = new ApiVideoClient();

        const refreshTokenPayload = {
			refreshToken: "refreshToken_example", // The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it's the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token. 
		}; 

        // AccessToken
        const result = await client.authentication.refresh(refreshTokenPayload);
        console.log(result);
    } catch (e) {
        console.error(e);
    }
})();
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshTokenPayload** | [**RefreshTokenPayload**](../model/RefreshTokenPayload.md)|  |

### Return type

[**AccessToken**](../model/AccessToken.md)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

