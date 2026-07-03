import type { Metadata } from "next";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Proven track record of World Bank, NEWMAP, and RAAMP infrastructure projects across Nigeria.",
};

export default function PortfolioPage() {
  return <ProjectGallery />;
}
