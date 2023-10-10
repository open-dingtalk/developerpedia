---
sidebar_position: 3
---

# 3. 搭建 AI 插件服务

在本章节，将会介绍如何在使用钉钉开放平台[Stream mode](/docs/learn/stream/overview)搭建 AI 插件服务。包括以下内容：
1. 搭建 AI 插件处理逻辑
2. 填充应用信息
3. 注册 AI 插件回调通道

:::info 提示信息
本教程的完整代码可以在 [GitHub 仓库](https://github.com/open-dingtalk/dingtalk-stream-sdk-java-quick-start)中获取，本章节涉及的代码量较大，建议通过 GitHub 查看。
:::


## 搭建 AI 插件处理逻辑
```java title="AIGraphPluginCallbackListener.java" showLineNumbers
public class AIGraphPluginCallbackListener implements OpenDingTalkCallbackListener<GraphAPIRequest, GraphAPIResponse> {
    @Override
    public GraphAPIResponse execute(GraphAPIRequest request) {
        log.info("receive AI graph plugin request={}", request);
        String abilityKey = request.getHeader(AIPluginHeaders.ABILITY_KEY_NAME);
        String pluginId = request.getHeader(AIPluginHeaders.PLUGIN_ID_NAME);
        String pluginVersion = request.getHeader(AIPluginHeaders.PLUGIN_VERSION_NAME);
        //业务数据的json字符串
        String data = request.getBody();
        //获取graph的路径请求{version}/{resource}
        String path = request.getRequestLine().getPath();
        return GraphUtils.failed(StatusLine.INTERNAL_ERROR);
    }
}
```
其中`DingTalkAIPluginRequest`和`DingTalkAIPluginResponse` 为平台约定的回调协议对象,详见[GitHub 仓库](https://github.com/open-dingtalk/dingtalk-stream-sdk-java-quick-start/tree/main/src/main/java/org/example/model)

:::info 提示信息
`abilityKey` 可以作为服务的唯一标识做路由。
:::

## 填充应用信息
![img.png](/img/explore/stream/aiplugin/fill-app-info.jpg)

将钉钉开放平台中应用的标识填入`<your-app-key>`和`<your-app-secret>`区域

:::tip 关于应用唯一标识
企业内部应用为`appKey`和`appSecret`,企业三方应用为`suiteKey`和`suiteSecret`。
:::

## 注册 AI 插件回调通道
```java title="DingTalkStreamClientConfiguration.java" showLineNumbers
public class DingTalkStreamClientConfiguration {

    @Value("${app.appKey}")
    private String clientId;
    @Value("${app.appSecret}")
    private String clientSecret;

    /**
     * 配置OpenDingTalkClient客户端并配置初始化方法(start)
     *
     * @param chatBotCallbackListener
     * @param aiGraphPluginCallbackListener
     * @return
     */
    @Bean(initMethod = "start")
    public OpenDingTalkClient configureStreamClient(@Autowired ChatBotCallbackListener chatBotCallbackListener,
                                                    @Autowired AIGraphPluginCallbackListener aiGraphPluginCallbackListener) throws Exception {
        // init stream client
        return OpenDingTalkStreamClientBuilder.custom()
                //配置应用的身份信息, 企业内部应用分别为appKey和appSecret, 三方应用为suiteKey和suiteSecret
                .credential(new AuthClientCredential(clientId, clientSecret))
                //注册机器人回调
                .registerCallbackListener(DingTalkStreamTopics.BOT_MESSAGE_TOPIC, chatBotCallbackListener)
                //注册graph api回调
                .registerCallbackListener(DingTalkStreamTopics.GRAPH_API_TOPIC, aiGraphPluginCallbackListener).build();
    }
}
```
## 启动 AI 插件服务
![img.png](/img/explore/stream/aiplugin/run-server.jpg)





