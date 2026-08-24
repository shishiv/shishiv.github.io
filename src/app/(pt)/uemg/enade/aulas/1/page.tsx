import type { Metadata } from "next";
import "@/styles/uemg-course.css";

export const metadata: Metadata = {
  title: "aula 1 - leitura crítica de questões | caderno ENADE",
  description: "observações sobre extensão, linguagem, fatos e pressupostos em questões do ENADE.",
};

const observations = [
  ["carga de leitura", "há enunciados com parágrafos muito extensos. a extensão pode transformar compreensão do tema em teste de resistência e administração do tempo."],
  ["vocabulário", "termos raros, como “indesmentível”, acrescentam custo de decodificação e precisam justificar sua presença."],
  ["construção sintática", "formulações como “parece tendencialmente” e problemas de concordância desviam atenção do objeto avaliado."],
  ["pressuposto normativo", "a expressão “idade certa” descreve uma política de fluxo escolar, mas pode naturalizar um único ritmo de formação."],
  ["registro acadêmico", "expressões intensificadoras e ironias, como “super deletérias” ou um caranguejo “vestindo” plástico, exigem atenção ao gênero e ao efeito pretendido."],
  ["imagem e argumento", "uma pintura sobre invisibilidade da pobreza pode apoiar a leitura, mas não substitui a análise do enunciado e das alternativas."],
] as const;

/** Registra a primeira leitura crítica de questões do ENADE. */
export default function EnadeLessonOnePage() {
  return <div className="course-page"><main className="course-sheet">
    <header className="course-head"><h1>ENADE</h1><p className="course-meta">UEMG Frutal · 2026.2<br />aula 1 · observações sobre a prova</p></header>
    <nav className="course-nav"><ul><li><a href="/uemg/">semestre</a></li><li><a href="/uemg/enade/">ENADE</a></li><li><a href="/uemg/enade/aulas/1/" aria-current="page">aula 1</a></li></ul><a href="#fontes">fontes</a></nav>
    <div className="lesson-grid"><article className="lesson">
      <h2>como auditar uma questão antes de respondê-la?</h2>
      <p className="lesson-lead">uma questão avalia o estudante, mas também pode ser avaliada. clareza, precisão e correção factual fazem parte do contrato da prova.</p>
      <dl><div className="source-state"><dt>material observado</dt><dd>questões de Formação Geral do ENADE 2021, conforme notas fornecidas em aula.</dd></div><div className="source-state"><dt>confirmado na fonte</dt><dd>a Stanford Encyclopedia situa Sócrates entre 469 e 399 a.C.; portanto, a afirmação de nascimento em 400 a.C. está incorreta.</dd></div><div className="source-state"><dt>estado da revisão</dt><dd>as demais observações abaixo são hipóteses críticas; precisam ser confrontadas com o caderno oficial completo.</dd></div><div className="source-state"><dt>minha síntese</dt><dd>antes de buscar a alternativa correta, identifique o que o enunciado exige, pressupõe e talvez distorça.</dd></div></dl>
      <h3>quatro camadas da auditoria</h3>
      <ol><li><strong>legibilidade:</strong> tamanho, parágrafos, ordem e carga de informação.</li><li><strong>linguagem:</strong> vocabulário, sintaxe, concordância e registro.</li><li><strong>fatos:</strong> datas, conceitos, autoria e dados citados.</li><li><strong>pressupostos:</strong> valores apresentados como naturais ou neutros.</li></ol>
      <h3>observações registradas</h3>
      <div className="audit-list">{observations.map(([label, note]) => <section key={label}><h3>{label}</h3><p>{note}</p></section>)}</div>
      <h3>o exemplo do telefonema</h3>
      <p>o texto sobre mensagens instantâneas reúne dados, falas de especialista e interpretações em um bloco longo. a primeira tarefa é reconstruir sua arquitetura: preferência por mensagens, interrupção, exigência de resposta imediata, perda de pistas visuais e efeitos do uso excessivo.</p>
      <p>essa reconstrução não decide a resposta. ela apenas reduz o ruído para que a questão volte a medir interpretação, não localização acidental de uma frase.</p>
      <blockquote className="pull-quote">uma prova justa não precisa ser fácil. ela precisa deixar claro qual competência está exigindo.<cite>síntese desta aula, não citação do INEP</cite></blockquote>
      <h3>o que não está fechado</h3><ul><li>qual curso e qual caderno oficial contêm as questões numeradas nas notas?</li><li>a contagem de 1.012 palavras considera apenas um parágrafo ou o conjunto do texto-base?</li><li>as ironias criticadas prejudicam a precisão ou exercem uma função retórica legítima no texto original?</li><li>qual é a fonte dos percentuais sobre conclusão escolar e como ela define adequação idade-etapa?</li></ul>
      <section className="retrieval"><h3>recupere sem reler</h3><p>pegue um enunciado e marque cada problema como legibilidade, linguagem, fato ou pressuposto.</p><details><summary>mostrar o cuidado principal</summary><p>uma frase pode ocupar duas categorias. registre a evidência textual e explique por que ela interfere na competência avaliada.</p></details></section>
      <h3 id="fontes">fontes</h3><ul><li><a href="https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos/2021">INEP: provas e gabaritos do ENADE 2021</a></li><li><a href="https://www.gov.br/inep/pt-br/centrais-de-conteudo/legislacao/enade/2021">INEP: diretrizes do ENADE 2021</a></li><li><a href="https://plato.stanford.edu/entries/socrates/">Stanford Encyclopedia of Philosophy: Sócrates</a></li><li><a href="/uemg/direitos-humanos/aulas/2/">Direitos Humanos · aula 2: preconceito e julgamento</a></li></ul>
    </article><aside className="lesson-rail"><section className="rail-block"><h2>protocolo curto</h2><ol><li>separe comando e texto-base</li><li>nomeie a competência</li><li>marque ruídos</li><li>confira fatos</li><li>revele pressupostos</li><li>só então responda</li></ol></section><section className="rail-block"><h2>conexão</h2><p>Voltaire chama preconceito de opinião sem julgamento. aqui, o gesto é aplicado à autoridade da própria prova.</p></section><section className="rail-block"><h2>limite</h2><p>crítica de redação não prova, sozinha, que uma questão seja inválida. é preciso mostrar como o problema altera a interpretação ou a resposta.</p></section></aside></div>
    <footer className="course-foot"><p>ENADE · aula 1</p></footer>
  </main></div>;
}
