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
import AccessToken from '../model/AccessToken';
import AuthenticatePayload from '../model/AuthenticatePayload';
import BadRequest from '../model/BadRequest';
import RefreshTokenPayload from '../model/RefreshTokenPayload';

/**
 * no description
 */
export default class AuthenticationApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication. All tutorials using the [authentication endpoint](https://api.video/blog/endpoints/authenticate)
   * Authenticate
   * @param authenticatePayload
   */
  public async authenticate(
    authenticatePayload: AuthenticatePayload
  ): Promise<AccessToken> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (authenticatePayload === null || authenticatePayload === undefined) {
      throw new Error(
        'Required parameter authenticatePayload was null or undefined when calling authenticate.'
      );
    }
    // Path Params
    const localVarPath = '/auth/api-key'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        authenticatePayload,
        'AuthenticatePayload',
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
            'AccessToken',
            ''
          ) as AccessToken
      );
  }
  /**
   * Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token.
   * Refresh token
   * @param refreshTokenPayload
   */
  public async refresh(
    refreshTokenPayload: RefreshTokenPayload
  ): Promise<AccessToken> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (refreshTokenPayload === null || refreshTokenPayload === undefined) {
      throw new Error(
        'Required parameter refreshTokenPayload was null or undefined when calling refresh.'
      );
    }
    // Path Params
    const localVarPath = '/auth/refresh'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        refreshTokenPayload,
        'RefreshTokenPayload',
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
            'AccessToken',
            ''
          ) as AccessToken
      );
  }
}
