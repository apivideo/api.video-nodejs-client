# Changelog
All changes to this project will be documented in this file.

## [2.5.2] - 2023-07-06
- getAccessToken() response now contains properly named attributes

## [2.5.1] - 2023-07-05
- Fix getAccessToken() method

## [2.5.0] - 2023-07-05
- Use Axios instead of Got

## [2.4.0] - 2023-06-28
- Introducing new live streams restream feature
- Introducing new analytics endpoints

## [2.3.2] - 2023-03-01
- fix import issues

## [2.3.1] - 2023-01-18
- fix unit tests

## [2.3.0] - 2023-01-18
- fix ES6 import of the client

## [2.2.9] - 2022-09-13
- period parameter is now mandatory in analytics endpoints

## [2.2.8] - 2022-07-05
- Add SDK origin header

## [2.2.7] - 2022-05-06
- Upload methods (except for videos upload) now accept Readable and Buffer in addition to the file path.

## [2.2.6] - 2022-04-21
- Fix `video.publishedAt` type

## [2.2.5] - 2022-03-21
- Add `ingest.receivedParts` attribute in GET /videos/{video_id}/status

## [2.2.4] - 2022-03-14
- Updates in packages.json

## [2.2.3] - 2022-03-02
- Add Origin identification headers

## [2.2.2] - 2022-02-08
- Add missing `linkActive` in `PlayerThemeUpdatePayload` and `PlayerThemeCreationPayload`

## [2.2.1] - 2022-01-24
- Add applicationName parameter (to allow user agent extension)

## [2.2.0] - 2022-01-07
- Add watermark endpoints
- Add video clips
- Fix tags[] query parameter format of GET /videos
- Correctly distinguish between "undefined", "defined" and "null" values if the playerId parameter of PATCH /videos/{videoId}

## [2.1.1] - 2021-12-08
- Bump project dependancies

## [2.1.0] - 2021-12-06
- Add `name` attribute in player themes

## [2.0.14] - 2021-12-03
- Fix ProgressiveSession import

## [2.0.13] - 2021-11-15
- Add support of `progressive uploads`
