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
import ProgressiveSession from 'model/ProgressiveSession';
import BadRequest from '../model/BadRequest';
import LiveStream from '../model/LiveStream';
import LiveStreamCreationPayload from '../model/LiveStreamCreationPayload';
import LiveStreamListResponse from '../model/LiveStreamListResponse';
import LiveStreamUpdatePayload from '../model/LiveStreamUpdatePayload';
import NotFound from '../model/NotFound';

/**
 * no description
 */
export default class LiveStreamsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Delete a live stream
   * @param liveStreamId The unique ID for the live stream that you want to remove.
   */
  public async delete(liveStreamId: string): Promise<void> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/live-streams/{liveStreamId}'
      .substring(1)
      .replace(
        '{' + 'liveStreamId' + '}',
        encodeURIComponent(String(liveStreamId))
      );

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
   * Send the unique identifier for a live stream to delete it from the system.
   * Delete a thumbnail
   * @param liveStreamId The unique identifier for the live stream you want to delete.
   */
  public async deleteThumbnail(liveStreamId: string): Promise<LiveStream> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling deleteThumbnail.'
      );
    }
    // Path Params
    const localVarPath = '/live-streams/{liveStreamId}/thumbnail'
      .substring(1)
      .replace(
        '{' + 'liveStreamId' + '}',
        encodeURIComponent(String(liveStreamId))
      );

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
            'LiveStream',
            ''
          ) as LiveStream
      );
  }

  /**
   * With no parameters added to the url, this will return all livestreams. Query by name or key to limit the list.
   * List all live streams
   * @param {Object} searchParams
   * @param { string } searchParams.streamKey The unique stream key that allows you to stream videos.
   * @param { string } searchParams.name You can filter live streams by their name or a part of their name.
   * @param { string } searchParams.sortBy Allowed: createdAt, publishedAt, name. createdAt - the time a livestream was created using the specified streamKey. publishedAt - the time a livestream was published using the specified streamKey. name - the name of the livestream. If you choose one of the time based options, the time is presented in ISO-8601 format.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list({
    streamKey,
    name,
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    streamKey?: string;
    name?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  } = {}): Promise<LiveStreamListResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/live-streams'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (streamKey !== undefined) {
      urlSearchParams.append(
        'streamKey',
        ObjectSerializer.serialize(streamKey, 'string', '')
      );
    }
    if (name !== undefined) {
      urlSearchParams.append(
        'name',
        ObjectSerializer.serialize(name, 'string', '')
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
        ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", '')
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
            'LiveStreamListResponse',
            ''
          ) as LiveStreamListResponse
      );
  }

  /**
   * Supply a LivestreamId, and you'll get all the details for streaming into, and watching the livestream. Tutorials that use the [show livestream endpoint](https://api.video/blog/endpoints/live-stream-status).
   * Show live stream
   * @param liveStreamId The unique ID for the live stream you want to watch.
   */
  public async get(liveStreamId: string): Promise<LiveStream> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/live-streams/{liveStreamId}'
      .substring(1)
      .replace(
        '{' + 'liveStreamId' + '}',
        encodeURIComponent(String(liveStreamId))
      );

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
            'LiveStream',
            ''
          ) as LiveStream
      );
  }

  /**
   * Use this endpoint to update the player, or to turn recording on/off (saving a copy of the livestream). NOTE: If the livestream is actively streaming, changing the recording status will only affect the NEXT stream.    The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer.
   * Update a live stream
   * @param liveStreamId The unique ID for the live stream that you want to update information for such as player details, or whether you want the recording on or off.
   * @param liveStreamUpdatePayload
   */
  public async update(
    liveStreamId: string,
    liveStreamUpdatePayload: LiveStreamUpdatePayload = {}
  ): Promise<LiveStream> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling update.'
      );
    }
    if (
      liveStreamUpdatePayload === null ||
      liveStreamUpdatePayload === undefined
    ) {
      throw new Error(
        'Required parameter liveStreamUpdatePayload was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/live-streams/{liveStreamId}'
      .substring(1)
      .replace(
        '{' + 'liveStreamId' + '}',
        encodeURIComponent(String(liveStreamId))
      );

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        liveStreamUpdatePayload,
        'LiveStreamUpdatePayload',
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
            'LiveStream',
            ''
          ) as LiveStream
      );
  }

  /**
   * A live stream will give you the 'connection point' to RTMP your video stream to api.video. It will also give you the details for viewers to watch the same livestream.  The public=false 'private livestream' is available as a BETA feature, and should be limited to livestreams of 3,000 viewers or fewer. See our [Live Stream Tutorial](https://api.video/blog/tutorials/live-stream-tutorial) for a walkthrough of this API with OBS. Your RTMP endpoint for the livestream is rtmp://broadcast.api.video/s/{streamKey} Tutorials that [create live streams](https://api.video/blog/endpoints/live-create).
   * Create live stream
   * @param liveStreamCreationPayload
   */
  public async create(
    liveStreamCreationPayload: LiveStreamCreationPayload
  ): Promise<LiveStream> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (
      liveStreamCreationPayload === null ||
      liveStreamCreationPayload === undefined
    ) {
      throw new Error(
        'Required parameter liveStreamCreationPayload was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/live-streams'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        liveStreamCreationPayload,
        'LiveStreamCreationPayload',
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
            'LiveStream',
            ''
          ) as LiveStream
      );
  }

  /**
   * Upload an image to use as a backdrop for your livestream. Tutorials that [update live stream thumbnails](https://api.video/blog/endpoints/live-upload-a-thumbnail).
   * Upload a thumbnail
   * @param liveStreamId The unique ID for the live stream you want to upload.
   * @param file The image to be added as a thumbnail.
   */
  public async uploadThumbnail(
    liveStreamId: string,
    file: string
  ): Promise<LiveStream> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling uploadThumbnail.'
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
    const localVarPath = '/live-streams/{liveStreamId}/thumbnail'
      .substring(1)
      .replace(
        '{' + 'liveStreamId' + '}',
        encodeURIComponent(String(liveStreamId))
      );

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
            'LiveStream',
            ''
          ) as LiveStream
      );
  }
}
