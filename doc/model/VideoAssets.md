
# VideoAssets

Collection of details about the video object that you can use to work with the video object.
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hls** | **string** | This is the manifest URL. For HTTP Live Streaming (HLS), when a HLS video stream is initiated, the first file to download is the manifest. This file has the extension M3U8, and provides the video player with information about the various bitrates available for streaming. |  [optional]
**iframe** | **string** | Code to use video from a third party website |  [optional]
**player** | **string** | Raw url of the player. |  [optional]
**thumbnail** | **string** | Poster of the video. |  [optional]
**mp4** | **string** | Available only if mp4Support is enabled. Raw mp4 url. |  [optional]



