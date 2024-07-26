
# AnalyticsAggregatedMetricsResponseContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric** | [**AnalyticsAggregatedMetricsResponseContextMetricEnum**](#AnalyticsAggregatedMetricsResponseContextMetricEnum) | Returns the metric you selected. |  [optional]
**aggregation** | [**AnalyticsAggregatedMetricsResponseContextAggregationEnum**](#AnalyticsAggregatedMetricsResponseContextAggregationEnum) | Returns the aggregation you selected. |  [optional]
**timeframe** | [**AnalyticsAggregatedMetricsResponseContextTimeframe**](AnalyticsAggregatedMetricsResponseContextTimeframe.md) |  |  [optional]



## Enum: AnalyticsAggregatedMetricsResponseContextMetricEnum

Name | Value
---- | -----
Play | &#39;play&#39;
Start | &#39;start&#39;
End | &#39;end&#39;
Impression | &#39;impression&#39;
ImpressionTime | &#39;impression-time&#39;
WatchTime | &#39;watch-time&#39;



## Enum: AnalyticsAggregatedMetricsResponseContextAggregationEnum

Name | Value
---- | -----
Count | &#39;count&#39;
Rate | &#39;rate&#39;
Total | &#39;total&#39;
Average | &#39;average&#39;
Sum | &#39;sum&#39;



