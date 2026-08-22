import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const infra = JSON.parse(await readFile(join(root, "src/data/infra.json"), "utf8"));
const cases = await readFile(join(root, "src/data/cases.ts"), "utf8");
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

test("the home exposes three evidence-led public cases", () => {
  assert.equal([...cases.matchAll(/featured: true/g)].length, 3);
  for (const title of ["EDUCA", "inclusão digital UEMG", "infra-examples"]) {
    assert.match(cases, new RegExp(title, "i"));
  }
  for (const field of ["role", "problem", "decision", "built", "observed", "limit", "evidence"]) {
    assert.match(cases, new RegExp(`\\b${field}:`));
  }
});

test("featured case receipts stay pinned and public claims stay bounded", () => {
  assert.match(cases, /EDUCA\/tree\/d01379325e25086ff36cccb8238bd2a30f01effc/);
  assert.match(cases, /inclusao-digital-uemg\/tree\/9e4f2a40c1d5e5a4fe44ae7272e9cbf78c3d45ad/);
  assert.match(cases, /infra-examples\/tree\/305c7d0a26a92dd12c8f1156f8f6dee982ecee88/);
  assert.match(cases, /não prova uso com dados reais/i);
  assert.match(cases, /não expõe topologia privada/i);
});

test("every featured case has a slide journey and GitHub as its primary source", async () => {
  const journey = await readFile(join(root, "src/components/CaseJourneyPage.tsx"), "utf8");
  assert.match(journey, /"idea".*"why".*"translation".*"system".*"proof".*"boundary"/s);
  assert.match(journey, /role="tablist"/);
  assert.match(journey, /role="tabpanel"/);
  assert.match(journey, /sourceHref/);
  assert.match(cases, /sourceHref: "https:\/\/github\.com\/shishiv\//);
  assert.equal([...cases.matchAll(/^    sourceHref:/gm)].length, 3);
});
