import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { BadRequest } from '../models/BadRequest';
import { Chapter } from '../models/Chapter';
import { ChaptersListResponse } from '../models/ChaptersListResponse';
import { NotFound } from '../models/NotFound';

/**
 * no description
 */
export class ChaptersApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Delete a chapter
     * @param videoId The unique identifier for the video you want to delete a chapter from. 
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     */
    public async delete(videoId: string, language: string): Promise<void > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling delete.');
        }

		
        // verify required parameter 'language' is not null or undefined
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling delete.');
        }

		// Path Params
    	const localVarPath = '/videos/{videoId}/chapters/{language}'.substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

        queryParams.method = 'DELETE';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "void", ""
            ) as void);
    }

    /**
     * Retrieve a list of all chapters for a specified video.
     * List video chapters
     * @param videoId The unique identifier for the video you want to retrieve a list of chapters for.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async list(videoId: string, currentPage?: number, pageSize?: number): Promise<ChaptersListResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling list.');
        }

		
		
		// Path Params
    	const localVarPath = '/videos/{videoId}/chapters'.substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

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
                "ChaptersListResponse", ""
            ) as ChaptersListResponse);
    }

    /**
     * Show a chapter
     * @param videoId The unique identifier for the video you want to show a chapter for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     */
    public async get(videoId: string, language: string): Promise<Chapter > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling get.');
        }

		
        // verify required parameter 'language' is not null or undefined
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling get.');
        }

		// Path Params
    	const localVarPath = '/videos/{videoId}/chapters/{language}'.substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Chapter", ""
            ) as Chapter);
    }

    /**
     * Chapters help break the video into sections. Read our [tutorial](https://api.video/blog/tutorials/adding-chapters-to-your-videos) for more details.
     * Upload a chapter
     * @param videoId The unique identifier for the video you want to upload a chapter for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     * @param file The VTT file describing the chapters you want to upload.
     */
    public async upload(videoId: string, language: string, file: File): Promise<Chapter > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling upload.');
        }

		
        // verify required parameter 'language' is not null or undefined
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling upload.');
        }

		
        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling upload.');
        }

		// Path Params
    	const localVarPath = '/videos/{videoId}/chapters/{language}'.substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

		// Form Params
		let localVarFormParams = new FormData();

        if (file !== undefined) {
             localVarFormParams.append('file', file, file.name);
        }
        queryParams.form = localVarFormParams;

        queryParams.method = 'POST';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Chapter", ""
            ) as Chapter);
    }

}
