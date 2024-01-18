---
title: 'OpenCat for Team（团队版）部署教程'
---

# OpenCat for Team 部署教程

## 配置云端

### 1. 准备一个服务器
你可以在 AWS、Google Cloud、Digital Ocean、Vultr、Oracle Cloud 等云平台上启动一个云服务器。

1.1 通过 SSH 登入服务器
> 如果你不知道怎么登录 SSH，可以问 ChatGPT：AWS(改成你的厂商名)怎么连接 SSH

1.2 安装 docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

### 2. (可选) HTTPS 的配置

> **HTTPS 模式和 HTTP 模式的区别**
> * HTTPS 模式会自动申请、保存 HTTPS 证书，必须要 80、443 端口，必须有一个域名
> * HTTP 模式既可以直接提供服务也可以由用户配置其它服务一起使用，比如用 nginx 代理
> * HTTPS 模式更加安全，HTTP 模式可能会被中间人监听内容

将域名解析到 VPS 的 IP 地址（可以问 ChatGPT：XXX如何将域名解析到 IP 地址）

### 3. 运行 OpenCat for Team

![](/img/docs/create-team.png)

1. 如果你想跑 HTTPS，在 OpenCat 中填入域名后，会自动生成一串命令，如果跑 HTTP 模式，选择 HTTP 会直接生成一串命令
2. 将 OpenCat 显示的 `docker run` 开头的命令复制粘贴到 SSH 窗口中运行
> 如果你想更改 HTTP 模式运行的端口，只要将其中的 `-p 80:80` 改为 `-p 端口:80` 既可
3. 如果你在选了 HTTPS 模式，下方连接服务的 Domain 输入框会自动同步你上面填的域名，如果 HTTP 模式则需要自己填入 IP 或者域名，用 http 开头。
4. 在 OpenCat 中点击创建团队，成功后会自动进入 Team 页面
5. 在 Keys 中，点击加号，创建一个 Key

> 注意: 如果您使用 AWS、Azure、GCP 等，请确保安全组允许了 80/443 的访问。

## 管理和邀请成员

![](/img/docs/invite-user.png)

1. root 用户是管理员用户，只有他能看到团队成员、管理团队成员。
2. 创建一个用户，点击后面的三点后，选择邀请。
3. 将 App 下载连接发给对方，让对方下载 App。
4. 将 `opencat://team/join` 开头的文字发给对方，让对方在 Safari 中打开，打开后会询问是否在 `OpenCat` 中打开，点击“是”后会提示用户是否加入团队。
5. 用户加入团队后就可以直接开始聊天了。

## 技术细节

### 如何升级服务端

#### 1. 升级镜像到最新版
```bash
docker pull bayedev/opencatd
```

#### 2. 备份旧容器
```bash
docker stop opencatd
docker rename opencatd opencatd_bak
```

#### 3. 使用最新版的镜像运行
```bash
docker run ...之前的命令重新运行一遍...
```

如果你找不到以前的命令了，有两种方式
* 按 `Ctrl-R` 快捷键进入搜索历史模式，依次敲入 `docker run` 看到以前的命令后按 `→`，确认无误回车执行
* 一直按 `↑` ，直到看到以前的 `docker run ...` 命令，确认无误后回车执行

现在打开 `OpenCat` 随便聊几句，再打开 Team 页面应该能看到用量统计信息了。

#### 4. 确认运行正常后删除旧的备份
```bash
docker rm opencatd_bak
```

### 如何备份及恢复数据

在 `/srv/data` 下的 `cat.db` 保存了所有重要数据，备份该文件即可，如果想要重来，只要删除该文件然后 `docker restart opencatd` 既可。
在 `/srv/data` 下的 `usage.db` 保存了所有统计信息

### Docker 环境变量

* `PORT` 指定 HTTP 模式的端口
* `API_DOMAIN=https://xx.com`  如果想连接另一个 openai 的代理，用这个变量覆盖默认的 `https://api.openai.com`

### Team 的流程

1. 第一次创建团队时会生成一个 root 账号，客户端会保存这个 root 的 token，自此客户端便可以管理服务端了。
2. 如果客户端需要再次连接服务端并管理数据，需要重置 root 的 token，然后输入 token 连接

### 支持的命令
1. `docker exec opencatd opencatd root_token` 获得 root 的 token
2. `docker exec opencatd opencatd reset_root` 重置 root 的 token
