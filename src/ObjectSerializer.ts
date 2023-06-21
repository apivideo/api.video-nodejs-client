/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-non-null-assertion */
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

import AccessToken from './model/AccessToken.js';
import AdditionalBadRequestErrors from './model/AdditionalBadRequestErrors.js';
import AnalyticsData from './model/AnalyticsData.js';
import AnalyticsPlays400Error from './model/AnalyticsPlays400Error.js';
import AnalyticsPlaysResponse from './model/AnalyticsPlaysResponse.js';
import AuthenticatePayload from './model/AuthenticatePayload.js';
import BadRequest from './model/BadRequest.js';
import BytesRange from './model/BytesRange.js';
import Caption from './model/Caption.js';
import CaptionsListResponse from './model/CaptionsListResponse.js';
import CaptionsUpdatePayload from './model/CaptionsUpdatePayload.js';
import Chapter from './model/Chapter.js';
import ChaptersListResponse from './model/ChaptersListResponse.js';
import Link from './model/Link.js';
import LiveStream from './model/LiveStream.js';
import LiveStreamAssets from './model/LiveStreamAssets.js';
import LiveStreamCreationPayload from './model/LiveStreamCreationPayload.js';
import LiveStreamListResponse from './model/LiveStreamListResponse.js';
import LiveStreamSession from './model/LiveStreamSession.js';
import LiveStreamSessionClient from './model/LiveStreamSessionClient.js';
import LiveStreamSessionDevice from './model/LiveStreamSessionDevice.js';
import LiveStreamSessionLocation from './model/LiveStreamSessionLocation.js';
import LiveStreamSessionReferrer from './model/LiveStreamSessionReferrer.js';
import LiveStreamSessionSession from './model/LiveStreamSessionSession.js';
import LiveStreamUpdatePayload from './model/LiveStreamUpdatePayload.js';
import Metadata from './model/Metadata.js';
import NotFound from './model/NotFound.js';
import Pagination from './model/Pagination.js';
import PaginationLink from './model/PaginationLink.js';
import PlayerSessionEvent from './model/PlayerSessionEvent.js';
import PlayerTheme from './model/PlayerTheme.js';
import PlayerThemeAssets from './model/PlayerThemeAssets.js';
import PlayerThemeCreationPayload from './model/PlayerThemeCreationPayload.js';
import PlayerThemeUpdatePayload from './model/PlayerThemeUpdatePayload.js';
import PlayerThemesListResponse from './model/PlayerThemesListResponse.js';
import Quality from './model/Quality.js';
import RawStatisticsListLiveStreamAnalyticsResponse from './model/RawStatisticsListLiveStreamAnalyticsResponse.js';
import RawStatisticsListPlayerSessionEventsResponse from './model/RawStatisticsListPlayerSessionEventsResponse.js';
import RawStatisticsListSessionsResponse from './model/RawStatisticsListSessionsResponse.js';
import RefreshTokenPayload from './model/RefreshTokenPayload.js';
import TokenCreationPayload from './model/TokenCreationPayload.js';
import TokenListResponse from './model/TokenListResponse.js';
import UploadToken from './model/UploadToken.js';
import Video from './model/Video.js';
import VideoAssets from './model/VideoAssets.js';
import VideoClip from './model/VideoClip.js';
import VideoCreationPayload from './model/VideoCreationPayload.js';
import VideoSession from './model/VideoSession.js';
import VideoSessionClient from './model/VideoSessionClient.js';
import VideoSessionDevice from './model/VideoSessionDevice.js';
import VideoSessionLocation from './model/VideoSessionLocation.js';
import VideoSessionOs from './model/VideoSessionOs.js';
import VideoSessionReferrer from './model/VideoSessionReferrer.js';
import VideoSessionSession from './model/VideoSessionSession.js';
import VideoSource from './model/VideoSource.js';
import VideoSourceLiveStream from './model/VideoSourceLiveStream.js';
import VideoSourceLiveStreamLink from './model/VideoSourceLiveStreamLink.js';
import VideoStatus from './model/VideoStatus.js';
import VideoStatusEncoding from './model/VideoStatusEncoding.js';
import VideoStatusEncodingMetadata from './model/VideoStatusEncodingMetadata.js';
import VideoStatusIngest from './model/VideoStatusIngest.js';
import VideoStatusIngestReceivedParts from './model/VideoStatusIngestReceivedParts.js';
import VideoThumbnailPickPayload from './model/VideoThumbnailPickPayload.js';
import VideoUpdatePayload from './model/VideoUpdatePayload.js';
import VideoWatermark from './model/VideoWatermark.js';
import VideosListResponse from './model/VideosListResponse.js';
import Watermark from './model/Watermark.js';
import WatermarksListResponse from './model/WatermarksListResponse.js';
import Webhook from './model/Webhook.js';
import WebhooksCreationPayload from './model/WebhooksCreationPayload.js';
import WebhooksListResponse from './model/WebhooksListResponse.js';

