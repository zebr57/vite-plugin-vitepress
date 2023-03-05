import { describe, it, expect } from "vitest";
import { fileURLToPath } from "url";
import testCode from "./fixtures/test.md?raw";
import { resolve } from "path";
import { Parser } from "../src/parser";

const srcDir = fileURLToPath(new URL('./fixtures', import.meta.url))
const testPath = resolve(srcDir, 'test.md')

describe('md to vue', async () => {
  const parser = new Parser({
    root: srcDir,
    base: '/'
  }as any, {}) 
  await parser.setupRender()
  it('md to vue', async () => {
    const source = await parser.transform(testCode, testPath)
    expect(source).toMatchInlineSnapshot(`
      "<template><h4 id=\\"这是一个测试-md-文件-test-md\\" tabindex=\\"-1\\">这是一个测试 md 文件 test.md <a class=\\"header-anchor\\" href=\\"#这是一个测试-md-文件-test-md\\" aria-hidden=\\"true\\">#</a></h4>
      </template>
      <script setup>
        const name = '李明花'
        console.log(name)
      </script>
      <style>
        p {
          color: #ccc;
          font-size: 16px;
        }
      </style>"
    `)
  })
}) 