import { relative } from 'path'
import type { MarkdownEnv, MarkdownRenderer } from 'vitepress'
export const mdToVue = (
  md: MarkdownRenderer,
  srcDir: string,
  code: string,
  id: string
) => {
  const relativePath = relative(srcDir, id)
  const env: MarkdownEnv = {
    path: id,
    relativePath,
    cleanUrls: true
  }
  const html = md.render(code, env)
  console.log(html)
}
