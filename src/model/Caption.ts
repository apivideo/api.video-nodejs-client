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

export default class Caption {
  'uri'?: string;
  'src'?: string;
  'srclang'?: string;
  /**
   * Whether you will have subtitles or not. True for yes you will have subtitles, false for no you will not have subtitles.
   */
  '_default'?: boolean;

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
      name: 'srclang',
      baseName: 'srclang',
      type: 'string',
      format: '',
    },
    {
      name: '_default',
      baseName: 'default',
      type: 'boolean',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Caption.attributeTypeMap;
  }
}
