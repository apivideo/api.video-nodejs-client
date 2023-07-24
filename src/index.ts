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

export = ApiVideoClient;
