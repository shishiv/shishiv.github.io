<!-- SEED: established with the user before implementation; re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: myke matos
description: portfólio pessoal construído como uma linha de custódia arquivística
---

# Design System: myke matos

## Overview

**Creative North Star: "A Linha de Custódia"**

O site é um documento de arquivo, não uma vitrine. Uma fita violeta desce a página e carrega a vida de trabalho em ordem de tempo. Onde ela é cheia, existe prova pública. Onde afina, o trabalho existe e a evidência não circula. Onde **desfia em filamentos cinza que divergem e somem**, é algo que material antigo já afirmou e que hoje não se sustenta. A honestidade não é um texto sobre honestidade, é a geometria da página.

A superfície é papel de arquivo **frio**, cinza-buff, nunca creme quente. O traço é preciso e fino, de instrumento. O violeta não é acento nem cor de botão: é a estrutura que segura o documento, e por isso aparece em comprimento contínuo, não em respingos.

A densidade é de currículo técnico, não de landing page. Substantivo técnico e mecanismo; nenhum adjetivo, nenhuma métrica sem fonte.

**Key Characteristics:**

- Caixa baixa por padrão, em todo lugar
- Uma linha contínua como espinha estrutural, dirigida por dados
- Prova visível por espessura de traço, sem legenda explicando
- Papel frio, tinta preta, violeta de carimbo; nada mais
- Densidade alta de fato técnico verdadeiro, sem preenchimento

## Colors

Três materiais: papel, tinta e seda.

### Primary
- **Violeta de Carimbo** (`#514c78`): a tarja do cabeçalho, a fita, todo filete estrutural, e o sublinhado do que dá para abrir agora. Estrutura, medida em comprimento e em região.
- **Violeta Fundo** (`#3a3659`): as pontas do gradiente da tarja.
- **Tinta de Reverso** (`#f1eff4`): texto sobre a tarja.

Violeta e não vermelho por medição, não por gosto: o papel é um cinza-buff frio, e vermelho quente sobre cinza frio embrulha. Violeta azulado é também o que a burocracia de arquivo brasileira usa de verdade no carimbo.

### Neutral
- **Papel de Arquivo** (`#e4e0d5`): fundo da folha.
- **Papel Sombra** (`#dcd8cc`): segundo plano, faixas e blocos.
- **Tinta** (`#1b1a17`): texto principal e todo traço estrutural.
- **Tinta 70%** (`rgba(27,26,23,.70)`): stack, nota e dado secundário. Mede 5,65:1 no papel.
- **Tinta 66%** (`rgba(27,26,23,.66)`): rótulo técnico, régua de tempo, marca de ano. Mede 4,99:1.
- **Tinta 16%** (`rgba(27,26,23,.16)`): filete de separação em tabela.
- **Fio Desfiado** (`#9a978d`): exclusivo do não-afirmável.

### Named Rules

**A Regra do Comprimento.** O violeta se mede em comprimento contínuo e em região inteira, nunca em quantidade de manchas. A tarja do cabeçalho, a fita e os filetes estruturais são corretos; seis botões violeta é errado, mesmo somando menos área.

**A Regra do Fio Morto.** O cinza `#9a978d` só existe para representar o que não pode ser afirmado. Nunca é cinza de interface.

**A Regra do Papel Frio.** O fundo é cinza-buff. Se puxar para o amarelo, o mundo virou o editorial de sempre.

**A Regra da Medição.** Nenhum par de cor entra sem contraste medido no navegador. Os valores atuais: nome sobre a tarja 6,93:1; ficha técnica 5,46:1; stack no papel 5,65:1; rótulo no papel 4,99:1. Trocar qualquer token exige remedir.

**A Regra do Anel de Papel.** Todo nó apoiado sobre a própria fita recebe anel de papel de 2,4px. Sem ele o nó some dentro do violeta. Medido, não suposto.

## Typography

**Display e rótulo de conteúdo:** Archivo Narrow
**Dado, medida, identificador e stack:** JetBrains Mono
**Decisão de engenharia e nota:** Petrona

**Character:** a condensada dá densidade sem gritar; o mono marca tudo que é medida, versão, data, caminho e stack; a serifa marca a decisão por trás da stack. Cada família nomeia uma natureza diferente de informação, nunca um nível de importância.

