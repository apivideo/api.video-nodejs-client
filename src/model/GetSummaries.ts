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
import SummaryObject from './SummaryObject.js';

export default class GetSummaries {
  /**
   * An array of summary objects.
   */
  'data'?: Array<SummaryObject>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<SummaryObject>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return GetSummaries.attributeTypeMap;
  }
}
