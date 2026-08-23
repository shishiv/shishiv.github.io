/** Conteúdo estático e revisado do caderno público da UEMG. */
export const uemgLessonOneHtml = `
<!--
      THESIS: o caderno preserva a diferença entre o que a aula sugeriu, o que a fonte confirma e o que ainda é pergunta. recusa o resumo que transforma tudo em certeza.
      OWN-WORLD: papel de arquivo frio, tinta preta e violeta estrutural. mono mede, serifa interpreta, condensada nomeia.
      STORY: o leitor recupera a pergunta central, compara Schweitzer e Agamben, testa a própria lembrança e abre as fontes.
      FIRST VIEWPORT: tarja violeta identifica disciplina e aula; abaixo, a tese ocupa a coluna principal e o índice futuro aparece como margem de caderno.
      FORM: caderno acadêmico dentro da linha de custódia do portfólio. extensão direta do sistema existente, sem nova identidade.
      FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
    -->
    <main class="course-sheet">
      <header class="course-head">
        <h1>direitos humanos e multiculturalismo</h1>
        <p class="course-meta">
          UEMG Frutal · sistemas de informação<br />
          aula 1 · 10/08/2026<br />
          prof. Isaar Soares Carvalho
        </p>
      </header>

      <nav class="course-nav" aria-label="caderno da disciplina">
        <ul>
          <li><a href="/" aria-label="voltar ao portfólio">myke matos</a></li>
          <li><a href="/uemg/">semestre</a></li>
          <li><a href="/uemg/direitos-humanos/">direitos humanos</a></li>
          <li><a href="/uemg/direitos-humanos/aulas/1/" aria-current="page">aula 1</a></li>
          <li><a href="/uemg/reference/vida-dignidade/">referência rápida</a></li>
        </ul>
        <a href="#fontes">fontes</a>
      </nav>

      <div class="lesson-grid">
        <article class="lesson" aria-labelledby="lesson-title">
          <h2 id="lesson-title">quando uma vida deixa de contar?</h2>
          <p class="lesson-lead">
            a aula começou antes da lei. a pergunta não foi só quais direitos existem, mas o que impede uma pessoa de ser tratada como coisa.
          </p>

          <dl aria-label="estado das anotações">
            <div class="source-state">
              <dt>discutido em sala</dt>
              <dd>reverência pela vida, vida nua e o contraste entre ética e poder.</dd>
            </div>
            <div class="source-state">
              <dt>confirmado</dt>
              <dd>Schweitzer rejeita uma escala objetiva de valor entre vidas; Agamben estuda a vida exposta ao poder soberano.</dd>
            </div>
            <div class="source-state">
              <dt>minha síntese</dt>
              <dd>direitos humanos começam quando a proteção deixa de depender da utilidade, do documento ou da aceitação social de alguém.</dd>
            </div>
          </dl>

          <h3>duas lentes para a mesma pergunta</h3>
          <div class="comparison">
            <section aria-labelledby="schweitzer-title">
              <h3 id="schweitzer-title">Schweitzer: uma exigência ética</h3>
              <p>
                a reverência pela vida pede ação em favor dos seres vivos. ela rejeita a ideia de que algumas vidas têm valor intrínseco maior do que outras.
              </p>
              <p>
                a pergunta que ela faz é: <strong>como devo agir diante de uma vida?</strong>
              </p>
            </section>
            <section aria-labelledby="agamben-title">
              <h3 id="agamben-title">Agamben: um diagnóstico político</h3>
              <p>
                a vida nua não é apenas vida biológica. é vida produzida politicamente quando a lei inclui alguém por meio do abandono e o expõe à violência soberana.
              </p>
              <p>
                a pergunta que ela faz é: <strong>quem pode ser deixado fora da proteção?</strong>
              </p>
            </section>
          </div>

          <p>
            as duas ideias não são equivalentes. Schweitzer formula um dever. Agamben descreve um mecanismo de poder. juntas, elas deixam uma tensão útil para a disciplina: a ética pode afirmar que toda vida merece consideração, enquanto instituições ainda distribuem proteção de forma desigual.
          </p>

          <blockquote class="pull-quote">
            “todos os seres humanos nascem livres e iguais em dignidade e direitos.”
            <cite>
              <a href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" rel="noopener">Declaração Universal dos Direitos Humanos, artigo 1</a>
            </cite>
          </blockquote>

          <h3>a ponte com direitos humanos</h3>
          <p>
            a Declaração Universal junta duas afirmações. o artigo 1 fala de dignidade igual. o artigo 3 fala de vida, liberdade e segurança. a palavra decisiva é <em>igual</em>: o direito não deveria depender de cidadania ideal, produtividade, raça, religião ou proximidade com quem governa.
          </p>
          <p>
            isso também mostra o limite de uma revisão puramente jurídica. uma norma pode declarar igualdade, mas ainda precisamos observar quem recebe proteção real. esse deslocamento, do texto para a condição concreta de uma vida, foi o fio mais forte desta aula.
          </p>

          <section class="retrieval" aria-labelledby="retrieval-title">
            <h3 id="retrieval-title">recupere sem reler</h3>
            <p>feche os olhos e formule a diferença entre reverência pela vida e vida nua em duas frases.</p>
            <details>
              <summary>mostrar uma resposta possível</summary>
              <p>
                reverência pela vida é uma orientação ética para preservar e promover a vida. vida nua é a condição política de uma vida exposta ao poder e enfraquecida em sua proteção jurídica.
              </p>
            </details>
          </section>

          <h3>o que ficou em aberto</h3>
          <ul>
            <li>uma declaração universal basta quando o Estado decide quem recebe proteção concreta?</li>
            <li>como respeitar diferenças culturais sem aceitar práticas que violam dignidade?</li>
            <li>quando patrimônio e cultura transformam pessoas em parte da paisagem, em vez de sujeitos da cidade?</li>
          </ul>

          <h3 id="fontes">fontes para continuar</h3>
          <ul>
            <li>
              <a href="https://www.schweitzer.org/en/discover/the-philosophy-of-reverence-for-life/" rel="noopener">Maison Albert Schweitzer: reverence for life</a>
              - arquivo institucional com textos e contexto da formulação ética.
            </li>
            <li>
              <a href="https://www.degruyter.com/document/doi/10.1515/9780804764025/html" rel="noopener">De Gruyter: <em>Homo Sacer</em></a>
              - página acadêmica da obra de Agamben.
            </li>
            <li>
              <a href="https://iep.utm.edu/agamben/" rel="noopener">Internet Encyclopedia of Philosophy: Giorgio Agamben</a>
              - leitura de apoio para a distinção entre vida natural, vida política e vida nua.
            </li>
            <li>
              <a href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" rel="noopener">Nações Unidas: Declaração Universal dos Direitos Humanos</a>
              - texto integral, especialmente o preâmbulo e os artigos 1 e 3.
            </li>
          </ul>
        </article>

        <aside class="lesson-rail" aria-label="índice e notas da disciplina">
          <section class="rail-block">
            <h2>mapa da aula</h2>
            <ol>
              <li>vida como exigência ética</li>
              <li>vida como objeto do poder</li>
              <li>dignidade como regra universal</li>
              <li>proteção como problema concreto</li>
            </ol>
          </section>

          <section class="rail-block">
            <h2>próximas entradas</h2>
            <ul class="upcoming">
              <li>
                cultura e fraternidade
                <small>Beethoven, Bernstein, Salvador</small>
              </li>
              <li>
                antissemitismo como história
                <small>Poliakov, religião, raça, Estado</small>
              </li>
              <li>
                por que existe Estado
                <small>Hobbes, Locke, Rousseau</small>
              </li>
              <li>
                cultura, o conceito
                <small>Laraia e a diferença aprendida</small>
              </li>
            </ul>
          </section>

          <section class="rail-block">
            <h2>trilhas já abertas</h2>
            <ul>
              <li><a href="https://european-union.europa.eu/principles-countries-history/symbols/european-anthem_en" rel="noopener">a Nona como hino europeu</a></li>
              <li><a href="https://www.gov.br/iphan/pt-br/superintendencias/bahia/patrimonio-material" rel="noopener">patrimônio material de Salvador no IPHAN</a></li>
              <li><a href="https://www.ushmm.org/antisemitism/what-is-antisemitism/why-the-jews-history-of-antisemitism" rel="noopener">história do antissemitismo no USHMM</a></li>
              <li><a href="https://plato.stanford.edu/entries/political-obligation/" rel="noopener">Hobbes e Locke na SEP</a></li>
              <li><a href="https://www.companhiadasletras.com.br/livro/9788571104389/cultura-um-conceito-antropologico" rel="noopener">Laraia na editora Zahar</a></li>
            </ul>
          </section>

          <section class="rail-block">
            <h2>nota de método</h2>
            <p>
              este caderno separa fato confirmado, discussão em sala e interpretação própria. quando uma formulação ainda depende do professor, ela fica como pergunta.
            </p>
          </section>
        </aside>
      </div>

      <footer class="course-foot">
        <p>aula 1 · 10/08/2026</p>
      </footer>
    </main>
`;

