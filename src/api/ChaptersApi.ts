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
import Chapter from '../model/Chapter';
import ChaptersListResponse from '../model/ChaptersListResponse';
import NotFound from '../model/NotFound';

/**
 * no description
 */
export default class ChaptersApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Upload a VTT file to add chapters to your video. Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.
   * Upload a chapter
   * @param videoId The unique identifier for the video you want to upload a chapter for.
   * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
   * @param file The VTT file describing the chapters you want to upload.
   */
  public async upload(
    videoId: string,
    language: string,
    file: string
  ): Promise<Chapter> {
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
    const localVarPath = '/videos/{videoId}/chapters/{language}'
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
            'Chapter',
            ''
          ) as Chapter
      );
  }

  /**
   * Retrieve a chapter for a video in a specific language.  Chapters help your viewers find the sections of the video they are most interested in viewing. Tutorials that use the [chapters endpoint](https://api.video/blog/endpoints/chapters).
   * Retrieve a chapter
   * @param videoId The unique identifier for the video you want to show a chapter for.
   * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
   */
  public async get(videoId: string, language: string): Promise<Chapter> {
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
    const localVarPath = '/videos/{videoId}/chapters/{language}'
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
            'Chapter',
            ''
          ) as Chapter
      );
  }

  /**
   * Delete a chapter in a specific language by providing the video ID for the video you want to delete the chapter from and the language the chapter is in.
   * Delete a chapter
   * @param videoId The unique identifier for the video you want to delete a chapter from.
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
    const localVarPath = '/videos/{videoId}/chapters/{language}'
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
   * Retrieve a list of all chapters for a specified video.
   * List video chapters
   * @param {Object} searchParams
   * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve a list of chapters for.
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
  }): Promise<ChaptersListResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling list.'
      );
    }
    // Path Params
    const localVarPath = '/videos/{videoId}/chapters'
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
            'ChaptersListResponse',
            ''
          ) as ChaptersListResponse
      );
  }
}
