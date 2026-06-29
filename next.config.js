/** @type {import('next').NextConfig} */

export default {
  trailingSlash: true,
  images: {
    // Cloudflare Workers 上不启用 Next 的图片优化端点，
    // 直接输出原始静态资源（图片本身已是优化过的截图/图标）。
    unoptimized: true,
  },
  webpack(config) {
    // 把 .md 文件作为原始字符串打包进 bundle，
    // 这样文档/隐私内容在运行时无需读取文件系统（Cloudflare Workers 没有可读磁盘）。
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    })
    return config
  },
}
