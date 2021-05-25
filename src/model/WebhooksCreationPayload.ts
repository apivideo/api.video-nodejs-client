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

export default class WebhooksCreationPayload {
  /**
   * A list of the webhooks that you are subscribing to. Currently \"video.encoding.quality.completed\" is the only option. video.encoding.quality.completed - a video encoding quality is ready for the video (for example the 720p quality hls encoding video is ready.)
   */
  'events': Array<string>;
  /**
   * The the url to which HTTP notifications are sent. It could be any http or https URL.
   */
  'url': string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'events',
      baseName: 'events',
      type: 'Array<string>',
      format: '',
    },
    {
      name: 'url',
      baseName: 'url',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return WebhooksCreationPayload.attributeTypeMap;
  }
}
