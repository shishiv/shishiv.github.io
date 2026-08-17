import type { Metadata } from "next";
import { uemgLifeDignityReferenceHtml } from "@/content/uemg-lessons";
import "@/styles/uemg-course.css";

export const metadata: Metadata = {
  title: "referência rápida - vida, dignidade e proteção",
  description: "folha de referência da aula 1 de Direitos Humanos e Multiculturalismo.",
};

/** Renderiza a referência rápida sobre vida, dignidade e proteção. */
export default function UemgLifeDignityReferencePage() {
  return <div className="course-page" dangerouslySetInnerHTML={{ __html: uemgLifeDignityReferenceHtml }} />;
}
