---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 2. 开通直通模式

### Step1: 创建 AI 助理
参考文档： [创建 AI 助理](https://open.dingtalk.com/document/ai-dev/create-a-dingtalk-ai-assistant)

### Step2: 创建自定义能力

![img.png](create_ability.png)

### Step3: 编写接口的 Yaml 描述文件，我们这里以天气查询为例

:::warning
使用直通模式，所有的参数都必须通过 x-dingtalk-context 来从上下文中获取
:::

<Tabs>
<TabItem value="GET" label="GET请求Schema格式" default>

```yaml
openapi: 3.0.1
info:
  title: 天气查询
  description: 按地区和日期来查看天气信息，了解气温、湿度、风向等信息。非真实天气数据，仅用于演示，请勿在生产中使用。
  version: v1.0.0
servers:
  - url: https://action-example.dingtalk.com
paths:
  /v1/actions/example/weather/get:
    get:
      description: 查询特定地区的天气信息
      summary: 查看天气
      operationId: GetCurrentWeather
      parameters:
        - name: input
          in: query
          description: 输入信息
          required: true
          schema:
            type: string
            x-dingtalk-context:
              property: currentInput
              format: raw
        - name: sender
          in: query
          description: 请求人
          required: true
          schema:
            type: string
            x-dingtalk-context:
              property: currentUser
              format: userId
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetWeatherResponse'
components:
  schemas:
    GetWeatherResponse:
      type: object
      properties:
        location:
          type: string
          description: 查询天气结果对应的城市和地区
        date:
          type: string
          description: 查询天气结果对应的日期
        text:
          type: string
          description: 天气现象，晴天、多云等
        temperature:
          type: number
          description: 气温，单位：摄氏度
        humidity:
          type: number
          description: 湿度
        wind_direction:
          type: string
          description: 风向
```
</TabItem>

<TabItem value="POST" label="POST请求Schema格式" default>

```yaml
openapi: 3.0.1
info:
  title: 天气查询
  description: 按地区和日期来查看天气信息，了解气温、湿度、风向等信息。非真实天气数据，仅用于演示，请勿在生产中使用。
  version: v1.0.0
servers:
  - url: https://action-example.dingtalk.com
paths:
  /v1/actions/example/weather/get:
    get:
      description: 查询特定地区的天气信息
      summary: 查看天气
      operationId: GetCurrentWeather
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                input:
                  type: string
                  description: 输入信息
                  x-dingtalk-context:
                    property: currentInput
                    format: raw
                sender:
                  type: string
                  description: 发送人UserId
                  x-dingtalk-context:
                    property: currentUser
                    format: userId
      parameters:
        - name: input
          in: query
          description: 输入信息
          required: true
          schema:
            type: string
            x-dingtalk-context:
              property: currentInput
              format: raw
        - name: sender
          in: query
          description: 请求人
          required: true
          schema:
            type: string
            x-dingtalk-context:
              property: currentUser
              format: userId
      responses:
        '200':
          description: OK
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/GetWeatherResponse'
components:
  schemas:
    GetWeatherResponse:
      type: object
      properties:
        location:
          type: string
          description: 查询天气结果对应的城市和地区
        date:
          type: string
          description: 查询天气结果对应的日期
        text:
          type: string
          description: 天气现象，晴天、多云等
        temperature:
          type: number
          description: 气温，单位：摄氏度
        humidity:
          type: number
          description: 湿度
        wind_direction:
          type: string
          description: 风向
```

</TabItem>
</Tabs>

### Step4: 关闭聊一聊能力
共创群联系钉钉官方后台关闭聊一聊功能

:::warning
必须关闭聊一聊能力才可以成功开通直通模式
:::

进入 AI 助理自定义答疑群关闭聊一聊能力
[点击链接查看入群二维码](/img/explore/support/ai-assistant.png)

