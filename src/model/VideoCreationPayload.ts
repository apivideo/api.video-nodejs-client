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
import Metadata from './Metadata.js';
import VideoClip from './VideoClip.js';
import VideoWatermark from './VideoWatermark.js';

export default class VideoCreationPayload {
  /**
   * The title of your new video.
   */
  'title': string;
  /**
   * A brief description of your video.
   */
  'description'?: string;
  /**
   * You can either add a video already on the web, by entering the URL of the video, or you can also enter the `videoId` of one of the videos you already have on your api.video acccount, and this will generate a copy of your video. Creating a copy of a video can be especially useful if you want to keep your original video and trim or apply a watermark onto the copy you would create.
   */
  'source'?: string;
  /**
   * Default: True. If set to `false` the video will become private. More information on private videos can be found [here](https://docs.api.video/docs/private-videos)
   */
  '_public'?: boolean;
  /**
   * Indicates if your video is a 360/immersive video.
   */
  'panoramic'?: boolean;
  /**
   * Enables mp4 version in addition to streamed version.
   */
  'mp4Support'?: boolean;
  /**
   * The unique identification number for your video player.
   */
  'playerId'?: string;
  /**
   * A list of tags you want to use to describe your video.
   */
  'tags'?: Array<string>;
  /**
   * A list of key value pairs that you use to provide metadata for your video. These pairs can be made dynamic, allowing you to segment your audience. Read more on [dynamic metadata](https://api.video/blog/endpoints/dynamic-metadata).
   */
  'metadata'?: Array<Metadata>;
  'clip'?: VideoClip;
  'watermark'?: VideoWatermark;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'title',
      baseName: 'title',
      type: 'string',
      format: '',
    },
    {
      name: 'description',
      baseName: 'description',
      type: 'string',
      format: '',
    },
    {
      name: 'source',
      baseName: 'source',
      type: 'string',
      format: '',
    },
    {
      name: '_public',
      baseName: 'public',
      type: 'boolean',
      format: '',
    },
    {
      name: 'panoramic',
      baseName: 'panoramic',
      type: 'boolean',
      format: '',
    },
    {
      name: 'mp4Support',
      baseName: 'mp4Support',
      type: 'boolean',
      format: '',
    },
    {
      name: 'playerId',
      baseName: 'playerId',
      type: 'string',
      format: '',
    },
    {
      name: 'tags',
      baseName: 'tags',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'metadata',
      baseName: 'metadata',
      type: 'Array<Metadata>',
      format: '',
    },
    {
      name: 'clip',
      baseName: 'clip',
      type: 'VideoClip',
      format: '',
    },
    {
      name: 'watermark',
      baseName: 'watermark',
      type: 'VideoWatermark',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoCreationPayload.attributeTypeMap;
  }
}
