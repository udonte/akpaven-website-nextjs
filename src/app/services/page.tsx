import type { Metadata } from "next";
import { CapabilitiesGrid } from "@/components/services/CapabilitiesGrid";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Core EPCI capabilities: civil engineering, environmental management, mechanical construction, and electrical instrumentation.",
};

export default function ServicesPage() {
  return <CapabilitiesGrid />;
}
