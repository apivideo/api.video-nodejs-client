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
import NotFound from '../model/NotFound';
import Watermark from '../model/Watermark';
import WatermarksListResponse from '../model/WatermarksListResponse';

/**
 * no description
 */
export default class WatermarksApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Delete a watermark. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
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
   * List all watermarks. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
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

  /**
   * Create a new watermark by uploading a .jpg or a .png image. A watermark is a static image overlapping a video used as a \"stamp\" to limit leetching.
   * Upload a watermark
   * @param file The .jpg or .png image to be added as a watermark.
   */
  public async upload(file: string): Promise<Watermark> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (!existsSync(file)) {
      throw new Error(`${file} must be a readable source file`);
    }

    const length = statSync(file).size;
    if (length <= 0) {
      throw new Error(`${file} is empty`);
    }
    // Path Params
    const localVarPath = '/watermarks'.substring(1);

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
            'Watermark',
            ''
          ) as Watermark
      );
  }
}
