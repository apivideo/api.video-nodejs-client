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
import { createReadStream } from 'fs';
import { URLSearchParams } from 'url';
import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions } from '../HttpClient';
import LiveStream from '../model/LiveStream';
import LiveStreamCreationPayload from '../model/LiveStreamCreationPayload';
import LiveStreamListResponse from '../model/LiveStreamListResponse';
import LiveStreamUpdatePayload from '../model/LiveStreamUpdatePayload';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class LiveStreamsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Creates a livestream object.
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
   * Get a livestream by id.
   * Retrieve live stream
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
   * Updates the livestream object.
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
   * If you do not need a live stream any longer, you can send a request to delete it. All you need is the liveStreamId.
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
   * Get the list of livestreams on the workspace.
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
   * Upload the thumbnail for the livestream.
   * Upload a thumbnail
   * @param liveStreamId The unique ID for the live stream you want to upload.
   * @param file The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB.
   */
  public async uploadThumbnail(
    liveStreamId: string,
    file: string | Readable | Buffer
  ): Promise<LiveStream> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling uploadThumbnail.'
      );
    }
    let fileName = 'file';
    let fileBuffer = file;
    if (typeof file === 'string') {
      fileName = path.basename(file);
      fileBuffer = createReadStream(file);
    }
    if (file instanceof Readable) {
      fileBuffer = await readableToBuffer(file);
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

    formData.append(fileName, fileBuffer, fileName);

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

  /**
   * Send the unique identifier for a live stream to delete its thumbnail.
   * Delete a thumbnail
   * @param liveStreamId The unique identifier of the live stream whose thumbnail you want to delete.
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
}
