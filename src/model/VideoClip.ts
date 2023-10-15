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
 * Use this object to create a smaller clip from a video you upload.  - You can only create video clips in the same request where you create the video container. - You cannot update the starting or ending timestamps of a video clip after you created the video container. - When you upload a video file into a container where you defined a starting and ending timestamp, the API trims the video according to those timestamps to create a clip.
 */
export default class VideoClip {
  /**
   * The timestamp that defines the beginning of the video clip you want to create. The value must follow the `HH:MM:SS` format.
   */
  'startTimecode'?: string;
  /**
   * The timestamp that defines the end of the video clip you want to create. The value must follow the `HH:MM:SS` format.
   */
  'endTimecode'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'startTimecode',
      baseName: 'startTimecode',
      type: 'string',
      format: '',
    },
    {
      name: 'endTimecode',
      baseName: 'endTimecode',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoClip.attributeTypeMap;
  }
}
