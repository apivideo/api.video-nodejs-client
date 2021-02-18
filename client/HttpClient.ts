import * as FormData from 'form-data';
import { createReadStream } from 'fs';
import got, { AfterResponseHook, ExtendOptions, Got, Headers, Response } from 'got';
import { ObjectSerializer } from '../models/ObjectSerializer';
import errorHandler from './ErrorHandler';
import {version} from '../package.json';

export type QueryOptions = Got | ExtendOptions;

export default class HttpClient {
  private apiKey?: string;
  private baseUri: string;
  private tokenType: string;
  private accessToken?: string;
  private refreshToken?: string;
  private headers: Headers;
  private baseRequest: Got;

  constructor(params: {apiKey?: string, baseUri: string}) {
    this.apiKey = params.apiKey;
    this.baseUri = params.baseUri;
    this.tokenType = 'Bearer';
    this.headers = {
      'User-Agent': `api.video SDK (nodejs; v:${version})`,
      'Accept': 'application/json, */*;q=0.8'
    };

    console.log({version});

    this.baseRequest = got.extend({
      prefixUrl: this.baseUri,
      headers: this.headers,
      hooks: {
        afterResponse: !!this.apiKey 
        ? [ 
          this.isStillAuthenticated.bind(this), 
        ]
        : [],
        beforeError: [
          process.env.NODE_ENV !== 'production' ? errorHandler : e => e,
        ],
      },
      mutableDefaults: true,
    });
  }


  async getAccessToken() {
    const { statusCode, body } = await got.post(`${this.baseUri}/auth/api-key`, {
      json: { apiKey: this.apiKey },
      responseType: 'json',
    });
    const token = ObjectSerializer.deserialize(body, "AccessToken", "");

    if (statusCode >= 400) {
      throw new Error('Authentication Failed');
    }

    return this.setAccessToken(token.tokenType, token.accessToken, token.refreshToken);
  };

  async setAccessToken(tokenType: string, accessToken: string, refreshToken: string) {
    this.tokenType = tokenType;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    return {
      tokenType: this.tokenType,
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
    };
  };

  isStillAuthenticated: AfterResponseHook = async (response, retry) => {
    if (response.statusCode === 401) {
      const { tokenType, accessToken } = await this.getAccessToken.call(this);
      const updatedOptions = {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      };

      // Save for further requests
      this.baseRequest.defaults.options = got.mergeOptions(
        this.baseRequest.defaults.options,
        updatedOptions,
      );

      // Make a new retry
      return retry(updatedOptions);
    }

    // No changes otherwise
    return response;
  }


  call(path: string, queryOptions?: QueryOptions) {
    return this.baseRequest.extend(queryOptions || {})(path);
  }

  async submit(path: string, source: string, filename: string, headers = {}) {
    const form = new FormData();
    form.append(
      filename,
      Buffer.isBuffer(source) ? source : createReadStream(source),
      filename,
    );

    return this.baseRequest.extend(Object.assign({}, { headers })).post(path, { body: form });
  };

  // eslint-disable-next-line max-len
  async submitMultiPart(path: string, source: string, data = {}, headers = {}) {
    const form = new FormData();
    form.append('file', createReadStream(source));

    const entries = Object.entries(data);
    for (const [key, value] of entries) {
      form.append(key, value);
    }

    return this.baseRequest.extend({ headers }).post(path, { body: form });
  };


  isSuccessfull(response: Response) {
    return response.statusCode >= 200 && response.statusCode < 300;
  };
};
