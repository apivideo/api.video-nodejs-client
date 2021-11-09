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

import AttributeType from './AttributeType';
import Metadata from './Metadata';

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
   * If you add a video already on the web, this is where you enter the url for the video.
   */
  'source'?: string;
  /**
   * Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).
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
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoCreationPayload.attributeTypeMap;
  }
}
