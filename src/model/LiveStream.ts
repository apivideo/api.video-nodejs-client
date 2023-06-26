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
import LiveStreamAssets from './LiveStreamAssets.js';
import RestreamsResponseObject from './RestreamsResponseObject.js';

export default class LiveStream {
  /**
   * The unique identifier for the live stream. Live stream IDs begin with \"li.\"
   */
  'liveStreamId': string;
  /**
   * The name of your live stream.
   */
  'name'?: string;
  /**
   * The unique, private stream key that you use to begin streaming.
   */
  'streamKey'?: string;
  /**
   * Whether you are recording or not.
   */
  'record'?: boolean;
  /**
   * Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/docs/private-videos).
   */
  '_public'?: boolean;
  'assets'?: LiveStreamAssets;
  /**
   * The unique identifier for the player.
   */
  'playerId'?: string;
  /**
   * Whether or not you are broadcasting the live video you recorded for others to see. True means you are broadcasting to viewers, false means you are not.
   */
  'broadcasting'?: boolean;
  /**
   * Returns the list of RTMP restream destinations.
   */
  'restreams': Array<RestreamsResponseObject>;
  /**
   * When the player was created, presented in ISO-8601 format.
   */
  'createdAt'?: Date;
  /**
   * When the player was last updated, presented in ISO-8601 format.
   */
  'updatedAt'?: Date;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'liveStreamId',
      baseName: 'liveStreamId',
      type: 'string',
      format: '',
    },
    {
      name: 'name',
      baseName: 'name',
      type: 'string',
      format: '',
    },
    {
      name: 'streamKey',
      baseName: 'streamKey',
      type: 'string',
      format: '',
    },
    {
      name: 'record',
      baseName: 'record',
      type: 'boolean',
      format: '',
    },
    {
      name: '_public',
      baseName: 'public',
      type: 'boolean',
      format: '',
    },
    {
      name: 'assets',
      baseName: 'assets',
      type: 'LiveStreamAssets',
      format: '',
    },
    {
      name: 'playerId',
      baseName: 'playerId',
      type: 'string',
      format: '',
    },
    {
      name: 'broadcasting',
      baseName: 'broadcasting',
      type: 'boolean',
      format: '',
    },
    {
      name: 'restreams',
      baseName: 'restreams',
      type: 'Array<RestreamsResponseObject>',
      format: '',
    },
    {
      name: 'createdAt',
      baseName: 'createdAt',
      type: 'Date',
      format: 'date-time',
    },
    {
      name: 'updatedAt',
      baseName: 'updatedAt',
      type: 'Date',
      format: 'date-time',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStream.attributeTypeMap;
  }
}
