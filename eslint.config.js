import antfu from '@antfu/eslint-config'

export default antfu({
  react: true,
  jsonc: true,
}, {
  rules: {
    'react-refresh/only-export-components': ['warn', { allowExportNames: ['metadata', 'generateStaticParams'] }],
  },
})
