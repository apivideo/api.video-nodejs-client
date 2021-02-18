import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { Account } from '../models/Account';
import { NotFound } from '../models/NotFound';

/**
 * no description
 */
export class AccountApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Deprecated. Authenticate and get a token, then you can use the bearer token here to retrieve details about your account.
     * Show account
     */
    public async get(): Promise<Account > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		// Path Params
    	const localVarPath = '/account'.substring(1);

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Account", ""
            ) as Account);
    }

}
