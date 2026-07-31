# portfólio · myke matos

Folha única, estática, bilíngue. Astro sem framework de UI, **zero JavaScript no cliente**.

A autoridade de conteúdo está em dois arquivos, não no código:

- `PRODUCT.md` — o que é verdade sobre o produto, com receita e data em cada fato
- `DESIGN.md` — o mundo visual, as regras nomeadas e os valores de contraste medidos

## rodar

```sh
npm install
npm run dev
```

## conferir

```sh
npm run check        # tipos e diagnóstico do astro
npm run check:links  # todo link exibido pelo site precisa responder
npm run build
```

`check:links` também roda no CI antes de publicar. O site afirma que todo item
tem prova conferível; um link morto torna essa afirmação falsa, então ele
quebra o deploy em vez de ir ao ar.

## editar conteúdo

| o que | onde |
|---|---|
| nós da linha do tempo | `src/data/events.json` |
| registro de sistemas | `src/data/systems.json` |
| textos de interface | `src/i18n/ui.ts` |
| posts | `src/content/posts/*.md` |

Um post novo é um arquivo markdown com `title`, `date`, `lang` e `summary`.
A caixinha de escrita se preenche sozinha.

`events.json` tem um limite que se anuncia: se os eventos não couberem na
faixa vertical da fita, o build falha dizendo quantos pixels faltam e quais
números ajustar. É de propósito — um limite que dá para encostar precisa ser
visível.

## publicar

`.github/workflows/deploy.yml` publica no GitHub Pages a cada push na `main`.

Antes do primeiro deploy, em **Settings → Pages**, escolha **GitHub Actions**
como origem.

Se o repositório não se chamar `portfolio`, ajuste `base` em
`astro.config.mjs`. Se um dia virar `shishiv.github.io` na raiz, `base` vira
`"/"`.
