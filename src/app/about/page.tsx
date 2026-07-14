import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import InteractiveTimeline from "@/components/about/InteractiveTimeline";
import HseTargetZero from "@/components/about/HseTargetZero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Company history since 2003 and HSE commitment to Target Zero safety and compliance.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <InteractiveTimeline />
      <HseTargetZero />
    </>
  );
}
