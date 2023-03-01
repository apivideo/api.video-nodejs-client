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

export default class PlayerThemeAssets {
  /**
   * The name of the file containing the logo you want to use.
   */
  'logo'?: string;
  /**
   * The path to the file containing your logo.
   */
  'link'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'logo',
      baseName: 'logo',
      type: 'string',
      format: '',
    },
    {
      name: 'link',
      baseName: 'link',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return PlayerThemeAssets.attributeTypeMap;
  }
}
