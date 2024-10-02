# TagsApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**list()**](TagsApi.md#list) | List all video tags | **GET** /tags |


<a name="list"></a>
## **`list()` - List all video tags**


This endpoint enables you to search for video tags in a project and see how many videos are tagged with them. If you do not define any query parameters, the endpoint lists all video tags and the numbers of times they are used in a project.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **value** | **string**| no| Use this parameter to search for specific video tags. The API filters results even on partial values, and ignores accents, uppercase, and lowercase.  |
 | **sortBy** | **&#39;value&#39; \| &#39;videoCount&#39;**| no| Use this parameter to choose which field the API will use to sort the response data. The default is &#x60;value&#x60;.  These are the available fields to sort by:  - &#x60;value&#x60;: Sorts the results based on tag values in alphabetic order. - &#x60;videoCount&#x60;: Sorts the results based on the number of times a video tag is used.  |
 | **sortOrder** | **&#39;asc&#39; \| &#39;desc&#39;**| no| Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A. |
 | **currentPage** | **number**| no| Choose the number of search results to return per page. Minimum value: 1 |
 | **pageSize** | **number**| no| Results per page. Allowed values 1-100, default is 25. |


### Return type

Promise<[**ListTagsResponse**](../model/ListTagsResponse.md)>.




---

