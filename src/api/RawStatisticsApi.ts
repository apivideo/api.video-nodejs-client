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
import HttpClient, { QueryOptions } from '../HttpClient';
import RawStatisticsListLiveStreamAnalyticsResponse from '../model/RawStatisticsListLiveStreamAnalyticsResponse';
import RawStatisticsListPlayerSessionEventsResponse from '../model/RawStatisticsListPlayerSessionEventsResponse';
import RawStatisticsListSessionsResponse from '../model/RawStatisticsListSessionsResponse';

/**
 * no description
 */
export default class RawStatisticsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * List live stream player sessions
   * @param {Object} searchParams
   * @param { string } searchParams.liveStreamId The unique identifier for the live stream you want to retrieve analytics for.
   * @param { string } searchParams.period Period must have one of the following formats:  - For a day : \&quot;2018-01-01\&quot;, - For a week: \&quot;2018-W01\&quot;,  - For a month: \&quot;2018-01\&quot; - For a year: \&quot;2018\&quot; For a range period:  -  Date range: \&quot;2018-01-01/2018-01-15\&quot;
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listLiveStreamSessions({
    liveStreamId,
    period,
    currentPage,
    pageSize,
  }: {
    liveStreamId: string;
    period: string;
    currentPage?: number;
    pageSize?: number;
  }): Promise<RawStatisticsListLiveStreamAnalyticsResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (liveStreamId === null || liveStreamId === undefined) {
      throw new Error(
        'Required parameter liveStreamId was null or undefined when calling listLiveStreamSessions.'
      );
    }
    if (period === null || period === undefined) {
      throw new Error(
        'Required parameter period was null or undefined when calling listLiveStreamSessions.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/live-streams/{liveStreamId}'
      .substring(1)
      .replace(
        '{' + 'liveStreamId' + '}',
        encodeURIComponent(String(liveStreamId))
      );

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (period !== undefined) {
      urlSearchParams.append(
        'period',
        ObjectSerializer.serialize(period, 'string', 'period')
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

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'RawStatisticsListLiveStreamAnalyticsResponse',
            ''
          ) as RawStatisticsListLiveStreamAnalyticsResponse
      );
  }

  /**
   * Useful to track and measure video's engagement.
   * List player session events
   * @param {Object} searchParams
   * @param { string } searchParams.sessionId A unique identifier you can use to reference and track a session with.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listSessionEvents({
    sessionId,
    currentPage,
    pageSize,
  }: {
    sessionId: string;
    currentPage?: number;
    pageSize?: number;
  }): Promise<RawStatisticsListPlayerSessionEventsResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (sessionId === null || sessionId === undefined) {
      throw new Error(
        'Required parameter sessionId was null or undefined when calling listSessionEvents.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/sessions/{sessionId}/events'
      .substring(1)
      .replace('{' + 'sessionId' + '}', encodeURIComponent(String(sessionId)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

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

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'RawStatisticsListPlayerSessionEventsResponse',
            ''
          ) as RawStatisticsListPlayerSessionEventsResponse
      );
  }

  /**
   * Retrieve all available user sessions for a specific video. Tutorials that use the [analytics endpoint](https://api.video/blog/endpoints/analytics).
   * List video player sessions
   * @param {Object} searchParams
   * @param { string } searchParams.videoId The unique identifier for the video you want to retrieve session information for.
   * @param { string } searchParams.period Period must have one of the following formats:  - For a day : 2018-01-01, - For a week: 2018-W01,  - For a month: 2018-01 - For a year: 2018 For a range period:  -  Date range: 2018-01-01/2018-01-15
   * @param { { [key: string]: string; } } searchParams.metadata Metadata and [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) filter. Send an array of key value pairs you want to filter sessios with.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async listVideoSessions({
    videoId,
    period,
    metadata,
    currentPage,
    pageSize,
  }: {
    videoId: string;
    period: string;
    metadata?: { [key: string]: string };
    currentPage?: number;
    pageSize?: number;
  }): Promise<RawStatisticsListSessionsResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (videoId === null || videoId === undefined) {
      throw new Error(
        'Required parameter videoId was null or undefined when calling listVideoSessions.'
      );
    }
    if (period === null || period === undefined) {
      throw new Error(
        'Required parameter period was null or undefined when calling listVideoSessions.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/videos/{videoId}'
      .substring(1)
      .replace('{' + 'videoId' + '}', encodeURIComponent(String(videoId)));

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (period !== undefined) {
      urlSearchParams.append(
        'period',
        ObjectSerializer.serialize(period, 'string', 'period')
      );
    }
    if (metadata !== undefined) {
      if (typeof metadata !== 'object') {
        throw new Error(`${metadata} is not an object`);
      }
      Object.keys(metadata).forEach((k) =>
        urlSearchParams.append(
          'metadata[' + k + ']',
          ObjectSerializer.serialize(metadata[k], 'string', '')
        )
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

    return this.httpClient
      .call(localVarPath, queryParams)
      .then(
        (response) =>
          ObjectSerializer.deserialize(
            ObjectSerializer.parse(
              response.body,
              response.headers['content-type']
            ),
            'RawStatisticsListSessionsResponse',
            ''
          ) as RawStatisticsListSessionsResponse
      );
  }
}
