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

export default class AnalyticsMetricsBreakdownResponseData {
  /**
   * Returns a specific value for the dimension you selected, based on the data. For example if you select `continent` as a dimension, then `dimensionValue` returns values like `EU` or \"AZ\".
   */
  'dimensionValue'?: string;
  /**
   * Returns the data for a specific dimension value.
   */
  'metricValue'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'dimensionValue',
      baseName: 'dimensionValue',
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
    return AnalyticsMetricsBreakdownResponseData.attributeTypeMap;
  }
}
