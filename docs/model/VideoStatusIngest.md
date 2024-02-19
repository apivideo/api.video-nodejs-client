
# VideoStatusIngest

Details about the capturing, transferring, and storing of your video for use immediately or in the future.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**VideoStatusIngestStatusEnum**](#VideoStatusIngestStatusEnum) | There are four possible statuses depending on how you provide a video file: - &#x60;uploading&#x60; - the API is gathering the video source file from an upload. - &#x60;uploaded&#x60; - the video file is fully uploaded. - &#x60;ingesting&#x60; - the API is gathering the video source file from either a URL, or from cloning. - &#x60;ingested&#x60; - the video file is fully stored.  |  [optional]
**filesize** | **number** | The size of your file in bytes. |  [optional]
**receivedBytes** | [**Array&lt;BytesRange&gt;**](BytesRange.md) | The total number of bytes received, listed for each chunk of the upload. |  [optional]
**receivedParts** | [**VideoStatusIngestReceivedParts**](VideoStatusIngestReceivedParts.md) |  |  [optional]



## Enum: VideoStatusIngestStatusEnum

Name | Value
---- | -----
Uploading | &#39;uploading&#39;
Uploaded | &#39;uploaded&#39;
Ingesting | &#39;ingesting&#39;
Ingested | &#39;ingested&#39;



