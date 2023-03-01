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
import BytesRange from './BytesRange.js';
import VideoStatusIngestReceivedParts from './VideoStatusIngestReceivedParts.js';

/**
 * Details about the capturing, transferring, and storing of your video for use immediately or in the future.
 */
export default class VideoStatusIngest {
  /**
   * There are three possible ingest statuses. missing - you are missing information required to ingest the video. uploading - the video is in the process of being uploaded. uploaded - the video is ready for use.
   */
  'status'?: VideoStatusIngestStatusEnum;
  /**
   * The size of your file in bytes.
   */
  'filesize'?: number;
  /**
   * The total number of bytes received, listed for each chunk of the upload.
   */
  'receivedBytes'?: Array<BytesRange>;
  'receivedParts'?: VideoStatusIngestReceivedParts;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'status',
      baseName: 'status',
      type: 'VideoStatusIngestStatusEnum',
      format: '',
    },
    {
      name: 'filesize',
      baseName: 'filesize',
      type: 'number',
      format: '',
    },
    {
      name: 'receivedBytes',
      baseName: 'receivedBytes',
      type: 'Array<BytesRange>',
      format: '',
    },
    {
      name: 'receivedParts',
      baseName: 'receivedParts',
      type: 'VideoStatusIngestReceivedParts',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoStatusIngest.attributeTypeMap;
  }
}

export type VideoStatusIngestStatusEnum = 'missing' | 'uploading' | 'uploaded';
