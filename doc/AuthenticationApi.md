*mostly copy/paste from java version, must be adapted*

# AuthenticationApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticate**](AuthenticationApi.md#authenticate) | **POST** /auth/api-key | Authenticate
[**refresh**](AuthenticationApi.md#refresh) | **POST** /auth/refresh | Refresh token


<a name="authenticate"></a>
# **authenticate**


### Example
```javascript
const apiVideoClient = new VideoApiClient();

const api = apiVideoClient.authentication;

//TODO from java generator, to be adapted
/*


    AuthenticatePayload authenticatePayload = ; // 
        authenticatePayload.setApiKey(); // Your account API key. You can use your sandbox API key, or you can use your production API key.


try {
    AccessToken result = apiInstance.authenticate(authenticatePayload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationApi#authenticate");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticatePayload** | [**AuthenticatePayload**](AuthenticatePayload.md)|  | [optional]

### Return type


[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

<a name="refresh"></a>
# **refresh**


### Example
```javascript
const apiVideoClient = new VideoApiClient();

const api = apiVideoClient.authentication;

//TODO from java generator, to be adapted
/*


    RefreshTokenPayload refreshTokenPayload = ; // 
        refreshTokenPayload.setRefreshToken(); // The refresh token is either the first refresh token you received when you authenticated with the auth/api-key endpoint, or it&#39;s the refresh token from the last time you used the auth/refresh endpoint. Place this in the body of your request to obtain a new access token (which is valid for an hour) and a new refresh token.



try {
    AccessToken result = apiInstance.refresh(refreshTokenPayload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationApi#refresh");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refreshTokenPayload** | [**RefreshTokenPayload**](RefreshTokenPayload.md)|  | [optional]

### Return type


[**AccessToken**](AccessToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |

