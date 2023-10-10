---
sidebar_position: 1
---

# 授权组件SDK

基于安全和法务合规的考虑，应用通过调用 OpenAPI 访问资源之前，需要经过用户（或管理员）同意授权。

钉钉为你的应用提供了端内的授权组件，你的应用可以通过调用授权组件，触达用户（或管理员），向他们获取授权许可。在用户授权后，你的应用最终可以获取到对应的访问凭证。

授权组件同时支持[委托访问](/docs/learn/permission/intro/delegated_permission)和[应用访问](/docs/learn/permission/intro/application_permission)的授权。

## 授权组件的使用者体验

* 在获取委托授权时，你的应用调用授权组件，如果用户尚未授权，则会看到如下界面：
![委托授权UI](/img/develop/permission/delegated_jsapi_ui.png)

* 在获取应用授权时，你的应用调用授权组件，如果管理员尚未授权，则会看到如下界面：
![管理员应用授权UI](/img/develop/permission/application_jsapi_ui.png)
  * 如果当前用户并非组织的管理员，授权组件会提示用户选择管理员并联系管理员授权。
    ![通知管理员应用授权UI](/img/develop/permission/handover_to_admin_jsapi.gif)
  相应的管理员会在与该用户的钉钉单聊内，收到授权消息卡片通知，如下：
    ![授权卡片](/img/develop/permission/permission_card.png)


## 开发者接入授权组件
那么作为开发者，你可以参考以下步骤在应用内编码调用授权组件。

### 1. 使用说明
#### 版本要求
| 客户端  | Android         | IOS             | PC              |
|------|-----------------|-----------------|-----------------|
| 支持说明 | 支持(钉钉版本≥6.3.35) | 支持(钉钉版本≥6.3.35) | 支持(钉钉版本≥6.3.35) |

使用授权组件SDK，钉钉版本需要在6.3.35及以上。低版本需提示用户升级客户端，你可以通过以下方式判断钉钉版本。
``` js
import { getENV, } from 'dingtalk-jsapi/lib/env';
import { compareVersion, } from 'dingtalk-jsapi/lib/sdk/sdkLib';

const { platform, version, appType, } = getENV();
/**
 * 判断当前app版本是否支持使用SDK
 * @return {boolean}
 */
function isAuthSDKSupport() {
  return compareVersion(version, '6.3.35');
}
```

#### 确认使用场景
* 如果你的应用采用委托访问，时序图如下：
  ![授权码模式jsapi时序图](/img/develop/permission/auth_code_flow_sequence_jsapi.png)

* 如果你的应用采用应用访问，时序图如下：
  ![凭证模式jsapi时序图](/img/develop/permission/client_credential_flow_sequence_jsapi.png)


### 2. 授权组件SDK
#### Step 2-1：安装授权套件SDK
1. 执行以下命令，下载安装SDK（dingtalk-design-libs需要版本在0.1.0及以上）：
```shell
   npm install dingtalk-design-libs --save
```

2. 下载完成后，直接在代码中导入即可：
```js
   import { openAuth } from 'dingtalk-design-libs/biz/openAuth';
```

#### Step 2-2：应用授权接入
1. 引入授权组件SDK：
```js
   import { openAuth } from 'dingtalk-design-libs/biz/openAuth';
```
2. 授权组件 jsapi：
```js
openAuth({
  clientId:'suitexxx', // 应用的 ClientID
  corpId:'dingxxx', // 授权组织的 CorpId
  rpcScope:'Mock.Scope.Code', // 权限点 Code
  fieldScope:'Mock.Scope.Code', // 特殊权限点 Code, 使用场景较少，常为空
  type:0 // 0 标识授委托授权；1 标识应用授权
}).then((res)=>{
// 处理返回数据
})
```

3. 请求、响应与错误码：
* 如果你的应用采用[委托访问](/docs/learn/permission/intro/delegated_permission)，详见[钉钉端内获取用户委托的访问凭证](/docs/develop/permission/token/jsapi/get_user_app_token_jsapi)。
* 如果你的应用采用[应用访问](/docs/learn/permission/intro/application_permission)，详见[钉钉端内获取应用的访问凭证](/docs/develop/permission/token/jsapi/get_app_only_token_jsapi)。

