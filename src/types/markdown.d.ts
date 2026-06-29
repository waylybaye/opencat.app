// 允许把 .md 文件作为原始字符串 import（配合 next.config.js 中的 asset/source 规则）。
declare module '*.md' {
  const content: string
  export default content
}
