import { relative } from 'path'
import type { MarkdownEnv } from 'vitepress'
import type { Parser } from "."; // 解析器

export const mdToVue = (
  parser: Parser,
  code: string,
  id: string
) => {
  const relativePath = relative(parser.config.root ?? process.cwd(), id)
  const env: MarkdownEnv = {
    path: id,
    relativePath,
    cleanUrls: true
  }
  const html = parser.md?.render(code, env)
  console.log(env)

  console.log(html)

  const { sfcBlocks } = env
  const vue = [
    `<template>${html}</template>`,
    sfcBlocks?.scriptSetup?.content ?? '',
    ...(sfcBlocks?.styles.map((v) => v.content) ?? [])
  ].join('\n')
  console.log(vue)
  return vue
}
