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
import AnalyticsPlaysResponse from '../model/AnalyticsPlaysResponse';

/**
 * no description
 */
export default class AnalyticsApi {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Retrieve filtered analytics about the number of plays for your live streams in a project.
   * Get play events for live stream
   * @param {Object} searchParams
   * @param { string } searchParams.from Use this query parameter to set the start date for the time period that you want analytics for. - The API returns analytics data including the day you set in &#x60;from&#x60;. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.
   * @param { &#39;liveStreamId&#39; | &#39;emittedAt&#39; | &#39;country&#39; | &#39;deviceType&#39; | &#39;operatingSystem&#39; | &#39;browser&#39; } searchParams.dimension Use this query parameter to define the dimension that you want analytics for. - &#x60;liveStreamId&#x60;: Returns analytics based on the public live stream identifiers. - &#x60;emittedAt&#x60;: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in &#x60;from&#x60; and &#x60;to&#x60; is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals. - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers during the play event. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers during the play event. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers during the play event.
   * @param { string } searchParams.to Use this optional query parameter to set the end date for the time period that you want analytics for. - If you do not specify a &#x60;to&#x60; date, the API returns analytics data starting from the &#x60;from&#x60; date up until today, and excluding today. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.
   * @param { string } searchParams.filter Use this query parameter to filter your results to a specific live stream in a project that you want analytics for. You must use the &#x60;liveStreamId:&#x60; prefix when specifying a live stream ID.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async getLiveStreamsPlays({
    from,
    dimension,
    to,
    filter,
    currentPage,
    pageSize,
  }: {
    from: string;
    dimension:
      | 'liveStreamId'
      | 'emittedAt'
      | 'country'
      | 'deviceType'
      | 'operatingSystem'
      | 'browser';
    to?: string;
    filter?: string;
    currentPage?: number;
    pageSize?: number;
  }): Promise<AnalyticsPlaysResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (from === null || from === undefined) {
      throw new Error(
        'Required parameter from was null or undefined when calling getLiveStreamsPlays.'
      );
    }
    if (dimension === null || dimension === undefined) {
      throw new Error(
        'Required parameter dimension was null or undefined when calling getLiveStreamsPlays.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/live-streams/plays'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'string', 'date')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'string', 'date')
      );
    }
    if (dimension !== undefined) {
      urlSearchParams.append(
        'dimension',
        ObjectSerializer.serialize(
          dimension,
          "'liveStreamId' | 'emittedAt' | 'country' | 'deviceType' | 'operatingSystem' | 'browser'",
          ''
        )
      );
    }
    if (filter !== undefined) {
      urlSearchParams.append(
        'filter',
        ObjectSerializer.serialize(filter, 'string', '')
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
            'AnalyticsPlaysResponse',
            ''
          ) as AnalyticsPlaysResponse
      );
  }

  /**
   * Retrieve filtered analytics about the number of plays for your videos in a project.
   * Get play events for video
   * @param {Object} searchParams
   * @param { string } searchParams.from Use this query parameter to set the start date for the time period that you want analytics for. - The API returns analytics data including the day you set in &#x60;from&#x60;. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.
   * @param { &#39;videoId&#39; | &#39;emittedAt&#39; | &#39;country&#39; | &#39;deviceType&#39; | &#39;operatingSystem&#39; | &#39;browser&#39; } searchParams.dimension Use this query parameter to define the dimension that you want analytics for. - &#x60;videoId&#x60;: Returns analytics based on the public video identifiers. - &#x60;emittedAt&#x60;: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in &#x60;from&#x60; and &#x60;to&#x60; is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals. - &#x60;country&#x60;: Returns analytics based on the viewers&#39; country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/). - &#x60;deviceType&#x60;: Returns analytics based on the type of device used by the viewers during the play event. - &#x60;operatingSystem&#x60;: Returns analytics based on the operating system used by the viewers during the play event. - &#x60;browser&#x60;: Returns analytics based on the browser used by the viewers during the play event.
   * @param { string } searchParams.to Use this optional query parameter to set the end date for the time period that you want analytics for. - If you do not specify a &#x60;to&#x60; date, the API returns analytics data starting from the &#x60;from&#x60; date up until today, and excluding today. - The date you set must be **within the last 30 days**. - The value you provide must follow the &#x60;YYYY-MM-DD&#x60; format.
   * @param { string } searchParams.filter Use this query parameter to filter your results to a specific video in a project that you want analytics for. You must use the &#x60;videoId:&#x60; prefix when specifying a video ID.
   * @param { number } searchParams.currentPage Choose the number of search results to return per page. Minimum value: 1
   * @param { number } searchParams.pageSize Results per page. Allowed values 1-100, default is 25.
   */
  public async getVideosPlays({
    from,
    dimension,
    to,
    filter,
    currentPage,
    pageSize,
  }: {
    from: string;
    dimension:
      | 'videoId'
      | 'emittedAt'
      | 'country'
      | 'deviceType'
      | 'operatingSystem'
      | 'browser';
    to?: string;
    filter?: string;
    currentPage?: number;
    pageSize?: number;
  }): Promise<AnalyticsPlaysResponse> {
    const queryParams: QueryOptions = {};
    queryParams.headers = {};
    if (from === null || from === undefined) {
      throw new Error(
        'Required parameter from was null or undefined when calling getVideosPlays.'
      );
    }
    if (dimension === null || dimension === undefined) {
      throw new Error(
        'Required parameter dimension was null or undefined when calling getVideosPlays.'
      );
    }
    // Path Params
    const localVarPath = '/analytics/videos/plays'.substring(1);

    // Query Params
    const urlSearchParams = new URLSearchParams();

    if (from !== undefined) {
      urlSearchParams.append(
        'from',
        ObjectSerializer.serialize(from, 'string', 'date')
      );
    }
    if (to !== undefined) {
      urlSearchParams.append(
        'to',
        ObjectSerializer.serialize(to, 'string', 'date')
      );
    }
    if (dimension !== undefined) {
      urlSearchParams.append(
        'dimension',
        ObjectSerializer.serialize(
          dimension,
          "'videoId' | 'emittedAt' | 'country' | 'deviceType' | 'operatingSystem' | 'browser'",
          ''
        )
      );
    }
    if (filter !== undefined) {
      urlSearchParams.append(
        'filter',
        ObjectSerializer.serialize(filter, 'string', '')
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
            'AnalyticsPlaysResponse',
            ''
          ) as AnalyticsPlaysResponse
      );
  }
}
