
# VideoClip

Use this object to create a smaller clip from a video you upload.  - You can only create video clips in the same request where you create the video container. - You cannot update the starting or ending timestamps of a video clip after you created the video container. - When you upload a video file into a container where you defined a starting and ending timestamp, the API trims the video according to those timestamps to create a clip.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startTimecode** | **string** | The timestamp that defines the beginning of the video clip you want to create. The value must follow the &#x60;HH:MM:SS&#x60; format. |  [optional]
**endTimecode** | **string** | The timestamp that defines the end of the video clip you want to create. The value must follow the &#x60;HH:MM:SS&#x60; format. |  [optional]



