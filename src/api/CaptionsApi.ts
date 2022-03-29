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
import ProgressiveSession from '../model/ProgressiveSession';
import BadRequest from '../model/BadRequest';
import Caption from '../model/Caption';
import CaptionsListResponse from '../model/CaptionsListResponse';
import CaptionsUpdatePayload from '../model/CaptionsUpdatePayload';
import NotFound from '../model/NotFound';

/**
 * no description
 */
export default class CaptionsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
   * Delete a caption
   * @param videoId The unique identifier for the video you want to delete a caption from.
   * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
   */
  public async delete(videoId: string, language: string): Promise<void> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling delete.'
      );
    }
    if (language === null || language === undefined) {
      throw new Error(
        'Required parameter language was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/captions/{language}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
      .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

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
   * Retrieve a list of available captions for the videoId you provide.
   * List video captions
   * @param {Object} searchParams
   * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve a list of captions for.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list({
    videoId,
    currentPage,
    pageSize,
  }: {
    videoId: string;
    currentPage?: number;
    pageSize?: number;
  }): Promise<CaptionsListResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling list.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/captions'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

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
            'CaptionsListResponse',
            ''
          ) as CaptionsListResponse
      );
  }

  /**
   * Retrieve a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a error indicating the caption was not found.

Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).
   * Retrieve a caption
   * @param videoId The unique identifier for the video you want captions for.
   * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation
   */
  public async get(videoId: string, language: string): Promise<Caption> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling get.'
      );
    }
    if (language === null || language === undefined) {
      throw new Error(
        'Required parameter language was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/captions/{language}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
      .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

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
            'Caption',
            ''
          ) as Caption
      );
  }

  /**
   * To have the captions on automatically, use this method to set default: true.
   * Update a caption
   * @param videoId The unique identifier for the video you want to have automatic captions for.
   * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
   * @param captionsUpdatePayload
   */
  public async update(
    videoId: string,
    language: string,
    captionsUpdatePayload: CaptionsUpdatePayload = {}
  ): Promise<Caption> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling update.'
      );
    }
    if (language === null || language === undefined) {
      throw new Error(
        'Required parameter language was null or undefined when calling update.'
      );
    }
    if (captionsUpdatePayload === null || captionsUpdatePayload === undefined) {
      throw new Error(
        'Required parameter captionsUpdatePayload was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/captions/{language}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
      .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        captionsUpdatePayload,
        'CaptionsUpdatePayload',
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
            'Caption',
            ''
          ) as Caption
      );
  }

  /**
   * Upload a VTT file to add captions to your video.  Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.
   * Upload a caption
   * @param videoId The unique identifier for the video you want to add a caption to.
   * @param language A valid BCP 47 language representation.
   * @param file The video text track (VTT) you want to upload.
   */
  public async upload(
    videoId: string,
    language: string,
    file: string
  ): Promise<Caption> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling upload.'
      );
    }
    if (language === null || language === undefined) {
      throw new Error(
        'Required parameter language was null or undefined when calling upload.'
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
    const localVarPath = '/videos/{videoId}/captions/{language}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
      .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

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
            'Caption',
            ''
          ) as Caption
      );
  }
}
