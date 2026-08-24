import type { Metadata } from "next";
import { uemgSemesterCourses } from "@/content/uemg-semester";
import "@/styles/uemg-course.css";

export const metadata: Metadata = {
  title: "cadernos do semestre | UEMG",
  description: "índice dos cadernos, aulas e conexões do semestre de Myke Matos na UEMG Frutal.",
  alternates: { canonical: "/uemg/" },
};

/** Índice dos cadernos do semestre. */
export default function UemgSemesterIndexPage() {
  return (
    <div className="course-page">
      <main className="course-sheet">
        <header className="course-head">
          <h1>cadernos do semestre</h1>
          <p className="course-meta">UEMG Frutal · 2026.2</p>
        </header>
        <nav className="course-nav" aria-label="navegação do semestre">
          <ul><li><a href="/">myke matos</a></li><li><a href="/uemg/" aria-current="page">semestre</a></li></ul>
        </nav>
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
      </main>
    </div>
  );
}
