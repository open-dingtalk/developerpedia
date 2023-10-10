---
sidebar_position: 9
---

# 8. 进阶：获取用户代理凭证
在本章节，将会介绍如何在获取[用户代理凭证](https://open.dingtalk.com)访问钉钉[GraphAPI](https://open.dingtalk.com)。包括以下内容：
1. 什么是用户代理凭证
2. 用户代理凭证如何访问钉钉 Graph API
3. 在钉钉 AIPaaS 中如何触发用户授权代理凭证
4. 进阶：Graph API 服务如何获取用户代理凭证

## 什么是用户代理凭证

coming soon...

## 用户代理凭证如何访问钉钉 Graph API

coming soon...

## 在钉钉 AIPaaS 中如何触发用户授权代理凭证

AIPaaS 的访问原则是以[操作人的权限](https://open.dingtalk.com/document/orgapp/obtain-user-token)访问数据，即 AI 应用通过代理操作人用户身份访问开放平台中的me接口（e.g 待办,日程，个人状态 etc）

:::info
用户可以通过在 AI 插件中选择是否需要token来获取
:::

```java
public class AIPluginCallbackConsumer implements OpenDingTalkCallbackListener<DingTalkAIPluginRequest, DingTalkAIPluginResponse> {
    @Override
    public DingTalkAIPluginResponse execute(DingTalkAIPluginRequest request) {
        log.info("receive AI plugin request={}", request);
        String abilityKey = request.getAbilityKey();
        // dos something with abilityKey
        DingTalkAIPluginResponse response = new DingTalkAIPluginResponse();
        response.setRequestId(request.getRequestId());
        response.setResult("echo");
        return response;
    }
}
  // 输入
  {
    "abilityKey":"addCustomer",
    "data":{
        "owner":"010912691086509",
        "ambition":"低",
        "customName":"杭州钉钉网络有限公司",
        "accessToken":"c4b3ecd60a1a308abc6b7fc6f0332d84" //用户代理凭证, 注意与企业访问的区别
    },
    "pluginId":"AI-xxxx-yyy-zzz-www-hhhhhh",
    "pluginVersion":"1.0.0",
    "requestId":"39a47658-5800-41ba-bfed-21a9573e470f"
  }
```
  
  
### 前置条件
在钉钉开发者后台选择应用开发，在"登录与分享“中将 https://baymax.dingtalk.com/oauth2 设置为免登回调地址

### 授权行动点
:::info 
本章节只涉及用户代理凭证的授权卡片行动点接入方式，当前 AI 插件暂时不支持企业凭证的增量授权
:::

#### 平台主动触发
当官方插件中使用了开放平台接口me接口没有授权或需要续期时，baymax会主动发出授权卡片，授权之后继续重新执行技能
#### AI 插件服务端触发
当 AI 插件服务端访问开放平台me接口没有授权或需要续期时，需要通过特定的结构体透传开放平台错误码告知baymax弹出授权卡片，授权之后继续重新执行技能
当前与授权相关错误码主要有两个：
‒ 400：InvalidAuthentication；access_token过期或者不存在，需要重新获取
‒ 403：Forbidden.AccessDenied.AccessTokenPermissionDenied；需要申请下接口权限，请参考添加接口调用权限。

```json
{
  "success":false,// 代表失败响应
  "code":"Forbidden.AccessDenied.AccessTokenPermissionDenied", // 开放平台错误码
  "requestId":"39a47658-5800-41ba-bfed-21a9573e470f"
}
```

### 用户代理凭证授权效果
![用户代理凭证授权](/img/explore/stream/aiplugin/consent.png)

## 进阶：AI 插件服务如何获取用户代理凭证

用户可以通过在 AI 插件中选择是否需要token,并在回调的`data`对象中获取`accessToken`

```json
  {
  "abilityKey":"key1",
  "data":{
    "owner":"010912691086509",
    "ambition":"低",
    "customName":"杭州钉钉网络有限公司",
    "accessToken":"c4b3ecd60a1a308abc6b7fc6f0332d84" //用户代理凭证, 注意与企业访问的区别
  },
  "pluginId":"AI-xxxx-yyy-zzz-www-hhhhhh",
  "pluginVersion":"1.0.0",
  "requestId":"39a47658-5800-41ba-bfed-21a9573e470f"
}
```

### 
