import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// 使用 OpenNext 的 Cloudflare 默认配置即可满足本站需求：
// 静态资源 + 服务端中间件/路由，无需 ISR、缓存队列等额外组件。
export default defineCloudflareConfig()
