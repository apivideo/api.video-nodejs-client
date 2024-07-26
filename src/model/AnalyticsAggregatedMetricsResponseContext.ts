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
import AnalyticsAggregatedMetricsResponseContextTimeframe from './AnalyticsAggregatedMetricsResponseContextTimeframe.js';

export default class AnalyticsAggregatedMetricsResponseContext {
  /**
   * Returns the metric you selected.
   */
  'metric'?: AnalyticsAggregatedMetricsResponseContextMetricEnum;
  /**
   * Returns the aggregation you selected.
   */
  'aggregation'?: AnalyticsAggregatedMetricsResponseContextAggregationEnum;
  'timeframe'?: AnalyticsAggregatedMetricsResponseContextTimeframe;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'metric',
      baseName: 'metric',
      type: 'AnalyticsAggregatedMetricsResponseContextMetricEnum',
      format: '',
    },
    {
      name: 'aggregation',
      baseName: 'aggregation',
      type: 'AnalyticsAggregatedMetricsResponseContextAggregationEnum',
      format: '',
    },
    {
      name: 'timeframe',
      baseName: 'timeframe',
      type: 'AnalyticsAggregatedMetricsResponseContextTimeframe',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AnalyticsAggregatedMetricsResponseContext.attributeTypeMap;
  }
}

export type AnalyticsAggregatedMetricsResponseContextMetricEnum =
  | 'play'
  | 'start'
  | 'end'
  | 'impression'
  | 'impression-time'
  | 'watch-time';
export type AnalyticsAggregatedMetricsResponseContextAggregationEnum =
  | 'count'
  | 'rate'
  | 'total'
  | 'average'
  | 'sum';
