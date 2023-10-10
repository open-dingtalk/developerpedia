---
sidebar_position: 2
---

# 用户撤回委托给应用的权限

用户可以撤回之前授予给应用的委托权限。

:::info Note
目前用户可以在钉钉端内完成解除授权，后续我们将支持用户在浏览器内解除授权，敬请期待。
:::

## 用户撤回委托权限体验

依次点击【我的】-【安全中心】-【隐私开关】-【应用授权管理】，用户看到自己授权过的应用列表，选择想要撤回权限的应用进入，并点击【解除授权】。

![用户撤回权限1](/img/learn/permission/user_revoke_delegated_permission_1.png)

![用户撤回权限2](/img/learn/permission/user_revoke_delegated_permission_2.png)


## 开发者如何处理权限被撤回

* 你的应用用 Access Token 调用 OpenAPI，正常返回200。
* 但当用户撤回权限后，用之前的 Access Token 调用 OpenAPI 会返回403 "无权限"。您需要在代码中妥善处理403错误。
* 平台建议你的应用在收到403时，触发获取[用户委托的访问凭证](/docs/learn/permission/token/user_app_token)的流程，再次向用户获取授权后，用新的 Access Token 调用 OpenAPI。