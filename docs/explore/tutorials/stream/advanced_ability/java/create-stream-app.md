---
sidebar_position: 3
---

# 3. 开发自定义能力

在本章节中，将会介绍如何用 Java 开发一个聊天机器人服务，实现基本的介绍和发送消息能力。

本教程的完整代码可以在 [GitHub](https://github.com/open-dingtalk/dingtalk-tutorial-java) 仓库中获取，你也可以跳过本文中构建步骤，直接从 GitHub 中 clone 相关代码。

## 创建 Java 模块

参考 [Spring Quickstart Guide](https://spring.io/quickstart) 创建一个空的 Spring 工程。 推荐新手采用本教程相同的配置，点此链接进入 [spring initializr](https://start.spring.io#!type=maven-project&language=java&platformVersion=3.1.10&packaging=jar&jvmVersion=17&groupId=com.example&artifactId=ai-actions-stream&name=ai-actions-stream&description=Demo%20project%20for%20DingTalk&packageName=com.example.ai.actions)，本教程相关的参数已经通过 URL 参数自动携带过去。

本教程使用的主要参数包括：

* Project：Maven
* Language：Java
* Spring Boot：2.7.15
* Java：8


## 安装依赖
一、在 pom.xml 中添加依赖项（本文档中版本号仅用于示例，强烈推荐采用[最新版本](https://s01.oss.sonatype.org/?#nexus-search;quick~dingtalk-stream)）
```xml
 <dependency>
    <groupId>com.dingtalk.open</groupId>
    <artifactId>dingtalk-stream</artifactId>
    <version>1.3.1</version>
</dependency>
```

二、在命令行中 pom.xml 所在目录执行 mvn clean package 命令获得最新依赖项，或者在 IDE 中执行相关动作。


## 开发自定义能力
一、在 src/main/resources/application.properties 中添加应用凭据的配置：
```text
dingtalk.app.client-id=put-your-client-id-here
dingtalk.app.client-secret=put-your-client-secret-here

```
:::caution 注意事项
务必将以上命令中"put-your-client-id-here"和"put-your-client-secret-here"替换成实际的值后再运行，否则无法成功建立连接。Client ID 和 Client Secret 可以通过[步骤二: 创建应用文档](create-bot)获取。
:::

二、在 com.example.ai.actions 包下面创建 StreamActionsDispatcher 类，用于处理来自的 AI 助理消息的分发, 我们以天气查询为例
```java title="StreamActionsDispatcher.java" showLineNumbers
@Service
public class StreamActionsDispatcher implements OpenDingTalkCallbackListener<GraphAPIRequest, GraphAPIResponse> {

    @Override
    public GraphAPIResponse execute(GraphAPIRequest request) {
        String path = request.getRequestLine().getPath();
        //判断path和请求方法
        if (path.equalsIgnoreCase("/v1/actions/example/weather/get") && request.getRequestLine().getMethod() == GraphAPIMethod.GET) {
            //从query中获取参数
            QueryStringDecoder decoder = new QueryStringDecoder(request.getRequestLine().getUri().toString());
            String date = decoder.parameters().get("date") != null ? decoder.parameters().get("date").get(0) : null;
            String location = decoder.parameters().get("location") != null ? decoder.parameters().get("location").get(0) : null;
            return GraphUtils.successJson(getWeather(date, location));
        }
        return GraphUtils.failed(StatusLine.NOT_FOUND);
    }


    /**
     * @param date
     * @param location
     * @return
     */
    public Map<String, Object> getWeather(String date, String location) {

        Map<String, Object> result = new HashMap<>();
        if (location == null || location.isEmpty()) {
            location = "杭州";
        }
        if (date == null || date.isEmpty()) {
            date = (new SimpleDateFormat("yyyy-MM-dd")).format(new Date());
        }
        result.put("location", location);
        result.put("dateStr", date);
        result.put("text", "晴天");
        result.put("temperature", 22);
        result.put("humidity", 65);
        result.put("wind_direction", "东南风");
        return result;
    }
}
```
然后我们配置我们的 Stream 客户端
```java title="StreamClientConfigure.java" showLineNumbers
@Configuration
public class StreamClientConfigure {

    @Value("${dingtalk.app.client-id}")
    private String clientId;

    @Value("${dingtalk.app.client-secret}")
    private String clientSecret;

    @Bean(initMethod = "start")
    public OpenDingTalkClient configure(StreamActionsDispatcher dispatcher) {
        return OpenDingTalkStreamClientBuilder.custom()
                .credential(new AuthClientCredential(clientId, clientSecret))
                .registerCallbackListener("/v1.0/graph/api/invoke", dispatcher)
                .build();
    }

}
```
:::note 说明
这里 Stream 客户端订阅的topic 固定为**/v1.0/graph/api/invoke**
:::

### 参数介绍

#### 1. 请求格式
```json
{
  "requestLine" : {
    "method" : "GET",
    "uri" : "/v1/actions/example/weather/get?date=2021-10-1&location=%E6%9D%AD%E5%B7%9E"
  },
  "headers" : {
    "content-type" : "application/json"
  },
  "body" : "{}"
}
```
#### 字段说明

##### requestLine
类似 HTTP 请求中的 request line, 包含了请求发方法和请求资源的 uri 信息，注意 uri 中query的信息是经过了 [URL 编码](https://zh.wikipedia.org/zh-hans/%E7%99%BE%E5%88%86%E5%8F%B7%E7%BC%96%E7%A0%81), 支持的方法类型包含GET,POST,PUT,DELETE
##### headers
与 HTTP 协议中的 header 含义相同。
##### body
JSON格式的请求参数，对应的是 OpenAPI yaml 配置文件中 requestBody 中的参数。



####  2.响应格式
```json
{
  "statusLine" : {
    "code" : 200,
    "reasonPhrase" : "OK"
  },
  "headers" : {
    "content-type" : "application/json"
  },
  "body" : "{\"dateStr\" : \"2024-03-26\",\"temperature\" : 22, \"humidity\" : 65,\"location\" : \"杭州\", \"wind_direction\" : \"东南风\", \"text\" : \"晴天\"}"
}
```
#### 字段说明

#### statusLine
类似 HTTP 响应中的 status line, 包含了响应的状态码和相关的文本描述
##### headers
与 HTTP 协议中的 header 含义相同。
##### body
响应数据，为一个JSON格式的字符串。


## 运行 AI 助理自定义能力

在 IDE 中运行 AiActionsStreamApplication.java 中 main 函数，当看到这样的日志输出时候表示运行成功 [DingTalk] connection is established, connectionId=xxxxxxx ,至此，你已成功基于 Stream 协议的自定义能力开发，接下来可以和 AI 助理对话，体验自己开发的 AI 助理自定义能力了。














