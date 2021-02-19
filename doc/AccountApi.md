*mostly copy/paste from java version, must be adapted*

# AccountApi

All URIs are relative to *https://ws.api.video*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get**](AccountApi.md#get) | **GET** /account | Show account


<a name="get"></a>
# **get**


### Example
```javascript
const apiVideoClient = new VideoApiClient({ apiKey: "YOUR_API_TOKEN" });

const api = apiVideoClient.account;

//TODO from java generator, to be adapted
/*



try {
    Account result = apiInstance.get();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling AccountApi#get");
    System.err.println("Status code: " + e.getCode());
    System.err.println("Reason: " + e.getMessage());
    System.err.println("Response headers: " + e.getResponseHeaders());
    e.printStackTrace();
}
*/
```

### Parameters
This endpoint does not need any parameter.

### Return type


[**Account**](Account.md)

### Authorization

[API token](../README.md#api-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**404** | Not Found |  -  |

