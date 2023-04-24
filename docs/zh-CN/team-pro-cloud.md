---
title: 'Team、Pro 和 Cloud 的区别和选择'
---

# Team、Pro 和 Cloud 的区别

## Team
Team 是由 OpenCat 提供支持，您需要自行搭建并提供给其他用户使用的 OpenAI API 的代理服务。

您需要一台可以正常访问 OpenAI API 的服务器和可以正常使用的 OpenAI API Key，搭建教程见 [opencat-for-team](./opencat-for-team)，部署完成后您和您所邀请的成员都可以通过加入 Team 使用相关服务。

需要注意的是：
- 加入 Team 是 Pro 版本包含的功能，您需要确保您邀请加入的成员都在应用内购买了 Pro 版本。

- Team 的正常运行和维护都由部署人员负责，OpenCat 仅提供部署所用的 Docker 镜像、部署教程和 OpenCat 软件服务。

## Pro
Pro 是一次性购买、解锁 OpenCat 高级版本的服务。

Pro 版本提供的服务包括：键盘扩展、iCloud 同步、Siri 集成、语音朗读、加入团队、macOS 菜单栏快速聊天、URL Scheme 等功能，您只有购买了 Pro 版本或处于订阅 Cloud 期间才能确保您正常使用 Pro 版本的功能。

当您没有购买 Pro 版本时，您仍然可以使用免费功能，这包括: iOS/iPadOS/macOS App、对话、AI 工坊。

需要注意的是：
- Pro 版本购买是一次性付费解锁的
- Pro 版本不提供 OpenAI 或 Azure API key
- **随着应用更新，Pro 版本提供的服务也会做相应的更新，请以当前应用内描述为主**

## Cloud
Cloud 是由 OpenCat 提供的订阅服务，在订阅期间您可以享用 Pro 版本和以下服务:

1. 直接访问 GPT（仇恨、性和暴力内容是被禁止的）
2. Azure TTS（即将到来）
3. Whisper（即将到来）

需要注意的是:
- 订阅期间使用您不再需要自己准备 OpenAI API key
- Cloud 目前并不提供一个您在 OpenCat 应用外直接访问 OpenAI API 的服务
- GPT 4.0 版本可能将以其他的定价提供服务
- 由于成本问题，订阅期间使用有最高使用限额

# 如何选择更适合您的服务
- 如果您没有 OpenAI 账户，或者您的 OpenAI API 体验服务结束，您应该订阅 Cloud
- 如果您有稳定的 OpenAI 账户，您想通过 OpenCat 应用分享给其他人使用，您可以部署 OpenCat Team 服务，并邀请成员使用
- 如果您有稳定的 OpenAI 账户，您只是想使用 Pro 版本提供的更便利的功能，您应公购买解锁 Pro 版本
- 如果您不需要以上服务，您仍可以使用 OpenCat 提供的免费服务