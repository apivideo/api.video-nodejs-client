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

import HttpClient from './HttpClient';

import AnalyticsApi from './api/AnalyticsApi';
import CaptionsApi from './api/CaptionsApi';
import ChaptersApi from './api/ChaptersApi';
import LiveStreamsApi from './api/LiveStreamsApi';
import PlayerThemesApi from './api/PlayerThemesApi';
import RawStatisticsApi from './api/RawStatisticsApi';
import UploadTokensApi from './api/UploadTokensApi';
import VideosApi from './api/VideosApi';
import WatermarksApi from './api/WatermarksApi';
import WebhooksApi from './api/WebhooksApi';

import AccessToken from './model/AccessToken';
import AdditionalBadRequestErrors from './model/AdditionalBadRequestErrors';
import AnalyticsData from './model/AnalyticsData';
import AnalyticsPlays400Error from './model/AnalyticsPlays400Error';
import AnalyticsPlaysResponse from './model/AnalyticsPlaysResponse';
import AuthenticatePayload from './model/AuthenticatePayload';
import BadRequest from './model/BadRequest';
import BytesRange from './model/BytesRange';
import Caption from './model/Caption';
import CaptionsListResponse from './model/CaptionsListResponse';
import CaptionsUpdatePayload from './model/CaptionsUpdatePayload';
import Chapter from './model/Chapter';
import ChaptersListResponse from './model/ChaptersListResponse';
import Link from './model/Link';
import LiveStream from './model/LiveStream';
import LiveStreamAssets from './model/LiveStreamAssets';
import LiveStreamCreationPayload from './model/LiveStreamCreationPayload';
import LiveStreamListResponse from './model/LiveStreamListResponse';
import LiveStreamSession from './model/LiveStreamSession';
import LiveStreamSessionClient from './model/LiveStreamSessionClient';
import LiveStreamSessionDevice from './model/LiveStreamSessionDevice';
import LiveStreamSessionLocation from './model/LiveStreamSessionLocation';
import LiveStreamSessionReferrer from './model/LiveStreamSessionReferrer';
import LiveStreamSessionSession from './model/LiveStreamSessionSession';
import LiveStreamUpdatePayload from './model/LiveStreamUpdatePayload';
import Metadata from './model/Metadata';
import Model403ErrorSchema from './model/Model403ErrorSchema';
import NotFound from './model/NotFound';
import Pagination from './model/Pagination';
import PaginationLink from './model/PaginationLink';
import PlayerSessionEvent from './model/PlayerSessionEvent';
import PlayerTheme from './model/PlayerTheme';
import PlayerThemeAssets from './model/PlayerThemeAssets';
import PlayerThemeCreationPayload from './model/PlayerThemeCreationPayload';
import PlayerThemeUpdatePayload from './model/PlayerThemeUpdatePayload';
import PlayerThemesListResponse from './model/PlayerThemesListResponse';
import Quality from './model/Quality';
import RawStatisticsListLiveStreamAnalyticsResponse from './model/RawStatisticsListLiveStreamAnalyticsResponse';
import RawStatisticsListPlayerSessionEventsResponse from './model/RawStatisticsListPlayerSessionEventsResponse';
import RawStatisticsListSessionsResponse from './model/RawStatisticsListSessionsResponse';
import RefreshTokenPayload from './model/RefreshTokenPayload';
import RestreamsRequestObject from './model/RestreamsRequestObject';
import RestreamsResponseObject from './model/RestreamsResponseObject';
import TokenCreationPayload from './model/TokenCreationPayload';
import TokenListResponse from './model/TokenListResponse';
import UploadToken from './model/UploadToken';
import Video from './model/Video';
import VideoAssets from './model/VideoAssets';
import VideoClip from './model/VideoClip';
import VideoCreationPayload from './model/VideoCreationPayload';
import VideoSession from './model/VideoSession';
import VideoSessionClient from './model/VideoSessionClient';
import VideoSessionDevice from './model/VideoSessionDevice';
import VideoSessionLocation from './model/VideoSessionLocation';
import VideoSessionOs from './model/VideoSessionOs';
import VideoSessionReferrer from './model/VideoSessionReferrer';
import VideoSessionSession from './model/VideoSessionSession';
import VideoSource from './model/VideoSource';
import VideoSourceLiveStream from './model/VideoSourceLiveStream';
import VideoSourceLiveStreamLink from './model/VideoSourceLiveStreamLink';
import VideoStatus from './model/VideoStatus';
import VideoStatusEncoding from './model/VideoStatusEncoding';
import VideoStatusEncodingMetadata from './model/VideoStatusEncodingMetadata';
import VideoStatusIngest from './model/VideoStatusIngest';
import VideoStatusIngestReceivedParts from './model/VideoStatusIngestReceivedParts';
import VideoThumbnailPickPayload from './model/VideoThumbnailPickPayload';
import VideoUpdatePayload from './model/VideoUpdatePayload';
import VideoWatermark from './model/VideoWatermark';
import VideosListResponse from './model/VideosListResponse';
import Watermark from './model/Watermark';
import WatermarksListResponse from './model/WatermarksListResponse';
import Webhook from './model/Webhook';
import WebhooksCreationPayload from './model/WebhooksCreationPayload';
import WebhooksListResponse from './model/WebhooksListResponse';

