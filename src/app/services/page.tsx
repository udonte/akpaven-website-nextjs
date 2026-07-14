import type { Metadata } from "next";
import CapabilitiesHero from "@/components/services/CapabilitiesHero";
import InteractiveTabbedMatrix from "@/components/services/InteractiveTabbedMatrix";
import ProcurementShowcase from "@/components/services/ProcurementShowcase";
import SeoFaqCollapse from "@/components/services/SeoFaqCollapse";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Core EPCI capabilities: civil engineering, environmental management, mechanical construction, and electrical instrumentation.",
};

export default function ServicesPage() {
  return (
    <>
      <CapabilitiesHero />
      <InteractiveTabbedMatrix />
      <ProcurementShowcase />
      <SeoFaqCollapse />
    </>
  );
}
