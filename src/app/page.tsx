import CapabilitiesHighlight from "@/components/home/CapabilitiesHighlight";
import ComplianceTeaser from "@/components/home/ComplianceTeaser";
import ExecutiveSummary from "@/components/home/ExecutiveSummary";
import Hero from "@/components/home/Hero";
import LeadConversionCtas from "@/components/home/LeadConversionCtas";
import TrustBanner from "@/components/home/TrustBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ExecutiveSummary />
      <CapabilitiesHighlight />
      <ComplianceTeaser />
      <LeadConversionCtas />
    </>
  );
}
