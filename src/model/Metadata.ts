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

export default class Metadata {
  /**
   * The constant that defines the data set.
   */
  'key'?: string;
  /**
   * A variable which belongs to the data set.
   */
  'value'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'key',
      baseName: 'key',
      type: 'string',
      format: '',
    },
    {
      name: 'value',
      baseName: 'value',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Metadata.attributeTypeMap;
  }
}
