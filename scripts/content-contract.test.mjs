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

test("the public profile uses the approved founder and product positioning", async () => {
  const files = [
    "src/components/FounderProfilePage.tsx",
    "src/components/GalaxyHero.tsx",
    "src/components/CaseIndexPage.tsx",
    "src/i18n/ui.ts",
  ];
  const text = await Promise.all(files.map((file) => readFile(join(root, file), "utf8"))).then((parts) =>
    parts.join("\n"),
  );
  assert.match(text, /founder\s*\/\s*cto/i);
  assert.match(text, /product engineer/i);
  assert.doesNotMatch(text, /full[- ]stack (developer|engineer)|engenheir[oa] full[- ]stack/i);
});

test("the orbital readout provides a bilingual route into the internal cases", async () => {
  const [founder, hero, ui] = await Promise.all([
    readFile(join(root, "src/components/FounderProfilePage.tsx"), "utf8"),
    readFile(join(root, "src/components/GalaxyHero.tsx"), "utf8"),
    readFile(join(root, "src/i18n/ui.ts"), "utf8"),
  ]);
  const actions = [...ui.matchAll(/stackCasesAction:\s*"([^"]+)"/g)].map(([, copy]) => copy);

  assert.match(founder, /<GalaxyHero[\s\S]*onOpenCases=\{\(\) => showSection\("articles"\)\}/);
  assert.match(hero, /onOpenCases/);
  assert.match(hero, /aria-label=\{casesActionLabel\}/);
  assert.equal(actions.length, 2);
  assert.ok(actions.every(Boolean));
  assert.notEqual(actions[0], actions[1]);
});
