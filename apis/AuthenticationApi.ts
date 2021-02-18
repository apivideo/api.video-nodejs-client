import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { AccessToken } from '../models/AccessToken';
import { AuthenticatePayload } from '../models/AuthenticatePayload';
import { BadRequest } from '../models/BadRequest';
import { RefreshTokenPayload } from '../models/RefreshTokenPayload';

/**
 * no description
 */
export class AuthenticationApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * To get started, submit your API key in the body of your request. api.video returns an access token that is valid for one hour (3600 seconds). A refresh token is also returned. View a [tutorial](https://api.video/blog/tutorials/authentication-tutorial) on authentication.
     * Authenticate
     * @param authenticatePayload 
     */
    public async authenticate(authenticatePayload?: AuthenticatePayload): Promise<AccessToken > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
		// Path Params
    	const localVarPath = '/auth/api-key'.substring(1);

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(authenticatePayload, "AuthenticatePayload", ""),
            contentType
        );;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "AccessToken", ""
            ) as AccessToken);
    }

    /**
     * Use the refresh endpoint with the refresh token you received when you first authenticated using the api-key endpoint. Send the refresh token in the body of your request. The api.video API returns a new access token that is valid for one hour (3600 seconds) and a new refresh token.  
     * Refresh token
     * @param refreshTokenPayload 
     */
    public async refresh(refreshTokenPayload?: RefreshTokenPayload): Promise<AccessToken > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
		// Path Params
    	const localVarPath = '/auth/refresh'.substring(1);

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(refreshTokenPayload, "RefreshTokenPayload", ""),
            contentType
        );;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "AccessToken", ""
            ) as AccessToken);
    }

}
