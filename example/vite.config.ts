import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Inspect from 'vite-plugin-inspect' // 用于调试插件
import VitePluginVitePress from '../src' // 自身插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePluginVitePress(), Inspect(), vue({
    include: [/\.vue$/, /\.md$/],
  })],
})
