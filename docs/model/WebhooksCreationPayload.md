
# WebhooksCreationPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | **Array&lt;string&gt;** | A list of the webhooks that you are subscribing to. There are Currently four webhook options: * &#x60;&#x60;&#x60;video.encoding.quality.completed&#x60;&#x60;&#x60;  Occurs when a new video is uploaded into your account, it will be encoded into several different HLS and mp4 qualities. When each version is encoded, your webhook will get a notification.  It will look like &#x60;&#x60;&#x60;{ \\\&quot;type\\\&quot;: \\\&quot;video.encoding.quality.completed\\\&quot;, \\\&quot;emittedAt\\\&quot;: \\\&quot;2021-01-29T16:46:25.217+01:00\\\&quot;, \\\&quot;videoId\\\&quot;: \\\&quot;viXXXXXXXX\\\&quot;, \\\&quot;encoding\\\&quot;: \\\&quot;hls\\\&quot;, \\\&quot;quality\\\&quot;: \\\&quot;720p\\\&quot;} &#x60;&#x60;&#x60;. This request says that the 720p HLS encoding was completed. * &#x60;&#x60;&#x60;live-stream.broadcast.started&#x60;&#x60;&#x60;  When a live stream begins broadcasting, the broadcasting parameter changes from false to true, and this webhook fires. * &#x60;&#x60;&#x60;live-stream.broadcast.ended&#x60;&#x60;&#x60;  This event fires when a live stream has finished broadcasting. * &#x60;&#x60;&#x60;video.source.recorded&#x60;&#x60;&#x60;  Occurs when a live stream is recorded and submitted for encoding. | 
**url** | **string** | The the url to which HTTP notifications are sent. It could be any http or https URL. | 



