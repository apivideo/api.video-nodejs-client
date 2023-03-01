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
 * The operating system the viewer is on.
 */
export default class VideoSessionOs {
  /**
   * The name of the operating system.
   */
  'name'?: string;
  /**
   * The nickname for the operating system, often representing the version.
   */
  'shortname'?: string;
  /**
   * The version of the operating system.
   */
  'version'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'shortname',
      baseName: 'shortname',
      type: 'string',
      format: '',
    },
    {
      name: 'version',
      baseName: 'version',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSessionOs.attributeTypeMap;
  }
}
