import React, { useEffect } from "react";
import { Header } from "@/components/clinic/Header";
import { Hero } from "@/components/clinic/Hero";
import { TrustBar } from "@/components/clinic/TrustBar";
import { About } from "@/components/clinic/About";
import { Treatments } from "@/components/clinic/Treatments";
import { FeaturedTreatment } from "@/components/clinic/FeaturedTreatment";
import { Results } from "@/components/clinic/Results";
import { Experts } from "@/components/clinic/Experts";
import { Journey } from "@/components/clinic/Journey";
import { Testimonials } from "@/components/clinic/Testimonials";
import { SocialProof } from "@/components/clinic/SocialProof";
import { Booking } from "@/components/clinic/Booking";
import { Location } from "@/components/clinic/Location";
import { Footer } from "@/components/clinic/Footer";
import { FloatingWhatsApp } from "@/components/clinic/FloatingWhatsApp";
import { clinic } from "@/lib/clinicConfig";
import { t } from "i18next";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: `${clinic.name} · ${t("clinic.tagline")}`,
  description:
    "Clínica de estética avançada. Tratamentos personalizados, tecnologia de ponta e profissionais especializados.",
  telephone: clinic.phone,
  email: clinic.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua das Camélias, 120 — Jardins",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: clinic.googleRating.score,
    reviewCount: clinic.googleRating.count,
  },
};

export default function Home() {
  useEffect(() => {
    // smooth-scroll for anchor links
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Treatments />
        <FeaturedTreatment />
        <Results />
        <Experts />
        <Journey />
        <Testimonials />
        <SocialProof />
        <Booking />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}