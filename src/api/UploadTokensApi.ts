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

import { URLSearchParams } from 'url';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions } from '../HttpClient';
import TokenCreationPayload from '../model/TokenCreationPayload';
import TokenListResponse from '../model/TokenListResponse';
import UploadToken from '../model/UploadToken';

/**
 * no description
 */
export default class UploadTokensApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Generates an upload token that can be used to replace the API Key. More information can be found [here](https://docs.api.video/reference/upload-tokens)
   * Generate an upload token
   * @param tokenCreationPayload
   */
  public async createToken(
    tokenCreationPayload: TokenCreationPayload = {}
  ): Promise<UploadToken> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (tokenCreationPayload === null || tokenCreationPayload === undefined) {
      throw new Error(
        'Required parameter tokenCreationPayload was null or undefined when calling createToken.'
      );
    }
    // Path Params
    const localVarPath = '/upload-tokens'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        tokenCreationPayload,
        'TokenCreationPayload',
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
            'UploadToken',
            ''
          ) as UploadToken
      );
  }

  /**
   * Retrieve details about a specific upload token by id.
   * Retrieve upload token
   * @param uploadToken The unique identifier for the token you want information about.
   */
  public async getToken(uploadToken: string): Promise<UploadToken> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (uploadToken === null || uploadToken === undefined) {
      throw new Error(
        'Required parameter uploadToken was null or undefined when calling getToken.'
      );
    }
    // Path Params
    const localVarPath = '/upload-tokens/{uploadToken}'
      .substring(1)
      .replace(
        '{' + 'uploadToken' + '}',
        encodeURIComponent(String(uploadToken))
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
            'UploadToken',
            ''
          ) as UploadToken
      );
  }

  /**
   * Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.
   * Delete an upload token
   * @param uploadToken The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.
   */
  public async deleteToken(uploadToken: string): Promise<void> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (uploadToken === null || uploadToken === undefined) {
      throw new Error(
        'Required parameter uploadToken was null or undefined when calling deleteToken.'
      );
    }
    // Path Params
    const localVarPath = '/upload-tokens/{uploadToken}'
      .substring(1)
      .replace(
        '{' + 'uploadToken' + '}',
        encodeURIComponent(String(uploadToken))
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
   * Retrieve a list of all currently active delegated tokens.
   * List all active upload tokens
   * @param {Object} searchParams
   * @param { &#39;createdAt&#39; | &#39;ttl&#39; } searchParams.sortBy Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list({
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    sortBy?: 'createdAt' | 'ttl';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  } = {}): Promise<TokenListResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/upload-tokens'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(sortBy, "'createdAt' | 'ttl'", '')
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
            'TokenListResponse',
            ''
          ) as TokenListResponse
      );
  }
}
