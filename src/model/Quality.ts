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

export default class Quality {
  /**
   * The type of video (hls or mp4).
   */
  'type'?: QualityTypeEnum;
  /**
   * The quality of the video you have, in pixels. Choices include 360p, 480p, 720p, 1080p, and 2160p.
   */
  'quality'?: QualityQualityEnum;
  /**
   * The status of your video. Statuses include waiting - the video is waiting to be encoded. encoding - the video is in the process of being encoded. encoded - the video was successfully encoded. failed - the video failed to be encoded.
   */
  'status'?: QualityStatusEnum;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'type',
      baseName: 'type',
      type: 'QualityTypeEnum',
      format: '',
    },
    {
      name: 'quality',
      baseName: 'quality',
      type: 'QualityQualityEnum',
      format: '',
    },
    {
      name: 'status',
      baseName: 'status',
      type: 'QualityStatusEnum',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Quality.attributeTypeMap;
  }
}

export type QualityTypeEnum = 'hls' | 'mp4';
export type QualityQualityEnum =
  | '240p'
  | '360p'
  | '480p'
  | '720p'
  | '1080p'
  | '2160p';
export type QualityStatusEnum = 'waiting' | 'encoding' | 'encoded' | 'failed';
