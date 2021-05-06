import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { NotFound } from '../models/NotFound';
import { RawStatisticsListLiveStreamAnalyticsResponse } from '../models/RawStatisticsListLiveStreamAnalyticsResponse';
import { RawStatisticsListPlayerSessionEventsResponse } from '../models/RawStatisticsListPlayerSessionEventsResponse';
import { RawStatisticsListSessionsResponse } from '../models/RawStatisticsListSessionsResponse';

/**
 * no description
 */
export class RawStatisticsApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * List live stream player sessions
     * @param liveStreamId The unique identifier for the live stream you want to retrieve analytics for.
     * @param period Period must have one of the following formats:   - For a day : \&quot;2018-01-01\&quot;, - For a week: \&quot;2018-W01\&quot;,  - For a month: \&quot;2018-01\&quot; - For a year: \&quot;2018\&quot;  For a range period:  -  Date range: \&quot;2018-01-01/2018-01-15\&quot; 
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async listLiveStreamSessions(liveStreamId: string, period?: string, currentPage?: number, pageSize?: number): Promise<RawStatisticsListLiveStreamAnalyticsResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'liveStreamId' is not null or undefined
        if (liveStreamId === null || liveStreamId === undefined) {
            throw new Error('Required parameter liveStreamId was null or undefined when calling listLiveStreamSessions.');
        }

		
		
		
		// Path Params
    	const localVarPath = '/analytics/live-streams/{liveStreamId}'.substring(1)
            .replace('{' + 'liveStreamId' + '}', encodeURIComponent(String(liveStreamId)));

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (period !== undefined) {
            urlSearchParams.append("period", ObjectSerializer.serialize(period, "string", "period"));
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
                "RawStatisticsListLiveStreamAnalyticsResponse", ""
            ) as RawStatisticsListLiveStreamAnalyticsResponse);
    }

    /**
     * Useful to track and measure video's engagement.
     * List player session events
     * @param sessionId A unique identifier you can use to reference and track a session with.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async listSessionEvents(sessionId: string, currentPage?: number, pageSize?: number): Promise<RawStatisticsListPlayerSessionEventsResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'sessionId' is not null or undefined
        if (sessionId === null || sessionId === undefined) {
            throw new Error('Required parameter sessionId was null or undefined when calling listSessionEvents.');
        }

		
		
		// Path Params
    	const localVarPath = '/analytics/sessions/{sessionId}/events'.substring(1)
            .replace('{' + 'sessionId' + '}', encodeURIComponent(String(sessionId)));

        // Query Params
        const urlSearchParams = new URLSearchParams();

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
                "RawStatisticsListPlayerSessionEventsResponse", ""
            ) as RawStatisticsListPlayerSessionEventsResponse);
    }

    /**
     * Retrieve all available user sessions for a specific video.
     * List video player sessions
     * @param videoId The unique identifier for the video you want to retrieve session information for.
     * @param period Period must have one of the following formats:   - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018  For a range period:  -  Date range: 2018-01-01/2018-01-15 
     * @param metadata Metadata and Dynamic Metadata filter. Send an array of key value pairs you want to filter sessios with.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async listVideoSessions(videoId: string, period?: string, metadata?: Array<string>, currentPage?: number, pageSize?: number): Promise<RawStatisticsListSessionsResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling listVideoSessions.');
        }

		
		
		
		
		// Path Params
    	const localVarPath = '/analytics/videos/{videoId}'.substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (period !== undefined) {
            urlSearchParams.append("period", ObjectSerializer.serialize(period, "string", "period"));
        }
        if (metadata !== undefined) {
            urlSearchParams.append("metadata", ObjectSerializer.serialize(metadata, "Array<string>", ""));
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
                "RawStatisticsListSessionsResponse", ""
            ) as RawStatisticsListSessionsResponse);
    }

}
