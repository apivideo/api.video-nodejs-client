
# VideoCreationPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **string** | The title of your new video. | 
**description** | **string** | A brief description of your video. |  [optional]
**source** | **string** | You can either add a video already on the web, by entering the URL of the video, or you can also enter the &#x60;videoId&#x60; of one of the videos you already have on your api.video acccount, and this will generate a copy of your video. Creating a copy of a video can be especially useful if you want to keep your original video and trim or apply a watermark onto the copy you would create. |  [optional]
**_public** | **boolean** | Default: True. If set to &#x60;false&#x60; the video will become private. More information on private videos can be found [here](https://docs.api.video/docs/private-videos) |  [optional]
**panoramic** | **boolean** | Indicates if your video is a 360/immersive video. |  [optional]
**mp4Support** | **boolean** | Enables mp4 version in addition to streamed version. |  [optional]
**playerId** | **string** | The unique identification number for your video player. |  [optional]
**tags** | **Array&lt;string&gt;** | A list of tags you want to use to describe your video. |  [optional]
**metadata** | [**Array&lt;Metadata&gt;**](Metadata.md) | A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. Read more on [dynamic metadata](https://api.video/blog/endpoints/dynamic-metadata). |  [optional]
**clip** | [**VideoClip**](VideoClip.md) |  |  [optional]
**watermark** | [**VideoWatermark**](VideoWatermark.md) |  |  [optional]



