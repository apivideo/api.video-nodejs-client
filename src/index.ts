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

import HttpClient from './HttpClient.js';

import AnalyticsApi from './api/AnalyticsApi.js';
import CaptionsApi from './api/CaptionsApi.js';
import ChaptersApi from './api/ChaptersApi.js';
import LiveStreamsApi from './api/LiveStreamsApi.js';
import PlayerThemesApi from './api/PlayerThemesApi.js';
import RawStatisticsApi from './api/RawStatisticsApi.js';
import UploadTokensApi from './api/UploadTokensApi.js';
import VideosApi from './api/VideosApi.js';
import WatermarksApi from './api/WatermarksApi.js';
import WebhooksApi from './api/WebhooksApi.js';

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

  public async getAccessToken() {
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
