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

export default class LiveStreamUpdatePayload {
  /**
   * The name you want to use for your live stream.
   */
  'name'?: string;
  /**
   * Whether your video can be viewed by everyone, or requires authentication to see it. A setting of false will require a unique token for each view. Learn more about the Private Video feature [here](https://docs.api.video/docs/private-videos).
   */
  '_public'?: boolean;
  /**
   * Use this to indicate whether you want the recording on or off. On is true, off is false.
   */
  'record'?: boolean;
  /**
   * The unique ID for the player associated with a live stream that you want to update.
   */
  'playerId'?: string;
  /**
   * Use this parameter to add, edit, or remove RTMP services where you want to restream a live stream. The list can only contain up to 5 destinations. This operation updates all restream destinations in the same request. If you do not want to modify an existing restream destination, you need to include it in your request, otherwise it is removed.
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
      name: '_public',
      baseName: 'public',
      type: 'boolean',
      format: '',
    },
    {
      name: 'record',
      baseName: 'record',
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
    return LiveStreamUpdatePayload.attributeTypeMap;
  }
}
