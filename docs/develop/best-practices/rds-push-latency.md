---
sidebar_position: 4
---

# RDS 推送异常

如果你的应用在处理 [RDS 推送](https://open.dingtalk.com/document/isvapp/configure-rds-push-table) 时候，遇到异常，可以参考该文档分析与解决。

## 步骤一：检查是否有平台故障发生

阿里云RDS 和钉钉开放平台的故障都有可能导致 RDS 推送异常。你可以通过阿里云和钉钉的服务状态页面查看平台的稳定性状态。

* [阿里云健康状态](https://status.aliyun.com)
* [钉钉健康状态](https://status.dingtalk.com)

如果以上状态页中显示了异常，可以立即联系平台的支持人员，询问故障和恢复情况。

## 步骤二：检查 RDS 状态

如果阿里云和钉钉健康状态均显示没有异常，可以分析 RDS 配置进一步确认问题原因。

### 2.1 检查配置 

可以参考以下文档检查 RDS 推送相关配置是否正常：

* [配置RDS数据源](https://open.dingtalk.com/document/isvapp/add-data-sources-for-rds)
* [配置RDS推送表](https://open.dingtalk.com/document/isvapp/configure-rds-push-table)

尤其是文档中 IP 白名单，需要确认是否正常配置。如果一条消息都收不到，那么大概率是配置异常引起。

### 2.2 使用状态检查

如果配置正常，但是经常出现收消息慢的问题，可以重点检查以下数据库的使用方式是否合理。

1. 检查单表中数据规模
2. 检查表的索引是否添加

对于「单表中数据规模」，**RDS 推送的数据主要是流水的事件数据，而不是最终的状态数据**。因此，我们推荐的最佳实践是接收到事件进行后续处理后，即可删除该 RDS 中的事件数据。因此单表建议维持在万、十万的数量级，如果超过百万，甚至千万级别的数据，建议清除已经处理完的事件数据。
如果不方便立即清理数据，建议升级 RDS 规格，以满足大规模数据的存储和读写。但是，我们的最佳事件依然是及时接收和处理事件数据，然后删除它，以减低事件数据在 RDS 中的处理负载。

对于「表的索引」，如果忘记添加索引的话，很容易因为数据规模的上涨造成访问延迟变大。请参考 [配置RDS推送表](https://open.dingtalk.com/document/isvapp/configure-rds-push-table) 检查并设置相应的索引。

## 寻求帮助

当以上方法都无法解决你的问题时候，可以通过[技术支持](/docs/explore/support)提交你的问题反馈，以寻求帮助。

为了高效解决问题，提交反馈时候务必提供以下信息：

* 接收事件推送的应用 ID
* 这两张表中的数据条目数：open_sync_biz_data 和 open_sync_biz_data_medium
* 这两张表的索引：open_sync_biz_data 和 open_sync_biz_data_medium

## 参考资料
* [配置RDS数据源](https://open.dingtalk.com/document/isvapp/add-data-sources-for-rds)
* [配置RDS推送表](https://open.dingtalk.com/document/isvapp/configure-rds-push-table)
* [钉钉健康状态](https://status.dingtalk.com)
* [阿里云健康状态](https://status.aliyun.com)g
