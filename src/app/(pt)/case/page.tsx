import type { Metadata } from "next";
import { CaseIndexPage } from "@/components/CaseIndexPage";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: `${ui.pt.articlesNav} · ${ui.pt.heroName}`,
  description: ui.pt.caseIndexIntro,
};

export default function Cases() {
  return <CaseIndexPage locale="pt" />;
}
