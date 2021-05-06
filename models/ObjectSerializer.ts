export * from './AccessToken';
export * from './Account';
export * from './AccountQuota';
export * from './AuthenticatePayload';
export * from './BadRequest';
export * from './BytesRange';
export * from './Caption';
export * from './CaptionsListResponse';
export * from './CaptionsUpdatePayload';
export * from './Chapter';
export * from './ChaptersListResponse';
export * from './Link';
export * from './LiveStream';
export * from './LiveStreamAssets';
export * from './LiveStreamCreationPayload';
export * from './LiveStreamListResponse';
export * from './LiveStreamSession';
export * from './LiveStreamSessionClient';
export * from './LiveStreamSessionDevice';
export * from './LiveStreamSessionLocation';
export * from './LiveStreamSessionReferrer';
export * from './LiveStreamSessionSession';
export * from './LiveStreamUpdatePayload';
export * from './Metadata';
export * from './NotFound';
export * from './Pagination';
export * from './PaginationLink';
export * from './PlayerSessionEvent';
export * from './PlayerTheme';
export * from './PlayerThemeAssets';
export * from './PlayerThemeCreationPayload';
export * from './PlayerThemeUpdatePayload';
export * from './PlayerThemesListResponse';
export * from './Quality';
export * from './RawStatisticsListLiveStreamAnalyticsResponse';
export * from './RawStatisticsListPlayerSessionEventsResponse';
export * from './RawStatisticsListSessionsResponse';
export * from './RefreshTokenPayload';
export * from './TokenCreationPayload';
export * from './TokenListResponse';
export * from './UploadToken';
export * from './Video';
export * from './VideoAssets';
export * from './VideoCreationPayload';
export * from './VideoSession';
export * from './VideoSessionClient';
export * from './VideoSessionDevice';
export * from './VideoSessionLocation';
export * from './VideoSessionOs';
export * from './VideoSessionReferrer';
export * from './VideoSessionSession';
export * from './VideoSource';
export * from './VideoSourceLiveStream';
export * from './VideoSourceLiveStreamLink';
export * from './VideoStatus';
export * from './VideoStatusEncoding';
export * from './VideoStatusEncodingMetadata';
export * from './VideoStatusIngest';
export * from './VideoThumbnailPickPayload';
export * from './VideoUpdatePayload';
export * from './VideosListResponse';
export * from './Webhook';
export * from './WebhooksCreationPayload';
export * from './WebhooksListResponse';

import { AccessToken } from './AccessToken';
import { Account } from './Account';
import { AccountQuota } from './AccountQuota';
import { AuthenticatePayload } from './AuthenticatePayload';
import { BadRequest } from './BadRequest';
import { BytesRange } from './BytesRange';
import { Caption } from './Caption';
import { CaptionsListResponse } from './CaptionsListResponse';
import { CaptionsUpdatePayload } from './CaptionsUpdatePayload';
import { Chapter } from './Chapter';
import { ChaptersListResponse } from './ChaptersListResponse';
import { Link } from './Link';
import { LiveStream } from './LiveStream';
import { LiveStreamAssets } from './LiveStreamAssets';
import { LiveStreamCreationPayload } from './LiveStreamCreationPayload';
import { LiveStreamListResponse } from './LiveStreamListResponse';
import { LiveStreamSession } from './LiveStreamSession';
import { LiveStreamSessionClient } from './LiveStreamSessionClient';
import { LiveStreamSessionDevice } from './LiveStreamSessionDevice';
import { LiveStreamSessionLocation } from './LiveStreamSessionLocation';
import { LiveStreamSessionReferrer } from './LiveStreamSessionReferrer';
import { LiveStreamSessionSession } from './LiveStreamSessionSession';
import { LiveStreamUpdatePayload } from './LiveStreamUpdatePayload';
import { Metadata } from './Metadata';
import { NotFound } from './NotFound';
import { Pagination } from './Pagination';
import { PaginationLink } from './PaginationLink';
import { PlayerSessionEvent } from './PlayerSessionEvent';
import { PlayerTheme } from './PlayerTheme';
import { PlayerThemeAssets } from './PlayerThemeAssets';
import { PlayerThemeCreationPayload } from './PlayerThemeCreationPayload';
import { PlayerThemeUpdatePayload } from './PlayerThemeUpdatePayload';
import { PlayerThemesListResponse } from './PlayerThemesListResponse';
import { Quality, QualityQualityEnum  , QualityStatusEnum   } from './Quality';
import { RawStatisticsListLiveStreamAnalyticsResponse } from './RawStatisticsListLiveStreamAnalyticsResponse';
import { RawStatisticsListPlayerSessionEventsResponse } from './RawStatisticsListPlayerSessionEventsResponse';
import { RawStatisticsListSessionsResponse } from './RawStatisticsListSessionsResponse';
import { RefreshTokenPayload } from './RefreshTokenPayload';
import { TokenCreationPayload } from './TokenCreationPayload';
import { TokenListResponse } from './TokenListResponse';
import { UploadToken } from './UploadToken';
import { Video } from './Video';
import { VideoAssets } from './VideoAssets';
import { VideoCreationPayload } from './VideoCreationPayload';
import { VideoSession } from './VideoSession';
import { VideoSessionClient } from './VideoSessionClient';
import { VideoSessionDevice } from './VideoSessionDevice';
import { VideoSessionLocation } from './VideoSessionLocation';
import { VideoSessionOs } from './VideoSessionOs';
import { VideoSessionReferrer } from './VideoSessionReferrer';
import { VideoSessionSession } from './VideoSessionSession';
import { VideoSource } from './VideoSource';
import { VideoSourceLiveStream } from './VideoSourceLiveStream';
import { VideoSourceLiveStreamLink } from './VideoSourceLiveStreamLink';
import { VideoStatus } from './VideoStatus';
import { VideoStatusEncoding } from './VideoStatusEncoding';
import { VideoStatusEncodingMetadata } from './VideoStatusEncodingMetadata';
import { VideoStatusIngest, VideoStatusIngestStatusEnum     } from './VideoStatusIngest';
import { VideoThumbnailPickPayload } from './VideoThumbnailPickPayload';
import { VideoUpdatePayload } from './VideoUpdatePayload';
import { VideosListResponse } from './VideosListResponse';
import { Webhook } from './Webhook';
import { WebhooksCreationPayload } from './WebhooksCreationPayload';
import { WebhooksListResponse } from './WebhooksListResponse';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0
}

                 
let enumsMap: Set<string> = new Set<string>([
    "QualityQualityEnum",
    "QualityStatusEnum",
    "VideoStatusIngestStatusEnum",
]);

