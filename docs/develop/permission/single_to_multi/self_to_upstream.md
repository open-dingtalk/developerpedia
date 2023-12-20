---
sidebar_position: 2
---

# 企业内部应用如何改造成上下游应用？

##
* 企业内部应用由于只能运行在开发本应用的组织里，因此被归类为**单组织应用（Single-tenant Application）**。
* 企业三方应用、企业上下游应用和企业上下级等应用由于能通过应用市场开通、上下游分发等分发渠道，最终运行在多个组织内，因此被归类为**多组织应用（Multi-tenant Application）**。

也就是说，企业内部应用改造成上下游应用，是一个从单组织应用到多组织应用的改造。你可以继续参考本文，完成代码改造。


## 一、梳理权限点
* 首先，整理你的应用中用到的所有权限点。
* 其次，开放平台的权限点分为两类：委托权限点和应用权限点。

:::info 开发者Tip
  权限点类型在开发者后台的透出正在开发中，现在如果你想知道某个权限点属于委托还是应用，欢迎进群咨询：“钉钉权限系统交流群”，群号： 27520024199。
:::

* 最终，你可以整理出类似下方表格：

|     | 权限点code                     | 权限信息           | 权限点类型 |
|:----|:----------------------------|:---------------|:------|
| 1   | Contact.User.Read           | 通讯录个人信息读权限     | 委托类型  |
| 2   | Calendar.EventSchedule.Read | 日历应用中日程闲忙状态读权限 | 委托类型  |
| 3   | qyapi_chat_manage           | 钉钉群消息管理权限      | 应用类型  |
| 4   | qyapi_chat_read             | 钉钉群消息读权限       | 应用类型  |
| 5   | ...                         | ...            | ...   | 


## 二、调用OpenAPI

### 2-1 获取访问凭证
* 如果你的应用需要调用 **委托类型权限点** 对应的 OpenAPI，请参考文档 [浏览器内获取用户委托的访问凭证](/docs/develop/permission/token/browser/get_user_app_token_browser)
 或 [钉钉端内获取用户委托的访问凭证](/docs/develop/permission/token/jsapi/get_user_app_token_jsapi)，获取用户委托的Access Token。
  * 用户委托的Access Token中有用户授权的所有委托类型权限点，可以用于调用委托类型权限点对应的OpenAPI。

* 如果你的应用需要调用 **应用类型权限点** 对应的 OpenAPI。请参考文档 [获取应用的Access Token[新🔥] ](/docs/develop/permission/single_to_multi/new_get_app_token)，获取应用的Access Token。
  * 应用的Access Token中有所有应用类型权限点，可用于调用应用类型权限点对应的OpenAPI。 

### 2-2 调用OpenAPI
* 用用户委托的Access Token，调用委托类型权限点对应的OpenAPI。
* 用应用的Access Token，调用应用类型权限点对应的OpenAPI。


## 三、上下游分发
在完成上方的代码改造后，你可以把应用通过开发者后台的上下游分发渠道，分发给下游组织使用。

## 四、其他
* 如果你想了解更多关于委托权限和应用权限的知识，可以移步[委托访问](/docs/learn/permission/intro/delegated_permission)和[应用访问](/docs/learn/permission/intro/application_permission)。
* 如果以上方式无法解决你的问题，欢迎通过[技术支持](/docs/explore/support)提交你的反馈 。
* 如果你在改造过程中有任何问题，欢迎进群咨询：“钉钉权限系统交流群”，群号： 27520024199。
* 如果该问题还有其他的因素需要考虑，也欢迎你[参与贡献](/docs/contrib/overview)完善该文档，帮助更多人解决上下游应用问题。
