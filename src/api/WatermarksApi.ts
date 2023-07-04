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
import Watermark from '../model/Watermark';
import WatermarksListResponse from '../model/WatermarksListResponse';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class WatermarksApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Create a new watermark by uploading a `JPG` or a `PNG` image.
   * Upload a watermark
   * @param file The &#x60;.jpg&#x60; or &#x60;.png&#x60; image to be added as a watermark.
   */
  public async upload(file: string | Readable | Buffer): Promise<Watermark> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
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
    const localVarPath = '/watermarks'.substring(1);

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
            'Watermark',
            ''
          ) as Watermark
      );
  }

  /**
   * Delete a watermark.
   * Delete a watermark
   * @param watermarkId The watermark ID for the watermark you want to delete.
   */
  public async delete(watermarkId: string): Promise<void> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (watermarkId === null || watermarkId === undefined) {
      throw new Error(
        'Required parameter watermarkId was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/watermarks/{watermarkId}'
      .substring(1)
      .replace(
        '{' + 'watermarkId' + '}',
        encodeURIComponent(String(watermarkId))
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
   * List all watermarks associated with your workspace.
   * List all watermarks
   * @param {Object} searchParams
   * @param { string } searchParams.sortBy Allowed: createdAt. You can search by the time watermark were created at.
   * @param { string } searchParams.sortOrder Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list({
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    sortBy?: string;
    sortOrder?: string;
    currentPage?: number;
    pageSize?: number;
  }): Promise<WatermarksListResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/watermarks'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

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
            'WatermarksListResponse',
            ''
          ) as WatermarksListResponse
      );
  }
}
