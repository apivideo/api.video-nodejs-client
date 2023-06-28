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

/**
 * Adding restream destinations is optional. However, if you set a restream destination, you must provide all attributes for each destination.
 */
export default class RestreamsRequestObject {
  /**
   * Use this parameter to define a name for the restream destination.
   */
  'name': string;
  /**
   * Use this parameter to set the RTMP URL of the restream destination.
   */
  'serverUrl': string;
  /**
   * Use this parameter to provide the unique key of the live stream that you want to restream.
   */
  'streamKey': string;

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
    return RestreamsRequestObject.attributeTypeMap;
  }
}
