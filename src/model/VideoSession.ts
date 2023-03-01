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
import VideoSessionClient from './VideoSessionClient.js';
import VideoSessionDevice from './VideoSessionDevice.js';
import VideoSessionLocation from './VideoSessionLocation.js';
import VideoSessionOs from './VideoSessionOs.js';
import VideoSessionReferrer from './VideoSessionReferrer.js';
import VideoSessionSession from './VideoSessionSession.js';

export default class VideoSession {
  'session'?: VideoSessionSession;
  'location'?: VideoSessionLocation;
  'referrer'?: VideoSessionReferrer;
  'device'?: VideoSessionDevice;
  'os'?: VideoSessionOs;
  'client'?: VideoSessionClient;

  static readonly discriminator?: string = undefined;

  static readonly attributeTypeMap: Array<AttributeType> = [
    {
      name: 'session',
      baseName: 'session',
      type: 'VideoSessionSession',
      format: '',
    },
    {
      name: 'location',
      baseName: 'location',
      type: 'VideoSessionLocation',
      format: '',
    },
    {
      name: 'referrer',
      baseName: 'referrer',
      type: 'VideoSessionReferrer',
      format: '',
    },
    {
      name: 'device',
      baseName: 'device',
      type: 'VideoSessionDevice',
      format: '',
    },
    {
      name: 'os',
      baseName: 'os',
      type: 'VideoSessionOs',
      format: '',
    },
    {
      name: 'client',
      baseName: 'client',
      type: 'VideoSessionClient',
      format: '',
    },
  ];

  static getAttributeTypeMap(): Array<AttributeType> {
    return VideoSession.attributeTypeMap;
  }
}
