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

export default class VideoThumbnailPickPayload {
  /**
   * Frame in video to be used as a placeholder before the video plays.  Example: '\"00:01:00.000\" for 1 minute into the video.' Valid Patterns:  \"hh:mm:ss.ms\" \"hh:mm:ss:frameNumber\" \"124\" (integer value is reported as seconds)  If selection is out of range, \"00:00:00.00\" will be chosen.
   */
  'timecode': string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'timecode',
      baseName: 'timecode',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoThumbnailPickPayload.attributeTypeMap;
  }
}
