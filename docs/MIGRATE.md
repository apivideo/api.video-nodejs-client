# Migrate from [@apvideo/nodejs-sdk](https://github.com/apivideo/nodejs-sdk)

Listing methods are now called `list` instead of `search`.
They don't fetch all pages by default, this is now left to the user.
This also means the return value has changed. Instead of returning the array of data,
it now returns the full response body:
```json
{
  "data": [],
  "pagination": {}
}
```
> You must access the `data` property on the response, to retrieve the array of object.

- Player theme API is now called `playerThemes` instead of `players`.
- Live stream API is now called `liveStreams` instead of `lives`.

## Videos

### Search videos with paginated results
__Before:__
```js
await client.videos.search({ currentPage: 1, pageSize: 50 });
```
__After:__
```ts
await client.videos.list({ currentPage: 1, pageSize: 50 });
```

### Upload a video thumbnail
__Before:__
```js
await client.videos.uploadThumbnail('test/data/test.jpg', videoId);
```
__After:__
```ts
await client.videos.uploadThumbnail(videoId, 'test/data/test.jpg');
```
> *The identifier is now always the first parameter where possible.*

### Pick a thumbnail from the given time code
__Before:__
```js
await client.videos.updateThumbnailWithTimecode(videoId, '00:15:22.05');
```
__After:__
```ts
await client.videos.pickThumbnail(videoId, { timecode: '00:15:22.05' });
```
> *`POST` value is now always an object.*

### Upload video caption
__Before:__
```js
await client.captions.upload('test/data/en.vtt', { videoId, language: 'en' });
```
__After:__
```ts
await client.captions.upload(videoId, 'en', 'test/data/en.vtt');
```

### Update the default caption language
__Before:__
```js
await client.captions.updateDefault(videoId, 'en', true);
```
__After:__
```ts
await client.captions.update(videoId, 'en', { _default: true })
```

### Upload video chapter
__Before:__
```js
await client.chapters.upload('test/data/en.vtt', { videoId, language: 'en' });
```
__After:__
```ts
await client.chapters.upload(videoId, 'en', 'test/data/en.vtt');
```

### Get video analytics sessions for the current year
__Before:__
```js
await client.analyticsVideo.get(videoId, new Date().getFullYear());
```
__After:__
```ts
await client.rawStatistics.listVideoSessions({ videoId, period: new Date().getFullYear().toString() });
```

## Player theme

The following properties are deprecated and can't be used in the payload anymore :
```json
{
  "shapeMargin": 10,
  "shapeRadius": 3,
  "shapeAspect": "flat",
  "shapeBackgroundTop": "rgba(50, 50, 50, .7)",
  "shapeBackgroundBottom": "rgba(50, 50, 50, .8)",
  "linkActive": "rgba(255, 0, 0, .75)"
}
```
> But they are still available in the API response for now. 

### Create player theme with default values
__Before:__
```js
await client.players.create();
```
__After:__
```ts
await client.playerThemes.create();
```

### Get a player theme
__Before:__
```js
await client.players.get(playerId);
```
__After:__
```ts
await client.playerThemes.get(playerThemeId);
```

### Search a player with paginate results
__Before:__
```js
await client.players.search({ currentPage: 1, pageSize: 50 });
```
__After:__
```ts
await client.playerThemes.list({ currentPage: 1, pageSize: 50 });
```

## Player themes

### Update
__Before:__
```js
client.players.update(playerId, properties);
```
__After:__
```ts
client.playerThemes.update(playerId, properties);
```

### Upload a logo
__Before:__
```js
client.players.uploadLogo('test/data/test.jpg', playerId, 'https://api.video');
```
__After:__
```ts
client.playerThemes.uploadLogo(playerId,'test/data/test.jpg', 'https://api.video');
```

## Live streams

### Create a live
__Before:__
```js
client.lives.create(name);
```
__After:__
```ts
client.liveStreams.create({ name });
```

### Update live thumbnail
__Before:__
```js
await client.lives.uploadThumbnail('test/data/test.jpg', liveStreamId);
```
__After:__
```ts
client.liveStreams.uploadThumbnail(liveStreamId, 'test/data/test.jpg');
```

### Delete live resource
__Before:__
```js
await client.lives.delete(liveStreamId)
```
__After:__
```ts
client.liveStreams.delete(liveStreamId)
```

### Create a private live
__Before:__
```js
await client.lives.create('This is a private live', { public: false });
```
__After:__
```ts
await client.liveStreams.create({ name: 'This is a private live', _public: false });
```

### Get live Analytics Data for the current year
__Before:__
```js
await client.analyticsLive.get(liveStreamId, new Date().getFullYear());
```
__After:__
```ts
await client.rawStatistics.listLiveStreamSessions({ liveStreamId, period: new Date().getFullYear().toString() });
```

## Tokens

### Generate a token for delegated upload
```js
await client.tokens.generate()
```
__After:__
```ts
await client.uploadTokens.createToken()
```
