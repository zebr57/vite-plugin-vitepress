import { describe, it, expect } from "vitest";
// it => 断言 expect => 期望
describe('demo', () => {
  // 是否正常运行
  it('shoud work', () => {
    // 期望 1 是否toBe 1
    expect(1).toBe(1)
  })
})