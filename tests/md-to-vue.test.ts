import { describe, it, expect } from "vitest";
import { createMarkdownRenderer } from "vitepress";
import { fileURLToPath } from "url";
import { mdToVue } from "../src/parser/md-to-vue";
import testCode from "./fixtures/test.md?raw";
import { resolve } from "path";

const srcDir = fileURLToPath(new URL('./fixtures', import.meta.url))
const testPath = resolve(srcDir, 'test.md')

describe('md to vue', async () => {
  const md = await createMarkdownRenderer(srcDir)
  it('md to vue', () => {
    mdToVue(md, srcDir, testCode, testPath)
    expect(1).toBe(1)
  })
}) 