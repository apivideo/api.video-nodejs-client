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
import RestreamsRequestObject from './RestreamsRequestObject.js';

export default class LiveStreamCreationPayload {
  /**
   * Add a name for your live stream here.
   */
  'name': string;
  /**
   * Whether you are recording or not. True for record, false for not record.
   */
  'record'?: boolean;
  /**
   * Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/docs/private-videos).
   */
  '_public'?: boolean;
  /**
   * The unique identifier for the player.
   */
  'playerId'?: string;
  /**
   * Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations.
   */
  'restreams'?: Array<RestreamsRequestObject>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'name',
      baseName: 'name',
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
      name: 'playerId',
      baseName: 'playerId',
      type: 'string',
      format: '',
    },
    {
      name: 'restreams',
      baseName: 'restreams',
      type: 'Array<RestreamsRequestObject>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return LiveStreamCreationPayload.attributeTypeMap;
  }
}
