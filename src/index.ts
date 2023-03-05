import type { PluginOption } from 'vite'

const VitePluginVitePress = (): PluginOption => {
  return {
    name: 'vite-plugin-vitepress',
    // 钩子
    configResolved() {
      console.log('配置初始化完成')
    },
  }
}

export { VitePluginVitePress }

export default VitePluginVitePress
