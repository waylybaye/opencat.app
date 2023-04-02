---
title: 'OpenCat Azure TTS 配置指南'
---

# OpenCat Azure TTS 配置

## 在 Azure 创建资源

1. 登录您的 Azure 账号
2. 点击链接创建 TTS 资源 https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices

![](/img/create-tts.png)

* 区域: 最好选择 `East Asia`
* 名称: 随便起一个名字
* 定价层：选择免费试用（Free F0）或者标准计费

3. 填写完毕后，点击「审阅并创建」
4. 点击「创建」

## 配置 OpenCat

![](/img/create-tts-success.png)

1. 创建成功后点击「转到资源」

![](/img/tts-tokens.png)

1. 点击「密钥 1」后面的复制按钮，复制到 OpenCat 的 Token 里
2. 验证成功后会在下方显示支持的声音列表
3. 试听后点击前方加号将资源添加到上方
4. 进入任意聊天，点击右上角的三点按钮，选择「朗读声音」，你选择的声音会显示在最上方。
