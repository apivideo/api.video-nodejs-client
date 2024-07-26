
# AnalyticsMetricsBreakdownResponseContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**AnalyticsMetricsBreakdownResponseContextMetricEnum**](#AnalyticsMetricsBreakdownResponseContextMetricEnum) | Returns the metric you selected. |  [optional]
**breakdown** | [**AnalyticsMetricsBreakdownResponseContextBreakdownEnum**](#AnalyticsMetricsBreakdownResponseContextBreakdownEnum) | Returns the dimension you selected. |  [optional]
**timeframe** | [**AnalyticsAggregatedMetricsResponseContextTimeframe**](AnalyticsAggregatedMetricsResponseContextTimeframe.md) |  |  [optional]



## Enum: AnalyticsMetricsBreakdownResponseContextMetricEnum

Name | Value
---- | -----
Play | &#39;play&#39;
PlayRate | &#39;play-rate&#39;
Start | &#39;start&#39;
End | &#39;end&#39;
Impression | &#39;impression&#39;



## Enum: AnalyticsMetricsBreakdownResponseContextBreakdownEnum

Name | Value
---- | -----
MediaId | &#39;media-id&#39;
MediaType | &#39;media-type&#39;
Continent | &#39;continent&#39;
Country | &#39;country&#39;
DeviceType | &#39;device-type&#39;
OperatingSystem | &#39;operating-system&#39;
Browser | &#39;browser&#39;



