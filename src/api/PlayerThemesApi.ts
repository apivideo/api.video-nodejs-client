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
import PlayerTheme from '../model/PlayerTheme';
import PlayerThemeCreationPayload from '../model/PlayerThemeCreationPayload';
import PlayerThemeUpdatePayload from '../model/PlayerThemeUpdatePayload';
import PlayerThemesListResponse from '../model/PlayerThemesListResponse';

/**
 * no description
 */
export default class PlayerThemesApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
   * Delete a player
   * @param playerId The unique identifier for the player you want to delete.
   */
  public async delete(playerId: string): Promise<void> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/players/{playerId}'
      .substring(1)
      .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

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
   * Delete the logo associated to a player.
   * Delete logo
   * @param playerId The unique identifier for the player.
   */
  public async deleteLogo(playerId: string): Promise<void> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling deleteLogo.'
      );
    }
    // Path Params
    const localVarPath = '/players/{playerId}/logo'
      .substring(1)
      .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

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
   * Retrieve a list of all the player themes you created, as well as details about each one. Tutorials that use the [player endpoint](https://api.video/blog/endpoints/player).
   * List all player themes
   * @param {Object} searchParams
   * @param { &#39;name&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39; } searchParams.sortBy createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list({
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    sortBy?: 'name' | 'createdAt' | 'updatedAt';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  } = {}): Promise<PlayerThemesListResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/players'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

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

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'PlayerThemesListResponse',
            ''
          ) as PlayerThemesListResponse
      );
  }

  /**
   * Use a player ID to retrieve details about the player and display it for viewers.
   * Retrieve a player
   * @param playerId The unique identifier for the player you want to retrieve.
   */
  public async get(playerId: string): Promise<PlayerTheme> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/players/{playerId}'
      .substring(1)
      .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

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
            'PlayerTheme',
            ''
          ) as PlayerTheme
      );
  }

  /**
   * Use a player ID to update specific details for a player.  NOTE: It may take up to 10 min before the new player configuration is available from our CDN.
   * Update a player
   * @param playerId The unique identifier for the player.
   * @param playerThemeUpdatePayload
   */
  public async update(
    playerId: string,
    playerThemeUpdatePayload: PlayerThemeUpdatePayload = {}
  ): Promise<PlayerTheme> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling update.'
      );
    }
    if (
      playerThemeUpdatePayload === null ||
      playerThemeUpdatePayload === undefined
    ) {
      throw new Error(
        'Required parameter playerThemeUpdatePayload was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/players/{playerId}'
      .substring(1)
      .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        playerThemeUpdatePayload,
        'PlayerThemeUpdatePayload',
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
            'PlayerTheme',
            ''
          ) as PlayerTheme
      );
  }

  /**
   * Create a player for your video, and customise it.
   * Create a player
   * @param playerThemeCreationPayload
   */
  public async create(
    playerThemeCreationPayload: PlayerThemeCreationPayload = {}
  ): Promise<PlayerTheme> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (
      playerThemeCreationPayload === null ||
      playerThemeCreationPayload === undefined
    ) {
      throw new Error(
        'Required parameter playerThemeCreationPayload was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/players'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        playerThemeCreationPayload,
        'PlayerThemeCreationPayload',
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
            'PlayerTheme',
            ''
          ) as PlayerTheme
      );
  }

  /**
   * The uploaded image maximum size should be 200x100 and its weight should be 100KB.  It will be scaled down to 30px height and converted to PNG to be displayed in the player.
   * Upload a logo
   * @param playerId The unique identifier for the player.
   * @param file The name of the file you want to use for your logo.
   * @param link A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address.
   */
  public async uploadLogo(
    playerId: string,
    file: string,
    link?: string
  ): Promise<PlayerTheme> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling uploadLogo.'
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
    const localVarPath = '/players/{playerId}/logo'
      .substring(1)
      .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

    queryParams.method = 'POST';

    const formData = new FormData();

    const filename = path.basename(file);
    formData.append(
      filename,
      Buffer.isBuffer(file) ? file : createReadStream(file),
      filename
    );

    if (typeof link !== undefined) {
      formData.append('link', link);
    }

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
            'PlayerTheme',
            ''
          ) as PlayerTheme
      );
  }
}
