---
name: myke matos
description: perfil técnico público guiado por recibos de infraestrutura
---

# design system: mapa de contratos

## ideia central

A página é um mapa de contratos operacionais, não uma vitrine de tecnologias.
Cada registro mostra uma ferramenta, uma decisão concreta e o limite que a fonte
pública permite afirmar. O link de fonte fica junto do texto para a leitura não
depender de confiança.

A superfície continua sendo uma folha de arquivo fria. O violeta marca a origem
e os limites. A tinta preta carrega o texto. A serifa explica a decisão. O mono
marca caminho, rótulo e receipt. A condensada nomeia o registro.

## conteúdo

- a primeira dobra responde o que Myke mantém e aponta para `infra-examples`;
- o mapa usa um registro por ferramenta, sem card genérico de ícone e adjetivo;
- cada registro exibe resumo, decisões, limite e README de origem;
- a seção de limites explicita o que o material público não demonstra;
- português e inglês têm a mesma estrutura e o mesmo conjunto de fatos.

## tokens

- papel: `#ebe9e1`;
- papel profundo: `#dfdcd2`;
- mesa: `#c7c3ba`;
- tinta: `#181713`;
- violeta: `#4b426f`;
- violeta profundo: `#332d50`;
- violeta claro: `#d9d4e7`;
- foco: `#d9caff`.

O papel projeta a única sombra. Dentro da folha, a hierarquia vem de espaço,
filete, tipografia e ordem. A cor não é o único sinal de estado: links têm
sublinhado, limites têm rótulo e marcadores têm forma.

## responsividade

A grade de dois registros mantém comparação no desktop. Ela vira uma coluna
quando a leitura deixa de caber. O cabeçalho também empilha antes de comprimir
o texto. A largura mínima suportada é 320px, sem depender de rolagem lateral.

Os links mantêm alvos de toque com altura mínima e o DOM segue a ordem de
leitura. O skip link é o primeiro alvo de teclado. O anel de foco é visível em
fundo claro e escuro.

## movimento

A entrada do cabeçalho e dos registros só acontece quando o navegador não pede
movimento reduzido. A preferência `prefers-reduced-motion: reduce` remove a
animação e mantém a informação completa no mesmo lugar.

## fonte factual

O commit da fonte usada pela página fica explícito nos links de
`src/data/infra.json` e em `src/i18n/ui.ts`. Se a fonte mudar, atualize o commit,
releia os documentos e rode `npm run check:links` antes de publicar.
