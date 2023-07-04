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

import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions } from '../HttpClient';
import AccessToken from '../model/AccessToken';
import AuthenticatePayload from '../model/AuthenticatePayload';
import RefreshTokenPayload from '../model/RefreshTokenPayload';

/**
 * no description
 */
export default class AdvancedAuthenticationApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Returns a bearer token that can be used to authenticate other endpoint.  You can find the tutorial on using the disposable bearer token [here](https://docs.api.video/reference/disposable-bearer-token-authentication).
   * Get Bearer Token
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
   * Accepts the old bearer token and returns a new bearer token that can be used to authenticate other endpoint.  You can find the tutorial on using the disposable bearer token [here](https://docs.api.video/reference/disposable-bearer-token-authentication).
   * Refresh Bearer Token
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
