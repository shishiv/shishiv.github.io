import type { Metadata } from "next";
import { uemgSemesterConnections, uemgSemesterCourses } from "@/content/uemg-semester";
import "@/styles/uemg-course.css";

export const metadata: Metadata = {
  title: "cadernos do semestre | UEMG",
  description: "índice dos cadernos, aulas e conexões do semestre de Myke Matos na UEMG Frutal.",
  alternates: { canonical: "/uemg/" },
};

/** Organiza disciplinas, aulas e conexões do semestre. */
export default function UemgSemesterIndexPage() {
  return (
    <div className="course-page">
      <main className="course-sheet semester-sheet">
        <header className="course-head">
          <h1>cadernos do semestre</h1>
          <p className="course-meta">UEMG Frutal · 2026.2<br />journal de aulas, referências e conexões</p>
        </header>
        <nav className="course-nav" aria-label="navegação do semestre">
          <ul><li><a href="/">myke matos</a></li><li><a href="/uemg/" aria-current="page">semestre</a></li></ul>
        </nav>
        <section className="semester-intro" aria-labelledby="semester-title">
          <h2 id="semester-title">uma disciplina não termina na própria sala.</h2>
          <p>cada aula vira registro. conceitos que reaparecem em outra matéria ganham ligação, não uma explicação duplicada.</p>
        </section>
        <section className="course-ledger" aria-label="disciplinas do semestre">
          {uemgSemesterCourses.map((course) => (
            <article key={course.slug}>
              <header><h2><a href={`/uemg/${course.slug}/`}>{course.title}</a></h2><p>{course.summary}</p></header>
              <ol>
                {course.lessons.map((lesson) => (
                  <li key={lesson.number}>
                    <a href={lesson.href}><span>aula {lesson.number}</span><strong>{lesson.title}</strong><time>{lesson.date}</time></a>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </section>
        <section className="connection-ledger" aria-labelledby="connections-title">
          <h2 id="connections-title">conexões do semestre</h2>
          {uemgSemesterConnections.map((connection) => (
            <article key={connection.label}><span>{connection.label}</span><p><a href={connection.from.href}><strong>{connection.from.label}</strong></a> ↔ <a href={connection.to.href}><strong>{connection.to.label}</strong></a></p><p>{connection.note}</p></article>
          ))}
        </section>
        <footer className="course-foot"><p>o índice cresce aula por aula.</p><p>fontes e dúvidas ficam junto de cada registro.</p></footer>
      </main>
    </div>
  );
}
