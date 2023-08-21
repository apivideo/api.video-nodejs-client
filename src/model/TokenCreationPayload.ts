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

export default class TokenCreationPayload {
  /**
   * Time in seconds that the token will be active. A value of 0 means that the token has no exipration date. The default is to have no expiration.
   */
  'ttl'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'ttl',
      baseName: 'ttl',
      type: 'number',
      format: '',
      defaultValue: 0,
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return TokenCreationPayload.attributeTypeMap;
  }
}