export const uemgLifeDignityReferenceHtml = `
<main class="course-sheet">
      <header class="course-head">
        <h1>vida, dignidade e proteção</h1>
        <p class="course-meta">referência rápida<br />aula 1 · UEMG Frutal</p>
      </header>

      <nav class="course-nav" aria-label="navegação da referência">
        <ul>
          <li><a href="/uemg/direitos-humanos/aulas/1/">voltar à aula 1</a></li>
          <li><a href="#glossario">glossário</a></li>
        </ul>
        <a href="#fontes">fontes</a>
      </nav>

      <div class="lesson-grid">
        <article class="lesson" aria-labelledby="reference-title">
          <h2 id="reference-title">o mapa em uma página</h2>
          <p class="lesson-lead">
            use esta folha para recuperar termos. volte à aula para a explicação e para o exercício de memória.
          </p>

          <h3 id="glossario">glossário mínimo</h3>
          <dl aria-label="glossário da aula 1">
            <div class="source-state">
              <dt>reverência pela vida</dt>
              <dd>ética de Schweitzer que amplia a consideração moral a todo ser vivo e rejeita hierarquias objetivas entre vidas.</dd>
            </div>
            <div class="source-state">
              <dt>vida nua</dt>
              <dd>em Agamben, vida politicamente produzida como exposição ao poder soberano. não é simples sinônimo de vida biológica.</dd>
            </div>
            <div class="source-state">
              <dt>homo sacer</dt>
              <dd>figura do direito romano usada por Agamben para pensar quem pode ser morto, mas não sacrificado.</dd>
            </div>
            <div class="source-state">
              <dt>dignidade</dt>
              <dd>valor reconhecido como inerente e igual a todos os membros da família humana no preâmbulo da Declaração Universal.</dd>
            </div>
            <div class="source-state">
              <dt>poder soberano</dt>
              <dd>poder que decide sobre a aplicação da regra e sobre a exceção. em Agamben, essa decisão alcança a própria vida.</dd>
            </div>
          </dl>

          <h3>algoritmo de leitura</h3>
          <ol>
            <li>identifique qual vida está em questão.</li>
            <li>pergunte quem reconhece essa vida como digna.</li>
            <li>localize a regra que deveria protegê-la.</li>
            <li>observe quem decide aplicar ou suspender essa proteção.</li>
            <li>compare a proteção escrita com a proteção concreta.</li>
          </ol>

          <h3>não confundir</h3>
          <ul>
            <li><strong>vida nua</strong> não significa pobreza, nudez física ou mera vulnerabilidade.</li>
            <li><strong>reverência pela vida</strong> não resolve sozinha conflitos práticos entre vidas.</li>
            <li><strong>dignidade universal</strong> é uma norma; sua realização depende de instituições e práticas.</li>
          </ul>

          <h3 id="fontes">fontes-base</h3>
          <ul>
            <li><a href="https://www.schweitzer.org/en/discover/the-philosophy-of-reverence-for-life/" rel="noopener">Maison Albert Schweitzer</a></li>
            <li><a href="https://www.degruyter.com/document/doi/10.1515/9780804764025/html" rel="noopener">De Gruyter, <em>Homo Sacer</em></a></li>
            <li><a href="https://iep.utm.edu/agamben/" rel="noopener">Internet Encyclopedia of Philosophy, Agamben</a></li>
            <li><a href="https://www.un.org/en/about-us/universal-declaration-of-human-rights" rel="noopener">Declaração Universal dos Direitos Humanos</a></li>
          </ul>
        </article>

        <aside class="lesson-rail" aria-label="uso da folha">
          <section class="rail-block">
            <h2>pergunta-mestra</h2>
            <p>quando uma vida deixa de contar para quem tem poder de protegê-la?</p>
          </section>
          <section class="rail-block">
            <h2>em dez segundos</h2>
            <p>Schweitzer prescreve consideração. Agamben diagnostica abandono. a Declaração afirma dignidade igual.</p>
          </section>
          <section class="rail-block">
            <h2>revisão espaçada</h2>
            <p>tente reconstruir o algoritmo amanhã sem olhar. depois, aplique-o a um caso discutido em sala.</p>
          </section>
        </aside>
      </div>

      <footer class="course-foot">
        <p>referência 0001 · vida, dignidade e proteção</p>
      </footer>
    </main>
`;