const PRODUCTION_BASE_URI = 'https://ws.api.video';
const DEFAULT_CHUNK_SIZE = 50 * 1024 * 1024;
const MIN_CHUNK_SIZE = 5 * 1024 * 1024;
const MAX_CHUNK_SIZE = 128 * 1024 * 1024;

class ApiVideoClient {
  private httpClient: HttpClient;
  private _analytics: AnalyticsApi;
  private _captions: CaptionsApi;
  private _chapters: ChaptersApi;
  private _liveStreams: LiveStreamsApi;
  private _playerThemes: PlayerThemesApi;
  private _rawStatistics: RawStatisticsApi;
  private _uploadTokens: UploadTokensApi;
  private _videos: VideosApi;
  private _watermarks: WatermarksApi;
  private _webhooks: WebhooksApi;

  constructor(params: {
    apiKey?: string;
    baseUri?: string;
    chunkSize?: number;
    applicationName?: string;
    applicationVersion?: string;
    sdkName?: string;
    sdkVersion?: string;
  }) {
    if (
      params.chunkSize &&
      (params.chunkSize < MIN_CHUNK_SIZE || params.chunkSize > MAX_CHUNK_SIZE)
    ) {
      throw new Error(
        'Invalid chunk size value. Must be greater than ' +
          MIN_CHUNK_SIZE +
          ' bytes and lower than ' +
          MAX_CHUNK_SIZE +
          ' bytes.'
      );
    }

    this.validateOrigin(
      'application',
      params.applicationName,
      params.applicationVersion
    );

    this.validateOrigin('sdk', params.sdkName, params.sdkVersion);

    this.httpClient = new HttpClient({
      ...params,
      baseUri: params.baseUri || PRODUCTION_BASE_URI,
      chunkSize: params.chunkSize || DEFAULT_CHUNK_SIZE,
    });

    this._analytics = new AnalyticsApi(this.httpClient);
    this._captions = new CaptionsApi(this.httpClient);
    this._chapters = new ChaptersApi(this.httpClient);
    this._liveStreams = new LiveStreamsApi(this.httpClient);
    this._playerThemes = new PlayerThemesApi(this.httpClient);
    this._rawStatistics = new RawStatisticsApi(this.httpClient);
    this._uploadTokens = new UploadTokensApi(this.httpClient);
    this._videos = new VideosApi(this.httpClient);
    this._watermarks = new WatermarksApi(this.httpClient);
    this._webhooks = new WebhooksApi(this.httpClient);
  }

  public async getAccessToken(): Promise<AccessToken> {
    return this.httpClient.getAccessToken();
  }

  /**
   * Get an AnalyticsApi instance
   * @return AnalyticsApi
   */
  public get analytics(): AnalyticsApi {
    return this._analytics;
  }

  /**
   * Get an CaptionsApi instance
   * @return CaptionsApi
   */
  public get captions(): CaptionsApi {
    return this._captions;
  }

  /**
   * Get an ChaptersApi instance
   * @return ChaptersApi
   */
  public get chapters(): ChaptersApi {
    return this._chapters;
  }

  /**
   * Get an LiveStreamsApi instance
   * @return LiveStreamsApi
   */
  public get liveStreams(): LiveStreamsApi {
    return this._liveStreams;
  }

