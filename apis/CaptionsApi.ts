import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { BadRequest } from '../models/BadRequest';
import { CaptionsListResponse } from '../models/CaptionsListResponse';
import { CaptionsUpdatePayload } from '../models/CaptionsUpdatePayload';
import { NotFound } from '../models/NotFound';
import { Subtitle } from '../models/Subtitle';

/**
 * no description
 */
export class CaptionsApi {
    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    /**
     * Delete a caption in a specific language by providing the video ID for the video you want to delete the caption from and the language the caption is in.
     * Delete a caption
     * @param videoId The unique identifier for the video you want to delete a caption from.
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
    	const localVarPath = '/videos/{videoId}/captions/{language}'.substring(1)
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
     * Retrieve a list of available captions for the videoId you provide.
     * List video captions
     * @param videoId The unique identifier for the video you want to retrieve a list of captions for.
     * @param currentPage Choose the number of search results to return per page. Minimum value: 1
     * @param pageSize Results per page. Allowed values 1-100, default is 25.
     */
    public async list(videoId: string, currentPage?: number, pageSize?: number): Promise<CaptionsListResponse > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling list.');
        }

		
		
		// Path Params
    	const localVarPath = '/videos/{videoId}/captions'.substring(1)
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
                "CaptionsListResponse", ""
            ) as CaptionsListResponse);
    }

    /**
     * Display a caption for a video in a specific language. If the language is available, the caption is returned. Otherwise, you will get a response indicating the caption was not found.
     * Show a caption
     * @param videoId The unique identifier for the video you want captions for.
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation
     */
    public async get(videoId: string, language: string): Promise<Subtitle > {
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
    	const localVarPath = '/videos/{videoId}/captions/{language}'.substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

        queryParams.method = 'GET';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Subtitle", ""
            ) as Subtitle);
    }

    /**
     * To have the captions on automatically, use this PATCH to set default: true.
     * Update caption
     * @param videoId The unique identifier for the video you want to have automatic captions for. 
     * @param language A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.
     * @param captionsUpdatePayload 
     */
    public async update(videoId: string, language: string, captionsUpdatePayload?: CaptionsUpdatePayload): Promise<Subtitle > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'videoId' is not null or undefined
        if (videoId === null || videoId === undefined) {
            throw new Error('Required parameter videoId was null or undefined when calling update.');
        }

		
        // verify required parameter 'language' is not null or undefined
        if (language === null || language === undefined) {
            throw new Error('Required parameter language was null or undefined when calling update.');
        }

		
		// Path Params
    	const localVarPath = '/videos/{videoId}/captions/{language}'.substring(1)
            .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)))
            .replace('{' + 'language' + '}', encodeURIComponent(String(language)));

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(captionsUpdatePayload, "CaptionsUpdatePayload", ""),
            contentType
        );;

        queryParams.method = 'PATCH';

        return this.httpClient.call(localVarPath, queryParams)
            .then(response => ObjectSerializer.deserialize(
                ObjectSerializer.parse(response.body, response.headers["content-type"]),
                "Subtitle", ""
            ) as Subtitle);
    }

    /**
     * Upload a VTT file to add captions to your video.  Read our [captioning tutorial](https://api.video/blog/tutorials/adding-captions) for more details.
     * Upload a caption
     * @param videoId The unique identifier for the video you want to add a caption to.
     * @param language A valid BCP 47 language representation.
     * @param file The video text track (VTT) you want to upload.
     */
    public async upload(videoId: string, language: string, file: File): Promise<Subtitle > {
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
    	const localVarPath = '/videos/{videoId}/captions/{language}'.substring(1)
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
                "Subtitle", ""
            ) as Subtitle);
    }

}