/* tslint:disable:no-unused-variable */
const primitives = [
  'string',
  'boolean',
  'double',
  'integer',
  'long',
  'float',
  'number',
  'any',
];

const supportedMediaTypes: { [mediaType: string]: number } = {
  'application/json': Infinity,
  'application/octet-stream': 0,
};

const enumsMap: Set<string> = new Set<string>([
  'QualityTypeEnum',
  'QualityQualityEnum',
  'QualityStatusEnum',
  'VideoStatusIngestStatusEnum',
]);

const typeMap: { [index: string]: any } = {
  AccessToken: AccessToken,
  AdditionalBadRequestErrors: AdditionalBadRequestErrors,
  AnalyticsData: AnalyticsData,
  AnalyticsPlays400Error: AnalyticsPlays400Error,
  AnalyticsPlaysResponse: AnalyticsPlaysResponse,
  AuthenticatePayload: AuthenticatePayload,
  BadRequest: BadRequest,
  BytesRange: BytesRange,
  Caption: Caption,
  CaptionsListResponse: CaptionsListResponse,
  CaptionsUpdatePayload: CaptionsUpdatePayload,
  Chapter: Chapter,
  ChaptersListResponse: ChaptersListResponse,
  Link: Link,
  LiveStream: LiveStream,
  LiveStreamAssets: LiveStreamAssets,
  LiveStreamCreationPayload: LiveStreamCreationPayload,
  LiveStreamListResponse: LiveStreamListResponse,
  LiveStreamSession: LiveStreamSession,
  LiveStreamSessionClient: LiveStreamSessionClient,
  LiveStreamSessionDevice: LiveStreamSessionDevice,
  LiveStreamSessionLocation: LiveStreamSessionLocation,
  LiveStreamSessionReferrer: LiveStreamSessionReferrer,
  LiveStreamSessionSession: LiveStreamSessionSession,
  LiveStreamUpdatePayload: LiveStreamUpdatePayload,
  Metadata: Metadata,
  NotFound: NotFound,
  Pagination: Pagination,
  PaginationLink: PaginationLink,
  PlayerSessionEvent: PlayerSessionEvent,
  PlayerTheme: PlayerTheme,
  PlayerThemeAssets: PlayerThemeAssets,
  PlayerThemeCreationPayload: PlayerThemeCreationPayload,
  PlayerThemeUpdatePayload: PlayerThemeUpdatePayload,
  PlayerThemesListResponse: PlayerThemesListResponse,
  Quality: Quality,
  RawStatisticsListLiveStreamAnalyticsResponse:
    RawStatisticsListLiveStreamAnalyticsResponse,
  RawStatisticsListPlayerSessionEventsResponse:
    RawStatisticsListPlayerSessionEventsResponse,
  RawStatisticsListSessionsResponse: RawStatisticsListSessionsResponse,
  RefreshTokenPayload: RefreshTokenPayload,
  TokenCreationPayload: TokenCreationPayload,
  TokenListResponse: TokenListResponse,
  UploadToken: UploadToken,
  Video: Video,
  VideoAssets: VideoAssets,
  VideoClip: VideoClip,
  VideoCreationPayload: VideoCreationPayload,
  VideoSession: VideoSession,
  VideoSessionClient: VideoSessionClient,
  VideoSessionDevice: VideoSessionDevice,
  VideoSessionLocation: VideoSessionLocation,
  VideoSessionOs: VideoSessionOs,
  VideoSessionReferrer: VideoSessionReferrer,
  VideoSessionSession: VideoSessionSession,
  VideoSource: VideoSource,
  VideoSourceLiveStream: VideoSourceLiveStream,
  VideoSourceLiveStreamLink: VideoSourceLiveStreamLink,
  VideoStatus: VideoStatus,
  VideoStatusEncoding: VideoStatusEncoding,
  VideoStatusEncodingMetadata: VideoStatusEncodingMetadata,
  VideoStatusIngest: VideoStatusIngest,
  VideoStatusIngestReceivedParts: VideoStatusIngestReceivedParts,
  VideoThumbnailPickPayload: VideoThumbnailPickPayload,
  VideoUpdatePayload: VideoUpdatePayload,
  VideoWatermark: VideoWatermark,
  VideosListResponse: VideosListResponse,
  Watermark: Watermark,
  WatermarksListResponse: WatermarksListResponse,
  Webhook: Webhook,
  WebhooksCreationPayload: WebhooksCreationPayload,
  WebhooksListResponse: WebhooksListResponse,
};

