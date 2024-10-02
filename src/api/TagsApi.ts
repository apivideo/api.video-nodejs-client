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

import { URLSearchParams } from 'url';
import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import ListTagsResponse from '../model/ListTagsResponse';

/**
 * no description
 */
export default class TagsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * This endpoint enables you to search for video tags in a project and see how many videos are tagged with them. If you do not define any query parameters, the endpoint lists all video tags and the numbers of times they are used in a project.
   * List all video tags
   * @param {Object} searchParams
   * @param { string } searchParams.value Use this parameter to search for specific video tags. The API filters results even on partial values, and ignores accents, uppercase, and lowercase.
   * @param { &#39;value&#39; | &#39;videoCount&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the response data. The default is &#x60;value&#x60;.  These are the available fields to sort by:  - &#x60;value&#x60;: Sorts the results based on tag values in alphabetic order. - &#x60;videoCount&#x60;: Sorts the results based on the number of times a video tag is used.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async list(args: {
    value?: string;
    sortBy?: 'value' | 'videoCount';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  }): Promise<ListTagsResponse> {
    return this.listWithResponseHeaders(args).then((res) => res.body);
  }

  /**
   * This endpoint enables you to search for video tags in a project and see how many videos are tagged with them. If you do not define any query parameters, the endpoint lists all video tags and the numbers of times they are used in a project.
   * List all video tags
   * @param {Object} searchParams
   * @param { string } searchParams.value Use this parameter to search for specific video tags. The API filters results even on partial values, and ignores accents, uppercase, and lowercase.
   * @param { &#39;value&#39; | &#39;videoCount&#39; } searchParams.sortBy Use this parameter to choose which field the API will use to sort the response data. The default is &#x60;value&#x60;.  These are the available fields to sort by:  - &#x60;value&#x60;: Sorts the results based on tag values in alphabetic order. - &#x60;videoCount&#x60;: Sorts the results based on the number of times a video tag is used.
   * @param { &#39;asc&#39; | &#39;desc&#39; } searchParams.sortOrder Use this parameter to sort results. &#x60;asc&#x60; is ascending and sorts from A to Z. &#x60;desc&#x60; is descending and sorts from Z to A.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listWithResponseHeaders({
    value,
    sortBy,
    sortOrder,
    currentPage,
    pageSize,
  }: {
    value?: string;
    sortBy?: 'value' | 'videoCount';
    sortOrder?: 'asc' | 'desc';
    currentPage?: number;
    pageSize?: number;
  }): Promise<{ headers: ApiResponseHeaders; body: ListTagsResponse }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/tags'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (value !== undefined) {
      urlSearchParams.append(
        'value',
        ObjectSerializer.serialize(value, 'string', '')
      );
    }
    if (sortBy !== undefined) {
      urlSearchParams.append(
        'sortBy',
        ObjectSerializer.serialize(sortBy, "'value' | 'videoCount'", '')
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

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'ListTagsResponse',
          ''
        ) as ListTagsResponse,
      };
    });
  }
}
