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
import Pagination from './Pagination.js';
import Webhook from './Webhook.js';

export default class WebhooksListResponse {
  'data': Array<Webhook>;
  'pagination': Pagination;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'data',
      baseName: 'data',
      type: 'Array<Webhook>',
      format: '',
    },
    {
      name: 'pagination',
      baseName: 'pagination',
      type: 'Pagination',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return WebhooksListResponse.attributeTypeMap;
  }
}
