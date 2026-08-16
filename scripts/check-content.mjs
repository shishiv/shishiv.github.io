#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL("..", import.meta.url)));
const infra = JSON.parse(await readFile(join(root, "src/data/infra.json"), "utf8"));
const sourceCommit = "c0469a25a6602399ba2107cee5d42d48d12e4c31";
const errors = [];

if (infra.length === 0) errors.push("src/data/infra.json has no records");

for (const example of infra) {
  if (!example.id || !example.name) errors.push("every record needs an id and name");
  if (!example.source?.href?.includes(`/infra-examples/blob/${sourceCommit}/`)) {
    errors.push(`${example.id}: source must use the pinned infra-examples commit`);
  }
  if (example.decisions?.pt?.length !== example.decisions?.en?.length) {
    errors.push(`${example.id}: Portuguese and English decision counts differ`);
  }
  for (const locale of ["pt", "en"]) {
    for (const field of ["title", "summary", "boundary"]) {
      if (!example[field]?.[locale]) errors.push(`${example.id}: missing ${field}.${locale}`);
    }
  }
}

const publicFiles = [
  "src/components/FounderProfilePage.tsx",
  "src/components/GalaxyHero.tsx",
  "src/components/CaseIndexPage.tsx",
  "src/i18n/ui.ts",
  "src/data/infra.json",
];
const publicText = await Promise.all(
  publicFiles.map((file) => readFile(join(root, file), "utf8")),
).then((parts) => parts.join("\n"));

if (!/founder\s*\/\s*cto/i.test(publicText) || !/product engineer/i.test(publicText)) {
  errors.push("approved founder / cto and product engineer positioning is missing");
}

if (/full[- ]stack (developer|engineer)|engenheir[oa] full[- ]stack/i.test(publicText)) {
  errors.push("unsupported full-stack positioning found in public profile content");
}

if (errors.length > 0) {
  console.error(errors.map((error) => `content lint: ${error}`).join("\n"));
  process.exit(1);
}

console.log(`content lint: ${infra.length} records, bilingual receipts present`);
