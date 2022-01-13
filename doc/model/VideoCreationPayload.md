
# VideoCreationPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The title of your new video. | 
**description** | **string** | A brief description of your video. |  [optional]
**source** | **string** | If you add a video already on the web, this is where you enter the url for the video. |  [optional]
**_public** | **boolean** | Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos). |  [optional]
**panoramic** | **boolean** | Indicates if your video is a 360/immersive video. |  [optional]
**mp4Support** | **boolean** | Enables mp4 version in addition to streamed version. |  [optional]
**playerId** | **string** | The unique identification number for your video player. |  [optional]
**tags** | **Array&lt;string&gt;** | A list of tags you want to use to describe your video. |  [optional]
**metadata** | [**Array&lt;Metadata&gt;**](Metadata.md) | A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. Read more on [dynamic metadata](https://api.video/blog/endpoints/dynamic-metadata). |  [optional]
**clip** | [**VideoClip**](VideoClip.md) |  |  [optional]
**watermark** | [**VideoWatermark**](VideoWatermark.md) |  |  [optional]



