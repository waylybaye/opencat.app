/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Cloudflare Worker 运行时的环境绑定类型（import { env } from 'cloudflare:workers'）。
// 完整类型可用 `pnpm cf-typegen` 由 wrangler.jsonc 生成，这里手写所需的最小集合。
declare namespace Cloudflare {
  interface Env {
    /** 静态资源绑定，用于在 Worker 内读取 versions.xml。 */
    ASSETS: { fetch: (input: Request | URL | string) => Promise<Response> }
    /** 下载跳转的基础域名（默认 https://releases.opencat.app）。 */
    RELEASES_DOWNLOAD_BASE?: string
  }
}
