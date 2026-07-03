import type { Metadata } from "next";
import { TenderForm } from "@/components/contact/TenderForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Submit tender inquiries and connect with Akpaven offices in Lagos and Port Harcourt.",
};

export default function ContactPage() {
  return <TenderForm />;
}
