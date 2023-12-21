---
sidebar_position: 1
---

# 接口调用失败问题最佳实践

当你调用钉钉开放平台 API 时候，如果出现调用异常，可以参考本文档寻求解决方案

对于这类常见问题，有更为详细的解决方案，可以点击查看：

* [“接口调用没有权限” 问题最佳实践](permission-deny)
* [网络连接问题错误诊断与解决](socket-timeout)

## 升级至最新版

建议参考和采用最新版本的文档、API 和 SDK。

## 寻求帮助

当以上方法都无法解决你的问题时候，可以通过[技术支持](/docs/explore/support)提交你的问题反馈，以寻求帮助。

为了高效解决问题，提交反馈时候务必提供以下信息：

1. 应用 ClientID （对应 AppKey 或者 SuiteKey）
2. 调用接口的日期和时间
3. 调用的接口URL，或者对应的开放平台文档链接，或者调用 SDK 的相关代码 （推荐提供接口 URL ，或者接口对应的文档 URL）
4. 调用接口时候传入的参数，注意对敏感信息脱敏。脱敏时候尽量保留 json 数据的格式信息
5. 钉钉开放平台返回的错误信息
6. 接口的 RequestID


:::caution 注意事项

为了保护的你应用安全，以及使用你应用的客户信息安全，请不要在问题反馈中携带隐私信息。例如 ClientSecret、用户AT聊天机器人的消息内容等。

如果你在问题沟通群中反馈问题时候，不小心提交了隐私信息，群管理员发现后将会立即撤回该消息，以避免你的应用和使用你应用的客户信息发生泄漏。

:::

## 参考资料

* [“接口调用没有权限” 问题最佳实践](permission-deny)