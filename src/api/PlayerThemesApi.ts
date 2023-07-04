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
import PlayerTheme from '../model/PlayerTheme';
import PlayerThemeCreationPayload from '../model/PlayerThemeCreationPayload';
import PlayerThemeUpdatePayload from '../model/PlayerThemeUpdatePayload';
import PlayerThemesListResponse from '../model/PlayerThemesListResponse';
import { Readable } from 'stream';
import { readableToBuffer } from '../HttpClient';

/**
 * no description
 */
export default class PlayerThemesApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
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
   * Retreive a player theme by player id.
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
   * Retrieve a list of all the player themes you created, as well as details about each one.
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
   * Upload an image logo for a player.
   * Upload a logo
   * @param playerId The unique identifier for the player.
   * @param file The name of the file you want to use for your logo.
   * @param link A public link that you want to advertise in your player. For example, you could add a link to your company. When a viewer clicks on your logo, they will be taken to this address.
   */
  public async uploadLogo(
    playerId: string,
    file: string | Readable | Buffer,
    link?: string
  ): Promise<PlayerTheme> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (playerId === null || playerId === undefined) {
      throw new Error(
        'Required parameter playerId was null or undefined when calling uploadLogo.'
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
    const localVarPath = '/players/{playerId}/logo'
      .substring(1)
      .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

    queryParams.method = 'POST';

    const formData = new FormData();

    formData.append(fileName, fileBuffer, fileName);

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
}
