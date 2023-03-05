import { resolve } from 'path'
import fs from 'fs/promises'
import { type PluginOption, normalizePath } from 'vite'
import type { MarkdownRenderer } from 'vitepress' 
import { Parser } from './parser' // 解析器
import type { UserOptions } from './typing'

const VitePluginVitePress = (options?: UserOptions): PluginOption => {
  const opt = options ?? {}  // 为空不传
  let parser: Parser | undefined 
  return {
    name: 'vite-plugin-vitepress',
    // 钩子
    async configResolved(_config) {
      const test = await fs.readFile(
        normalizePath(resolve(__dirname, './Test.ts'))
      )
      console.log('配置初始化完成', MarkdownRenderer(test))
      // console.log('configResolved params _config',_config)
      parser = new Parser(_config, opt)
      await parser.setupRender() // 初始化
    }
  }
}

export { VitePluginVitePress }

export default VitePluginVitePress
