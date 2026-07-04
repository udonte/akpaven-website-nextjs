import CapabilitiesHighlight from "@/components/home/CapabilitiesHighlight";
import ExecutiveSummary from "@/components/home/ExecutiveSummary";
import Hero from "@/components/home/Hero";
import TrustBanner from "@/components/home/TrustBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <ExecutiveSummary />
      <CapabilitiesHighlight />
    </>
  );
}
