
# LiveStream

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**liveStreamId** | **string** | The unique identifier for the live stream. Live stream IDs begin with \&quot;li.\&quot; | 
**name** | **string** | The name of your live stream. |  [optional]
**streamKey** | **string** | The unique, private stream key that you use to begin streaming. |  [optional]
**record** | **boolean** | Whether you are recording or not. |  [optional]
**_public** | **boolean** | Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/docs/private-videos). |  [optional]
**assets** | [**LiveStreamAssets**](LiveStreamAssets.md) |  |  [optional]
**playerId** | **string** | The unique identifier for the player. |  [optional]
**broadcasting** | **boolean** | Whether or not you are broadcasting the live video you recorded for others to see. True means you are broadcasting to viewers, false means you are not. |  [optional]
**restreams** | [**Array&lt;RestreamsResponseObject&gt;**](RestreamsResponseObject.md) | Returns the list of RTMP restream destinations. | 
**createdAt** | **Date** | When the player was created, presented in ISO-8601 format. |  [optional]
**updatedAt** | **Date** | When the player was last updated, presented in ISO-8601 format. |  [optional]



