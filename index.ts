import HttpClient from "./client/HttpClient";

import { AccountApi } from './apis/AccountApi';
import { CaptionsApi } from './apis/CaptionsApi';
import { ChaptersApi } from './apis/ChaptersApi';
import { LiveApi } from './apis/LiveApi';
import { PlayersApi } from './apis/PlayersApi';
import { RawStatisticsApi } from './apis/RawStatisticsApi';
import { VideosApi } from './apis/VideosApi';
import { VideosDelegatedUploadApi } from './apis/VideosDelegatedUploadApi';
import { WebhooksApi } from './apis/WebhooksApi';

const PRODUCTION_BASE_URI = "https://ws.api.video";

class ApiVideoClient {
    private httpClient: HttpClient;
    private _account: AccountApi;
    private _captions: CaptionsApi;
    private _chapters: ChaptersApi;
    private _live: LiveApi;
    private _players: PlayersApi;
    private _rawStatistics: RawStatisticsApi;
    private _videos: VideosApi;
    private _videosDelegatedUpload: VideosDelegatedUploadApi;
    private _webhooks: WebhooksApi;

    constructor(params: {apiKey?: string, baseUri?: string}) {
        this.httpClient = new HttpClient({
            ...params,
            baseUri: params.baseUri || PRODUCTION_BASE_URI
        })

        this._account = new AccountApi(this.httpClient);
        this._captions = new CaptionsApi(this.httpClient);
        this._chapters = new ChaptersApi(this.httpClient);
        this._live = new LiveApi(this.httpClient);
        this._players = new PlayersApi(this.httpClient);
        this._rawStatistics = new RawStatisticsApi(this.httpClient);
        this._videos = new VideosApi(this.httpClient);
        this._videosDelegatedUpload = new VideosDelegatedUploadApi(this.httpClient);
        this._webhooks = new WebhooksApi(this.httpClient);
    }



    /**
    * Get an AccountApi instance
    * @return AccountApi
    */
    public get account(): AccountApi {
        return this._account;
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
    * Get an LiveApi instance
    * @return LiveApi
    */
    public get live(): LiveApi {
        return this._live;
    }

    /**
    * Get an PlayersApi instance
    * @return PlayersApi
    */
    public get players(): PlayersApi {
        return this._players;
    }

    /**
    * Get an RawStatisticsApi instance
    * @return RawStatisticsApi
    */
    public get rawStatistics(): RawStatisticsApi {
        return this._rawStatistics;
    }

    /**
    * Get an VideosApi instance
    * @return VideosApi
    */
    public get videos(): VideosApi {
        return this._videos;
    }

    /**
    * Get an VideosDelegatedUploadApi instance
    * @return VideosDelegatedUploadApi
    */
    public get videosDelegatedUpload(): VideosDelegatedUploadApi {
        return this._videosDelegatedUpload;
    }

    /**
    * Get an WebhooksApi instance
    * @return WebhooksApi
    */
    public get webhooks(): WebhooksApi {
        return this._webhooks;
    }

}

export default ApiVideoClient;