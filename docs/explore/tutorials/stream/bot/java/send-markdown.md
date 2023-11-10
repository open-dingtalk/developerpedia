---
sidebar_position: 6
---

# 6. 进阶：发送 Markdown

在本章节中，将会介绍如何回复/发送 Markdown 消息。相比前面介绍的发送文本消息来说，Markdown 消息支持更丰富的图文混排能力，以及富文本交互，可以用于各种场景中展示业务信息。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-java)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Java 模块

参考 [Spring Quickstart Guide](https://spring.io/quickstart) 创建一个空的 Spring 工程。
推荐新手采用本教程相同的配置，[点此链接](https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.7.17&packaging=jar&jvmVersion=1.8&groupId=com.example&artifactId=bot-echo-text&name=bot-echo-text&description=Demo%20project%20for%20DingTalk&packageName=com.example.bot-echo-markdown)进入 spring intializr，本教程相关的参数已经通过 URL 参数自动携带过去。

本教程使用的主要参数包括：

* Project：Maven
* Language：Java
* Spring Boot：2.7.15
* Java：8

进入页面后，点击 GENERATE 按钮后会下载生成好 Spring 工程文件，解压缩后可以完成 Java 模块创建。

:::info 温馨提示
如果你需要在已有的 Java 工程中开发钉钉聊天机器人，可以跳过这一步。
:::

## 安装依赖

一、在 pom.xml 中添加依赖项（本文档中版本号仅用于示例，强烈推荐采用[最新版本](https://s01.oss.sonatype.org/?#nexus-search;quick~dingtalk-stream)）

```xml title="pom.xml" {4-8} showLineNumbers
<!-- ... -->
    <dependencies>
        <!-- ... -->
        <dependency>
			<groupId>com.dingtalk.open</groupId>
			<artifactId>dingtalk-stream</artifactId>
			<version>1.2.0</version>
		</dependency>
        <!-- ... -->
	</dependencies>
<!-- ... -->
```

二、在命令行中 pom.xml 所在目录执行 `mvn clean package` 命令获得最新依赖项，或者在 IDE 中执行相关动作。

## 开发机器人服务

一、在 ./src/main/resources/application.properties 中添加应用凭据的配置：
```text title="./src/main/resources/application.properties" showLineNumbers
dingtalk.app.client-id=put-your-client-id-here
dingtalk.app.client-secret=put-your-client-secret-here
```

:::caution 注意事项
务必将以上命令中"put-your-client-id-here"和"put-your-client-secret-here"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建应用文档](create-app)获取。
:::

二、在 com.example.botechomarkdown 包下面创建 BotEchoMarkdownConsumer 类，用于处理来自的 IM 消息推送：
```java title="BotEchoMarkdownConsumer.java" showLineNumbers
package com.example.botechomarkdown;

import com.dingtalk.open.app.api.callback.OpenDingTalkCallbackListener;
import com.dingtalk.open.app.api.chatbot.BotReplier;
import com.dingtalk.open.app.api.models.bot.ChatbotMessage;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Arrays;

@Component
public class BotEchoMarkdownConsumer implements OpenDingTalkCallbackListener<ChatbotMessage, Void> {

    @Override
    public Void execute(ChatbotMessage message) {
        StringBuilder builder = new StringBuilder();
        builder.append("echo received message:\n");
        for (String line: message.getText().getContent().trim().split("\n")) {
            builder.append("\n>1. ").append(line.trim());
        }
        try {
            BotReplier.fromWebhook(message.getSessionWebhook()).replyMarkdown("dingtalk-tutorial-java", builder.toString(), Arrays.asList(message.getSenderStaffId()));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return null;
    }
}
```

三、在 com.example.botechomarkdown 包下面创建 BotEchoMarkdownListener 类，用于创建 IM 消息的监听：

```java title="BotEchoMarkdownListener.java" showLineNumbers
package com.example.botechomarkdown;

import com.dingtalk.open.app.api.OpenDingTalkClient;
import com.dingtalk.open.app.api.OpenDingTalkStreamClientBuilder;
import com.dingtalk.open.app.api.callback.DingTalkStreamTopics;
import com.dingtalk.open.app.api.security.AuthClientCredential;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class BotEchoMarkdownListener {
    private final BotEchoMarkdownConsumer botEchoMarkdownConsumer;
    @Value("${dingtalk.app.client-id}")
    private String clientId;
    @Value("${dingtalk.app.client-secret}")
    private String clientSecret;

    @Autowired
    public BotEchoMarkdownListener(BotEchoMarkdownConsumer botEchoTextConsumer) {
        this.botEchoMarkdownConsumer = botEchoTextConsumer;
    }

    @PostConstruct
    public void init() throws Exception {
        // init stream client
        OpenDingTalkClient client = OpenDingTalkStreamClientBuilder
                .custom()
                .credential(new AuthClientCredential(clientId, clientSecret))
                .registerCallbackListener(DingTalkStreamTopics.BOT_MESSAGE_TOPIC, botEchoMarkdownConsumer)
                .build();
        client.start();
    }
}
```


以上代码实现了这些能力：
1. 通过命令行参数读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client
3. 在 Stream Client 中注册机器人消息回调方法，实现消息接收能力
4. 在消息回调方法中，简单 echo 机器人消息回去，实现消息发送(回复)能力

## 运行机器人服务

在 IDE 中运行 `BotEchoMarkdownApplication.java` 中 main 函数，当看到这样的日志输出时候表示运行成功 `[DingTalk] connection is established, connectionId=...`

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。

:::caution 注意事项
务必将以上命令中"put-your-client-id-here"和"put-your-client-secret-here"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建机器人应用文档](create-bot)获取。
:::

至此，你已成功完成机器人服务开发和部署。接下来可以体验自己开发的机器人服务了。

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-java)