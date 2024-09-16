
# Video

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**videoId** | **string** | The unique identifier of the video object. | 
**createdAt** | **Date** | When a video was created, presented in ATOM UTC format. |  [optional]
**title** | **string** | The title of the video content.  |  [optional]
**description** | **string** | A description for the video content.  |  [optional]
**publishedAt** | **Date** | The date and time the API created the video. Date and time are provided using ATOM UTC format. |  [optional]
**updatedAt** | **Date** | The date and time the video was updated. Date and time are provided using ATOM UTC format. |  [optional]
**discardedAt** | **Date** | The date and time the video was discarded. The API populates this field only if you have the Video Restore feature enabled and discard a video. Date and time are provided using ATOM UTC format. |  [optional]
**deletesAt** | **Date** | The date and time the video will be permanently deleted. The API populates this field only if you have the Video Restore feature enabled and discard a video. Discarded videos are pemanently deleted after 90 days. Date and time are provided using ATOM UTC format. |  [optional]
**discarded** | **boolean** | Returns &#x60;true&#x60; for videos you discarded when you have the Video Restore feature enabled. Returns &#x60;false&#x60; for every other video. |  [optional]
**tags** | **Array&lt;string&gt;** | One array of tags (each tag is a string) in order to categorize a video. Tags may include spaces.   |  [optional]
**metadata** | [**Array&lt;Metadata&gt;**](Metadata.md) | Metadata you can use to categorise and filter videos. Metadata is a list of dictionaries, where each dictionary represents a key value pair for categorising a video.  |  [optional]
**source** | [**VideoSource**](VideoSource.md) |  |  [optional]
**assets** | [**VideoAssets**](VideoAssets.md) |  |  [optional]
**playerId** | **string** | The id of the player that will be applied on the video.  |  [optional]
**_public** | **boolean** | Defines if the content is publicly reachable or if a unique token is needed for each play session. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos/).  |  [optional]
**panoramic** | **boolean** | Defines if video is panoramic.  |  [optional]
**mp4Support** | **boolean** | This lets you know whether mp4 is supported. If enabled, an mp4 URL will be provided in the response for the video.  |  [optional]



