import type { Metadata } from "next";
import { HseCommitment } from "@/components/about/HseCommitment";
import { Timeline } from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Company history since 2003 and HSE commitment to Target Zero safety and compliance.",
};

export default function AboutPage() {
  return (
    <>
      <Timeline />
      <HseCommitment />
    </>
  );
}
