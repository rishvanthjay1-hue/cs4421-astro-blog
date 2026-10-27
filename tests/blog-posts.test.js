import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

describe("AI blog posts", () => {
  const blogDir = join(process.cwd(), "src/content/blog");
  const posts = [
    "ai-introduction.md",
    "future-of-ai.md",
    "generative-ai.md",
    "machine-learning.md",
  ];

  it.each(posts)("checks %s exists and is not empty", (post) => {
    const file = join(blogDir, post);
    expect(existsSync(file)).toBe(true);
    expect(readFileSync(file, "utf8").trim().length).toBeGreaterThan(0);
  });
});
