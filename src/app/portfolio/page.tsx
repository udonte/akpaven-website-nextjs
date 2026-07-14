import CaseStudyDeepDive from "@/components/portfolio/CaseStudyDeepDive";
import FilterableProjectGallery from "@/components/portfolio/FilterableProjectGallery";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Proven track record of World Bank, NEWMAP, and RAAMP infrastructure projects across Nigeria.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <FilterableProjectGallery />
      <CaseStudyDeepDive />
    </>
  );
}