### Hierarchy
- **Display** (600, 31px, 1.0, -.026em): nome.
- **Title** (600, 14-15px): nome de evento e de sistema.
- **Node** (600, 12px): nó de cluster.
- **Mono** (400, 8,5-10px, +.03em): stack, data, processo, caminho, link.
- **Nota** (Petrona, 400, 11,5px): decisão de engenharia.

### Named Rules

**A Regra da Caixa Baixa.** Todo texto autoral nasce em minúsculas. Nomes próprios de terceiros, siglas e nomes oficiais mantêm a grafia real. Compromisso de marca registrado no PRODUCT.md.

**A Regra das Três Naturezas.** Mono para o que é medido. Serifa para o que foi decidido. Condensada para o que é nomeado. Uma família fora do seu papel é erro, não variação.

**A Regra do Mono Medido.** Mono nunca é fantasia de "técnico". A página já é técnica pela estrutura.

## Layout

Grade de documento, não de cards. Espinha de tempo à esquerda ocupando a maior parte da largura, registro de sistemas à direita separado por filete de 1px em tinta.

O tempo desce na vertical, com **compressão não-linear**: o período corrente ocupa cerca de metade do comprimento e os anteriores comprimem. A fita segue legível de 9 a 300 eventos.

Um nó pode estar **aberto**, e então expande um cluster de notas ligadas por arestas finas. Arestas em tinta são relação; arestas em seda terminam em algo conferível agora. A rede completa vive numa rota própria.

Em telas estreitas o registro empilha abaixo da espinha e a régua de anos vira coluna. A fita nunca vira carrossel.

### Named Rules

**A Regra do Card Ausente.** Não existe card com sombra como estrutura de página. Agrupamento se faz com filete, faixa de papel e alinhamento.

**A Regra do Nó Substancial.** Só ganha nó o que muda o estado do trabalho: sistema entra no ar, cliente entra, cargo começa, trabalho é apresentado, decisão institucional sai. Post e registro de build in public **não ganham nó**; engrossam a fita no período. Blog é rota própria, sem fita.

## Elevation & Depth

Sistema **plano**. Nenhuma sombra de elevação em elemento de interface. A profundidade vem da folha sobre o fundo, da variação de campo do papel e da ordem de traço.

A única sombra permitida é a da folha sobre a mesa, com deslocamento e desfoque reais. Nunca halo colorido sem deslocamento.

### Named Rules

**A Regra da Folha Única.** Só o papel projeta sombra. Nada dentro dele projeta.

## Shapes

Cantos vivos. Raio zero em folha, faixa, tabela e campo. A curva existe só onde é física: a fita, que dobra, e o nó, que é circular.

Separação por filete de 1px em tinta, e por tinta 16% onde a hierarquia pede algo mais leve. Sem borda colorida grossa, sem borda lateral de destaque.

### Named Rules

**A Regra do Fio Contínuo.** **Nenhum `stroke-dasharray` no sistema.** Incerteza se representa por divergência e perda de opacidade, como tecido que solta fio, jamais por tracejado. Tracejado é o atalho preguiçoso para "incerto".

## Do's and Don'ts

### Do:
- **Do** usar espessura de traço como vocabulário de prova: cheio para provado, fino para restrito, filamento cinza divergente para não-afirmável.
- **Do** manter a fita contínua, única e dirigida por dados.
- **Do** escrever tudo em caixa baixa, preservando grafia oficial de terceiros.
- **Do** dar a cada família seu papel: mono mede, serifa decide, condensada nomeia.
- **Do** deixar a página densa de fato técnico. O vazio aqui é falta de conteúdo, não elegância.
- **Do** medir no navegador antes de afirmar que algo está certo.

### Don't:
- **Don't** usar terminal, prompt, cursor piscando ou mono como estética geral. Nomeado e descartado.
- **Don't** aquecer o papel para creme nem introduzir serifa de display gigante. A outra rotina descartada.
- **Don't** usar `stroke-dasharray` em lugar nenhum.
- **Don't** transformar o violeta em cor de botão, badge, tag ou ícone.
- **Don't** usar o cinza de fio desfiado como cinza de interface.
- **Don't** empilhar cards iguais de ícone, título e texto como estrutura de página.
- **Don't** aplicar sombra, brilho ou halo em elemento interno.
- **Don't** publicar adjetivo sem exemplo, nem métrica sem fonte conferível.
