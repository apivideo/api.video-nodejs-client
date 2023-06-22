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

export default class AnalyticsData {
  /**
   * Shows a value for the property you have specified for `dimension` in your request. For example, if you requested `dimension=videoId`, each `value` field in the response returns a different videoId.
   */
  'value': string;
  /**
   * Shows the number of play events for one specific `value`.
   */
  'plays': number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'value',
      baseName: 'value',
      type: 'string',
      format: '',
    },
    {
      name: 'plays',
      baseName: 'plays',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return AnalyticsData.attributeTypeMap;
  }
}
