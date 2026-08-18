import type { Metadata } from "next";
import { uemgSemesterCourses } from "@/content/uemg-semester";
import "@/styles/uemg-course.css";

const course = uemgSemesterCourses[0];

export const metadata: Metadata = {
  title: "direitos humanos e multiculturalismo | caderno UEMG",
  description: "aulas, referências e conexões do caderno de Direitos Humanos e Multiculturalismo.",
};

/** Lista as aulas do caderno de Direitos Humanos. */
export default function HumanRightsNotebookPage() {
  return <div className="course-page"><main className="course-sheet notebook-index">
    <header className="course-head"><h1>{course.title}</h1><p className="course-meta">UEMG Frutal · 2026.2<br />prof. Isaar Soares Carvalho</p></header>
    <nav className="course-nav"><ul><li><a href="/uemg/">semestre</a></li><li><a href="/uemg/direitos-humanos/" aria-current="page">direitos humanos</a></li></ul></nav>
    <section className="semester-intro"><h2>o julgamento começa antes da lei.</h2><p>este caderno acompanha como vida, dignidade, cultura e preconceito atravessam a proteção de pessoas concretas.</p></section>
    <section className="course-ledger" aria-label="aulas de direitos humanos"><article><ol>{course.lessons.map((lesson) => <li key={lesson.number}><a href={lesson.href}><span>aula {lesson.number}</span><strong>{lesson.title}</strong><time>{lesson.date}</time></a></li>)}</ol></article></section>
    <footer className="course-foot"><p>{course.lessons.length} aulas registradas</p><p><a href="/uemg/">ver conexões do semestre</a></p></footer>
  </main></div>;
}
