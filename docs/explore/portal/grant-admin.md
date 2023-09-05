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

## 最佳实践

如果你无法获得当前组织的主管理员权限的话，建议创建一个测试组织，这样可以用主管理员权限快速掌握和验证钉钉全部的能力，开发了丰富的应用能力后再推荐给组织内其他同事使用。
创建组织的方法如下：
1. 手机端：点击左上角企业名称 - 下滑到最下方【创建/加入团队】-【创建团队】-【完善企业信息】-【创建】-【添加成员】-点击【完成】即可。
2. 电脑端：点击左侧【通讯录】- 【创建团队】-【输入手机号码】根据页面提示操作即可，如下图：

## 相关链接

* [钉钉开发者后台](https://open-dev.dingtalk.com/)
* [钉钉 OA 管理后台](https://oa.dingtalk.com)