let typeMap: {[index: string]: any} = {
    "AccessToken": AccessToken,
    "Account": Account,
    "AccountQuota": AccountQuota,
    "AuthenticatePayload": AuthenticatePayload,
    "BadRequest": BadRequest,
    "BytesRange": BytesRange,
    "Caption": Caption,
    "CaptionsListResponse": CaptionsListResponse,
    "CaptionsUpdatePayload": CaptionsUpdatePayload,
    "Chapter": Chapter,
    "ChaptersListResponse": ChaptersListResponse,
    "Link": Link,
    "LiveStream": LiveStream,
    "LiveStreamAssets": LiveStreamAssets,
    "LiveStreamCreationPayload": LiveStreamCreationPayload,
    "LiveStreamListResponse": LiveStreamListResponse,
    "LiveStreamSession": LiveStreamSession,
    "LiveStreamSessionClient": LiveStreamSessionClient,
    "LiveStreamSessionDevice": LiveStreamSessionDevice,
    "LiveStreamSessionLocation": LiveStreamSessionLocation,
    "LiveStreamSessionReferrer": LiveStreamSessionReferrer,
    "LiveStreamSessionSession": LiveStreamSessionSession,
    "LiveStreamUpdatePayload": LiveStreamUpdatePayload,
    "Metadata": Metadata,
    "NotFound": NotFound,
    "Pagination": Pagination,
    "PaginationLink": PaginationLink,
    "PlayerSessionEvent": PlayerSessionEvent,
    "PlayerTheme": PlayerTheme,
    "PlayerThemeAssets": PlayerThemeAssets,
    "PlayerThemeCreationPayload": PlayerThemeCreationPayload,
    "PlayerThemeUpdatePayload": PlayerThemeUpdatePayload,
    "PlayerThemesListResponse": PlayerThemesListResponse,
    "Quality": Quality,
    "RawStatisticsListLiveStreamAnalyticsResponse": RawStatisticsListLiveStreamAnalyticsResponse,
    "RawStatisticsListPlayerSessionEventsResponse": RawStatisticsListPlayerSessionEventsResponse,
    "RawStatisticsListSessionsResponse": RawStatisticsListSessionsResponse,
    "RefreshTokenPayload": RefreshTokenPayload,
    "TokenCreationPayload": TokenCreationPayload,
    "TokenListResponse": TokenListResponse,
    "UploadToken": UploadToken,
    "Video": Video,
    "VideoAssets": VideoAssets,
    "VideoCreationPayload": VideoCreationPayload,
    "VideoSession": VideoSession,
    "VideoSessionClient": VideoSessionClient,
    "VideoSessionDevice": VideoSessionDevice,
    "VideoSessionLocation": VideoSessionLocation,
    "VideoSessionOs": VideoSessionOs,
    "VideoSessionReferrer": VideoSessionReferrer,
    "VideoSessionSession": VideoSessionSession,
    "VideoSource": VideoSource,
    "VideoSourceLiveStream": VideoSourceLiveStream,
    "VideoSourceLiveStreamLink": VideoSourceLiveStreamLink,
    "VideoStatus": VideoStatus,
    "VideoStatusEncoding": VideoStatusEncoding,
    "VideoStatusEncodingMetadata": VideoStatusEncodingMetadata,
    "VideoStatusIngest": VideoStatusIngest,
    "VideoThumbnailPickPayload": VideoThumbnailPickPayload,
    "VideoUpdatePayload": VideoUpdatePayload,
    "VideosListResponse": VideosListResponse,
    "Webhook": Webhook,
    "WebhooksCreationPayload": WebhooksCreationPayload,
    "WebhooksListResponse": WebhooksListResponse,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            
            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "application/json" || mediaType.indexOf("application/vnd.api.video+json;version=") === 0) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
