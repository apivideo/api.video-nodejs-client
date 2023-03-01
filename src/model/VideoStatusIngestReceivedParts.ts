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

export default class VideoStatusIngestReceivedParts {
  /**
   * The parts that have been uploaded, ordered. For example, if part 2 was sent before part 1, and both have been uploaded, the output will be [1, 2].
   */
  'parts'?: Array<number>;
  /**
   * Contains the number of expected parts. The total will be listed as \"null\" until the total number of parts is known.
   */
  'total'?: number;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'parts',
      baseName: 'parts',
      type: 'Array<number>',
      format: '',
    },
    {
      name: 'total',
      baseName: 'total',
      type: 'number',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoStatusIngestReceivedParts.attributeTypeMap;
  }
}
