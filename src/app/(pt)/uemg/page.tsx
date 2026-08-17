import type { Metadata } from "next";
import { uemgLessonOneHtml } from "@/content/uemg-lessons";
import "@/styles/uemg-course.css";

export const metadata: Metadata = {
  title: "aula 1 - vida digna, vida exposta | caderno UEMG",
  description:
    "revisão da primeira aula de Direitos Humanos e Multiculturalismo na UEMG Frutal: Schweitzer, Agamben e a dignidade como problema político.",
  alternates: { canonical: "/uemg/" },
};

/** Renderiza a primeira aula do caderno público da UEMG. */
export default function UemgLessonOnePage() {
  return <div className="course-page" dangerouslySetInnerHTML={{ __html: uemgLessonOneHtml }} />;
}
