# portfólio · myke matos

perfil estático e bilíngue, construído em Astro sem JavaScript no cliente.

A página pública usa `infra-examples` como fonte factual. O conteúdo desse
repositório é um recorte público, sanitizado e organizado por ferramenta,
derivado de infraestrutura real. Cada registro em `src/data/infra.json`
aponta para o README da ferramenta no commit usado pela página.

## estrutura

| o que | onde |
|---|---|
| página em português | `src/pages/index.astro` |
| página em inglês | `src/pages/en/index.astro` |
| fatos e recibos de ferramenta | `src/data/infra.json` |
| textos bilíngues da interface | `src/i18n/ui.ts` |
| composição da página | `src/layouts/Folio.astro` e `src/components/InfraRegistry.astro` |
| sistema visual | `DESIGN.md` e `src/styles/world.css` |
| guarda de links | `scripts/check-links.mjs` |

A página não publica hosts privados, IPs operacionais, credenciais, dados de
cliente ou estado de runtime. Ela também não transforma os exemplos em promessa
de deploy pronto.

## rodar

```sh
npm install
npm run dev
```

Para a validação visual local, use um endereço nomeado com `portless`:

```sh
portless run ./node_modules/.bin/astro dev
```

## conferir

```sh
npm run check
npm run check:links
npm run build
```

`check:links` verifica os recibos de fonte e os links de contato que a página
exibe. Um endereço quebrado remove a evidência do registro e falha a verificação.

## atualizar conteúdo

Leia primeiro o README e o `SECURITY.md` de
[`infra-examples`](https://github.com/shishiv/infra-examples). Abra também o
README e o callgraph da ferramenta que será descrita. Só então atualize
`src/data/infra.json` e o commit fixado nos links.

Remova uma afirmação quando a fonte pública não sustentar a frase. Não substitua
um fato ausente por métrica, cliente, uptime, escala ou responsabilidade
inferida.
