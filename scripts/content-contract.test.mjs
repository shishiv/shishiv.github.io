import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const infra = JSON.parse(await readFile(join(root, "src/data/infra.json"), "utf8"));
const sourceCommit = "c0469a25a6602399ba2107cee5d42d48d12e4c31";

test("each infrastructure record has a pinned public receipt", () => {
  assert.ok(infra.length > 0);
  for (const example of infra) {
    assert.match(example.source.href, new RegExp(`/infra-examples/blob/${sourceCommit}/`));
    assert.ok(example.source.label);
  }
});

test("every record keeps Portuguese and English semantically paired", () => {
  for (const example of infra) {
    assert.ok(example.title.pt);
    assert.ok(example.title.en);
    assert.ok(example.summary.pt);
    assert.ok(example.summary.en);
    assert.equal(example.decisions.pt.length, example.decisions.en.length);
    assert.ok(example.boundary.pt);
    assert.ok(example.boundary.en);
  }
});

test("the public profile does not use the unsupported engineer title", async () => {
  const files = [
    "src/layouts/Folio.astro",
    "src/components/InfraRegistry.astro",
    "src/i18n/ui.ts",
    "src/data/infra.json",
  ];
  const text = await Promise.all(files.map((file) => readFile(join(root, file), "utf8"))).then((parts) =>
    parts.join("\n"),
  );
  assert.doesNotMatch(text, /\bengineer\b|\bengenheir/i);
});
