---
sidebar_position: 1
---

# Java SDK 发布

本文介绍如何通过 GitHub Action 自动化发布 [dingtalk-stream](https://s01.oss.sonatype.org/#nexus-search;quick~dingtalk-stream) 这个 SDK。

核心思想是通过 GitHub Release 触发 GitHub Action 执行，在 GitHub Action 中实现了自动化构建与发布。

## 步骤说明

1. **更新版本号**：
   1. 修改版本号：按照[规范](intro)，确定准备发布的版本号，例如 x.y.z。并将该版本号更新到 `version.sh` 文件中，替换掉旧的版本号。
   2. 更新版本号：执行 `sh version.sh` 命令来更新 pom.xml 中的版本号
   3. 提交代码：git commit 并 push 到 GitHub 中
2. **创建 Release**：在[项目首页](https://github.com/open-dingtalk/dingtalk-stream-sdk-java)，点击右侧 [Releases](https://github.com/open-dingtalk/dingtalk-stream-sdk-java/releases) 后，点击`Draft a new release`，填写表单完成发布
   1. 要求：对于常规发布，Release title 中只写版本号，格式为 `vX.Y.Z`
   2. 要求：如果是 Breaking change，需要 title 中备注，格式为 `vX.Y.Z Breaking change`
3. **检查 CI 结果**：完成步骤 2 的 Release 之后，GitHub action 就会自动执行，可以进入 [Actions](https://github.com/open-dingtalk/dingtalk-stream-sdk-java/actions) 中检查构建状态及结果。

## 深入理解原理

该项目使用了 [GitHub Actions](https://docs.github.com/en/actions) 实现自动化构建与 NPM 发布。对应的构建脚本在 [.github/workflows/release.yml](https://github.com/open-dingtalk/dingtalk-stream-sdk-python/blob/main/.github/workflows/release.yml) 中

触发条件有两类：
1. 通过 GitHub release 触发（本文步骤说明章节有相关说明），用于发布 release 包
2. 提交到 develop 分支触发，用于发布 SNAPSHOT 包

```text
on:
  push:
    branches:
      - develop
  release:
    types: [published]
```

构建脚本：
```text
      - name: Set up JDK 8
        uses: actions/setup-java@v3
        with:
          distribution: 'temurin'
          java-version: 8

      - name: Import GPG private key
        uses: crazy-max/ghaction-import-gpg@v6
        with:
          gpg_private_key: ${{ secrets.GPG_PRIVATE_KEY }}
          passphrase: ${{ secrets.GPG_PASSPHRASE }}

      - name: Build with Maven
        run: mvn clean install

      - name: Deploy to Sonatype Nexus
        run: mvn deploy --settings settings.xml
        env:
          MAVEN_USERNAME: ${{ secrets.MAVEN_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.MAVEN_PASSWORD }}
```

Maven Central 发布的密钥信息，通过 [GitHub secrets](https://docs.github.com/actions/security-guides/encrypted-secrets) 管理）：
```text
      - name: Import GPG private key
        uses: crazy-max/ghaction-import-gpg@v6
        with:
          gpg_private_key: ${{ secrets.GPG_PRIVATE_KEY }}
          passphrase: ${{ secrets.GPG_PASSPHRASE }}
      ...
      - name: Deploy to Sonatype Nexus
        run: mvn deploy --settings settings.xml
        env:
          MAVEN_USERNAME: ${{ secrets.MAVEN_USERNAME }}
          MAVEN_PASSWORD: ${{ secrets.MAVEN_PASSWORD }}
```

## 相关链接

* [Sonatype 上 dingtalk-stream 包](https://s01.oss.sonatype.org/#nexus-search;quick~dingtalk-stream)
* [GitHub Actions documentation](https://docs.github.com/en/actions)
* [Using secrets in GitHub Actions](https://docs.github.com/actions/security-guides/encrypted-secrets)
* 该项目的构建脚本为：[.github/workflows/release.yml](https://github.com/open-dingtalk/dingtalk-stream-sdk-python/blob/main/.github/workflows/release.yml)