export default class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string): string {
    // Check the discriminator
    if (typeMap[expectedType]) {
      const discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty && data[discriminatorProperty]) {
        const discriminatorType = data[discriminatorProperty];
        if (typeMap[discriminatorType]) {
          return discriminatorType; // use the type given in the discriminator
        }
      }
    }

    return expectedType;
  }

  public static serialize(data: any, type: string, format: string): any {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(ObjectSerializer.serialize(date, subType, format));
      }
      return transformedData;
    } else if (type === 'Date') {
      if (format == 'date') {
        let month = data.getMonth() + 1;
        month = month < 10 ? '0' + month.toString() : month.toString();
        let day = data.getDate();
        day = day < 10 ? '0' + day.toString() : day.toString();

        return data.getFullYear() + '-' + month + '-' + day;
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap.has(type)) {
        return data;
      }
      if (!typeMap[type]) {
        // in case we dont know the type
        return data;
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.baseName] = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type,
          attributeType.format
        );
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string): any {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf('Array<', 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace('Array<', ''); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(
          ObjectSerializer.deserialize(date, subType, format)
        );
      }
      return transformedData;
    } else if (type === 'Date') {
      return new Date(data);
    } else {
      if (enumsMap.has(type)) {
        // is Enum
        return data;
      }

      if (!typeMap[type]) {
        // dont know the type
        return data;
      }
      const instance = new typeMap[type]();
      const attributeTypes = typeMap[type].getAttributeTypeMap();
      for (const index in attributeTypes) {
        const attributeType = attributeTypes[index];
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[attributeType.baseName],
          attributeType.type,
          attributeType.format
        );
      }
      return instance;
    }
  }

  /**
   * Normalize media type
   *
   * We currently do not handle any media types attributes, i.e. anything
   * after a semicolon. All content is assumed to be UTF-8 compatible.
   */
  public static normalizeMediaType(
    mediaType: string | undefined
  ): string | undefined {
    if (mediaType === undefined) {
      return undefined;
    }
    return mediaType.split(';')[0].trim().toLowerCase();
  }

  /**
   * From a list of possible media types, choose the one we can handle best.
   *
   * The order of the given media types does not have any impact on the choice
   * made.
   */
  public static getPreferredMediaType(mediaTypes: Array<string>): string {
    /** According to OAS 3 we should default to json */
    if (!mediaTypes) {
      return 'application/json';
    }

    const normalMediaTypes = mediaTypes
      .map(this.normalizeMediaType)
      .filter((mt) => mt);
    let selectedMediaType: string | undefined = undefined;
    let selectedRank = -Infinity;
    for (const mediaType of normalMediaTypes) {
      if (supportedMediaTypes[mediaType!] > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supportedMediaTypes[mediaType!];
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        'None of the given media types are supported: ' + mediaTypes.join(', ')
      );
    }

    return selectedMediaType!;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === 'application/json') {
      return JSON.stringify(data);
    }

    // HTTP DELETE response.
    if (data === '') {
      return data;
    }

    throw new Error(
      'The mediaType ' +
        mediaType +
        ' is not supported by ObjectSerializer.stringify.'
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(rawData: string, mediaType: string | undefined): any {
    if (mediaType === undefined) {
      // HTTP DELETE response.
      if (rawData === '') {
        return rawData;
      }

      throw new Error('Cannot parse content. No Content-Type defined.');
    }

    if (
      mediaType === 'application/json' ||
      mediaType.indexOf('application/vnd.api.video+json;version=') === 0
    ) {
      return JSON.parse(rawData);
    }

    throw new Error(
      'The mediaType ' +
        mediaType +
        ' is not supported by ObjectSerializer.parse.'
    );
  }
}
