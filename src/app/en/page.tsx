import type { Metadata } from "next";
import { FounderProfilePage } from "@/components/FounderProfilePage";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: ui.en.title,
  description: ui.en.description,
};

export default function EnPage() {
  return <FounderProfilePage locale="en" />;
}
