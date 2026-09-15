import type { Metadata } from "next";
import { AreasOfPractice } from "@/components/areas-of-practice";
import { CtaBanner } from "@/components/cta-banner";
import { practiceSection } from "@/lib/site";

export const metadata: Metadata = {
  title: "Practice Areas",
  description: practiceSection.intro,
};

export default function PracticeAreasPage() {
  return (
    <>
      <AreasOfPractice headingAs="h1" />
      <CtaBanner />
    </>
  );
}
