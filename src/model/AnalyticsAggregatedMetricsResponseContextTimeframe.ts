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

/**
 * Returns the starting and ending date-times of the period you want analytics for.
 */
export default class AnalyticsAggregatedMetricsResponseContextTimeframe {
  /**
   * Returns the starting date-time of the period you want analytics for in ATOM date-time format.
   */
  'from'?: Date;
  /**
   * Returns the starting date-time of the period you want analytics for in ATOM date-time format.
   */
  'to'?: Date;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'from',
      baseName: 'from',
      type: 'Date',
      format: 'date-time',
    },
    {
      name: 'to',
      baseName: 'to',
      type: 'Date',
      format: 'date-time',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AnalyticsAggregatedMetricsResponseContextTimeframe.attributeTypeMap;
  }
}
