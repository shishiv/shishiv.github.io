# Brief da sessão: cadernos UEMG

Data: 17/08/2026

## Objetivo

Transformar a área `/uemg/` do portfólio em um conjunto de cadernos públicos para registrar aulas, revisar conteúdos e conectar conceitos durante o semestre.

## Resultado publicado

Índice do semestre:

- https://shishiv.github.io/uemg/

Caderno de Direitos Humanos e Multiculturalismo:

- Índice: https://shishiv.github.io/uemg/direitos-humanos/
- Aula 1: https://shishiv.github.io/uemg/direitos-humanos/aulas/1/
- Aula 2: https://shishiv.github.io/uemg/direitos-humanos/aulas/2/
- Referência sobre vida e dignidade: https://shishiv.github.io/uemg/reference/vida-dignidade/

Caderno de ENADE:

- Índice: https://shishiv.github.io/uemg/enade/
- Aula 1: https://shishiv.github.io/uemg/enade/aulas/1/

## Conteúdo produzido

### Direitos Humanos: Aula 1

A aula foi construída a partir das anotações de 10/08/2026.

Eixo principal:

- reverência pela vida em Albert Schweitzer;
- vida nua e poder soberano em Giorgio Agamben;
- dignidade e direito à vida na Declaração Universal dos Direitos Humanos;
- diferença entre exigência ética e diagnóstico político.

A página inclui:

- conteúdo discutido em sala;
- fatos confirmados em fontes;
- síntese pessoal;
- exercício de recuperação;
- perguntas em aberto;
- referências acadêmicas e institucionais.

### Direitos Humanos: Aula 2

O material fotografado tinha o título “Filosofia Geral - Preconceitos segundo Voltaire”, mas foi registrado como Aula 2 de Direitos Humanos por decisão do usuário.

Eixo principal:

- preconceito como opinião sem julgamento;
- diferença entre preconceito e sentimento;
- preconceitos dos sentidos;
- preconceitos físicos;
- preconceitos históricos;
- passagem do preconceito ao exame racional;
- relação entre preconceito, dignidade e proteção institucional.

A página preserva “Filosofia Geral” como origem do material entregue em sala.

### ENADE: Aula 1

O caderno ENADE foi criado como disciplina de leitura crítica de provas.

As observações fornecidas foram organizadas em quatro camadas:

1. legibilidade;
2. linguagem;
3. correção factual;
4. pressupostos normativos.

A aula registra problemas como:

- enunciados e parágrafos excessivamente longos;
- vocabulário raro ou inadequado;
- problemas sintáticos e de concordância;
- uso discutível da expressão “idade certa”;
- registro acadêmico e ironia;
- erro cronológico sobre Sócrates;
- relação entre imagens, texto-base e argumento.

A correção sobre Sócrates foi separada das hipóteses críticas e confirmada em fonte acadêmica.

## Conexões do semestre

O índice `/uemg/` passou a mostrar conexões navegáveis entre aulas.

Conexões iniciais:

- Direitos Humanos Aula 2 e ENADE Aula 1: julgamento antes da aceitação de uma afirmação;
- Direitos Humanos Aula 1 e ENADE Aula 1: dignidade, ritmo escolar e pressupostos de políticas educacionais.

A regra adotada é não duplicar explicações. Quando um conceito reaparece, a nova aula liga para o registro anterior.

## Estrutura técnica

O repositório havia migrado de Astro para Next.js antes desta sessão. A implementação inicial usou arquivos Astro, mas foi corrigida para o stack atual.

Rotas Next.js:

```text
src/app/(pt)/uemg/page.tsx
src/app/(pt)/uemg/direitos-humanos/page.tsx
src/app/(pt)/uemg/direitos-humanos/aulas/1/page.tsx
src/app/(pt)/uemg/direitos-humanos/aulas/2/page.tsx
src/app/(pt)/uemg/enade/page.tsx
src/app/(pt)/uemg/enade/aulas/1/page.tsx
src/app/(pt)/uemg/reference/vida-dignidade/page.tsx
```

Conteúdo e configuração:

```text
src/content/uemg-lessons.ts
src/content/uemg-semester.ts
src/styles/uemg-course.css
uemg-course/MISSION.md
uemg-course/RESOURCES.md
uemg-course/NOTES.md
```

O portfólio principal ganhou um link para `/uemg/`.

## Sistema visual

A área UEMG usa modo claro e preserva a linguagem documental do portfólio:

- papel de arquivo frio;
- tinta escura;
- violeta como estrutura;
- tipografia existente do projeto;
- linhas e alinhamento no lugar de cards decorativos;
- layout responsivo;
- versão adequada para impressão;
- foco visível e links identificáveis.

## Fontes adicionadas

Entre as fontes usadas ou registradas:

- Nações Unidas;
- Maison Albert Schweitzer;
- De Gruyter;
- Internet Encyclopedia of Philosophy;
- Bibliotheca Augustana;
- Hanover College;
- Stanford Encyclopedia of Philosophy;
- INEP;
- IPHAN;
- USHMM;
- União Europeia;
- Companhia das Letras/Zahar.

O arquivo `uemg-course/RESOURCES.md` contém os links e explica quando usar cada fonte.

## Validação

Foram executados:

```text
npm run lint
npm test
npm run build
npm run check:links
git diff --check
```

Resultados finais:

- lint aprovado;
- três testes aprovados;
- build estático aprovado;
- 24 links externos responderam;
- rotas verificadas no navegador;
- páginas verificadas localmente e em produção;
- deploy do GitHub Pages aprovado.

## Publicações

Primeiro deploy da Aula 1:

- commit `4790b1b`;

Deploy da estrutura por disciplinas, Aula 2 e ENADE:

- commit `3ee75ca`.

## Estado atual

A estrutura suporta novas disciplinas e aulas por meio de:

```text
/uemg/{disciplina}/
/uemg/{disciplina}/aulas/{numero}/
```

Cada próxima aula deve:

1. registrar data, disciplina e origem do material;
2. separar observação, fato confirmado e síntese;
3. incluir exercício de recuperação;
4. manter perguntas em aberto;
5. adicionar fontes confiáveis;
6. criar ligações com aulas anteriores quando um conceito reaparecer;
7. atualizar `src/content/uemg-semester.ts` e `uemg-course/RESOURCES.md`.
