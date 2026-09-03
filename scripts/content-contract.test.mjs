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

test("Portuguese and English case routes reuse the orbital shell with the cases rail active", async () => {
  const [ptHome, enHome, ptCases, enCases, founder] = await Promise.all([
    readFile(join(root, "src/app/(pt)/page.tsx"), "utf8"),
    readFile(join(root, "src/app/(en)/en/page.tsx"), "utf8"),
    readFile(join(root, "src/app/(pt)/case/page.tsx"), "utf8"),
    readFile(join(root, "src/app/(en)/en/case/page.tsx"), "utf8"),
    readFile(join(root, "src/components/FounderProfilePage.tsx"), "utf8"),
  ]);

  assert.match(ptHome, /<FounderProfilePage locale="pt" \/>/);
  assert.match(enHome, /<FounderProfilePage locale="en" \/>/);
  assert.match(ptCases, /<FounderProfilePage locale="pt" initialSection="articles" \/>/);
  assert.match(enCases, /<FounderProfilePage locale="en" initialSection="articles" \/>/);
  assert.doesNotMatch(ptCases, /CaseIndexPage/);
  assert.doesNotMatch(enCases, /CaseIndexPage/);
  assert.doesNotMatch(founder, /function CaseIndexPage/);
  assert.match(founder, /initialSection\?:/);
  assert.doesNotMatch(founder, /\{t\.uemgNav\}|href="\/uemg\/"/);
  for (const section of ["cases", "trajectory", "articles", "contact"]) {
    assert.match(founder, new RegExp(`"${section}"`));
  }
  assert.match(founder, /useState<[^>]+>\(initialSection \?\? "cases"\)/);
});

test("the portfolio rail removes the UEMG notebook link without removing UEMG routes", async () => {
  const [founder, ui, uemgIndex, uemgLesson] = await Promise.all([
    readFile(join(root, "src/components/FounderProfilePage.tsx"), "utf8"),
    readFile(join(root, "src/i18n/ui.ts"), "utf8"),
    readFile(join(root, "src/app/(pt)/uemg/page.tsx"), "utf8"),
    readFile(join(root, "src/app/(pt)/uemg/direitos-humanos/aulas/1/page.tsx"), "utf8"),
  ]);

  assert.doesNotMatch(founder, /\{t\.uemgNav\}|href="\/uemg\/"/);
  assert.doesNotMatch(ui, /uemgNav\s*:/);
  assert.doesNotMatch(ui, /backHome\s*:/);
  assert.match(uemgIndex, /export default function UemgSemesterIndexPage/);
  assert.match(uemgLesson, /className="course-page"/);
});

test("the portfolio root layouts provide a local favicon without a console 404", async () => {
  const [ptLayout, enLayout] = await Promise.all([
    readFile(join(root, "src/app/(pt)/layout.tsx"), "utf8"),
    readFile(join(root, "src/app/(en)/layout.tsx"), "utf8"),
  ]);

  for (const layout of [ptLayout, enLayout]) {
    assert.match(layout, /<link rel="icon" href="\/favicon\.svg" type="image\/svg\+xml" \/>/);
  }
});

test("the mobile portfolio rail removes the final nav border", async () => {
  const styles = await readFile(join(root, "src/styles/globals.css"), "utf8");

  const mobileStyles = styles.slice(styles.indexOf("@media (max-width: 800px)"));

  assert.notEqual(styles.indexOf("@media (max-width: 800px)"), -1);
  assert.ok(mobileStyles.includes(".founder-rail nav :is(a,button):last-child { border-bottom: 0; }"));
});

test("reduced motion removes spatial movement from new portfolio controls", async () => {
  const styles = await readFile(join(root, "src/styles/globals.css"), "utf8");
  const reducedMotionStyles = styles.slice(styles.indexOf("@media (prefers-reduced-motion: reduce)"));

  assert.notEqual(styles.indexOf("@media (prefers-reduced-motion: reduce)"), -1);
  assert.match(reducedMotionStyles, /\.founder-rail nav \[aria-current="page"\]\s*\{[^}]*padding-left:\s*0;/);
  assert.match(reducedMotionStyles, /\.stack-focus-action:active\s*\{[^}]*transform:\s*none;/);
  assert.doesNotMatch(reducedMotionStyles, /padding-left\s+160ms/);
});
