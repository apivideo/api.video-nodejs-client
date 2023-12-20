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

import axios, { AxiosError, AxiosHeaders, AxiosProgressEvent } from 'axios';
import ApiVideoError from './ApiVideoError';
import ProblemDetails from './model/ProblemDetails';
import { encode } from 'js-base64';
import { Readable, Stream } from 'stream';
import AccessToken from './model/AccessToken';
import FetchResponse from './model/FetchResponse';

export type QueryOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  searchParams?: URLSearchParams;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

export default class HttpClient {
  private apiKey?: string;
  private baseUri: string;
  private headers: Headers;
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
    this.headers =  new Headers({
      Accept: 'application/json, */*;q=0.8',
      'AV-Origin-Client': 'nodejs:2.5.5',
      Authorization: this.apiKey ? `Basic ${encode(`${this.apiKey}:`)}` : '',
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
    });
  }

  getChunkSize() {
    return this.chunkSize;
  }

  public async getAccessToken(): Promise<AccessToken> {
    const fetchRes = await fetch(`${this.baseUri}/auth/api-key`, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify({
        apiKey: this.apiKey,
      }),
    });
    const responseData = await fetchRes.json();
    return {
      accessToken: responseData.access_token,
      refreshToken: responseData.refresh_token,
      tokenType: responseData.token_type,
      expiresIn: responseData.expires_in,
    };
  }

  public async call(path: string, options: QueryOptions) {
    if (!options.method) throw new Error('Method is required');
    try {
      const fetchRes = await fetch(`${this.baseUri}/${path}${
        options.searchParams ? `?${options.searchParams.toString()}` : ''
      }`, {
        headers: this.headers,
        method: options.method,
        body: JSON.stringify(options.body),
      });
      const responseJSON: FetchResponse = await fetchRes.clone().json();
      console.log(`${this.baseUri}/${path}${
        options.searchParams ? `?${options.searchParams.toString()}` : ''
      }`);
      if (!fetchRes.ok) {
        throw new Error(`Upload failed with status ${fetchRes.status}`);
      }
      const reader = fetchRes.body?.getReader();
      const contentLength = +Number.parseInt(fetchRes.headers?.get('Content-Length') || "0") || 0;
      let receivedLength = 0;

      await reader?.read().then(function processChunk({ done, value }: { done: boolean; value?: Uint8Array }): Promise<void> | undefined {
        if (done) {
          console.log('Fetch complete');
          return;
        }

        if (value) {
          receivedLength += value.length;
        }
        console.log(`Received ${receivedLength} of ${contentLength}`)

        return reader.read().then(processChunk);
      });
      return {
        headers: fetchRes.headers,
        body: JSON.stringify(responseJSON),
        finishedUpload: fetchRes.ok
      };

    } catch (error: any) {
      console.log(error);
      throw new ApiVideoError(
        error.response?.status || 0,
        error.response?.data as ProblemDetails
      );
    }
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

      const buffer = Buffer.concat(data);
      resolve(buffer);
    });
  });
}
