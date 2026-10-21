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
      className="relative w-full min-h-[calc(100vh-80px)] py-10 md:py-12 overflow-hidden bg-[#FAF5F0]"
    >
      {/* Curva decorativa */}
      <svg
        className="absolute -right-20 top-32 w-[420px] h-[420px] text-[#E8DED4] hidden md:block pointer-events-none"
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

      {/* Container com largura total */}
      <div className="relative z-10 w-full max-w-none mx-0 px-5 sm:px-8 lg:px-[7%] xl:px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

        {/* Conteúdo textual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full min-w-0"
        >
          <span className="inline-block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-5">
            {t("clinic.tagline")} • {t("clinic.tagline_2")}
          </span>

          <h1 className="font-serif text-[2.3rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] leading-[1.05] tracking-tight text-[#30242B]">
            {t("hero.title")}
            <br />
            <span className="italic text-[#642C4B]">
              {t("hero.title2")}
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed text-[#5c4f54] font-sans">
            {t("hero.subtitle")}
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
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

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trust.map((item, index) => (
              <li
                key={`${item}-${index}`}
                className="flex items-center gap-2 text-[13px] text-[#5c4f54] font-sans"
              >
                <Check
                  className="w-4 h-4 shrink-0 text-[#B08A45]"
                  strokeWidth={2.2}
                />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Imagem ampliada */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 15 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
          className="relative w-full min-w-0 flex justify-center items-center"
        >
          <div className="relative w-full max-w-[620px] aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#F3E6DF]">
            <img
              src={heroImage}
              alt="Mulher elegante com pele natural e radiante em ambiente premium"
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>

          {/* Cartão decorativo inferior */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden md:block bg-[#FFFDFC] rounded-2xl shadow-[0_20px_50px_-20px_rgba(48,36,43,0.25)] px-6 py-3 border border-[#E8DED4]">
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
