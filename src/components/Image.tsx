import type { ImgHTMLAttributes } from 'react'

// Astro 在框架组件里导入图片时，可能返回 ImageMetadata 对象（{ src, width, height }）
// 或在某些情况下返回 URL 字符串，这里两种都兼容。
export interface StaticImageData {
  src: string
  width?: number
  height?: number
  format?: string
}

type ImageSource = string | StaticImageData

interface ImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: ImageSource
  alt: string
  // 兼容旧站 next/image 的 props（在透传 <img> 里按需翻译或忽略）。
  priority?: boolean
  unoptimized?: boolean
}

/**
 * 取代 next/image 的极简图片组件：图片本身已是优化过的 webp/svg，
 * Cloudflare 上也不做运行时优化，所以直接渲染原生 <img> 即可。
 * priority 映射为 eager 加载，其余默认 lazy。
 */
export default function Image({
  src,
  width,
  height,
  priority = false,
  unoptimized: _unoptimized,
  loading,
  ...rest
}: ImageProps) {
  const meta = typeof src === 'string' ? { src } : src

  // 只指定单边（width 或 height）时，按图片固有宽高比推算另一边，
  // 与 next/image 行为一致——否则会沿用固有尺寸导致比例失真（如 logo 被压扁）。
  let resolvedWidth = width ?? meta.width
  let resolvedHeight = height ?? meta.height
  if (meta.width && meta.height) {
    if (width != null && height == null)
      resolvedHeight = Math.round((Number(width) * meta.height) / meta.width)
    else if (height != null && width == null)
      resolvedWidth = Math.round((Number(height) * meta.width) / meta.height)
  }

  return (
    <img
      src={meta.src}
      width={resolvedWidth}
      height={resolvedHeight}
      loading={loading ?? (priority ? 'eager' : 'lazy')}
      decoding="async"
      {...rest}
    />
  )
}
