import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { BadRequest } from '../models/BadRequest';
import { NotFound } from '../models/NotFound';
import { TokenCreationPayload } from '../models/TokenCreationPayload';
import { TokenListResponse } from '../models/TokenListResponse';
import { UploadToken } from '../models/UploadToken';

/**
 * no description
 */
export class UploadTokensApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Delete an existing upload token. This is especially useful for tokens you may have created that do not expire.
     * Delete an upload token
     * @param uploadToken The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.
     */
    public async deleteToken(uploadToken: string): Promise<void > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'uploadToken' is not null or undefined
        if (uploadToken === null || uploadToken === undefined) {
            throw new Error('Required parameter uploadToken was null or undefined when calling deleteToken.');
        }

		// Path Params
    	const localVarPath = '/upload-tokens/{uploadToken}'.substring(1)
            .replace('{' + 'uploadToken' + '}', encodeURIComponent(String(uploadToken)));

        queryParams.method = 'DELETE';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "void", ""
            ) as void);
    }

    /**
     * A delegated token is used to allow secure uploads without exposing your API key. Use this endpoint to retrieve a list of all currently active delegated tokens.
     * List all active upload tokens.
     * @param sortBy Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.
     * @param sortOrder Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async list(sortBy?: 'createdAt' | 'ttl', sortOrder?: 'asc' | 'desc', currentPage?: number, pageSize?: number): Promise<TokenListResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
		
		
		
		// Path Params
    	const localVarPath = '/upload-tokens'.substring(1);

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (sortBy !== undefined) {
            urlSearchParams.append("sortBy", ObjectSerializer.serialize(sortBy, "'createdAt' | 'ttl'", ""));
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
                "TokenListResponse", ""
            ) as TokenListResponse);
    }

    /**
     * You can retrieve details about a specific upload token if you have the unique identifier for the upload token. Add it in the path of the endpoint. Details include time-to-live (ttl), when the token was created, and when it will expire.
     * Show upload token
     * @param uploadToken The unique identifier for the token you want information about.
     */
    public async getToken(uploadToken: string): Promise<UploadToken > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'uploadToken' is not null or undefined
        if (uploadToken === null || uploadToken === undefined) {
            throw new Error('Required parameter uploadToken was null or undefined when calling getToken.');
        }

		// Path Params
    	const localVarPath = '/upload-tokens/{uploadToken}'.substring(1)
            .replace('{' + 'uploadToken' + '}', encodeURIComponent(String(uploadToken)));

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "UploadToken", ""
            ) as UploadToken);
    }

    /**
     * Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe.
     * Generate an upload token
     * @param tokenCreationPayload 
     */
    public async createToken(tokenCreationPayload: TokenCreationPayload): Promise<UploadToken > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'tokenCreationPayload' is not null or undefined
        if (tokenCreationPayload === null || tokenCreationPayload === undefined) {
            throw new Error('Required parameter tokenCreationPayload was null or undefined when calling createToken.');
        }

		// Path Params
    	const localVarPath = '/upload-tokens'.substring(1);

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(tokenCreationPayload, "TokenCreationPayload", ""),
            contentType
        );;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "UploadToken", ""
            ) as UploadToken);
    }

}