  /**
   * Get an PlayerThemesApi instance
   * @return PlayerThemesApi
   */
  public get playerThemes(): PlayerThemesApi {
    return this._playerThemes;
  }

  /**
   * Get an RawStatisticsApi instance
   * @return RawStatisticsApi
   */
  public get rawStatistics(): RawStatisticsApi {
    return this._rawStatistics;
  }

  /**
   * Get an UploadTokensApi instance
   * @return UploadTokensApi
   */
  public get uploadTokens(): UploadTokensApi {
    return this._uploadTokens;
  }

  /**
   * Get an VideosApi instance
   * @return VideosApi
   */
  public get videos(): VideosApi {
    return this._videos;
  }

  /**
   * Get an WatermarksApi instance
   * @return WatermarksApi
   */
  public get watermarks(): WatermarksApi {
    return this._watermarks;
  }

  /**
   * Get an WebhooksApi instance
   * @return WebhooksApi
   */
  public get webhooks(): WebhooksApi {
    return this._webhooks;
  }

  private validateOrigin(type: string, name?: string, version?: string) {
    if (name && !version) {
      throw new Error(
        `${type} version is mandatory when ${type} name is set.'`
      );
    } else if (!name && version) {
      throw new Error(
        `${type} name is mandatory when ${type} version is set.'`
      );
    } else if (name && version) {
      if (!/^[\w-]{1,50}$/.test(name)) {
        throw new Error(
          `Invalid ${type} name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50.`
        );
      }

      if (!/^\d{1,3}(\.\d{1,3}(\.\d{1,3})?)?$/.test(version)) {
        throw new Error(
          `Invalid ${type} version value. The version should match the xxx[.yyy][.zzz] pattern.`
        );
      }
    }
  }
}

export {
  AnalyticsApi,
  CaptionsApi,
  ChaptersApi,
  LiveStreamsApi,
  PlayerThemesApi,
  RawStatisticsApi,
  UploadTokensApi,
  VideosApi,
  WatermarksApi,
  WebhooksApi,
  AccessToken,
  AdditionalBadRequestErrors,
  AnalyticsData,
  AnalyticsPlays400Error,
  AnalyticsPlaysResponse,
  AuthenticatePayload,
  BadRequest,
  BytesRange,
  Caption,
  CaptionsListResponse,
  CaptionsUpdatePayload,
  Chapter,
  ChaptersListResponse,
  Link,
  LiveStream,
  LiveStreamAssets,
  LiveStreamCreationPayload,
  LiveStreamListResponse,
  LiveStreamSession,
  LiveStreamSessionClient,
  LiveStreamSessionDevice,
  LiveStreamSessionLocation,
  LiveStreamSessionReferrer,
  LiveStreamSessionSession,
  LiveStreamUpdatePayload,
  Metadata,
  Model403ErrorSchema,
  NotFound,
  Pagination,
  PaginationLink,
  PlayerSessionEvent,
  PlayerTheme,
  PlayerThemeAssets,
  PlayerThemeCreationPayload,
  PlayerThemeUpdatePayload,
  PlayerThemesListResponse,
  Quality,
  RawStatisticsListLiveStreamAnalyticsResponse,
  RawStatisticsListPlayerSessionEventsResponse,
  RawStatisticsListSessionsResponse,
  RefreshTokenPayload,
  RestreamsRequestObject,
  RestreamsResponseObject,
  TokenCreationPayload,
  TokenListResponse,
  UploadToken,
  Video,
  VideoAssets,
  VideoClip,
  VideoCreationPayload,
  VideoSession,
  VideoSessionClient,
  VideoSessionDevice,
  VideoSessionLocation,
  VideoSessionOs,
  VideoSessionReferrer,
  VideoSessionSession,
  VideoSource,
  VideoSourceLiveStream,
  VideoSourceLiveStreamLink,
  VideoStatus,
  VideoStatusEncoding,
  VideoStatusEncodingMetadata,
  VideoStatusIngest,
  VideoStatusIngestReceivedParts,
  VideoThumbnailPickPayload,
  VideoUpdatePayload,
  VideoWatermark,
  VideosListResponse,
  Watermark,
  WatermarksListResponse,
  Webhook,
  WebhooksCreationPayload,
  WebhooksListResponse,
};

export default ApiVideoClient;
