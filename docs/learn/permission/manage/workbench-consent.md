---
sidebar_position: 4
---


# 工作台权限管理

组织管理员可以在工作台管理授予给每个应用的应用权限。

以移动端工作台为例：

* 点击工作台右上角的【齿轮】进入企业管理。然后点击【应用&模板】进入应用管理。找到想要管理的应用，点击【设置】，进入该应用的管理页。点击【授权管理】即可看到所有已经授予的权限点。
![工作台授权入口](/img/learn/permission/workbench_grant_entry.png)
![工作台授权清单](/img/learn/permission/workbench_permission.png)


:::info Note
目前只支持敏感权限的解除授权，基础权限的解除授权在规划中，敬请期待。
:::

:::info Note
目前管理员只可以在钉钉端内完成解除授权，后续我们将支持管理员在浏览器内解除授权，敬请期待。
:::

## 开发者如何处理权限被撤回

* 你的应用用 Access Token 调用 OpenAPI，正常返回200。
* 但当管理员撤回权限后，用之前的 Access Token 调用 OpenAPI 会返回403 "无权限"。您需要在代码中妥善处理403错误。
* 平台建议你的应用在收到403时，触发获取[应用的访问凭证](/docs/learn/permission/token/app_only_token)的流程，再次向管理员获取授权后，用新的 Access Token 调用 OpenAPI。