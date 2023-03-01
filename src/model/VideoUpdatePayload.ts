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

export default class VideoUpdatePayload {
  /**
   * The unique ID for the player you want to associate with your video.
   */
  'playerId'?: string | null;
  /**
   * The title you want to use for your video.
   */
  'title'?: string;
  /**
   * A brief description of the video.
   */
  'description'?: string;
  /**
   * Whether the video is publicly available or not. False means it is set to private. Default is true. Tutorials on [private videos](https://api.video/blog/endpoints/private-videos).
   */
  '_public'?: boolean;
  /**
   * Whether the video is a 360 degree or immersive video.
   */
  'panoramic'?: boolean;
  /**
   * Whether the player supports the mp4 format.
   */
  'mp4Support'?: boolean;
  /**
   * A list of terms or words you want to tag the video with. Make sure the list includes all the tags you want as whatever you send in this list will overwrite the existing list for the video.
   */
  'tags'?: Array<string>;
  /**
   * A list (array) of dictionaries where each dictionary contains a key value pair that describes the video. As with tags, you must send the complete list of metadata you want as whatever you send here will overwrite the existing metadata for the video. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata) allows you to define a key that allows any value pair.
   */
  'metadata'?: Array<Metadata>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'playerId',
      baseName: 'playerId',
      type: 'string',
      format: '',
    },
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
    return VideoUpdatePayload.attributeTypeMap;
  }
}
