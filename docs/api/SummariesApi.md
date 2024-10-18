# SummariesApi

All URIs are relative to *https://ws.api.video*

| Method | Description | HTTP request |
| ------------- | ------------- | ------------- |
| [**create()**](SummariesApi.md#create) | Generate video summary | **POST** /summaries |
| [**get()**](SummariesApi.md#get) | Get summary details | **GET** /summaries/{summaryId}/source |
| [**update()**](SummariesApi.md#update) | Update summary details | **PATCH** /summaries/{summaryId}/source |
| [**delete()**](SummariesApi.md#delete) | Delete video summary | **DELETE** /summaries/{summaryId} |
| [**list()**](SummariesApi.md#list) | List summaries | **GET** /summaries |


<a name="create"></a>
## **`create()` - Generate video summary**


Generate a title, abstract, and key takeaways for a video.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **inlineObject** | [**InlineObject**](../model/InlineObject.md)| **yes**|  |


### Return type

Promise<[**SummaryObject**](../model/SummaryObject.md)>.




---

<a name="get"></a>
## **`get()` - Get summary details**


Get all details for a summary.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **summaryId** | **string**| **yes**| The unique identifier of the summary source you want to retrieve. |


### Return type

Promise<[**SummarySource**](../model/SummarySource.md)>.




---

<a name="update"></a>
## **`update()` - Update summary details**


Update details for a summary. Note that this operation is only allowed for summary objects where `sourceStatus` is `missing`.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **summaryId** | **string**| **yes**| The unique identifier of the summary source you want to update. |
 | **updateSummaryRequest** | [**UpdateSummaryRequest**](../model/UpdateSummaryRequest.md)| **yes**|  |


### Return type

Promise<[**SummarySource**](../model/SummarySource.md)>.




---

<a name="delete"></a>
## **`delete()` - Delete video summary**


Delete a summary tied to a video.

### Parameters

| Name | Type | Required | Description |
| ------------- | ------------- | ------------- | ------------- |
 | **summaryId** | **string**| **yes**| The unique identifier of the summary you want to delete. |


### Return type

Promise<[**void**](../model/.md)>.




---

<a name="list"></a>
## **`list()` - List summaries**


List all summarries for your videos in a project.

### Parameters
This endpoint does not need any parameter.


### Return type

Promise<[**GetSummaries**](../model/GetSummaries.md)>.




---

