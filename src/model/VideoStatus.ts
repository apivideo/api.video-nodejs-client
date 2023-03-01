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
import VideoStatusEncoding from './VideoStatusEncoding.js';
import VideoStatusIngest from './VideoStatusIngest.js';

export default class VideoStatus {
  'ingest'?: VideoStatusIngest;
  'encoding'?: VideoStatusEncoding;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'ingest',
      baseName: 'ingest',
      type: 'VideoStatusIngest',
      format: '',
    },
    {
      name: 'encoding',
      baseName: 'encoding',
      type: 'VideoStatusEncoding',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoStatus.attributeTypeMap;
  }
}
