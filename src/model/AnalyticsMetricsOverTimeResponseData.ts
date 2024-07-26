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

import AttributeType from './AttributeType.js';

export default class AnalyticsMetricsOverTimeResponseData {
  /**
   * Returns the timestamp of the event that belongs to a specific metric in ATOM date-time format. For example, if you set `play` with an `hour` interval in your request, then `emittedAt` returns the hourly timestamps of every play event within the timeframe you defined.
   */
  'emittedAt'?: string;
  /**
   * Returns the data for a specific metric value.
   */
  'metricValue'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'emittedAt',
      baseName: 'emittedAt',
      type: 'string',
      format: '',
    },
    {
      name: 'metricValue',
      baseName: 'metricValue',
      type: 'number',
      format: 'float',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AnalyticsMetricsOverTimeResponseData.attributeTypeMap;
  }
}
