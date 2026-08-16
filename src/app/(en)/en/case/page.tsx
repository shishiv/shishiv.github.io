import type { Metadata } from "next";
import { CaseIndexPage } from "@/components/CaseIndexPage";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: `${ui.en.articlesNav} · ${ui.en.heroName}`,
  description: ui.en.caseIndexIntro,
};

export default function Cases() {
  return <CaseIndexPage locale="en" />;
}
