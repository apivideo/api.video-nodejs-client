
# LiveStreamCreationPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Add a name for your live stream here. | 
**record** | **boolean** | Whether you are recording or not. True for record, false for not record. |  [optional]
**_public** | **boolean** | Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/docs/private-videos). |  [optional]
**playerId** | **string** | The unique identifier for the player. |  [optional]
**restreams** | [**Array&lt;RestreamsRequestObject&gt;**](RestreamsRequestObject.md) | Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations. |  [optional]



