---
sidebar_position: 2
---

# Node.js SDK 发布

本文介绍如何通过 GitHub Action 自动化发布 [dingtalk-stream](https://www.npmjs.com/package/dingtalk-stream) 这个 SDK。

核心思想是通过 GitHub Release 触发 GitHub Action 执行，在 GitHub Action 中实现了自动化构建与发布。

## 步骤说明

1. **更新版本号**：按照[规范](intro)，确定准备发布的版本号，例如 x.y.z。并将该版本号更新到 `package.json` 中 `version` 字段。
   1. 建议：提交 Pull request 时候，把 package.json 中的版本变更一同提交
2. **创建 Release**：在[项目首页](https://github.com/open-dingtalk/dingtalk-stream-sdk-nodejs)，点击右侧 [Releases](https://github.com/open-dingtalk/dingtalk-stream-sdk-nodejs/releases) 后，点击`Draft a new release`，填写表单完成发布
   1. 要求：对于常规发布，Release title 中只写版本号，格式为 `vX.Y.Z`
   2. 要求：如果是 Breaking change，需要 title 中备注，格式为 `vX.Y.Z Breaking change`
3. **检查 CI 结果**：完成步骤 2 的 Release 之后，GitHub action 就会自动执行，可以进入 [Actions](https://github.com/open-dingtalk/dingtalk-stream-sdk-nodejs/actions) 中检查构建状态及结果。

## 深入理解原理

该项目使用了 [GitHub Actions](https://docs.github.com/en/actions) 实现自动化构建与 NPM 发布。对应的构建脚本在 [.github/workflows/publish.yml](https://github.com/open-dingtalk/dingtalk-stream-sdk-nodejs/blob/main/.github/workflows/publish.yml) 中

触发条件（通过 GitHub release 触发）：
```text
on:
  release:
    types: [published]
```

构建脚本：
```text
  - run: npm install
  - run: npm run build
  - run: npm publish
```

NPM 发布的 Token，采用钉钉开放平台公共账号创建的 Access Token（通过 [GitHub secrets](https://docs.github.com/actions/security-guides/encrypted-secrets) 管理）：
```text
  env:
    NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 相关链接

* [npm 上 dingtalk-stream 首页](https://www.npmjs.com/package/dingtalk-stream)
* [GitHub Actions documentation](https://docs.github.com/en/actions)
* [Using secrets in GitHub Actions](https://docs.github.com/actions/security-guides/encrypted-secrets)
* 该项目的构建脚本为：[.github/workflows/publish.yml](https://github.com/open-dingtalk/dingtalk-stream-sdk-nodejs/blob/main/.github/workflows/publish.yml)