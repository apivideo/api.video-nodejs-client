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
 * The location of the viewer.
 */
export default class VideoSessionLocation {
  /**
   * The country of the viewer.
   */
  'country'?: string;
  /**
   * The city of the viewer.
   */
  'city'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'country',
      baseName: 'country',
      type: 'string',
      format: '',
    },
    {
      name: 'city',
      baseName: 'city',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSessionLocation.attributeTypeMap;
  }
}
