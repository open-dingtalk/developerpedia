---
sidebar_position: 3
---

# 3. 开发事件订阅服务

在本章节中，将会介绍如何用 Java 开发一个事件订阅服务，接收钉钉平台推送的变更通知。

本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-tutorial-java)中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Java 模块

参考 [Spring Quickstart Guide](https://spring.io/quickstart) 创建一个空的 Spring 工程。
推荐新手采用本教程相同的配置，[点此链接](https://start.spring.io/#!type=maven-project&language=java&platformVersion=2.7.15&packaging=war&jvmVersion=1.8&groupId=com.example&artifactId=event-chat-update&name=event-chat-update&description=Demo%20project%20for%20DingTalk&packageName=com.example.event)进入 spring intializr，本教程相关的参数已经通过 URL 参数自动携带过去。

本教程使用的主要参数包括：

* Project：Maven
* Language：Java
* Spring Boot：2.7.15
* Java：8

进入页面后，点击 GENERATE 按钮后会下载生成好 Spring 工程文件，解压缩后可以完成 Java 模块创建。

:::info 温馨提示
如果你需要在已有的 Java 工程中订阅事件，可以跳过这一步。
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
			<version>1.0.7</version>
		</dependency>
        <!-- ... -->
	</dependencies>
<!-- ... -->
```

二、在命令行中 pom.xml 所在目录执行 `mvn clean package` 命令获得最新依赖项，或者在 IDE 中执行相关动作。

## 开发事件订阅服务

一、在 ./src/main/resources/application.properties 中添加应用凭据的配置：
```text title="./src/main/resources/application.properties" showLineNumbers
dingtalk.app.client-id=put-your-client-id-here
dingtalk.app.client-secret=put-your-client-secret-here
```

:::caution 注意事项
务必将以上命令中"put-your-client-id-here"和"put-your-client-secret-here"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建应用文档](create-app)获取。
:::

二、在 com.example.event 包下面创建 EventConsumer 类，用于处理来自钉钉平台的变更通知：
```java title="EventConsumer.java" showLineNumbers
package com.example.event;

import com.dingtalk.open.app.api.GenericEventListener;
import com.dingtalk.open.app.api.message.GenericOpenDingTalkEvent;
import com.dingtalk.open.app.stream.protocol.event.EventAckStatus;

public class EventConsumer implements GenericEventListener {
    @Override
    public EventAckStatus onEvent(GenericOpenDingTalkEvent event) {
        System.out.println(String.format("received event,\n" +
                        "  delay=%dms,\n" +
                        "  eventType=%s,\n" +
                        "  eventId=%s,\n" +
                        "  eventBornTime=%s,\n" +
                        "  eventCorpId=%s,\n" +
                        "  eventUnifiedAppId=%s,\n" +
                        "  data=%s\n",
                (System.currentTimeMillis() - event.getEventBornTime().longValue()),
                event.getEventType(),
                event.getEventId(),
                event.getEventBornTime(),
                event.getEventCorpId(),
                event.getEventUnifiedAppId(),
                event.getData()));
        return EventAckStatus.SUCCESS;
    }
}
```

三、在 com.example.event 包下面创建 EventListener 类，用于监听变更通知：

```java title="EventListener.java" showLineNumbers
package com.example.event;

import com.dingtalk.open.app.api.OpenDingTalkClient;
import com.dingtalk.open.app.api.OpenDingTalkStreamClientBuilder;
import com.dingtalk.open.app.api.security.AuthClientCredential;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class EventListener {
    @Value("${dingtalk.app.client-id}")
    private String clientId;

    @Value("${dingtalk.app.client-secret}")
    private String clientSecret;

    private final EventConsumer eventConsumer;

    public EventListener() {
        this.eventConsumer = new EventConsumer();
    }
    @PostConstruct
    public void init() throws Exception {
        // init stream client
        OpenDingTalkClient client = OpenDingTalkStreamClientBuilder
                .custom()
                .credential(new AuthClientCredential(clientId, clientSecret))
                .registerAllEventListener(eventConsumer)
                .build();
        client.start();
    }
}
```

以上代码实现了这些能力：
1. 通过配置文件读取 Client ID 和 Client Secret 选项
2. 通过 Client ID 和 Client Secret 创建 Stream Client（OpenDingTalkClient）
3. 在 Stream Client 中注册事件推送的监听服务，实现变更通知的接收能力
4. 在事件回调方法中，通过日志记录变更通知的消息内容，你可以可以改造这段代码，将变更通知写入自己的数据库中

## 运行事件订阅服务

在 IDE 中运行 `EventChatUpdateApplication.java` 中 main 函数，当看到这样的日志输出时候表示运行成功 `[DingTalk] connection is established, connectionId=...`

至此，你已成功完成事件订阅服务开发和部署。接下来可以在[钉钉开发者后台](https://open-dev.dingtalk.com)勾选需要订阅的事件类型，然后体验整个接收流程。

:::info 说明
如果你开发过钉钉聊天机器人的消息接收，就可以知道在聊天机器人代码中，需要指定订阅的 Topic，而事件订阅的代码中没有指定 Topic。原因是钉钉事件订阅平台的事件类型（Topic）是通过网页形式（在开发者后台）勾选，而不是通过代码方式指定 Topic。
接下来的文档会提供指引，介绍如何在开发者后台勾选需要订阅的事件类型（Topic）。
:::

## 相关链接

* [GitHub 上示例代码](https://github.com/open-dingtalk/dingtalk-tutorial-java)
* [spring intializr](https://start.spring.io/)
* [Spring Quickstart Guide](https://spring.io/quickstart)