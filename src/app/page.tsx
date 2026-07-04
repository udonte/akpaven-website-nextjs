import CapabilitiesHighlight from "@/components/home/CapabilitiesHighlight";
import ComplianceTeaser from "@/components/home/ComplianceTeaser";
import ExecutiveSummary from "@/components/home/ExecutiveSummary";
import Hero from "@/components/home/Hero";
import LeadConversionCtas from "@/components/home/LeadConversionCtas";
import ShowcaseImage from "@/components/home/ShowcaseImage";
import TrustBanner from "@/components/home/TrustBanner";

export default function HomePage() {
  const singleMockData = [
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070",
      alt: "Okop Nko-Okop Ndua Road Construction site in Akwa Ibom",
      title: "RAAMP Rural Network Corridor",
      subtitle:
        "Connecting agricultural corridors through optimized road and drainage infrastructure lines in Akwa Ibom State.",
      meta: "Civil Operations • Active",
    },
  ];
  return (
    <>
      <Hero />
      <TrustBanner />
      <ExecutiveSummary />
      <CapabilitiesHighlight />
      <ComplianceTeaser />
      <ShowcaseImage layout="single" images={singleMockData} />
      <LeadConversionCtas />
    </>
  );
}
