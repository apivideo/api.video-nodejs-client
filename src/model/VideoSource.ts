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
import VideoSourceLiveStream from './VideoSourceLiveStream.js';

/**
 * Source information about the video.
 */
export default class VideoSource {
  /**
   * The URL where the video is stored.
   */
  'uri'?: string;
  'type'?: string;
  'liveStream'?: VideoSourceLiveStream;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'uri',
      baseName: 'uri',
      type: 'string',
      format: '',
    },
    {
      name: 'type',
      baseName: 'type',
      type: 'string',
      format: '',
    },
    {
      name: 'liveStream',
      baseName: 'liveStream',
      type: 'VideoSourceLiveStream',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSource.attributeTypeMap;
  }
}
