import type { Metadata } from "next";
import "@/styles/uemg-course.css";

export const metadata: Metadata = {
  title: "aula 2 - preconceito e julgamento | caderno UEMG",
  description: "revisão da leitura de Voltaire sobre preconceitos dos sentidos, físicos e históricos.",
};

/** Registra a segunda aula de Direitos Humanos a partir da leitura de Voltaire. */
export default function HumanRightsLessonTwoPage() {
  return <div className="course-page"><main className="course-sheet">
    <header className="course-head"><h1>direitos humanos e multiculturalismo</h1><p className="course-meta">material: Filosofia Geral<br />aula 2 · 17/08/2026<br />prof. Isaar Soares Carvalho</p></header>
    <nav className="course-nav" aria-label="caderno da disciplina"><ul><li><a href="/uemg/">semestre</a></li><li><a href="/uemg/direitos-humanos/">direitos humanos</a></li><li><a href="/uemg/direitos-humanos/aulas/2/" aria-current="page">aula 2</a></li></ul><a href="#fontes">fontes</a></nav>
    <div className="lesson-grid"><article className="lesson">
      <h2>quando o preconceito cede ao julgamento?</h2>
      <p className="lesson-lead">Voltaire define preconceito como opinião sem julgamento. o problema não é ter uma primeira impressão; é impedir que o exame posterior a corrija.</p>
      <dl>
        <div className="source-state"><dt>texto entregue</dt><dd>“Preconceitos”, verbete do <em>Dicionário filosófico</em>, publicado originalmente em 1764.</dd></div>
        <div className="source-state"><dt>discutido em sala</dt><dd>preconceitos podem nascer da educação, dos sentidos, de explicações físicas e de histórias aceitas sem exame.</dd></div>
        <div className="source-state"><dt>confirmado na fonte</dt><dd>o verbete francês de 1764 define preconceito como opinião sem julgamento e nomeia preconceitos dos sentidos, físicos e históricos.</dd></div>
        <div className="source-state"><dt>minha síntese</dt><dd>o julgamento não elimina automaticamente o preconceito, mas cria a possibilidade de revisá-lo.</dd></div>
      </dl>
      <h3>o movimento do texto</h3>
      <p>primeiro, uma opinião chega antes da capacidade de julgar. depois, experiência e raciocínio testam essa opinião. quando ela não resiste, “o preconceito cede ao julgamento”.</p>
      <div className="comparison"><section><h3>preconceito</h3><p>respeitar um hábito, uma autoridade ou uma narrativa antes de perguntar se merece crédito.</p></section><section><h3>julgamento</h3><p>examinar coerência, evidência, contexto e interesse antes de conservar a crença.</p></section></div>
      <h3>três espécies destacadas</h3>
      <ul><li><strong>dos sentidos:</strong> a aparência não entrega sozinha a estrutura do objeto.</li><li><strong>físicos:</strong> semelhança e coincidência viram causalidade sem demonstração.</li><li><strong>históricos:</strong> uma narrativa repetida ganha autoridade mesmo sem exame de sua plausibilidade.</li></ul>
      <blockquote className="pull-quote">“o preconceito é uma opinião sem julgamento.”<cite><a href="https://www.hs-augsburg.de/homes/harsch/gallica/Chronologie/18siecle/Voltaire/vol_dp64.html">Voltaire, “Préjugés”, texto francês de 1764</a></cite></blockquote>
      <h3>a ponte com a aula 1</h3>
      <p>se a proteção de uma vida depende de como ela é classificada, preconceitos não são somente erros privados. eles podem orientar quem parece digno, perigoso, civilizado ou descartável antes de qualquer exame.</p>
      <section className="retrieval"><h3>recupere sem reler</h3><p>dê um exemplo próprio de preconceito dos sentidos, físico e histórico.</p><details><summary>mostrar o critério</summary><p>o exemplo funciona quando separa aparência, causalidade não demonstrada e narrativa aceita sem verificação.</p></details></section>
      <h3 id="fontes">fontes</h3><ul><li><a href="https://www.hs-augsburg.de/homes/harsch/gallica/Chronologie/18siecle/Voltaire/vol_dp64.html">texto francês da edição de 1764</a></li><li><a href="https://history.hanover.edu/texts/voltaire/volpreju.html">tradução inglesa do verbete</a></li><li><a href="/uemg/direitos-humanos/aulas/1/">aula 1: vida, dignidade e proteção</a></li></ul>
    </article><aside className="lesson-rail"><section className="rail-block"><h2>mapa da aula</h2><ol><li>opinião antes do juízo</li><li>experiência e razão</li><li>autoridade e narrativa</li><li>preconceito como risco político</li></ol></section><section className="rail-block"><h2>conexão do semestre</h2><p><a href="/uemg/enade/aulas/1/">ENADE · aula 1</a>: examinar o próprio enunciado antes de aceitar seus pressupostos.</p></section><section className="rail-block"><h2>pergunta aberta</h2><p>quem tem condições reais de contestar um preconceito quando ele já virou regra institucional?</p></section></aside></div>
    <footer className="course-foot"><p>aula 2 · 17/08/2026</p></footer>
  </main></div>;
}
