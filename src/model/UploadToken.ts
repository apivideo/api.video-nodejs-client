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

export default class UploadToken {
  /**
   * The unique identifier for the token you will use to authenticate an upload.
   */
  'token'?: string;
  /**
   * Time-to-live - how long the upload token is valid for.
   */
  'ttl'?: number;
  /**
   * When the token was created, displayed in ISO-8601 format.
   */
  'createdAt'?: Date;
  /**
   * When the token expires, displayed in ISO-8601 format.
   */
  'expiresAt'?: Date;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'token',
      baseName: 'token',
      type: 'string',
      format: '',
    },
    {
      name: 'ttl',
      baseName: 'ttl',
      type: 'number',
      format: '',
    },
    {
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
      format: 'date-time',
    },
    {
      name: 'expiresAt',
      baseName: 'expiresAt',
      type: 'Date',
      format: 'date-time',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return UploadToken.attributeTypeMap;
  }
}
