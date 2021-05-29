/**
 * @api.video/nodejs-client
 * api.video is an API that encodes on the go to facilitate immediate playback, enhancing viewer streaming experiences across multiple devices and platforms. You can stream live or on-demand online videos within minutes.
 *
 * The version of the OpenAPI document: 1
 *
 *
 * NOTE: This class is auto generated.
 * Do not edit the class manually.
 */

import path from 'path';
import {
  existsSync,
  statSync,
  createReadStream,
  openSync,
  read,
  closeSync,
} from 'fs';
import { promisify } from 'util';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions } from '../HttpClient';
import BadRequest from '../model/BadRequest';
import NotFound from '../model/NotFound';
import Video from '../model/Video';
import VideoCreationPayload from '../model/VideoCreationPayload';
import VideoStatus from '../model/VideoStatus';
import VideoThumbnailPickPayload from '../model/VideoThumbnailPickPayload';
import VideoUpdatePayload from '../model/VideoUpdatePayload';
import VideosListResponse from '../model/VideosListResponse';

/**
 * no description
 */
export default class VideosApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * If you do not need a video any longer, you can send a request to delete it. All you need is the videoId.
   * Delete a video
   * @param videoId The video ID for the video you want to delete.
   */
  public async delete(videoId: string): Promise<void> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'DELETE';

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'void',
            ''
          ) as void
      );
  }
  /**
   * This call provides the same JSON information provided on video creation. For private videos, it will generate a unique token url. Use this to retrieve any details you need about a video, or set up a private viewing URL.
   * Show a video
   * @param videoId The unique identifier for the video you want details about.
   */
  public async get(videoId: string): Promise<Video> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'GET';

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video
      );
  }
  /**
   * This API provides upload status & encoding status to determine when the video is uploaded or ready to playback.  Once encoding is completed, the response also lists the available stream qualities.
   * Show video status
   * @param videoId The unique identifier for the video you want the status for.
   */
  public async getStatus(videoId: string): Promise<VideoStatus> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling getStatus.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/status'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'GET';

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'VideoStatus',
            ''
          ) as VideoStatus
      );
  }
  /**
   * Requests to this endpoint return a list of your videos (with all their details). With no parameters added to this query, the API returns all videos. You can filter what videos the API returns using the parameters described below.
   * List all videos
   * @param {Object} searchParams
   * @param { string } searchParams.title The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.
   * @param { Array&lt;string&gt; } searchParams.tags A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.
   * @param { { [key: string]: string; } } searchParams.metadata Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter.
   * @param { string } searchParams.description If you described a video with a term or sentence, you can add it here to return videos containing this string.
   * @param { string } searchParams.liveStreamId If you know the ID for a live stream, you can retrieve the stream by adding the ID for it here.
   * @param { string } searchParams.sortBy Allowed: publishedAt, title. You can search by the time videos were published at, or by title.
   * @param { string } searchParams.sortOrder Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list({
    title,
    tags,
    metadata,
    description,
    liveStreamId,
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    title?: string;
    tags?: Array<string>;
    metadata?: { [key: string]: string };
    description?: string;
    liveStreamId?: string;
    sortBy?: string;
    sortOrder?: string;
    currentPage?: number;
    pageSize?: number;
  } = {}): Promise<VideosListResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/videos'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (title !== undefined) {
      urlSearchParams.append(
        'title',
        ObjectSerializer.serialize(title, 'string', '')
      );
    }
    if (tags !== undefined) {
      urlSearchParams.append(
        'tags',
        ObjectSerializer.serialize(tags, 'Array<string>', '')
      );
    }
    if (metadata !== undefined) {
      urlSearchParams.append(
        'metadata',
        ObjectSerializer.serialize(metadata, '{ [key: string]: string; }', '')
      );
    }
    if (description !== undefined) {
      urlSearchParams.append(
        'description',
        ObjectSerializer.serialize(description, 'string', '')
      );
    }
    if (liveStreamId !== undefined) {
      urlSearchParams.append(
        'liveStreamId',
        ObjectSerializer.serialize(liveStreamId, 'string', '')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(sortBy, 'string', '')
      );
    }
    if (sortOrder !== undefined) {
      urlSearchParams.append(
        'sortOrder',
        ObjectSerializer.serialize(sortOrder, 'string', '')
      );
    }
    if (currentPage !== undefined) {
      urlSearchParams.append(
        'currentPage',
        ObjectSerializer.serialize(currentPage, 'number', '')
      );
    }
    if (pageSize !== undefined) {
      urlSearchParams.append(
        'pageSize',
        ObjectSerializer.serialize(pageSize, 'number', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'GET';

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'VideosListResponse',
            ''
          ) as VideosListResponse
      );
  }
  /**
   * Use this endpoint to update the parameters associated with your video. The video you are updating is determined by the video ID you provide in the path. For each parameter you want to update, include the update in the request body. NOTE: If you are updating an array, you must provide the entire array as what you provide here overwrites what is in the system rather than appending to it.
   * Update a video
   * @param videoId The video ID for the video you want to delete.
   * @param videoUpdatePayload
   */
  public async update(
    videoId: string,
    videoUpdatePayload: VideoUpdatePayload = {}
  ): Promise<Video> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling update.'
      );
    }
    if (videoUpdatePayload === null || videoUpdatePayload === undefined) {
      throw new Error(
        'Required parameter videoUpdatePayload was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(videoUpdatePayload, 'VideoUpdatePayload', ''),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video
      );
  }
  /**
   * Pick a thumbnail from the given time code. If you'd like to upload an image for your thumbnail, use the [Upload a Thumbnail](https://docs.api.video/reference#post_videos-videoid-thumbnail) endpoint. There may be a short delay for the thumbnail to update.
   * Pick a thumbnail
   * @param videoId Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.
   * @param videoThumbnailPickPayload
   */
  public async pickThumbnail(
    videoId: string,
    videoThumbnailPickPayload: VideoThumbnailPickPayload
  ): Promise<Video> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling pickThumbnail.'
      );
    }
    if (
      videoThumbnailPickPayload === null ||
      videoThumbnailPickPayload === undefined
    ) {
      throw new Error(
        'Required parameter videoThumbnailPickPayload was null or undefined when calling pickThumbnail.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/thumbnail'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        videoThumbnailPickPayload,
        'VideoThumbnailPickPayload',
        ''
      ),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video
      );
  }
  /**
   * When given a token, anyone can upload a file to the URI `https://ws.api.video/upload?token=<tokenId>`.  Example with cURL:  ```curl $ curl  --request POST --url 'https://ws.api.video/upload?token=toXXX'  --header 'content-type: multipart/form-data'  -F file=@video.mp4 ```  Or in an HTML form, with a little JavaScript to convert the form into JSON: ```html <!--form for user interaction--> <form name=\"videoUploadForm\" >   <label for=video>Video:</label>   <input type=file name=source/><br/>   <input value=\"Submit\" type=\"submit\"> </form> <div></div> <!--JS takes the form data      uses FormData to turn the response into JSON.     then uses POST to upload the video file.     Update the token parameter in the url to your upload token.     --> <script>    var form = document.forms.namedItem(\"videoUploadForm\");     form.addEventListener('submit', function(ev) {   ev.preventDefault();      var oOutput = document.querySelector(\"div\"),          oData = new FormData(form);      var oReq = new XMLHttpRequest();         oReq.open(\"POST\", \"https://ws.api.video/upload?token=toXXX\", true);      oReq.send(oData);   oReq.onload = function(oEvent) {        if (oReq.status ==201) {          oOutput.innerHTML = \"Your video is uploaded!<br/>\"  + oReq.response;        } else {          oOutput.innerHTML = \"Error \" + oReq.status + \" occurred when trying to upload your file.<br />\";        }      };    }, false);  </script> ```   ### Dealing with large files  We have created a <a href='https://api.video/blog/tutorials/uploading-large-files-with-javascript'>tutorial</a> to walk through the steps required.
   * Upload with an upload token
   * @param token The unique identifier for the token you want to use to upload a video.
   * @param file The path to the video you want to upload.
   */
  public async uploadWithUploadToken(
    token: string,
    file: string
  ): Promise<Video> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (token === null || token === undefined) {
      throw new Error(
        'Required parameter token was null or undefined when calling uploadWithUploadToken.'
      );
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/upload'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (token !== undefined) {
      urlSearchParams.append(
        'token',
        ObjectSerializer.serialize(token, 'string', '')
      );
    }

    queryParams.searchParams = urlSearchParams;

    queryParams.method = 'POST';

    const formData = new FormData();

    const chunkSize = 64 * 1024 * 1024;
    // Upload in a single request when file is small enough
    if (chunkSize > length) {
      const filename = path.basename(file);
      formData.append(filename, createReadStream(file), filename);
      queryParams.body = formData;
      return this.httpClient
        .call(localVarPath, queryParams)
        .then(
          (response) =>
            ObjectSerializer.deserialize(
              ObjectSerializer.parse(
                response.body,
                response.headers['content-type']
              ),
              'Video',
              ''
            ) as Video
        );
    }
    const fileDescriptor = openSync(file, 'r');
    const readAsPromise = promisify(read);
    const buf = Buffer.alloc(chunkSize);
    let uploadChunkSize = chunkSize;
    let lastBody;
    for (let offset = 0; offset < length; offset += chunkSize) {
      // default the upload size to be as large as possible.
      uploadChunkSize = chunkSize;
      // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
      // reduced to match the remaining bytes in the file
      if (offset + uploadChunkSize > length) {
        uploadChunkSize = length - offset;
      }
      await readAsPromise(fileDescriptor, buf, 0, uploadChunkSize, offset);
      console.log(`Uploading ${offset}-${offset + uploadChunkSize}...`);

      const filename = path.basename(file);
      const chunkFormData = new FormData();
      chunkFormData.append(filename, buf, filename);

      queryParams.body = chunkFormData;
      queryParams.headers['Content-Range'] = `bytes ${offset}-${
        offset + uploadChunkSize - 1
      }/${length}`;

      lastBody = await this.httpClient
        .call(localVarPath, queryParams)
        .then(
          (response) =>
            ObjectSerializer.deserialize(
              ObjectSerializer.parse(
                response.body,
                response.headers['content-type']
              ),
              'Video',
              ''
            ) as Video
        )
        .catch((error: Error) => {
          closeSync(fileDescriptor);
          throw error;
        });
    }

    return Promise.resolve(lastBody as Video);
  }
  /**
   * To create a video, you create its metadata first, before adding the video file (exception - when using an existing HTTP source).  Videos are public by default. Mp4 encoded versions are created at the highest quality (max 1080p) by default.  ```shell $ curl https://ws.api.video/videos \\ -H 'Authorization: Bearer {access_token} \\ -d '{\"title\":\"My video\",      \"description\":\"so many details\",      \"mp4Support\":true }' ```  ### Creating a hosted video  You can also create a video directly from one hosted on a third-party server by giving its URI in `source` parameter:  ```shell $ curl https://ws.api.video/videos \\ -H 'Authorization: Bearer {access_token} \\ -d '{\"source\":\"http://uri/to/video.mp4\", \"title\":\"My video\"}' ```  In this case, the service will respond `202 Accepted` and download the video asynchronously.   We have tutorials on: * [Creating and uploading videos](https://api.video/blog/tutorials/video-upload-tutorial) * [Uploading large videos](https://api.video/blog/tutorials/video-upload-tutorial-large-videos) * [Using tags with videos](https://api.video/blog/tutorials/video-tagging-best-practices) * [Private videos](https://api.video/blog/tutorials/tutorial-private-videos)
   * Create a video
   * @param videoCreationPayload video to create
   */
  public async create(
    videoCreationPayload: VideoCreationPayload
  ): Promise<Video> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoCreationPayload === null || videoCreationPayload === undefined) {
      throw new Error(
        'Required parameter videoCreationPayload was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/videos'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        videoCreationPayload,
        'VideoCreationPayload',
        ''
      ),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video
      );
  }
  /**
   * To upload a video to the videoId you created. Replace {videoId} with the id you'd like to use, {access_token} with your token, and /path/to/video.mp4 with the path to the video you'd like to upload. You can only upload your video to the videoId once.  ```bash curl https://ws.api.video/videos/{videoId}/source \\   -H 'Authorization: Bearer {access_token}' \\   -F file=@/path/to/video.mp4   ```
   * Upload a video
   * @param videoId Enter the videoId you want to use to upload your video.
   * @param file The path to the video you would like to upload. The path must be local. If you want to use a video from an online source, you must use the \\\&quot;/videos\\\&quot; endpoint and add the \\\&quot;source\\\&quot; parameter when you create a new video.
   */
  public async upload(videoId: string, file: string): Promise<Video> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling upload.'
      );
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/source'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'POST';

    const formData = new FormData();

    const chunkSize = 64 * 1024 * 1024;
    // Upload in a single request when file is small enough
    if (chunkSize > length) {
      const filename = path.basename(file);
      formData.append(filename, createReadStream(file), filename);
      queryParams.body = formData;
      return this.httpClient
        .call(localVarPath, queryParams)
        .then(
          (response) =>
            ObjectSerializer.deserialize(
              ObjectSerializer.parse(
                response.body,
                response.headers['content-type']
              ),
              'Video',
              ''
            ) as Video
        );
    }
    const fileDescriptor = openSync(file, 'r');
    const readAsPromise = promisify(read);
    const buf = Buffer.alloc(chunkSize);
    let uploadChunkSize = chunkSize;
    let lastBody;
    for (let offset = 0; offset < length; offset += chunkSize) {
      // default the upload size to be as large as possible.
      uploadChunkSize = chunkSize;
      // BUT,if we are on the last chunk to be uploaded, the uploaded chunk must be
      // reduced to match the remaining bytes in the file
      if (offset + uploadChunkSize > length) {
        uploadChunkSize = length - offset;
      }
      await readAsPromise(fileDescriptor, buf, 0, uploadChunkSize, offset);
      console.log(`Uploading ${offset}-${offset + uploadChunkSize}...`);

      const filename = path.basename(file);
      const chunkFormData = new FormData();
      chunkFormData.append(filename, buf, filename);

      queryParams.body = chunkFormData;
      queryParams.headers['Content-Range'] = `bytes ${offset}-${
        offset + uploadChunkSize - 1
      }/${length}`;

      lastBody = await this.httpClient
        .call(localVarPath, queryParams)
        .then(
          (response) =>
            ObjectSerializer.deserialize(
              ObjectSerializer.parse(
                response.body,
                response.headers['content-type']
              ),
              'Video',
              ''
            ) as Video
        )
        .catch((error: Error) => {
          closeSync(fileDescriptor);
          throw error;
        });
    }

    return Promise.resolve(lastBody as Video);
  }
  /**
   * In creating a thumbnail, you may either upload an image, or you can pick a time in the video to be used as thumbnail. This endpoint is for uploading an image. Use [Pick a Thumbnail](https://docs.api.video/reference#patch_videos-videoid-thumbnail) to pick a time in the video. There may be a short delay before the new thumbnail is delivered to our CDN.
   * Upload a thumbnail
   * @param videoId Unique identifier of the chosen video
   * @param file The image to be added as a thumbnail.
   */
  public async uploadThumbnail(videoId: string, file: string): Promise<Video> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling uploadThumbnail.'
      );
    }
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/thumbnail'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    queryParams.method = 'POST';

    const formData = new FormData();

    const filename = path.basename(file);
    formData.append(
      filename,
      Buffer.isBuffer(file) ? file : createReadStream(file),
      filename
    );

    queryParams.body = formData;
    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'Video',
            ''
          ) as Video
      );
  }
}
