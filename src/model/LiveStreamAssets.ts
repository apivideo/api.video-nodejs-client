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

export default class LiveStreamAssets {
  /**
   * The http live streaming (HLS) link for your live video stream.
   */
  'hls'?: string;
  /**
   * The embed code for the iframe containing your live video stream.
   */
  'iframe'?: string;
  /**
   * A link to the video player that is playing your live stream.
   */
  'player'?: string;
  /**
   * A link to the thumbnail for your video.
   */
  'thumbnail'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'hls',
      baseName: 'hls',
      type: 'string',
      format: 'uri',
    },
    {
      name: 'iframe',
      baseName: 'iframe',
      type: 'string',
      format: '',
    },
    {
      name: 'player',
      baseName: 'player',
      type: 'string',
      format: 'uri',
    },
    {
      name: 'thumbnail',
      baseName: 'thumbnail',
      type: 'string',
      format: 'uri',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamAssets.attributeTypeMap;
  }
}
