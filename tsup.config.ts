import { defineConfig } from 'tsup'

export default defineConfig({
  external: ['vite', /\*vitepress/],
  entry: ['src/theme.ts', 'src/index.ts'],
  dts: true,
  clean: true,
  format: ['cjs', 'esm']
})
