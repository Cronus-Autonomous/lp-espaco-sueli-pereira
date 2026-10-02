import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { aboutImage } from "@/lib/clinicConfig";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useTranslation } from "react-i18next";
import { t } from "i18next";

const checklist = [
  t("sobre.checklist_1") || "Protocolos individualizados",
  t("sobre.checklist_2") || "Tecnologia de última geração",
  t("sobre.checklist_3") || "Acompanhamento especializado",
];

export const About: React.FC = () => {
  const reduce = useReducedMotion();
  const { t } = useTranslation();

  return (
    <section id="sobre" className="bg-[#FAF5F0] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -28 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#F3E6DF]">
            <img
              src={aboutImage}
              alt="Interior sofisticado da clínica Veloura"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -top-6 -right-2 md:right-6 bg-[#642C4B] text-[#FFFDFC] rounded-full w-36 h-36 md:w-44 md:h-44 flex flex-col items-center justify-center text-center px-4 shadow-[0_24px_50px_-20px_rgba(100,44,75,0.5)]">
            <span className="font-serif text-sm md:text-base leading-tight italic">
              {t("sobre.pele")}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] my-1 text-[#D9C9A8]">
              {t("sobre.expertise")}
            </span>
            <span className="font-serif text-sm md:text-base leading-tight italic">
              {t("sobre.confianca")}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="order-1 lg:order-2"
        >
          <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-4">
            {t("sobre.title")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#30242B]">
            {t("sobre.subtitle")}
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#5c4f54] font-sans">
            {t("sobre.description")}
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {checklist.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 text-[15px] text-[#30242B] font-sans"
              >
                <span className="w-6 h-6 rounded-full bg-[#F3E6DF] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#642C4B]" strokeWidth={2.5} />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <a
            href="#tratamentos"
            className="mt-9 inline-flex items-center gap-2 text-sm font-sans font-medium text-[#642C4B] hover:gap-3 transition-all duration-300"
          >
            {t("sobre.nossa_clinica")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;