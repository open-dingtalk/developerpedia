---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 获得开发者权限

钉钉[开发者后台](https://open.dingtalk.com)是应用开发最重要的控制台。通过开发者后台，钉钉开发者可以创建应用，进行应用开发。其中，应用的能力包括展示在工作台的网页应用、机器人、酷应用等。

当前开发者后台中，应用开发的功能依赖**“应用开发子管理员”**权限，本文介绍如何获得该权限。如果没有该权限，进入应用开发时候就会出现相应的错误提示：

![开发者后台无访问权限](/img/explore/portal/open-dev-unauth.jpg)

## 获取权限方式

可以通过以下两种方式获得开发者权限。

<Tabs queryString="via">
<TabItem value="grant" label="管理员授予权限（推荐）" default>

由主管理员操作（企业里可以由多个主管理员，在 OA 管理后台可以添加主管理员）。

1. 主管理员进入 [OA 管理后台](https://oa.dingtalk.com)；
2. 左侧导航中选择 “安全与权限” - “权限管理”；
3. 按照下图依次操作：选择员工、点击“钉钉官方应用权限”的“配置”、勾选权限、保存；
4. 恭喜完成授权。

![管理员授予权限](/img/explore/portal/grant-admin-permission.jpg)

</TabItem>
<TabItem value="apply" label="自助申请权限">

1. 进入[开发者后台](https://open-dev.dingtalk.com)
2. 点击顶部菜单栏的“应用开发”，进入下图的“无权限”提示页面，点击“去提交申请”，按照引导提交申请表单即可

![自助申请权限](/img/explore/portal/open-dev-unauth.jpg)

</TabItem>
</Tabs>

:::tip
如果以上流程遇到问题，可以通过[技术支持](/docs/explore/support)提交反馈。
:::

## 相关链接

* [钉钉开发者后台](https://open-dev.dingtalk.com/)
* [钉钉 OA 管理后台](https://oa.dingtalk.com)