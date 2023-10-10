---
sidebar_position: 2
---

# 如何参与贡献

可以通过 [GitHub Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) 方式参与钉钉开发者百科知识库建设，包括修改问题、新增文档。

如果以前没有提交过 Pull Request 可以参考这几篇文档快速学习：

1. [掘金：如何在 Github 上规范的提交 PR（图文详解）](https://juejin.cn/post/7167734674167447582)
2. [掘金：Github 如何提交 PR？](https://juejin.cn/post/7108740596738719751)

## 找到当前项目地址和文档地址

1. GitHub上开源项目地址 ：可以通过本文右上角 [GitHub](https://github.com/open-dingtalk/developerpedia) 链接跳转到对应的项目首页；
2. 文档地址：对于每一篇文档，可以通过左下角“Edit this page”链接找到对应的文档地址；

## 如何编辑和验证

1. 对于小的改动，比如新增一篇文档、修改一个错别字等，可以直接在 GitHub 网页上直接编辑和提交；
2. 对于大的改动，比如大范围的目录调整、复杂的内容展示等，可以搭建本地运行环境；

如何搭建本地运行环境：

1. 安装: ```yarn```，或 ```npm install```
2. 本地运行：```yarn start```，或```npm start```
3. 预览：用浏览器打开 http://localhost:3000/developerpedia/ 预览和验证编辑后的效果

推荐采用 WebStorm 等 IDE 开发会有更好的编辑和调试体验。

## 相关规范

* [如何写好文档](/docs/contrib/docs-guide)
* [如何写好技术教程](/docs/contrib/tutorials-guide)

## 相关链接

1. 当前的[开发者百科](/docs/intro)采用 Facebook 开源的 [docusaurus](https://docusaurus.io) 系统搭建，可以点击链接前往 docusaurus 官网了解更深入的使用说明。