import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { BadRequest } from '../models/BadRequest';
import { NotFound } from '../models/NotFound';
import { Player } from '../models/Player';
import { PlayerCreationPayload } from '../models/PlayerCreationPayload';
import { PlayerUpdatePayload } from '../models/PlayerUpdatePayload';
import { PlayersListResponse } from '../models/PlayersListResponse';

/**
 * no description
 */
export class PlayersApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Delete a player if you no longer need it. You can delete any player that you have the player ID for.
     * Delete a player
     * @param playerId The unique identifier for the player you want to delete.
     */
    public async delete(playerId: string): Promise<void > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new Error('Required parameter playerId was null or undefined when calling delete.');
        }

		// Path Params
    	const localVarPath = '/players/{playerId}'.substring(1)
            .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

        queryParams.method = 'DELETE';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "void", ""
            ) as void);
    }

    /**
     * Delete logo
     * @param playerId The unique identifier for the player.
     */
    public async deleteLogo(playerId: string): Promise<any > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new Error('Required parameter playerId was null or undefined when calling deleteLogo.');
        }

		// Path Params
    	const localVarPath = '/players/{playerId}/logo'.substring(1)
            .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

        queryParams.method = 'DELETE';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "any", ""
            ) as any);
    }

    /**
     * Retrieve a list of all the players you created, as well as details about each one.
     * List all players
     * @param sortBy createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.
     * @param sortOrder Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async list(sortBy?: 'createdAt' | 'updatedAt', sortOrder?: 'asc' | 'desc', currentPage?: number, pageSize?: number): Promise<PlayersListResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
		
		
		
		// Path Params
    	const localVarPath = '/players'.substring(1);

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (sortBy !== undefined) {
            urlSearchParams.append("sortBy", ObjectSerializer.serialize(sortBy, "'createdAt' | 'updatedAt'", ""));
        }
        if (sortOrder !== undefined) {
            urlSearchParams.append("sortOrder", ObjectSerializer.serialize(sortOrder, "'asc' | 'desc'", ""));
        }
        if (currentPage !== undefined) {
            urlSearchParams.append("currentPage", ObjectSerializer.serialize(currentPage, "number", ""));
        }
        if (pageSize !== undefined) {
            urlSearchParams.append("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        queryParams.searchParams = urlSearchParams;

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "PlayersListResponse", ""
            ) as PlayersListResponse);
    }

    /**
     * Use a player ID to retrieve details about the player and display it for viewers.
     * Show a player
     * @param playerId The unique identifier for the player you want to retrieve. 
     */
    public async get(playerId: string): Promise<Player > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new Error('Required parameter playerId was null or undefined when calling get.');
        }

		// Path Params
    	const localVarPath = '/players/{playerId}'.substring(1)
            .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Player", ""
            ) as Player);
    }

    /**
     * Use a player ID to update specific details for a player. NOTE: It may take up to 10 min before the new player configuration is available from our CDN.
     * Update a player
     * @param playerId The unique identifier for the player.
     * @param playerUpdatePayload 
     */
    public async update(playerId: string, playerUpdatePayload: PlayerUpdatePayload): Promise<Player > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new Error('Required parameter playerId was null or undefined when calling update.');
        }

		
        // verify required parameter 'playerUpdatePayload' is not null or undefined
        if (playerUpdatePayload === null || playerUpdatePayload === undefined) {
            throw new Error('Required parameter playerUpdatePayload was null or undefined when calling update.');
        }

		// Path Params
    	const localVarPath = '/players/{playerId}'.substring(1)
            .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(playerUpdatePayload, "PlayerUpdatePayload", ""),
            contentType
        );;

        queryParams.method = 'PATCH';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Player", ""
            ) as Player);
    }

    /**
     * Create a player for your video, and customise it.
     * Create a player
     * @param playerCreationPayload 
     */
    public async create(playerCreationPayload: PlayerCreationPayload): Promise<Player > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'playerCreationPayload' is not null or undefined
        if (playerCreationPayload === null || playerCreationPayload === undefined) {
            throw new Error('Required parameter playerCreationPayload was null or undefined when calling create.');
        }

		// Path Params
    	const localVarPath = '/players'.substring(1);

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(playerCreationPayload, "PlayerCreationPayload", ""),
            contentType
        );;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Player", ""
            ) as Player);
    }

    /**
     * The uploaded image maximum size should be 200x100 and its weight should be 200KB.  It will be scaled down to 30px height and converted to PNG to be displayed in the player.
     * Upload a logo
     * @param playerId The unique identifier for the player.
     * @param file The name of the file you want to use for your logo.
     * @param link The path to the file you want to upload and use as a logo.
     */
    public async uploadLogo(playerId: string, file: File, link: string): Promise<Player > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'playerId' is not null or undefined
        if (playerId === null || playerId === undefined) {
            throw new Error('Required parameter playerId was null or undefined when calling uploadLogo.');
        }

		
        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadLogo.');
        }

		
        // verify required parameter 'link' is not null or undefined
        if (link === null || link === undefined) {
            throw new Error('Required parameter link was null or undefined when calling uploadLogo.');
        }

		// Path Params
    	const localVarPath = '/players/{playerId}/logo'.substring(1)
            .replace('{' + 'playerId' + '}', encodeURIComponent(String(playerId)));

		// Form Params
		let localVarFormParams = new FormData();

        if (file !== undefined) {
             localVarFormParams.append('file', file, file.name);
        }
        if (link !== undefined) {
             localVarFormParams.append('link', link as any);
        }
        queryParams.form = localVarFormParams;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Player", ""
            ) as Player);
    }

}
