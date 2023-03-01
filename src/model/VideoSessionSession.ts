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
import Metadata from './Metadata.js';

export default class VideoSessionSession {
  /**
   * The unique identifier for the session that you can use to track what happens during it.
   */
  'sessionId'?: string;
  /**
   * When the video session started, presented in ISO-8601 format.
   */
  'loadedAt'?: Date;
  /**
   * When the video session ended, presented in ISO-8601 format.
   */
  'endedAt'?: Date;
  /**
   * A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. You can also just use the pairs as another way to tag and categorize your videos.
   */
  'metadata'?: Array<Metadata>;

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
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSessionSession.attributeTypeMap;
  }
}
