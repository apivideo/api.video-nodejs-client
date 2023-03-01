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

export default class LiveStreamSessionSession {
  /**
   * A unique identifier for your session. You can use this to track what happens during a specific session.
   */
  'sessionId'?: string;
  /**
   * When the session started, with the date and time presented in ISO-8601 format.
   */
  'loadedAt'?: Date;
  /**
   * When the session ended, with the date and time presented in ISO-8601 format.
   */
  'endedAt'?: Date;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'sessionId',
      baseName: 'sessionId',
      type: 'string',
      format: '',
    },
    {
      name: 'loadedAt',
      baseName: 'loadedAt',
      type: 'Date',
      format: 'date-time',
    },
    {
      name: 'endedAt',
      baseName: 'endedAt',
      type: 'Date',
      format: 'date-time',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamSessionSession.attributeTypeMap;
  }
}
