---
sidebar_position: 2
---

# 2. 搭建AI插件服务

在本章节，将会介绍如何在使用钉钉开放平台[Stream mode](https://open-dingtalk.github.io/developerpedia/docs/learn/stream/overview)搭建AI插件服务。包括以下内容：
1. 搭建AI插件处理逻辑
2. 填充应用信息
3. 注册AI插件回调通道

:::info 提示信息
本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-stream-sdk-java-quick-start)中获取，本章节涉及的代码量较大，建议通过 GitHub 查看。
:::


## 搭建AI插件处理逻辑
```java title="AIPluginCallbackConsumer.java" showLineNumbers
public class AIPluginCallbackConsumer implements OpenDingTalkCallbackListener<DingTalkAIPluginRequest, DingTalkAIPluginResponse> {
    @Override
    public DingTalkAIPluginResponse execute(DingTalkAIPluginRequest request) {
        log.info("receive AI plugin request={}", request);
        String abilityKey = request.getAbilityKey();
        // dos something with abilityKey
        DingTalkAIPluginResponse response = new DingTalkAIPluginResponse();
        response.setRequestId(request.getRequestId());
        response.setResult("echo");
        return response;
    }
}
```
其中`DingTalkAIPluginRequest`和`DingTalkAIPluginResponse` 为平台约定的回调协议对象,详见[GitHub 仓库](https://github.com/open-dingtalk/dingtalk-stream-sdk-java-quick-start/tree/main/src/main/java/org/example/model)

:::info 提示信息
`abilityKey` 可以作为服务的唯一标识做路由。
:::

## 填充应用信息
``` properties
server.port=7001
spring.web.resources.static-locations=classpath:/static/

# you can get appSecret and appKey from https://open.dingtalk.com/document/orgapp-server/obtain-the-access_token-of-an-internal-app
app.appKey=<your-app-key> 
app.appSecret=<your-app-secret>

# optional, you can get from https://open.dingtalk.com/document/orgapp/robot-overview
robot.code=<your-robot-code>

# constants of robot message topic, don't edit
robot.msg.topic=/v1.0/im/bot/messages/get

# constants of card callback topic, don't edit
# see more info from https://open.dingtalk.com/document/orgapp/event-callback-card
card.callback.topic=/v1.0/card/instances/callback

# constants of AI plugin topic, don't edit
ai.plugin.topic=/v1.0/agi/plugins/callback

```
AI插件的通道标识为`/v1.0/agi/plugins/callback`

将钉钉开放平台中应用的标识填入`<your-app-key>`和`<your-app-secret>`区域

:::tip 关于应用唯一标识
企业内部应用为`appKey`和`appSecret`,企业三方应用为`suiteKey`和`suiteSecret`。
:::

## 注册AI插件回调通道
```java title="StreamCallbackListener.java" showLineNumbers
public class StreamCallbackListener {
    @Value("${app.appKey}")
    private String appKey;

    @Value("${app.appSecret}")
    private String appSecret;

    @Value("${ai.plugin.topic}")
    private String aiPluginTopic;

    private AIPluginCallbackConsumer aiPluginCallbackConsumer;

    public StreamCallbackListener(@Autowired AIPluginCallbackConsumer aiPluginCallbackConsumer) {
        this.aiPluginCallbackConsumer = aiPluginCallbackConsumer;
    }

    @PostConstruct
    public void init() throws Exception {
        // init stream client
        OpenDingTalkClient client = OpenDingTalkStreamClientBuilder
                .custom()
                .credential(new AuthClientCredential(appKey, appSecret))
                .registerCallbackListener(aiPluginTopic, aiPluginCallbackConsumer)
                .build();
        client.start();
    }
}
```



