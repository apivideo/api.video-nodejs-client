
# VideoStatusIngest

Details about the capturing, transferring, and storing of your video for use immediately or in the future.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**VideoStatusIngestStatusEnum**](#VideoStatusIngestStatusEnum) | There are three possible ingest statuses. missing - you are missing information required to ingest the video. uploading - the video is in the process of being uploaded. uploaded - the video is ready for use. |  [optional]
**filesize** | **number** | The size of your file in bytes. |  [optional]
**receivedBytes** | [**Array&lt;BytesRange&gt;**](BytesRange.md) | The total number of bytes received, listed for each chunk of the upload. |  [optional]
**receivedParts** | [**VideoStatusIngestReceivedParts**](VideoStatusIngestReceivedParts.md) |  |  [optional]



## Enum: VideoStatusIngestStatusEnum

Name | Value
---- | -----
Missing | &#39;missing&#39;
Uploading | &#39;uploading&#39;
Uploaded | &#39;uploaded&#39;



