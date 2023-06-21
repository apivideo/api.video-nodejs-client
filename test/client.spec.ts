import { expect } from 'chai';
import ApiVideoClient from '../src';
import AnalyticsApi from '../src/api/AnalyticsApi';
import CaptionsApi from '../src/api/CaptionsApi';
import ChaptersApi from '../src/api/ChaptersApi';
import LiveStreamsApi from '../src/api/LiveStreamsApi';
import PlayerThemesApi from '../src/api/PlayerThemesApi';
import RawStatisticsApi from '../src/api/RawStatisticsApi';
import UploadTokensApi from '../src/api/UploadTokensApi';
import VideosApi from '../src/api/VideosApi';
import WatermarksApi from '../src/api/WatermarksApi';
import WebhooksApi from '../src/api/WebhooksApi';

describe('ApiVideoClient', () => {
  it('should use the AnalyticsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.analytics).instanceOf(AnalyticsApi);
  });
  it('should use the CaptionsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.captions).instanceOf(CaptionsApi);
  });
  it('should use the ChaptersApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.chapters).instanceOf(ChaptersApi);
  });
  it('should use the LiveStreamsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.liveStreams).instanceOf(LiveStreamsApi);
  });
  it('should use the PlayerThemesApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.playerThemes).instanceOf(PlayerThemesApi);
  });
  it('should use the RawStatisticsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.rawStatistics).instanceOf(RawStatisticsApi);
  });
  it('should use the UploadTokensApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.uploadTokens).instanceOf(UploadTokensApi);
  });
  it('should use the VideosApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.videos).instanceOf(VideosApi);
  });
  it('should use the WatermarksApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.watermarks).instanceOf(WatermarksApi);
  });
  it('should use the WebhooksApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.webhooks).instanceOf(WebhooksApi);
  });

  it('should validate the application name value', () => {
    expect(
      () => new ApiVideoClient({ applicationName: 'applicationname' })
    ).to.throw(
      'application version is mandatory when application name is set.'
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'application name',
          applicationVersion: '1.0.0',
        })
    ).to.throw(
      "Invalid application name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50."
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName:
            '012345678901234567890123456789012345678901234567891',
          applicationVersion: '1.0.0',
        })
    ).to.throw(
      "Invalid application name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50."
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'my-great-application1',
          applicationVersion: '0.1.1',
        })
    ).not.to.throw();

    expect(() => new ApiVideoClient({ applicationVersion: '1.0.0' })).to.throw(
      'application name is mandatory when application version is set.'
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'application',
          applicationVersion: '1.1234.0',
        })
    ).to.throw(
      'Invalid application version value. The version should match the xxx[.yyy][.zzz] pattern.'
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'application',
          applicationVersion: '1.123.0',
        })
    ).not.to.throw();
  });
});
