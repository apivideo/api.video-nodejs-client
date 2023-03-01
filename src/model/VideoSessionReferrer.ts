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

export default class VideoSessionReferrer {
  /**
   * The link the viewer used to reach the video session.
   */
  'url'?: string;
  /**
   * How they arrived at the site, for example organic or paid. Organic meaning they found it themselves and paid meaning they followed a link from an advertisement.
   */
  'medium'?: string;
  /**
   * The source the referrer came from to the video session. For example if they searched through google to find the stream.
   */
  'source'?: string;
  /**
   * The search term they typed to arrive at the video session.
   */
  'searchTerm'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
      format: '',
    },
    {
      name: 'medium',
      baseName: 'medium',
      type: 'string',
      format: '',
    },
    {
      name: 'source',
      baseName: 'source',
      type: 'string',
      format: '',
    },
    {
      name: 'searchTerm',
      baseName: 'searchTerm',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSessionReferrer.attributeTypeMap;
  }
}
