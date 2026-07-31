#!/usr/bin/env node
/**
 * confere todo link externo que o site exibe.
 *
 * o portfólio inteiro se apoia numa promessa: cada item tem prova conferível.
 * um 404 num link exibido custa mais que a ausência do link, porque quebra a
 * credibilidade de tudo que está ao redor. uma promessa sem guarda vale só no
 * dia em que foi feita, então ela vira teste e roda a cada deploy.
 *
 * uso: node scripts/check-links.mjs
 */

import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const TIMEOUT_MS = 15_000;
const RETRIES = 1;

/** todo href que aparece no site, com o lugar de onde ele veio. */
async function collect() {
  const found = new Map();
  const add = (url, where) => {
    if (!url?.startsWith("http")) return;
    if (!found.has(url)) found.set(url, new Set());
    found.get(url).add(where);
  };

  const events = JSON.parse(await readFile(join(root, "src/data/events.json"), "utf8"));
  for (const event of events) {
    add(event.href, `events.json · ${event.id}`);
    for (const node of event.cluster ?? []) add(node.href, `events.json · ${event.id}/${node.id}`);
  }

  const systems = JSON.parse(await readFile(join(root, "src/data/systems.json"), "utf8"));
  for (const system of systems) {
    for (const link of system.links ?? []) add(link.href, `systems.json · ${system.id}`);
  }

  return found;
}

async function probe(url) {
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    const signal = AbortSignal.timeout(TIMEOUT_MS);
    for (const method of ["HEAD", "GET"]) {
      try {
        const response = await fetch(url, { method, redirect: "follow", signal });
        // alguns servidores recusam HEAD e respondem 405; nesse caso o GET decide.
        if (method === "HEAD" && (response.status === 405 || response.status === 501)) continue;
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
  console.error(
    `\n${dead.length} de ${results.length} links não respondem. ` +
      `o site afirma que todo item tem prova conferível, então um link morto ` +
      `é uma afirmação falsa. corrija o endereço ou remova o link.`,
  );
  process.exit(1);
}

console.log(`\ntodos os ${results.length} links respondem.`);
