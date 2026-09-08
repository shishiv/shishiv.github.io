# Comp experimental com ai-design-skills

Status: implementação local autorizada pelo usuário (“ok pode criar”) e concluída. Adoção em produção não autorizada. Ver `README.md` e `screenshots/checks.json` para entrega e evidência.

## Objetivo e base

Testar a skill `landing-page-design` sem misturar outras referências prescritivas de design e sem substituir o site atual. Após liberação, a implementação será feita pelo agente principal, sem delegação.

Fonte: https://github.com/shishiv/ai-design-skills/blob/1c1e97cb9878e236552c772092dda7adcdddbcb2/skills/landing-page-design/SKILL.md

Dois scouts investigaram repositório e sessões separadamente. Um único advisor (`wFC:p2`, advisor-comp) recomendou a direção abaixo.

Base recuperada:

- Sessão Pi `--home-shiv-Projects-self--/2026-09-05T04-17-48-959Z_01a06fc9-759e-73b7-8378-8edc3aaf0d73.jsonl`, mensagens nas linhas 22–31: voz externa, founders view, relações no meio tech e rejeição do portfólio genérico.
- Histórico Git: `c2b1507` registra a versão original Astro, “linha de custódia”. O estado atual é Next.js com arquivo orbital, não essa primeira versão.
- `DESIGN.md` e `src/i18n/ui.ts` sustentam a tese e o método: encontrar a restrição, mudar o sistema, testar o caminho e colocar para funcionar.
- `docs/direction/orion/README.md` identifica Orion como evidência não aprovada. Não há autorização para promovê-lo à home.
- `src/components/CaseIndexPage.tsx`: existem contextos e índice de cases, não artigos individuais. Não inventar destinos ou resultados.

## Recorte proposto para aprovação

Uma página local PT-BR, independente, em `docs/direction/ai-design-skills/`. Sem mudanças em `src/`, `DESIGN.md`, Orion, rotas públicas ou deploy. Preservar `.pi/` e `docs/` preexistentes, não rastreados no início.

Hipóteses para esta comp, não decisões históricas do usuário: público de founders e pares de produto/tecnologia; objetivo de tornar o trabalho legível; conversão como ativação de “Explorar o trabalho”; idioma PT-BR. Sem analytics ou coleta de dados.

Direção: **índice de evidências, do problema à operação**. Não reconstruir a constelação Orion nem o grafo da stack. O teste compara uma narrativa vertical disciplinada pela nova skill com os estudos existentes.

## 1. Page outline

1. Nav pill e hero: pessoa, tese, CTA, sinal factual e matriz visual dos quatro contextos.
2. Problema e responsabilidades: por que entregar uma interface não encerra o trabalho; quatro partes do método.
3. Tagline reveal, separado do hero por conteúdo substantivo.
4. Como trabalho: três etapas, preservando as quatro operações.
5. Evidências: quatro contextos com responsabilidade, situação editorial e limites explícitos.
6. FAQ com seis perguntas reais.
7. CTA final idêntico ao primeiro e rodapé enxuto.

## 2. Hero copy

- Identidade: Myke Matos · founder / cto.
- Headline: “Construir é só metade.”
- Subheadline: “Eu assumo problemas reais e confusos pelo ciclo inteiro: encontro a restrição, mudo o sistema, testo o caminho e coloco para funcionar.”
- CTA: “Explorar o trabalho”, âncora funcional para `#evidencias`.
- Sinal factual: “Quatro contextos de trabalho. Um ciclo comum.” Isso descreve o corpus, não comprova impacto.
- Visual: matriz editorial retangular dos contextos Triangulotec, Scapola Comunica, Gastei e Inclusão Digital UEMG, usando apenas fatos já presentes no repositório. Sem controles de case no hero, estrelas ou logos que sugiram endosso.
- Scapola e UEMG ficam restritos à prévia local e identificados como sujeitos à revisão de contexto/autorização antes de publicação.

## 3. Benefícios traduzidos em responsabilidades

Sem prometer resultados comerciais não demonstrados:

- **Encontrar a restrição:** entender o problema antes de escolher a solução.
- **Mudar o sistema:** conectar produto, engenharia e operação na mesma decisão.
- **Testar o caminho:** verificar a experiência além da implementação.
- **Sustentar a operação:** acompanhar o que acontece depois da primeira entrega.

Tagline proposta, em duas linhas semânticas: “Da restrição ao teste. / Da entrega à operação.”

## 4. Como trabalho

1. Encontrar a restrição: partir do contexto real.
2. Mudar e testar: implementar a mudança e verificar o caminho.
3. Colocar para funcionar: acompanhar a operação.

Manter explícita a sequência completa: restrição → mudança → teste → operação. Descrever método, não um serviço com prazo ou resultado garantido.

## 5. FAQ proposto

