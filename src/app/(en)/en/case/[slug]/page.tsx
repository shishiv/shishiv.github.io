import { CaseJourneyPage } from "@/components/CaseJourneyPage";
import { portfolioCases } from "@/data/cases";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return portfolioCases.map(({ slug }) => ({ slug }));
}

export default async function CaseJourneyRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!portfolioCases.some((item) => item.slug === slug)) notFound();
  return <CaseJourneyPage locale="en" slug={slug as (typeof portfolioCases)[number]["slug"]} />;
}
