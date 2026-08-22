# Gauntlet progress

## Goal

Transformar o portfólio de Myke Matos em uma prova convincente de atuação como founder, CTO e product engineer, preservando a identidade visual atual e o suporte PT/EN.

## Bars

- Estrutura e densidade de prova: https://www.orlandoascanio.com/
- Identidade visual: https://shishiv.github.io/ antes desta rodada

## Exit criterion

Um critic com contexto novo deve preferir o portfólio de Myke numa comparação cega quanto a competência e confiança. A página também precisa passar build, contratos de conteúdo, links, teclado, reduced motion e inspeção desktop/mobile.

## Baseline

- A home atual comunica posicionamento e método, mas a dobra inicial não mostra projetos nem conduz diretamente à prova.
- Os cases existem como índice interno, porém são linhas sem destinos próprios, recibos públicos ou resultados observados.
- Orlando apresenta prova e caminhos de navegação já na home, com cases, produtos, serviços e notas.
- Build inicial passou em 2026-08-22: 3 testes, content lint e static export.
- O install reportou 3 vulnerabilidades high em dependências; não foram corrigidas automaticamente porque isso pode exigir atualização breaking e está fora da mudança editorial imediata.

## Round 1

Status: Orlando venceu.

Maior lacuna apontada pelo critic: a promessa de ownership ponta a ponta não tinha prova verificável. Os quatro “cases” eram resumos sem destinos, fontes, papel, decisões, resultados observados ou limites.

Decisão de construção: manter rail, headline, galáxia, tipografia e motion; adicionar na home um ledger editorial com três trabalhos públicos e transformar o índice em cases com evidências diretas.

Peças:

1. Prova e conteúdo: selecionar somente cases sustentados por fonte pública, com papel, decisão, construção, estado e limite.
2. Arquitetura de informação: colocar trabalho verificável na home sem copiar o hub de Orlando nem perder a composição editorial.
3. Interface e interação: preservar rail, tipografia, cor, motion, PT/EN e adaptar mobile.
4. Verificação: contratos automatizados, links públicos, browser real, acessibilidade e comparação final.

## Round 2

Status: primeira crítica visual pediu mudanças.

- EDUCA, Inclusão Digital UEMG e infra-examples selecionados por força e diversidade da evidência pública.
- Cada case agora separa problema, responsabilidade, decisão, construção, observação e limite.
- A home aponta para os três cases sem copiar a estrutura visual da referência.
- O hero ganhou um caminho explícito para os três cases; no mobile, a prova começa dentro da primeira dobra.
- Os cards inteiros são links nativos com área de toque ampla; metadados e ações cresceram no mobile.

## Round 3

Status: direção substituída após feedback do Captain.

- O sistema deixou de preservar o rail e a galáxia de tecnologias como restrição.
- A home virou uma narrativa longa, evidence-first, com header direto, hero, cases, método, sobre e contato.
- Cada seção recebeu composição e artefato SVG próprios; cada case recebeu um diagrama distinto.
- A lente foi corrigida para colaboração: ajudar uma intenção compartilhada a virar experiência útil, sem alegar autoridade unilateral sobre o que deve existir.

## Verificação atual

- `npm test`: 5/5.
- `npm run lint`: passou.
- `npm run build`: static export passou.
- Browser: PT renderizado, 7 SVGs, headings e links expostos na accessibility tree, sem overflow horizontal em desktop e 390 px.
- Link check: os novos recibos responderam; um link acadêmico preexistente da UEMG (`iep.utm.edu/agamben`) expirou em duas execuções e segue como bloqueio externo fora do redesign.
- Publicação não autorizada nem executada.

## Resultado da gauntlet

- Critic cego: Myke venceu Orlando em confiança e competência diferenciada.
- Maior lacuna residual apontada: os recibos ainda estavam um clique abaixo da home.
- Correção aplicada: cada case agora expõe uma observação verificável e um link direto para o artefato primário na própria home.
- Auditoria independente de acessibilidade e responsividade: Approve, sem findings HIGH ou MEDIUM.

## Extensão pedida pelo Captain

- Cada case ganhou uma rota própria em PT e EN.
- A narrativa funciona como seis slides: ideia, por quê, travessia, sistema, observação e limite.
- O capítulo de sistema renderiza a arquitetura conceitual do próprio case.
- GitHub é a única superfície chamada de fonte primária; produto ao vivo aparece somente como artefato público.
- O índice foi refeito como diretório leve: uma introdução, três linhas de projeto e nenhum detalhe arquitetural.
- Cada capítulo do case ganhou três ou quatro decisões/contextos específicos do projeto, além da visualização.

## Rodada de profundidade

- O índice venceu a barra de Orlando como entrada mais curta e escaneável.
- O case perdeu para ResistGate porque apontava para provas em vez de renderizá-las e mostrava fluxo conceitual no lugar da arquitetura.
- Correções: arquitetura EDUCA com atores, aplicação, Auth, RLS, entidades e gate sintético; arquiteturas específicas nos demais cases; receipt datado incorporado no capítulo observado.
- Mobile: os 18 capítulos medidos em 390 × 844 agora têm `scrollHeight === innerHeight` e zero overflow horizontal.
- Tabs: Home, End, setas, roving tabindex, hash e scroll da tab focada implementados.
