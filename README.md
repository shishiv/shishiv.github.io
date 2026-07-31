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

Site de usuário: o repositório precisa se chamar **`shishiv.github.io`**.

```sh
gh repo create shishiv/shishiv.github.io --public --source=. --remote=origin --push
```

Depois, em **Settings → Pages → Build and deployment → Source**, escolha
**GitHub Actions**.

> O quickstart oficial do GitHub Pages manda escolher *Deploy from a branch* e
> criar um `_config.yml`. Aquilo é o caminho do Jekyll. Este site é Astro e
> precisa de build, então a origem tem que ser GitHub Actions e não existe
> `_config.yml` aqui. Escolher *Deploy from a branch* publicaria o código-fonte
> em vez do site.

`.github/workflows/deploy.yml` publica a cada push na `main`. O primeiro
deploy sai sozinho depois que a origem estiver em GitHub Actions.
