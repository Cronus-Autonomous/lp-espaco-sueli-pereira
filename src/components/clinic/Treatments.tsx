import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { treatments, whatsappLink } from "@/lib/clinicConfig";
import { SectionHeader } from "./SectionHeader";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

export const Treatments: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section id="tratamentos" className="bg-[#FFFDFC] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          eyebrow={t("treatments.nossos_tratamentos")}
          title={
            <>
              {t("treatments.title")}{" "}
              <span className="italic text-[#642C4B]">{t("treatments.title_2")}</span>
            </>
          }
          description={t("treatments.description")}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((tt, i) => (
            <motion.article
              key={tt.id}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col rounded-2xl border border-[#E8DED4] bg-[#FFFDFC] overflow-hidden hover:shadow-[0_24px_50px_-24px_rgba(48,36,43,0.25)] hover:border-[#D9C9A8] transition-all duration-300"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#F3E6DF]">
                <img
                  src={tt.image}
                  alt={tt.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.22em] text-[#B08A45] mb-2">
                  {tt.category}
                </span>
                <h3 className="font-serif text-xl text-[#30242B] leading-snug">
                  {tt.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5c4f54] font-sans flex-1">
                  {tt.description}
                </p>
                <a
                  href={whatsappLink(`Olá! Gostaria de saber mais sobre ${tt.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] font-sans font-medium text-[#642C4B] group-hover:gap-3 transition-all duration-300"
                >
                  {t("buttons.treatments")}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Treatments;