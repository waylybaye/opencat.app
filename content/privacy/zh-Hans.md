---
title: 隐私政策
lastUpdated: 2025-02-12
---

# 隐私政策

**最后更新日期：2025 年 2 月 12 日**

## 简介

OpenCat 是一款适用于 macOS、iOS 和 iPadOS 的原生 AI 客户端。本隐私政策说明了 OpenCat 如何处理您的数据，包括在您使用应用时如何与第三方 AI 服务共享您的信息。

## OpenCat 的工作方式

OpenCat 是一款原生 AI 客户端，提供两种方式访问 AI 服务：

### OpenCat Cloud

OpenCat Cloud 是我们提供的订阅服务，让您通过单一订阅即可访问多种 AI 模型（包括 OpenAI、Anthropic、Google 等提供的模型）。使用 OpenCat Cloud 时：

- 您的消息会被转发到相应的第三方 AI 服务进行处理。
- **我们不会存储、记录或保留您的任何对话内容。**您的数据仅经过我们的服务用于路由到相应的 AI 提供商。
- 我们不会将您的数据用于训练、分析或除了向您返回 AI 回复之外的任何目的。

### API 客户端模式

OpenCat 同时也是一个独立的 **API 客户端**——您可以配置自己的 API 密钥直接连接到第三方 AI 服务。在此模式下：

- 您的数据会**直接从您的设备**传输到您所配置的第三方 AI 服务。
- OpenCat 不会路由、拦截或存储您的任何数据——它纯粹充当您与服务提供商之间的接口。
- 您完全控制要连接的服务提供商。

## 我们收集的信息

### 分析和崩溃数据

我们收集匿名的分析和崩溃数据，以改善应用的性能和稳定性。这些数据包括：

- 应用使用模式（例如功能使用频率）
- 设备信息（例如设备型号、操作系统版本）
- 崩溃报告和诊断日志

这些数据通过 Apple 内置的分析框架收集，不包含您的对话内容或个人内容。

### 本地存储在您设备上的数据

以下数据存储在您的设备本地，**不会**被我们收集或传输到我们的服务器：

- 您为第三方服务配置的 API 密钥
- 对话历史和聊天消息
- 应用偏好设置
- 自定义提示词和配置

## 第三方 AI 服务

### 发送给第三方服务的数据

当您在 OpenCat 中使用 AI 功能时，以下类型的数据可能会被发送到第三方 AI 服务：

- **文字消息**：您在对话中输入并发送的消息
- **图片**：您附加到消息中的照片或图片（用于视觉/多模态功能）
- **音频/语音**：使用语音转文字或语音对话功能时的录音
- **对话上下文**：当前对话中的先前消息，用于为 AI 回复保持上下文

### OpenCat Cloud — 第三方数据共享

当您使用 OpenCat Cloud 时，您的数据从设备发送到我们的服务器，然后转发到以下第三方 AI 服务进行处理。**我们不会存储、记录或保留您的任何对话内容**——数据仅经过我们的服务用于路由目的。

| 服务提供商 | 服务 | 隐私政策 |
|---|---|---|
| OpenAI | GPT 模型、DALL-E、Whisper | [隐私政策](https://openai.com/privacy/) |
| Anthropic | Claude 模型 | [隐私政策](https://www.anthropic.com/privacy) |
| Google | Gemini 模型 | [隐私政策](https://policies.google.com/privacy) |
| Microsoft Azure | Azure OpenAI、文字转语音 | [隐私政策](https://privacy.microsoft.com/privacystatement) |
| DeepSeek | DeepSeek 模型 | [隐私政策](https://www.deepseek.com/privacy) |

具体使用哪个 AI 服务取决于您在应用中选择的模型。每个服务根据其自身的隐私政策处理您的数据。我们要求所有集成的第三方 AI 提供商提供与本政策所述同等或更高水平的数据保护。

### API 客户端模式 — 第三方数据共享

当您使用 API 客户端模式时，您的数据会**直接从您的设备**发送到您所配置的第三方 AI 服务。OpenCat 不会路由、拦截或访问这些数据。

您可以连接以下任何服务，或任何其他 OpenAI 兼容的 API 提供商：

| 服务提供商 | 服务 | 隐私政策 |
|---|---|---|
| OpenAI | GPT 模型、DALL-E、Whisper | [隐私政策](https://openai.com/privacy/) |
| Anthropic | Claude 模型 | [隐私政策](https://www.anthropic.com/privacy) |
| Google | Gemini 模型 | [隐私政策](https://policies.google.com/privacy) |
| Microsoft Azure | Azure OpenAI、文字转语音 | [隐私政策](https://privacy.microsoft.com/privacystatement) |
| 智谱 AI (Z-AI) | GLM 模型 | [隐私政策](https://www.zhipuai.cn/privacy) |
| DeepSeek | DeepSeek 模型 | [隐私政策](https://www.deepseek.com/privacy) |
| 其他提供商 | 任何 OpenAI 兼容的 API 服务 | 请参阅该提供商的隐私政策 |

在此模式下，您需要自行查阅并接受您所配置的每个服务的隐私政策。OpenCat 无法查看您的设备与服务提供商之间交换的数据。

### 您对数据共享的控制

- **您选择使用模式**：您可以使用 OpenCat Cloud 获得便捷体验，也可以配置自己的 API 密钥直接访问。
- **您决定使用哪些服务**：无论通过 OpenCat Cloud 还是 API 客户端模式，您都可以选择要与哪些 AI 服务交互。
- **您控制发送的内容**：只有当您主动发送消息或使用需要 AI 处理的功能时，数据才会被传输。
- **您可以随时断开连接**：您可以随时删除任何 API 密钥或取消 OpenCat Cloud 订阅，以停止向第三方服务发送数据。
- **无默认连接**：在 API 客户端模式下，在您进行配置之前，OpenCat 不会连接到任何第三方 AI 服务。

### 数据传输安全

OpenCat 与第三方 AI 服务之间传输的所有数据均使用 HTTPS/TLS 协议加密。在 API 客户端模式下，您的内容直接从您的设备发送到所配置的服务提供商。在 OpenCat Cloud 模式下，数据在传输到我们的服务器时全程加密，然后转发到 AI 提供商——我们在任何环节都不会存储或记录您的内容。

## 我们如何保护您的信息

我们采取适当的安全措施来保护您的信息：

- API 密钥和敏感数据安全地存储在您设备的钥匙串中
- 所有网络通信均使用加密的 HTTPS/TLS 连接
- 对话数据存储在您的设备本地
- 我们不维护处理或存储您对话内容的服务器

## 儿童隐私

OpenCat 不面向 13 岁以下的儿童。我们不会故意收集 13 岁以下儿童的个人信息。如果您是家长或监护人，并认为您的孩子通过本应用提供了个人信息，请联系我们以便我们采取适当措施。

## 政策变更

我们可能会不时更新本隐私政策。任何变更都将在此页面上发布，并更新"最后更新日期"。我们建议您定期查看本政策。

## 联系我们

如果您对本隐私政策有任何疑问，请通过 [waylybaye@gmail.com](mailto:waylybaye@gmail.com) 与我们联系。
