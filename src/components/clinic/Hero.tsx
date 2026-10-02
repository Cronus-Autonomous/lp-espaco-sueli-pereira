import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { whatsappLink, heroImage } from "@/lib/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useTranslation } from "react-i18next";

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const trust = [
    t("clinic.tagline_2"),
    t("hero.profissionais"),
    t("hero.tecnologia"),
  ];
  return (
    <section
      id="inicio"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-[#FAF5F0]"
    >
      {/* subtle decorative curve */}
      <svg
        className="absolute -right-20 top-40 w-[420px] h-[420px] text-[#E8DED4] hidden md:block"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M40 160 C 40 60, 140 60, 160 120"
          stroke="currentColor"
          strokeWidth="0.6"
          className="opacity-60"
        />
      </svg>

      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-6">
            {t("clinic.tagline")} • {t("clinic.tagline_2")}
          </span>
          <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.6rem] leading-[1.05] tracking-tight text-[#30242B]">
            {t("hero.title")}
            <br />
            <span className="italic text-[#642C4B]">
              {t("hero.title2")}
            </span>
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-[#5c4f54] font-sans">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] text-sm font-medium rounded-full px-7 py-4 transition-all duration-300 hover:shadow-[0_14px_32px_-12px_rgba(100,44,75,0.6)]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t("buttons.schedule")}
            </a>
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center gap-2 border border-[#E0D4C8] hover:border-[#642C4B] text-[#30242B] hover:text-[#642C4B] text-sm font-medium rounded-full px-7 py-4 transition-all duration-300"
            >
              {t("buttons.treatments")}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <ul className="mt-9 flex flex-col sm:flex-row gap-x-6 gap-y-2">
            {trust.map((t) => (
              <li
                key={t}
                className="flex items-center gap-2 text-[13px] text-[#5c4f54] font-sans"
              >
                <Check className="w-4 h-4 text-[#B08A45]" strokeWidth={2.2} />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={reduce ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[16/13] rounded-[2rem] overflow-hidden bg-[#F3E6DF]">
            <img
              src={heroImage}
              alt="Mulher elegante com pele natural e radiante em ambiente premium"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden md:block bg-[#FFFDFC] rounded-2xl shadow-[0_20px_50px_-20px_rgba(48,36,43,0.25)] px-6 py-4 border border-[#E8DED4]">
            <p className="font-serif text-2xl text-[#642C4B]">4.9 ★</p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#5c4f54] mt-1">
              {t("testimonials.source")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;