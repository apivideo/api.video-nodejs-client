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

export default class LiveStreamSessionReferrer {
  /**
   * The website the viewer of the live stream was referred to in order to view the live stream.
   */
  'url'?: string;
  /**
   * The type of search that brought the viewer to the live stream. Organic would be they found it on their own, paid would be they found it via an advertisement.
   */
  'medium'?: string;
  /**
   * Where the viewer came from to see the live stream (usually where they searched from).
   */
  'source'?: string;
  /**
   * What term they searched for that led them to the live stream.
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
    return LiveStreamSessionReferrer.attributeTypeMap;
  }
}
