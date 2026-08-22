#!/usr/bin/env node
/**
 * confere os links externos que a página exibe.
 *
 * o perfil usa links de fonte como recibos. se um caminho de leitura morrer,
 * o build de verificação falha para que a descrição seja corrigida antes da
 * publicação.
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const TIMEOUT_MS = 15_000;
const RETRIES = 1;

function urlsIn(source) {
  return [...source.matchAll(/https:\/\/[^"'\s)]+/g)].map(([url]) => url.replace(/[.,]$/, ""));
}

/** coleta cada URL que aparece na página e registra o arquivo de origem. */
async function collect() {
  const found = new Map();
  const add = (url, where) => {
    if (!url?.startsWith("http")) return;
    if (url.startsWith("https://fonts.googleapis.com") || url.startsWith("https://fonts.gstatic.com")) return;
    if (!found.has(url)) found.set(url, new Set());
    found.get(url).add(where);
  };

  const infra = JSON.parse(await readFile(join(root, "src/data/infra.json"), "utf8"));
  for (const example of infra) add(example.source.href, `infra.json · ${example.id}`);

  const cases = await readFile(join(root, "src/data/cases.ts"), "utf8");
  for (const url of urlsIn(cases)) add(url, "src/data/cases.ts");

  const publicFiles = [
    "src/i18n/ui.ts",
    "src/components/FounderProfilePage.tsx",
    "src/components/CaseIndexPage.tsx",
    "src/components/CaseJourneyPage.tsx",
    "src/components/GalaxyHero.tsx",
    "src/content/uemg-lessons.ts",
    "src/app/(pt)/uemg/direitos-humanos/aulas/2/page.tsx",
    "src/app/(pt)/uemg/enade/aulas/1/page.tsx",
  ];
  for (const file of publicFiles) {
    const source = await readFile(join(root, file), "utf8");
    for (const url of urlsIn(source)) add(url, file);
  }

  return found;
}

async function probe(url) {
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    const signal = AbortSignal.timeout(TIMEOUT_MS);
    for (const method of ["HEAD", "GET"]) {
      try {
        const response = await fetch(url, { method, redirect: "follow", signal });
        if (method === "HEAD" && !response.ok) continue;
        return { ok: response.ok, status: response.status, final: response.url };
      } catch (error) {
        if (method === "GET" && attempt === RETRIES) {
          return { ok: false, status: 0, error: String(error.message ?? error) };
        }
      }
    }
  }
  return { ok: false, status: 0, error: "sem resposta" };
}

const links = await collect();
console.log(`conferindo ${links.size} links exibidos pelo site\n`);

const results = await Promise.all(
  [...links].map(async ([url, sources]) => ({ url, sources: [...sources], ...(await probe(url)) })),
);

results.sort((a, b) => Number(a.ok) - Number(b.ok) || a.url.localeCompare(b.url));

for (const result of results) {
  const mark = result.ok ? "ok " : "MORTO";
  const detail = result.error ?? result.status;
  console.log(`${mark.padEnd(6)} ${String(detail).padEnd(5)} ${result.url}`);
  if (!result.ok) console.log(`${" ".repeat(13)}exibido em: ${result.sources.join(", ")}`);
}

const dead = results.filter((result) => !result.ok);
if (dead.length > 0) {
  console.error(`\n${dead.length} de ${results.length} links não respondem. remova ou corrija cada endereço.`);
  process.exit(1);
}

console.log(`\ntodos os ${results.length} links respondem.`);
