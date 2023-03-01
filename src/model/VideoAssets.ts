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
 * Collection of details about the video object that you can use to work with the video object.
 */
export default class VideoAssets {
  /**
   * This is the manifest URL. For HTTP Live Streaming (HLS), when a HLS video stream is initiated, the first file to download is the manifest. This file has the extension M3U8, and provides the video player with information about the various bitrates available for streaming.
   */
  'hls'?: string;
  /**
   * Code to use video from a third party website
   */
  'iframe'?: string;
  /**
   * Raw url of the player.
   */
  'player'?: string;
  /**
   * Poster of the video.
   */
  'thumbnail'?: string;
  /**
   * Available only if mp4Support is enabled. Raw mp4 url.
   */
  'mp4'?: string;

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
    {
      name: 'mp4',
      baseName: 'mp4',
      type: 'string',
      format: 'uri',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoAssets.attributeTypeMap;
  }
}
