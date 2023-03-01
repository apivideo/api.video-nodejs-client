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
 * What kind of browser the viewer is using for the video session.
 */
export default class VideoSessionClient {
  /**
   * The name of the browser used to view the video session.
   */
  'name'?: string;
  /**
   * The version of the browser used to view the video session.
   */
  'version'?: string;
  /**
   * The type of client used to view the video session.
   */
  'type'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'version',
      baseName: 'version',
      type: 'string',
      format: '',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSessionClient.attributeTypeMap;
  }
}
