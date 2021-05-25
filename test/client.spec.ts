import { expect } from 'chai';
import ApiVideoClient from '../src';
import CaptionsApi from '../src/api/CaptionsApi';
import ChaptersApi from '../src/api/ChaptersApi';
import LiveStreamsApi from '../src/api/LiveStreamsApi';
import PlayerThemesApi from '../src/api/PlayerThemesApi';
import RawStatisticsApi from '../src/api/RawStatisticsApi';
import UploadTokensApi from '../src/api/UploadTokensApi';
import VideosApi from '../src/api/VideosApi';
import WebhooksApi from '../src/api/WebhooksApi';

describe('ApiVideoClient', () => {
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
  it('should use the WebhooksApi class', () => {
    const client = new ApiVideoClient({ apiKey: 'test' });
    expect(client.webhooks).instanceOf(WebhooksApi);
  });
});
