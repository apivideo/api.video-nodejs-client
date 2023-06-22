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

import got, {
  AfterResponseHook,
  ExtendOptions,
  Got,
  Headers,
  RequestError,
} from 'got';
import ObjectSerializer from './ObjectSerializer.js';
import ApiVideoError from './ApiVideoError.js';
import AccessToken from './model/AccessToken.js';
import { Readable, Stream } from 'stream';
import FormData from 'form-data';

export type QueryOptions = Got | ExtendOptions;

export default class HttpClient {
  private apiKey?: string;
  private baseUri: string;
  private tokenType: string;
  private accessToken?: AccessToken;
  private headers: Headers;
  private baseRequest: Got;
  private chunkSize: number;

  constructor(params: {
    apiKey?: string;
    baseUri: string;
    chunkSize: number;
    applicationName?: string;
    applicationVersion?: string;
    sdkName?: string;
    sdkVersion?: string;
  }) {
    this.apiKey = params.apiKey;
    this.baseUri = params.baseUri;
    this.chunkSize = params.chunkSize;
    this.tokenType = 'Bearer';
    this.headers = {
      Accept: 'application/json, */*;q=0.8',
      'AV-Origin-Client': 'nodejs:2.4.0',
      ...(params.applicationName && params.applicationVersion
        ? {
            'AV-Origin-App': `${params.applicationName}:${params.applicationVersion}`,
          }
        : {}),
      ...(params.sdkName && params.sdkVersion
        ? {
            'AV-Origin-Sdk': `${params.sdkName}:${params.sdkVersion}`,
          }
        : {}),
    };
    this.baseRequest = got.extend({
      prefixUrl: this.baseUri,
      headers: this.headers,
      mutableDefaults: true,
      hooks: {
        afterResponse: [this.isStillAuthenticated.bind(this)],
        beforeRequest: [
          async (options) => {
            if (!options.headers.Authorization) {
              if (!this.accessToken) {
                await this.retrieveAccessToken.call(this);
              }
              // @ts-ignore
              const { tokenType, accessToken } = this.accessToken;
              // eslint-disable-next-line no-param-reassign
              options.headers.Authorization = `${tokenType} ${accessToken}`;
            }
          },
        ],
      },
      handlers: [
        (options, next) => {
          if (options.isStream) {
            return next(options);
          }

          return (
            next(options)
              // @ts-ignore
              .catch((error: Error) => {
                if (error instanceof RequestError) {
                  // @ts-ignore
                  const { response } = error;
                  const contentType = response?.headers['content-type'];
                  if (contentType === 'application/problem+json') {
                    // @ts-ignore
                    throw new ApiVideoError(response);
                  }
                }

                throw error;
              })
          );
        },
      ],
    });
  }

  getChunkSize() {
    return this.chunkSize;
  }

  async getAccessToken() {
    return this.accessToken || (await this.retrieveAccessToken());
  }

  async retrieveAccessToken(): Promise<AccessToken> {
    const { statusCode, body } = await got.post(
      `${this.baseUri}/auth/api-key`,
      {
        json: { apiKey: this.apiKey },
        responseType: 'json',
        headers: this.headers,
      }
    );
    this.accessToken = ObjectSerializer.deserialize(
      body,
      'AccessToken',
      ''
    ) as AccessToken;

    if (statusCode >= 400) {
      throw new Error('Authentication Failed');
    }

    return this.accessToken;
  }

  isStillAuthenticated: AfterResponseHook = async (response, retry) => {
    if (response.statusCode === 401) {
      const { tokenType, accessToken } = await this.retrieveAccessToken.call(
        this
      );
      const updatedOptions = {
        headers: {
          Authorization: `${tokenType} ${accessToken}`,
        },
      };

      // Save for further requests
      this.baseRequest.defaults.options = got.mergeOptions(
        this.baseRequest.defaults.options,
        updatedOptions
      );

      // Make a new retry
      return retry(updatedOptions);
    }

    // No changes otherwise
    return response;
  };

  call(path: string, queryOptions?: QueryOptions) {
    return this.baseRequest.extend(queryOptions || {})(path);
  }
}

export async function readableToBuffer(readable: Readable): Promise<Buffer> {
  const writableStream = new Stream.Writable({
    defaultEncoding: 'utf-8',
  });
  const data: Buffer[] = [];
  writableStream._write = (chunk, encoding, next) => {
    data.push(Buffer.from(chunk, encoding));
    next();
  };

  return new Promise((resolve, reject) => {
    Stream.pipeline(readable, writableStream, async (err) => {
      if (err) {
        reject(err);
      }
      const form = new FormData();

      const buffer = Buffer.concat(data);
      resolve(buffer);
    });
  });
}
