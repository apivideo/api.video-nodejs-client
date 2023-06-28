
# LiveStreamUpdatePayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name you want to use for your live stream. |  [optional]
**_public** | **boolean** | Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/docs/private-videos). |  [optional]
**record** | **boolean** | Use this to indicate whether you want the recording on or off. On is true, off is false. |  [optional]
**playerId** | **string** | The unique ID for the player associated with a live stream that you want to update. |  [optional]
**restreams** | [**Array&lt;RestreamsRequestObject&gt;**](RestreamsRequestObject.md) | Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations. This operation updates all restream destinations in the same request. If you do not want to modify an existing restream destination, you need to include it in your request, otherwise it is removed. |  [optional]



