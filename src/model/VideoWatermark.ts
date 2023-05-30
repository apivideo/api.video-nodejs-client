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

export default class VideoWatermark {
  /**
   * id of the watermark
   */
  'id'?: string;
  /**
   * Distance expressed in px or % between the top-border of the video and the watermark-image.
   */
  'top'?: string;
  /**
   * Distance expressed in px or % between the left-border of the video and the watermark-image.
   */
  'left'?: string;
  /**
   * Distance expressed in px or % between the bottom-border of the video and the watermark-image.
   */
  'bottom'?: string;
  /**
   * Distance expressed in px or % between the right-border of the video and the watermark-image.
   */
  'right'?: string;
  /**
   * Width of the watermark-image relative to the video if expressed in %. Otherwise a fixed width. NOTE: To keep intrinsic watermark-image width use `initial`.
   */
  'width'?: string;
  /**
   * Height of the watermark-image relative to the video if expressed in %. Otherwise a fixed height. NOTE: To keep intrinsic watermark-image height use `initial`.
   */
  'height'?: string;
  /**
   * Opacity expressed in % only to specify the degree of the watermark-image transparency with the video.
   */
  'opacity'?: string;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'id',
      baseName: 'id',
      type: 'string',
      format: '',
    },
    {
      name: 'top',
      baseName: 'top',
      type: 'string',
      format: '',
    },
    {
      name: 'left',
      baseName: 'left',
      type: 'string',
      format: '',
    },
    {
      name: 'bottom',
      baseName: 'bottom',
      type: 'string',
      format: '',
    },
    {
      name: 'right',
      baseName: 'right',
      type: 'string',
      format: '',
    },
    {
      name: 'width',
      baseName: 'width',
      type: 'string',
      format: '',
    },
    {
      name: 'height',
      baseName: 'height',
      type: 'string',
      format: '',
    },
    {
      name: 'opacity',
      baseName: 'opacity',
      type: 'string',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoWatermark.attributeTypeMap;
  }
}
