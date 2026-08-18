import type { Metadata } from "next";
import { uemgSemesterCourses } from "@/content/uemg-semester";
import "@/styles/uemg-course.css";

const course = uemgSemesterCourses[1];

export const metadata: Metadata = {
  title: "ENADE | caderno UEMG",
  description: "leituras críticas de questões, linguagem e pressupostos do ENADE.",
};

/** Lista as aulas do caderno de leitura crítica do ENADE. */
export default function EnadeNotebookPage() {
  return <div className="course-page"><main className="course-sheet notebook-index">
    <header className="course-head"><h1>{course.title}</h1><p className="course-meta">UEMG Frutal · 2026.2<br />leitura crítica da prova</p></header>
    <nav className="course-nav"><ul><li><a href="/uemg/">semestre</a></li><li><a href="/uemg/enade/" aria-current="page">ENADE</a></li></ul></nav>
    <section className="semester-intro"><h2>antes da resposta, examine a pergunta.</h2><p>este caderno separa dificuldade legítima, ruído textual, erro factual e pressuposto discutível.</p></section>
    <section className="course-ledger" aria-label="aulas de ENADE"><article><ol>{course.lessons.map((lesson) => <li key={lesson.number}><a href={lesson.href}><span>aula {lesson.number}</span><strong>{lesson.title}</strong><time>{lesson.date}</time></a></li>)}</ol></article></section>
    <footer className="course-foot"><p>{course.lessons.length} aula registrada</p><p><a href="/uemg/">ver conexões do semestre</a></p></footer>
  </main></div>;
}
