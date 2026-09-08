# Do problema à operação

Composição local implementada após aprovação do plano. Não é uma direção aprovada para produção. Implementação e verificação feitas pelo agente principal, sem delegar a construção.

## Abrir

Da raiz do repositório:

```sh
python -m http.server 4174 --bind 127.0.0.1 --directory docs/direction/ai-design-skills
```

http://localhost:4174/

A página não precisa de Node ou build para funcionar: HTML, CSS, JavaScript progressivo e fonte local. O servidor deve continuar restrito a loopback; `noindex` não é controle de acesso.

## O que foi construído

- Uma narrativa vertical PT-BR: hero → responsabilidades → tagline → método → evidências → FAQ → CTA final.
- Geist, superfícies planas, destaque pêssego e gradiente somente na headline, conforme a skill fixada no `PLAN.md`.
- Quatro diagramas SVG conceituais, desenhados para este estudo. Não são logotipos, dados ou evidências de resultados.
- CTA único “Explorar o trabalho” para a seção local de evidências. Não existem links que finjam artigos individuais.
- Menu móvel modal com morph das linhas, revelação dos links, foco contido, Escape e retorno de foco. O destino recebe foco ao navegar.
- FAQ nativo, skip link, estado de navegação, hover, pressão, foco e revelações por IntersectionObserver. Tagline progride por palavra.
- Reduced motion remove animações; sem JavaScript, conteúdo, navegação, CTA e FAQ continuam disponíveis.

Ao contrário da baseline orbital e de Orion, a página usa leitura vertical e uma matriz editorial, sem rail, nebulosa, constelação, seleção de cases ou ciclo automático. As duas referências existentes foram inspecionadas e preservadas.

## Evidência

Resultados reproduzíveis: [`screenshots/checks.json`](screenshots/checks.json).

| Verificação | Resultado observado |
| --- | --- |
| Chromium real, via Playwright | 1440×900, 1268×768, 390×844, 320×844 sem overflow horizontal |
| CTA superior e final | Ambos chegam à seção de evidências |
| Navegação interna | Todos os destinos existem |
| Teclado | Skip link, FAQ, foco contido no menu, Escape e foco após navegação passaram |
| FAQ | Seis perguntas abrem e fecham com Enter |
| Menu móvel | Abertura, fechamento, ARIA e navegação passaram em 390px e 320px |
| Tagline | Oito palavras reveladas; sem revelação obrigatória em reduced motion |
| Sem JavaScript | Conteúdo visível, navegação disponível, CTA e FAQ funcionais |
| Erros de browser/rede local | Nenhum erro de página nem resposta HTTP ≥400 durante as jornadas |
| Contraste de tokens | Menor razão medida: 6,39:1; ver `screenshots/contrast.json` |
| Anti-slop e typecheck | Todos os 15 gates genéricos habilitados; app e verificação passaram |
| Regressão da aplicação | 9 testes, lint de conteúdo, 24 links externos e build estático passaram |
| Isolamento | Nenhum diff rastreado em produção; a comp não aparece no export `out/` |

Capturas de viewport e página inteira estão em `screenshots/comp-{width}x{height}*.png`, além de menu, tagline, reduced motion e sem JavaScript. Foram inspecionadas visualmente as composições desktop/mobile e os estados de menu/tagline.

O teste de teclado encontrou uma fuga de foco no limite do modal; foi corrigida e a jornada passou após a correção. A ferramenta de navegador compartilhado falhou ao aplicar o viewport; a matriz de testes foi executada em Chromium isolado, sem controlar ou fechar outras abas.

O contraste mede pares sólidos de tokens, não cada pixel de uma animação. A tagline tem texto temporariamente atenuado por exigência do experimento; em reduced motion/sem JS fica legível desde o início. Não houve auditoria completa com leitor de tela, Safari/iOS ou dispositivo físico.

## Repetir os checks da comp

Com as dependências da raiz já instaladas e o preview na porta 4174:

```sh
cd docs/direction/ai-design-skills
npm ci
npm run lint
npm run typecheck
npm run verify
```

O typecheck usa o TypeScript já pertencente ao repositório pai. O verificador usa `/usr/bin/chromium`, Playwright 1.62.1 e fecha somente o navegador isolado que ele próprio abre. Os testes não enviam e-mails nem abrem destinos externos.

### Anti-slop isolado

Oxlint e `@oxlint/plugins` estão fixados em 1.81.0 neste subprojeto. Nenhum pacote ou configuração da raiz foi alterado.

O instalador de `install-anti-slop` copiou o plugin original. O snapshot original está em `tools/anti-slop.tar.gz`; sua versão executável está em `tools/anti-slop/`, registrada em `.oxlintrc.json`. A conversão mecânica removeu somente tipos TypeScript com `node:module.stripTypeScriptTypes` e trocou extensões de import de `.ts` para `.mjs`, sem alterar regras. Isso evita tanto o bloqueio de type stripping sob `node_modules` quanto incluir ferramentas TypeScript no glob de build da aplicação pai. Não é uma exceção nem uma desativação de regras.

SHA-256 do snapshot original: `675745e2f2be07cea1294a37ad8eb677cc3742c5fad198a10b7515f43563d583`.

### Fonte

`assets/geist-latin.woff2` foi copiada da fonte Geist distribuída pelo Next instalado (`node_modules/next/dist/next-devtools/server/font/geist-latin.woff2`). Licença OFL em `assets/Geist-OFL.txt`, obtida do repositório oficial `vercel/geist-font`.

SHA-256 da fonte: `1b5ebfb3a01a97343ac96873e6d59a8cb285c66012b6a1ac509cb2765e995ba8`.

## Limites

Scapola Comunica e Inclusão Digital UEMG continuam sujeitos à autorização/contexto antes de publicação. Não há números de impacto, depoimentos ou endosso institucional inventados. Os artigos completos não foram escritos.

Esta prévia não coleta dados, não tem formulário e não implementa páginas legais ou 404 de produção. Esses itens da skill ficam explicitamente fora do recorte, não simulados. Nenhum commit, push, PR ou deploy foi feito. A home, o `DESIGN.md`, Orion e os artefatos preexistentes continuam intactos.
