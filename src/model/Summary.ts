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

export default class Summary {
  /**
   * The unique identifier of the summary object.
   */
  'summaryId'?: string;
  /**
   * Returns the date and time when the summary was created in ATOM date-time format.
   */
  'createdAt'?: Date;
  /**
   * Returns the date and time when the summary was last updated in ATOM date-time format.
   */
  'updatedAt'?: Date;
  /**
   * The unique identifier of the video object.
   */
  'videoId'?: string;
  /**
   * Returns the origin of how the summary was created.  - `api` means that no summary was generated automatically. You can add summary manually using the `PATCH /summaries/{summaryId}/source` endpoint operation. Until this happens, `sourceStatus` returns `missing`. - `auto` means that the API generated the summary automatically.
   */
  'origin'?: SummaryOriginEnum;
  /**
   * Returns the current status of summary generation.  `missing`: the input for a summary is not present. `waiting` : the input video is being processed and a summary will be generated. `failed`: a technical issue prevented summary generation. `completed`: the summary is generated. `unprocessable`: the API rules the source video to be unsuitable for summary generation. An example for this is an input video that has no audio.
   */
  'sourceStatus'?: SummarySourceStatusEnum;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'summaryId',
      baseName: 'summaryId',
      type: 'string',
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
    {
      name: 'videoId',
      baseName: 'videoId',
      type: 'string',
      format: '',
    },
    {
      name: 'origin',
      baseName: 'origin',
      type: 'SummaryOriginEnum',
      format: '',
    },
    {
      name: 'sourceStatus',
      baseName: 'sourceStatus',
      type: 'SummarySourceStatusEnum',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return Summary.attributeTypeMap;
  }
}

export type SummaryOriginEnum = 'api' | 'auto';
export type SummarySourceStatusEnum =
  | 'missing'
  | 'waiting'
  | 'failed'
  | 'completed'
  | 'unprocessable';
