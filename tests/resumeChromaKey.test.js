import assert from "node:assert/strict";
import test from "node:test";
import { slashLayout } from "../components/resumeChromaKey.js";

for (const [width, height] of [[1280, 720], [1440, 700], [375, 650], [667, 280]]) {
  test(`slash follows the contained video at ${width}×${height}`, () => {
    const rect = slashLayout(width, height, 1280, 720);
    assert.ok(rect.width <= width && rect.height <= height);
    assert.ok(Math.abs(rect.width / rect.height - 16 / 9) < 1e-10);
    const lineY = x => (rect.left + (rect.right - rect.left) * x / width) / 100 * height;
    assert.ok(Math.abs(lineY(rect.x) - (rect.y + rect.height * 0.31)) < 1e-9);
    assert.ok(Math.abs(lineY(rect.x + rect.width) - (rect.y + rect.height * 0.64)) < 1e-9);
    assert.ok(rect.right > rect.left, "blade travels down from left to right");
  });
}
