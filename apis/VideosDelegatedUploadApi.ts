import {ObjectSerializer} from '../models/ObjectSerializer';
import HttpClient, { QueryOptions } from '../client/HttpClient';
import { URLSearchParams } from 'url';

import { BadRequest } from '../models/BadRequest';
import { NotFound } from '../models/NotFound';
import { TokenCreatePayload } from '../models/TokenCreatePayload';
import { TokenListResponse } from '../models/TokenListResponse';
import { UploadToken } from '../models/UploadToken';
import { Video } from '../models/Video';

/**
 * no description
 */
export class VideosDelegatedUploadApi {
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
    public async listTokens(sortBy?: 'createdAt' | 'ttl', sortOrder?: 'asc' | 'desc', currentPage?: number, pageSize?: number): Promise<TokenListResponse > {
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
     * When given a token, anyone can upload a file to the URI `https://ws.api.video/upload?token=<tokenId>`.  Example with cURL:  ```curl $ curl  --request POST --url 'https://ws.api.video/upload?token=toXXX'  --header 'content-type: multipart/form-data'  -F file=@video.mp4 ```  Or in an HTML form, with a little JavaScript to convert the form into JSON: ```html <!--form for user interaction--> <form name=\"videoUploadForm\" >   <label for=video>Video:</label>   <input type=file name=source/><br/>   <input value=\"Submit\" type=\"submit\"> </form> <div></div> <!--JS takes the form data      uses FormData to turn the response into JSON.     then uses POST to upload the video file.     Update the token parameter in the url to your upload token.     --> <script>    var form = document.forms.namedItem(\"videoUploadForm\");     form.addEventListener('submit', function(ev) {   ev.preventDefault();      var oOutput = document.querySelector(\"div\"),          oData = new FormData(form);      var oReq = new XMLHttpRequest();         oReq.open(\"POST\", \"https://ws.api.video/upload?token=toXXX\", true);      oReq.send(oData);   oReq.onload = function(oEvent) {        if (oReq.status ==201) {          oOutput.innerHTML = \"Your video is uploaded!<br/>\"  + oReq.response;        } else {          oOutput.innerHTML = \"Error \" + oReq.status + \" occurred when trying to upload your file.<br />\";        }      };    }, false);  </script> ```   ### Dealing with large files  We have created a <a href='https://api.video/blog/tutorials/uploading-large-files-with-javascript'>tutorial</a> to walk through the steps required.
     * Upload with an upload token
     * @param token The unique identifier for the token you want to use to upload a video.
     * @param file The path to the video you want to upload.
     */
    public async upload(token: string, file: File): Promise<Video > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
        // verify required parameter 'token' is not null or undefined
        if (token === null || token === undefined) {
            throw new Error('Required parameter token was null or undefined when calling upload.');
        }

		
        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling upload.');
        }

		// Path Params
    	const localVarPath = '/upload'.substring(1);

        // Query Params
        const urlSearchParams = new URLSearchParams();

        if (token !== undefined) {
            urlSearchParams.append("token", ObjectSerializer.serialize(token, "string", ""));
        }

        queryParams.searchParams = urlSearchParams;

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
                "Video", ""
            ) as Video);
    }

    /**
     * Use this endpoint to generate an upload token. You can use this token to authenticate video uploads while keeping your API key safe.
     * Generate an upload token
     * @param tokenCreatePayload 
     */
    public async createToken(tokenCreatePayload?: TokenCreatePayload): Promise<UploadToken > {
        const queryParams: QueryOptions = {};

        queryParams.headers = {};
		
		// Path Params
    	const localVarPath = '/upload-tokens'.substring(1);

		// Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        queryParams.headers["Content-Type"] = contentType;

        queryParams.body = ObjectSerializer.stringify(
            ObjectSerializer.serialize(tokenCreatePayload, "TokenCreatePayload", ""),
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
