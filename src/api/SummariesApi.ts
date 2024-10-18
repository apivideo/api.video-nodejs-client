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

import ObjectSerializer from '../ObjectSerializer';
import HttpClient, { QueryOptions, ApiResponseHeaders } from '../HttpClient';
import GetSummaries from '../model/GetSummaries';
import InlineObject from '../model/InlineObject';
import SummaryObject from '../model/SummaryObject';
import SummarySource from '../model/SummarySource';
import UpdateSummaryRequest from '../model/UpdateSummaryRequest';

/**
 * no description
 */
export default class SummariesApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Generate a title, abstract, and key takeaways for a video.
   * Generate video summary
   * @param inlineObject
   */
  public async create(inlineObject: InlineObject = {}): Promise<SummaryObject> {
    return this.createWithResponseHeaders(inlineObject).then((res) => res.body);
  }

  /**
   * Generate a title, abstract, and key takeaways for a video.
   * Generate video summary
   * @param inlineObject
   */
  public async createWithResponseHeaders(
    inlineObject: InlineObject = {}
  ): Promise<{ headers: ApiResponseHeaders; body: SummaryObject }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (inlineObject === null || inlineObject === undefined) {
      throw new Error(
        'Required parameter inlineObject was null or undefined when calling create.'
      );
    }
    // Path Params
    const localVarPath = '/summaries'.substring(1);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'applictaion/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(inlineObject, 'InlineObject', ''),
      contentType
    );

    queryParams.method = 'POST';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'SummaryObject',
          ''
        ) as SummaryObject,
      };
    });
  }

  /**
   * Get all details for a summary.
   * Get summary details
   * @param summaryId The unique identifier of the summary source you want to retrieve.
   */
  public async get(summaryId: string): Promise<SummarySource> {
    return this.getWithResponseHeaders(summaryId).then((res) => res.body);
  }

  /**
   * Get all details for a summary.
   * Get summary details
   * @param summaryId The unique identifier of the summary source you want to retrieve.
   */
  public async getWithResponseHeaders(
    summaryId: string
  ): Promise<{ headers: ApiResponseHeaders; body: SummarySource }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (summaryId === null || summaryId === undefined) {
      throw new Error(
        'Required parameter summaryId was null or undefined when calling get.'
      );
    }
    // Path Params
    const localVarPath = '/summaries/{summaryId}/source'
      .substring(1)
      .replace('{' + 'summaryId' + '}', encodeURIComponent(String(summaryId)));

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'SummarySource',
          ''
        ) as SummarySource,
      };
    });
  }

  /**
   * Update details for a summary. Note that this operation is only allowed for summary objects where `sourceStatus` is `missing`.
   * Update summary details
   * @param summaryId The unique identifier of the summary source you want to update.
   * @param updateSummaryRequest
   */
  public async update(
    summaryId: string,
    updateSummaryRequest: UpdateSummaryRequest = {}
  ): Promise<SummarySource> {
    return this.updateWithResponseHeaders(summaryId, updateSummaryRequest).then(
      (res) => res.body
    );
  }

  /**
   * Update details for a summary. Note that this operation is only allowed for summary objects where `sourceStatus` is `missing`.
   * Update summary details
   * @param summaryId The unique identifier of the summary source you want to update.
   * @param updateSummaryRequest
   */
  public async updateWithResponseHeaders(
    summaryId: string,
    updateSummaryRequest: UpdateSummaryRequest = {}
  ): Promise<{ headers: ApiResponseHeaders; body: SummarySource }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (summaryId === null || summaryId === undefined) {
      throw new Error(
        'Required parameter summaryId was null or undefined when calling update.'
      );
    }
    if (updateSummaryRequest === null || updateSummaryRequest === undefined) {
      throw new Error(
        'Required parameter updateSummaryRequest was null or undefined when calling update.'
      );
    }
    // Path Params
    const localVarPath = '/summaries/{summaryId}/source'
      .substring(1)
      .replace('{' + 'summaryId' + '}', encodeURIComponent(String(summaryId)));

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      'application/json',
    ]);
    queryParams.headers['Content-Type'] = contentType;

    queryParams.body = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        updateSummaryRequest,
        'UpdateSummaryRequest',
        ''
      ),
      contentType
    );

    queryParams.method = 'PATCH';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'SummarySource',
          ''
        ) as SummarySource,
      };
    });
  }

  /**
   * Delete a summary tied to a video.
   * Delete video summary
   * @param summaryId The unique identifier of the summary you want to delete.
   */
  public async delete(summaryId: string): Promise<void> {
    return this.deleteWithResponseHeaders(summaryId).then((res) => res.body);
  }

  /**
   * Delete a summary tied to a video.
   * Delete video summary
   * @param summaryId The unique identifier of the summary you want to delete.
   */
  public async deleteWithResponseHeaders(
    summaryId: string
  ): Promise<{ headers: ApiResponseHeaders; body: void }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (summaryId === null || summaryId === undefined) {
      throw new Error(
        'Required parameter summaryId was null or undefined when calling delete.'
      );
    }
    // Path Params
    const localVarPath = '/summaries/{summaryId}'
      .substring(1)
      .replace('{' + 'summaryId' + '}', encodeURIComponent(String(summaryId)));

    queryParams.method = 'DELETE';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'void',
          ''
        ) as void,
      };
    });
  }

  /**
   * List all summarries for your videos in a project.
   * List summaries
   */
  public async list(): Promise<GetSummaries> {
    return this.listWithResponseHeaders().then((res) => res.body);
  }

  /**
   * List all summarries for your videos in a project.
   * List summaries
   */
  public async listWithResponseHeaders(): Promise<{
    headers: ApiResponseHeaders;
    body: GetSummaries;
  }> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    // Path Params
    const localVarPath = '/summaries'.substring(1);

    queryParams.method = 'GET';

    return this.httpClient.call(localVarPath, queryParams).then((response) => {
      return {
        headers: response.headers,
        body: ObjectSerializer.deserialize(
          ObjectSerializer.parse(
            response.body,
            response.headers['content-type']
          ),
          'GetSummaries',
          ''
        ) as GetSummaries,
      };
    });
  }
}
