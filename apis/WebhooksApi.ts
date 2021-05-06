import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { BadRequest } from '../models/BadRequest';
import { NotFound } from '../models/NotFound';
import { Webhook } from '../models/Webhook';
import { WebhooksCreationPayload } from '../models/WebhooksCreationPayload';
import { WebhooksListResponse } from '../models/WebhooksListResponse';

/**
 * no description
 */
export class WebhooksApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * This endpoint will delete the indicated webhook.
     * Delete a Webhook
     * @param webhookId The webhook you wish to delete.
     */
    public async delete(webhookId: string): Promise<void > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling delete.');
        }

		// Path Params
    	const localVarPath = '/webhooks/{webhookId}'.substring(1)
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

        queryParams.method = 'DELETE';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "void", ""
            ) as void);
    }

    /**
     * This call provides the same JSON information provided on Webjhook creation.
     * Show Webhook details
     * @param webhookId The unique webhook you wish to retreive details on.
     */
    public async get(webhookId: string): Promise<Webhook > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'webhookId' is not null or undefined
        if (webhookId === null || webhookId === undefined) {
            throw new Error('Required parameter webhookId was null or undefined when calling get.');
        }

		// Path Params
    	const localVarPath = '/webhooks/{webhookId}'.substring(1)
            .replace('{' + 'webhookId' + '}', encodeURIComponent(String(webhookId)));

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Webhook", ""
            ) as Webhook);
    }

    /**
     * Requests to this endpoint return a list of your webhooks (with all their details). You can filter what the webhook list that the API returns using the parameters described below.
     * List all webhooks
     * @param events The webhook event that you wish to filter on.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async list(events?: string, currentPage?: number, pageSize?: number): Promise<WebhooksListResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
		
		
		// Path Params
    	const localVarPath = '/webhooks'.substring(1);

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (events !== undefined) {
            urlSearchParams.append("events", ObjectSerializer.serialize(events, "string", ""));
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
                "WebhooksListResponse", ""
            ) as WebhooksListResponse);
    }

    /**
     * Webhooks can push notifications to your server, rather than polling api.video for changes. We currently offer one event, the ```video.encoding.quality.completed``` event.  When a new video is uploaded into your account, it will be encoded into several different HLS sizes/bitrates.  When each version is encoded, your webhook will get a notification.  It will look like ```{ \\\"type\\\": \\\"video.encoding.quality.completed\\\", \\\"emittedAt\\\": \\\"2021-01-29T16:46:25.217+01:00\\\", \\\"videoId\\\": \\\"viXXXXXXXX\\\", \\\"encoding\\\": \\\"hls\\\", \\\"quality\\\": \\\"720p\\\"} ```. This request says that the 720p HLS encoding was completed.
     * Create Webhook
     * @param webhooksCreationPayload 
     */
    public async create(webhooksCreationPayload: WebhooksCreationPayload): Promise<Webhook > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'webhooksCreationPayload' is not null or undefined
        if (webhooksCreationPayload === null || webhooksCreationPayload === undefined) {
            throw new Error('Required parameter webhooksCreationPayload was null or undefined when calling create.');
        }

		// Path Params
    	const localVarPath = '/webhooks'.substring(1);

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(webhooksCreationPayload, "WebhooksCreationPayload", ""),
            contentType
        );;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Webhook", ""
            ) as Webhook);
    }

}
