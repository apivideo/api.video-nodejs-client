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
import AnalyticsAggregatedMetricsResponseContext from './AnalyticsAggregatedMetricsResponseContext.js';

export default class AnalyticsAggregatedMetricsResponse {
  'context': AnalyticsAggregatedMetricsResponseContext;
  'data': number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'context',
      baseName: 'context',
      type: 'AnalyticsAggregatedMetricsResponseContext',
      format: '',
    },
    {
      name: 'data',
      baseName: 'data',
      type: 'number',
      format: 'float',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AnalyticsAggregatedMetricsResponse.attributeTypeMap;
  }
}
