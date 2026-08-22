# portfólio · myke matos

portfólio estático e bilíngue construído em Next.js, React e Anime.js.

A página pública usa fontes primárias fixadas para cada claim. Os cases de
`src/data/cases.ts` apontam para código, superfícies públicas e documentos de
limite do EDUCA, Inclusão Digital UEMG e `infra-examples`. Os registros técnicos
de `src/data/infra.json` continuam ancorados no commit público indicado.

## estrutura

| o que | onde |
|---|---|
| página em português | `src/app/page.tsx` |
| página em inglês | `src/app/en/page.tsx` |
| fatos e recibos de ferramenta | `src/data/infra.json` |
| cases, estados e recibos públicos | `src/data/cases.ts` |
| jornada interativa de cada case | `src/components/CaseJourneyPage.tsx` |
| textos bilíngues da interface | `src/i18n/ui.ts` |
| composição da página | `src/components/FounderProfilePage.tsx` |
| galáxia de stacks | `src/components/GalaxyHero.tsx` |
| sistema visual | `DESIGN.md` e `src/styles/globals.css` |
| guarda de links | `scripts/check-links.mjs` |

A página não publica hosts privados, IPs operacionais, credenciais, dados de
cliente ou estado de runtime. Ela também não transforma os exemplos em promessa
de deploy pronto.

## rodar

```sh
npm ci
npm run dev
```

## conferir

```sh
npm test
npm run lint
npm run check:links
npm run build
```

`scripts/check-links.mjs` verifica os recibos de fonte e os links de contato.
Um endereço quebrado remove a evidência do registro e falha a verificação.

## atualizar conteúdo

Leia primeiro o README e o `SECURITY.md` de
[`infra-examples`](https://github.com/shishiv/infra-examples). Abra também o
README da ferramenta que será descrita. Só então atualize
`src/data/infra.json` e o commit fixado nos links.

Remova uma afirmação quando a fonte pública não sustentar a frase. Não substitua
um fato ausente por métrica, cliente, uptime, escala ou responsabilidade
inferida.
