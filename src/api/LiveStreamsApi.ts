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
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
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
    return this.createWithResponseHeaders(liveStreamCreationPayload).then(
      (res) => res.body
    );
  }

  /**
   * Creates a livestream object.
   * Create live stream
   * @param liveStreamCreationPayload
   */
  public async createWithResponseHeaders(
    liveStreamCreationPayload: LiveStreamCreationPayload
  ): Promise<{ headers: ApiResponseHeaders; body: LiveStream }> {
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

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'LiveStream',
          ''
        ) as LiveStream,
      };
    });
  }

  /**
   * Get a livestream by id.
   * Retrieve live stream
   * @param liveStreamId The unique ID for the live stream you want to watch.
   */
  public async get(liveStreamId: string): Promise<LiveStream> {
    return this.getWithResponseHeaders(liveStreamId).then((res) => res.body);
  }

  /**
   * Get a livestream by id.
   * Retrieve live stream
   * @param liveStreamId The unique ID for the live stream you want to watch.
   */
  public async getWithResponseHeaders(
    liveStreamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: LiveStream }> {
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

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'LiveStream',
          ''
        ) as LiveStream,
      };
    });
  }

  /**
   * Updates the livestream object.
   * Update a live stream
   * @param liveStreamId The unique ID for the live stream that you want to update information for such as player details.
   * @param liveStreamUpdatePayload
   */
  public async update(
    liveStreamId: string,
    liveStreamUpdatePayload: LiveStreamUpdatePayload = {}
  ): Promise<LiveStream> {
    return this.updateWithResponseHeaders(
      liveStreamId,
      liveStreamUpdatePayload
    ).then((res) => res.body);
  }

  /**
   * Updates the livestream object.
   * Update a live stream
   * @param liveStreamId The unique ID for the live stream that you want to update information for such as player details.
   * @param liveStreamUpdatePayload
   */
  public async updateWithResponseHeaders(
    liveStreamId: string,
    liveStreamUpdatePayload: LiveStreamUpdatePayload = {}
  ): Promise<{ headers: ApiResponseHeaders; body: LiveStream }> {
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

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'LiveStream',
          ''
        ) as LiveStream,
      };
    });
  }

  /**
   * If you do not need a live stream any longer, you can send a request to delete it. All you need is the liveStreamId.
   * Delete a live stream
   * @param liveStreamId The unique ID for the live stream that you want to remove.
   */
  public async delete(liveStreamId: string): Promise<void> {
    return this.deleteWithResponseHeaders(liveStreamId).then((res) => res.body);
  }

  /**
   * If you do not need a live stream any longer, you can send a request to delete it. All you need is the liveStreamId.
   * Delete a live stream
   * @param liveStreamId The unique ID for the live stream that you want to remove.
   */
  public async deleteWithResponseHeaders(
    liveStreamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: void }> {
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

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'void',
          ''
        ) as void,
      };
    });
  }

  /**
   * Get the list of livestreams on the workspace.
   * List all live streams
   * @param {Object} searchParams
   * @param { string } searchParams.streamKey The unique stream key that allows you to stream videos.
   * @param { string } searchParams.name You can filter live streams by their name or a part of their name.
   * @param { &#39;name&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy Enables you to sort live stream results. Allowed attributes: &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;. &#x60;name&#x60; - the name of the live stream. &#x60;createdAt&#x60; - the time a live stream was created. &#x60;updatedAt&#x60; - the time a live stream was last updated.  When using &#x60;createdAt&#x60; or &#x60;updatedAt&#x60;, the API sorts the results based on the ISO-8601 time format.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list(
    args: {
      streamKey?: string;
      name?: string;
      sortBy?: 'name' | 'createdAt' | 'updatedAt';
      sortOrder?: 'asc' | 'desc';
      currentPage?: number;
      pageSize?: number;
    } = {}
  ): Promise<LiveStreamListResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * Get the list of livestreams on the workspace.
   * List all live streams
   * @param {Object} searchParams
   * @param { string } searchParams.streamKey The unique stream key that allows you to stream videos.
   * @param { string } searchParams.name You can filter live streams by their name or a part of their name.
   * @param { &#39;name&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy Enables you to sort live stream results. Allowed attributes: &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;. &#x60;name&#x60; - the name of the live stream. &#x60;createdAt&#x60; - the time a live stream was created. &#x60;updatedAt&#x60; - the time a live stream was last updated.  When using &#x60;createdAt&#x60; or &#x60;updatedAt&#x60;, the API sorts the results based on the ISO-8601 time format.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listWithResponseHeaders({
    streamKey,
    name,
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    streamKey?: string;
    name?: string;
    sortBy?: 'name' | 'createdAt' | 'updatedAt';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  } = {}): Promise<{
    headers: ApiResponseHeaders;
    body: LiveStreamListResponse;
  }> {
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
        ObjectSerializer.serialize(
          sortBy,
          "'name' | 'createdAt' | 'updatedAt'",
          ''
        )
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

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'LiveStreamListResponse',
          ''
        ) as LiveStreamListResponse,
      };
    });
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
    return this.uploadThumbnailWithResponseHeaders(liveStreamId, file).then(
      (res) => res.body
    );
  }

  /**
   * Upload the thumbnail for the livestream.
   * Upload a thumbnail
   * @param liveStreamId The unique ID for the live stream you want to upload.
   * @param file The image to be added as a thumbnail. The mime type should be image/jpeg, image/png or image/webp. The max allowed size is 8 MiB.
   */
  public async uploadThumbnailWithResponseHeaders(
    liveStreamId: string,
    file: string | Readable | Buffer
  ): Promise<{ headers: ApiResponseHeaders; body: LiveStream }> {
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
    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'LiveStream',
          ''
        ) as LiveStream,
      };
    });
  }

  /**
   * Send the unique identifier for a live stream to delete its thumbnail.
   * Delete a thumbnail
   * @param liveStreamId The unique identifier of the live stream whose thumbnail you want to delete.
   */
  public async deleteThumbnail(liveStreamId: string): Promise<LiveStream> {
    return this.deleteThumbnailWithResponseHeaders(liveStreamId).then(
      (res) => res.body
    );
  }

  /**
   * Send the unique identifier for a live stream to delete its thumbnail.
   * Delete a thumbnail
   * @param liveStreamId The unique identifier of the live stream whose thumbnail you want to delete.
   */
  public async deleteThumbnailWithResponseHeaders(
    liveStreamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: LiveStream }> {
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

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'LiveStream',
          ''
        ) as LiveStream,
      };
    });
  }

  /**
   * Request the completion of a live stream that is currently running. This operation is asynchronous and the live stream will stop after a few seconds.   The API adds the `EXT-X-ENDLIST` tag to the live stream's HLS manifest. This stops the live stream on the player and also stops the recording of the live stream. The API keeps the incoming connection from the streamer open for at most 1 minute, which can be used to terminate the stream.
   * Complete a live stream
   * @param liveStreamId The unique ID for the live stream you want to complete.
   */
  public async complete(liveStreamId: string): Promise<void> {
    return this.completeWithResponseHeaders(liveStreamId).then(
      (res) => res.body
    );
  }

  /**
   * Request the completion of a live stream that is currently running. This operation is asynchronous and the live stream will stop after a few seconds.   The API adds the `EXT-X-ENDLIST` tag to the live stream's HLS manifest. This stops the live stream on the player and also stops the recording of the live stream. The API keeps the incoming connection from the streamer open for at most 1 minute, which can be used to terminate the stream.
   * Complete a live stream
   * @param liveStreamId The unique ID for the live stream you want to complete.
   */
  public async completeWithResponseHeaders(
    liveStreamId: string
  ): Promise<{ headers: ApiResponseHeaders; body: void }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling complete.'
      );
    }
    // Path Params
    const localVarPath = '/live-streams/{liveStreamId}/complete'
      .substring(1)
      .replace(
        '{' + 'liveStreamId' + '}',
        encodeURIComponent(String(liveStreamId))
      );

    queryParams.method = 'PUT';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'void',
          ''
        ) as void,
      };
    });
  }
}
