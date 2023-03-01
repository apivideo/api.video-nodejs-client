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
import Quality from './Quality.js';
import VideoStatusEncodingMetadata from './VideoStatusEncodingMetadata.js';

export default class VideoStatusEncoding {
  /**
   * Whether the video is playable or not.
   */
  'playable'?: boolean;
  /**
   * Available qualities the video can be viewed in.
   */
  'qualities'?: Array<Quality>;
  'metadata'?: VideoStatusEncodingMetadata;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playable',
      baseName: 'playable',
      type: 'boolean',
      format: '',
    },
    {
      name: 'qualities',
      baseName: 'qualities',
      type: 'Array<Quality>',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'VideoStatusEncodingMetadata',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoStatusEncoding.attributeTypeMap;
  }
}
