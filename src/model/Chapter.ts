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

export default class Chapter {
  'uri'?: string;
  /**
   * The link to your VTT file, which contains your chapters information for the video.
   */
  'src'?: string;
  'language'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'uri',
      baseName: 'uri',
      type: 'string',
      format: '',
    },
    {
      name: 'src',
      baseName: 'src',
      type: 'string',
      format: '',
    },
    {
      name: 'language',
      baseName: 'language',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Chapter.attributeTypeMap;
  }
}
