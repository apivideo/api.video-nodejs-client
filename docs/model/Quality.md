
# Quality

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**QualityTypeEnum**](#QualityTypeEnum) | The type of video (hls or mp4). |  [optional]
**quality** | [**QualityQualityEnum**](#QualityQualityEnum) | The quality of the video you have, in pixels. Choices include 360p, 480p, 720p, 1080p, and 2160p. |  [optional]
**status** | [**QualityStatusEnum**](#QualityStatusEnum) | The status of your video. Statuses include waiting - the video is waiting to be encoded. encoding - the video is in the process of being encoded. encoded - the video was successfully encoded. failed - the video failed to be encoded. |  [optional]



## Enum: QualityTypeEnum

Name | Value
---- | -----
Hls | &#39;hls&#39;
Mp4 | &#39;mp4&#39;



## Enum: QualityQualityEnum

Name | Value
---- | -----
_240p | &#39;240p&#39;
_360p | &#39;360p&#39;
_480p | &#39;480p&#39;
_720p | &#39;720p&#39;
_1080p | &#39;1080p&#39;
_2160p | &#39;2160p&#39;



## Enum: QualityStatusEnum

Name | Value
---- | -----
Waiting | &#39;waiting&#39;
Encoding | &#39;encoding&#39;
Encoded | &#39;encoded&#39;
Failed | &#39;failed&#39;



