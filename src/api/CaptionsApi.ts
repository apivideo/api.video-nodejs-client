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

import FormData from 'form-data';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions } from '../HttpClient';
import Caption from '../model/Caption';
import CaptionsListResponse from '../model/CaptionsListResponse';
import CaptionsUpdatePayload from '../model/CaptionsUpdatePayload';
import { createBufferFromPartialData } from '../utils';

/**
 * no description
 */
export default class CaptionsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Upload a VTT file to add captions to your video. More information can be found [here](https://docs.api.video/vod/add-captions)
   * Upload a caption
   * @param videoId The unique identifier for the video you want to add a caption to.
   * @param language A valid language identifier using IETF language tags. You can use primary subtags like &#x60;en&#x60; (English), extended subtags like &#x60;fr-CA&#x60; (French, Canada), or region subtags like &#x60;zh-Hans-CN&#x60; (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example &#x60;fr-CA&#x60;. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).
   * @param file The video text track (VTT) you want to upload.
   */
  public async upload(
    videoId: string,
    language: string,
    file: Buffer | Blob | ArrayBuffer
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
    const fileName = 'file';
    const fileBuffer = createBufferFromPartialData(file);

    // Path Params
    const localVarPath = '/videos/{videoId}/captions/{language}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
      .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

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
            'Caption',
            ''
          ) as Caption
      );
  }

  /**
   * Retrieve a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a error indicating the caption was not found.

Tutorials that use the [captions endpoint](https://api.video/blog/endpoints/captions).
   * Retrieve a caption
   * @param videoId The unique identifier for the video you want captions for.
   * @param language A valid language identifier using IETF language tags. You can use primary subtags like &#x60;en&#x60; (English), extended subtags like &#x60;fr-CA&#x60; (French, Canada), or region subtags like &#x60;zh-Hans-CN&#x60; (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example &#x60;fr-CA&#x60;. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).
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
   * @param language A valid language identifier using IETF language tags. You can use primary subtags like &#x60;en&#x60; (English), extended subtags like &#x60;fr-CA&#x60; (French, Canada), or region subtags like &#x60;zh-Hans-CN&#x60; (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example &#x60;fr-CA&#x60;. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).
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
   * Delete a caption in a specific language by by video id.
   * Delete a caption
   * @param videoId The unique identifier for the video you want to delete a caption from.
   * @param language A valid language identifier using IETF language tags. You can use primary subtags like &#x60;en&#x60; (English), extended subtags like &#x60;fr-CA&#x60; (French, Canada), or region subtags like &#x60;zh-Hans-CN&#x60; (Simplified Chinese used in the PRC).  - This parameter **only accepts dashes for separators**, for example &#x60;fr-CA&#x60;. If you use a different separator in your request, the API returns an error. - When the value in your request does not match any covered language, the API returns an error. - You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).
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
   * Retrieve a list of available captions by video id.
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
}
