import type { Metadata } from "next";
import { FounderProfilePage } from "@/components/FounderProfilePage";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: `${ui.en.articlesNav} · ${ui.en.heroName}`,
  description: ui.en.caseIndexIntro,
};

export default function Cases() {
  return <FounderProfilePage locale="en" initialSection="articles" />;
}
