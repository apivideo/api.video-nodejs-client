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
import PaginationLink from './PaginationLink.js';

export default class Pagination {
  /**
   * Total number of items that exist.
   */
  'itemsTotal'?: number;
  /**
   * Number of items listed in the current page.
   */
  'pagesTotal'?: number;
  /**
   * Maximum number of item per page.
   */
  'pageSize'?: number;
  /**
   * The current page index.
   */
  'currentPage'?: number;
  /**
   * The number of items on the current page.
   */
  'currentPageItems'?: number;
  'links': Array<PaginationLink>;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'itemsTotal',
      baseName: 'itemsTotal',
      type: 'number',
      format: '',
    },
    {
      name: 'pagesTotal',
      baseName: 'pagesTotal',
      type: 'number',
      format: '',
    },
    {
      name: 'pageSize',
      baseName: 'pageSize',
      type: 'number',
      format: '',
    },
    {
      name: 'currentPage',
      baseName: 'currentPage',
      type: 'number',
      format: '',
    },
    {
      name: 'currentPageItems',
      baseName: 'currentPageItems',
      type: 'number',
      format: '',
    },
    {
      name: 'links',
      baseName: 'links',
      type: 'Array<PaginationLink>',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Pagination.attributeTypeMap;
  }
}
