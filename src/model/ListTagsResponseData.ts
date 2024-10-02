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

export default class ListTagsResponseData {
  /**
   * Returns the value of a video tag used in your project.
   */
  'value'?: string;
  /**
   * Returns the number of times a video tag is used.
   */
  'videoCount'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'value',
      baseName: 'value',
      type: 'string',
      format: '',
    },
    {
      name: 'videoCount',
      baseName: 'videoCount',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return ListTagsResponseData.attributeTypeMap;
  }
}
