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
 * What type of device the user is on when in the video session.
 */
export default class VideoSessionDevice {
  /**
   * What the type is like desktop, laptop, mobile.
   */
  'type'?: string;
  /**
   * If known, what the brand of the device is, like Apple, Dell, etc.
   */
  'vendor'?: string;
  /**
   * The specific model of the device, if known.
   */
  'model'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
      format: '',
    },
    {
      name: 'vendor',
      baseName: 'vendor',
      type: 'string',
      format: '',
    },
    {
      name: 'model',
      baseName: 'model',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSessionDevice.attributeTypeMap;
  }
}
