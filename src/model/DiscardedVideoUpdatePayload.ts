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

export default class DiscardedVideoUpdatePayload {
  /**
   * Use this parameter to restore a discarded video when you have the Video Restore feature enabled. This parameter only accepts `false` as a value!
   */
  'discarded'?: boolean;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'discarded',
      baseName: 'discarded',
      type: 'boolean',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return DiscardedVideoUpdatePayload.attributeTypeMap;
  }
}
