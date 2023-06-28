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

export default class RestreamsResponseObject {
  /**
   * Returns the name of a restream destination.
   */
  'name'?: string;
  /**
   * Returns the RTMP URL of a restream destination.
   */
  'serverUrl'?: string;
  /**
   * Returns the unique key of the live stream that is set up for restreaming.
   */
  'streamKey'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'serverUrl',
      baseName: 'serverUrl',
      type: 'string',
      format: '',
    },
    {
      name: 'streamKey',
      baseName: 'streamKey',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return RestreamsResponseObject.attributeTypeMap;
  }
}
