# portfólio · myke matos

portfólio estático e bilíngue construído em Next.js, React e Anime.js.

A página pública usa `infra-examples` como fonte factual. O conteúdo desse
repositório é um recorte público, sanitizado e organizado por ferramenta,
derivado de infraestrutura real. Cada registro em `src/data/infra.json`
aponta para o README da ferramenta no commit usado pela página.

## estrutura

| o que | onde |
|---|---|
| página em português | `src/app/page.tsx` |
| página em inglês | `src/app/en/page.tsx` |
| fatos e recibos de ferramenta | `src/data/infra.json` |
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

### pre-commit

Instale o [`pre-commit`](https://pre-commit.com/) e ative os hooks neste clone:

```sh
pre-commit install
```

Por padrão, os hooks recebem somente os arquivos staged. Para conferir
manualmente todos os arquivos suportados:

```sh
pre-commit run --all-files
```

A configuração executa Oxfmt antes de Oxlint. Os tipos definidos pelos mirrors
oficiais limitam ambos a JavaScript, JSX, TypeScript e TSX e não selecionam
arquivos binários. A exclusão compartilhada também impede a passagem de vendor,
código gerado, corpus, fixtures e saídas de build. Oxfmt não reescreve o débito
de formatação legado neste PR focado; Oxlint continua cobrindo esses arquivos.
Na prova de instalação, um arquivo temporário staged com formatação incorreta
deve ser corrigido por Oxfmt; depois, uma violação temporária detectável deve ser
bloqueada por Oxlint. Remova o arquivo de prova e execute novamente os hooks até
obter sucesso.

## atualizar conteúdo

Leia primeiro o README e o `SECURITY.md` de
[`infra-examples`](https://github.com/shishiv/infra-examples). Abra também o
README da ferramenta que será descrita. Só então atualize
`src/data/infra.json` e o commit fixado nos links.

Remova uma afirmação quando a fonte pública não sustentar a frase. Não substitua
um fato ausente por métrica, cliente, uptime, escala ou responsabilidade
inferida.
