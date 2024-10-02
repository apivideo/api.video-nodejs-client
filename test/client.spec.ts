import ApiVideoClient from '../src';
import AnalyticsApi from '../src/api/AnalyticsApi';
import CaptionsApi from '../src/api/CaptionsApi';
import ChaptersApi from '../src/api/ChaptersApi';
import LiveStreamsApi from '../src/api/LiveStreamsApi';
import PlayerThemesApi from '../src/api/PlayerThemesApi';
import TagsApi from '../src/api/TagsApi';
import UploadTokensApi from '../src/api/UploadTokensApi';
import VideosApi from '../src/api/VideosApi';
import WatermarksApi from '../src/api/WatermarksApi';
import WebhooksApi from '../src/api/WebhooksApi';

describe('ApiVideoClient', () => {
  it('should use the AnalyticsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.analytics).toBeInstanceOf(AnalyticsApi);
  });
  it('should use the CaptionsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.captions).toBeInstanceOf(CaptionsApi);
  });
  it('should use the ChaptersApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.chapters).toBeInstanceOf(ChaptersApi);
  });
  it('should use the LiveStreamsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.liveStreams).toBeInstanceOf(LiveStreamsApi);
  });
  it('should use the PlayerThemesApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.playerThemes).toBeInstanceOf(PlayerThemesApi);
  });
  it('should use the TagsApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.tags).toBeInstanceOf(TagsApi);
  });
  it('should use the UploadTokensApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.uploadTokens).toBeInstanceOf(UploadTokensApi);
  });
  it('should use the VideosApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.videos).toBeInstanceOf(VideosApi);
  });
  it('should use the WatermarksApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.watermarks).toBeInstanceOf(WatermarksApi);
  });
  it('should use the WebhooksApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.webhooks).toBeInstanceOf(WebhooksApi);
  });

  it('should validate the application name value', () => {
    expect(
      () => new ApiVideoClient({ applicationName: 'applicationname' })
    ).toThrow('application version is mandatory when application name is set.');

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'application name',
          applicationVersion: '1.0.0',
        })
    ).toThrow(
      "Invalid application name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50."
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName:
            '012345678901234567890123456789012345678901234567891',
          applicationVersion: '1.0.0',
        })
    ).toThrow(
      "Invalid application name value. Allowed characters: A-Z, a-z, 0-9, '-', '_'. Max length: 50."
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'my-great-application1',
          applicationVersion: '0.1.1',
        })
    ).not.toThrow();

    expect(() => new ApiVideoClient({ applicationVersion: '1.0.0' })).toThrow(
      'application name is mandatory when application version is set.'
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'application',
          applicationVersion: '1.1234.0',
        })
    ).toThrow(
      'Invalid application version value. The version should match the xxx[.yyy][.zzz] pattern.'
    );

    expect(
      () =>
        new ApiVideoClient({
          applicationName: 'application',
          applicationVersion: '1.123.0',
        })
    ).not.toThrow();
  });
});