1. **Que tipo de trabalho aparece aqui?** Produto, engenharia e operação em empresa, cliente, produto próprio e ensino/pesquisa.
2. **O que conecta contextos tão diferentes?** O ciclo de encontrar a restrição, mudar o sistema, testar o caminho e colocar para funcionar.
3. **Os cases completos já estão disponíveis?** Ainda não. O site atual apresenta um índice editorial, não artigos individuais publicados.
4. **O que posso verificar nesta página?** Os contextos e responsabilidades descritos. Não apresentamos métricas de receita, adoção ou desempenho sem evidência.
5. **Os nomes representam endosso institucional?** Não. Identificam contextos de trabalho; Scapola e UEMG ainda exigem revisão para publicação neste formato.
6. **Como entrar em contato?** Pelo endereço de e-mail já usado no site, em link secundário nesta resposta e no rodapé, sem competir com o CTA do hero.

Não inventar depoimentos, garantias, planos, dados orgânicos fictícios ou logos de clientes como prova social. Transparência editorial cumpre a função de reduzir incerteza, sem fingir uma garantia comercial.

## 6. SEO / AEO

Prévia local com `noindex, nofollow`, `lang="pt-BR"`, título “Myke Matos | Estudo de composição” e descrição factual. Não publicar, não adicionar analytics, não criar schema que simule cases completos. SEO público, textos legais e 404 de produção ficam fora deste experimento, explicitamente adiados. Não adicionar links legais falsos ou um formulário desnecessário.

## 7. Layout e sistema visual

**B: long form story**, conforme o advisor: o visitante precisa entender método e evidência; não há produto único explicável por screenshot.

- Geist como única família, preferencialmente local com licença; sem itálico ou peso acima de bold.
- Fundo plano `#181818`; superfícies somente na paleta escura permitida. Sem nebulosa ou gradiente de fundo.
- Gradiente `#FFFFFF` → `#9B9B9B` apenas na headline. Hero e subheadline limitados a 680px.
- Tipografia, entrelinhas, espaçamento e raios nos valores da skill, representados em CSS puro. Não instalar Tailwind apenas pelos nomes da escala.
- Nav pill com menu móvel acessível; links para seções reais, menu com Escape, gerenciamento de foco e estado expandido.
- Revelações com IntersectionObserver e curva `cubic-bezier(0.32,0.72,0,1)`. Tagline com progressão por palavra. Sem listeners de scroll contínuos.
- Reduced motion e falha/ausência de JavaScript mantêm conteúdo legível; foco e contraste não podem depender das animações. Não aplicar `transition-all` cegamente a propriedades de layout.
- Mobile com narrativa vertical própria, matriz refluída, alvos de pelo menos 44px e sem rolagem horizontal.

## Execução após liberação

1. Reconfirmar estado do worktree; criar somente artefatos novos do experimento.
2. Construir HTML/CSS isolados, seção por seção: hero → responsabilidades → método → evidências → FAQ → CTA; inserir tagline na posição planejada.
3. Adicionar apenas o JavaScript necessário para navegação/reveals. Antes de alterar JS/TS, cumprir a política global de anti-slop e carregar `install-anti-slop` para configuração/validação. É um gate de código, não uma segunda direção de design. Se isso exigir ampliar o escopo para arquivos compartilhados, explicitar a mudança antes de executar; não ignorar regras silenciosamente.
4. Conferir desktop e mobile no navegador, corrigir a comp diretamente, sem delegar construção ou revisão adicional.
5. Salvar screenshots, instrução de preview e relatório curto distinguindo observado de não verificado.

## Critérios de aceite

- Capturas em 1440×900, 1268×768 e 390×844; conferir também overflow a 320px.
- CTA superior e final alcançam evidências; links externos usam destinos reais. Não apresentar cartões como artigos clicáveis inexistentes.
- Teclado: skip link, foco visível, menu, retorno de foco e FAQ funcionais.
- Reduced motion, ausência de JS, contraste, leitura da tagline e mobile verificados em execução local.
- Conteúdo factual, nenhuma métrica inventada, indicação clara dos limites de publicação.
- Comparação visual com baseline e Orion sem sobrescrevê-los.
- Confirmar ausência de diff em produção e ausência de inclusão da comp no export público.
- Rodar `npm test`, `npm run lint`, `npm run check:links` e `npm run build` uma vez como regressão ao finalizar; o lint atual valida conteúdo, não substitui anti-slop. Build não prova qualidade visual.
- Entrega somente local: sem commit, push, PR, publicação ou deploy implícitos.

## Limite da liberação recebida

A liberação autoriza construir a comp local, não trocar a home nem liberar nomes/assets para publicação. Uma eventual adoção exige decisão separada sobre `DESIGN.md`, idioma público e autorização de contexto dos cases.
