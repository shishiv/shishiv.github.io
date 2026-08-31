import type { Metadata } from "next";
import { FounderProfilePage } from "@/components/FounderProfilePage";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: `${ui.pt.articlesNav} · ${ui.pt.heroName}`,
  description: ui.pt.caseIndexIntro,
};

export default function Cases() {
  return <FounderProfilePage locale="pt" initialSection="articles" />;
}
