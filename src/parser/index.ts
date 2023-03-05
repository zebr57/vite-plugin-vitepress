
/**
 * 解析器
 */
import { createMarkdownRenderer, type MarkdownRenderer } from "vitepress";
import type { ResolvedConfig } from 'vite'
import type { UserOptions } from "../typing";
import { mdToVue } from "./md-to-vue";

export class Parser {
  public md: MarkdownRenderer | undefined
  constructor(public readonly config: ResolvedConfig, public readonly options:UserOptions) {}

  //
  public async setupRender() {
    const srcDir = this.config.root ?? process.cwd() // 相对路径
    const base = this.config.base ?? '/'  // 基础路径
    this.md = await createMarkdownRenderer(srcDir, this.options.markdown, base)
  }
  //
  public async transform(code: string, id: string) {
    if(id.endsWith('.md')) {
      return await mdToVue(this, code, id)
    }
  }
}