---
title: 'OpenCat for Team 技术文档'
---

# OpenCat for Team 技术文档

## Docker 环境变量 

* PORT 指定 HTTP 模式的端口
* API_DOMAIN=https://xx.com  如果想连接另一个 openai 的代理，用这个变量覆盖默认的 `https://api.openai.com`

## Team 的流程 

1. 第一次创建团队时会生成一个 root 账号，客户端会保存这个 root 的 token，自此客户端便可以管理服务端了。
2. 如果客户端需要再次连接服务端并管理数据，需要重置 root 的 token，然后输入 token 连接

`docker exec opencatd opencatd reset_root`

## HTTPS 模式和 HTTP 模式的区别

* HTTPS 模式会自动申请、保存 HTTPS 证书，必须要 80、443 端口
* HTTP 模式既可以直接提供服务也可以由用户配置其它服务一起使用，比如用 nginx 代理
