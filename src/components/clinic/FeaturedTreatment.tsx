import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { featuredImage, whatsappLink } from "@/lib/clinicConfig";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

const benefits = [
  t("treatments.benefits.b1"),
  t("treatments.benefits.b2"),
  t("treatments.benefits.b3"),
];

export const FeaturedTreatment: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#F3E6DF] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.03 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#F3E6DF] shadow-[0_30px_60px_-30px_rgba(48,36,43,0.3)]">
            <img
              src={featuredImage}
              alt="Rejuvenescimento facial em ambiente premium"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, x: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-4">
            {t("treatments.featured")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#30242B]">
            {t("treatments.rejuvenescimento.name")}
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-[#5c4f54] font-sans">
            {t("treatments.featrured_description")}
          </p>
          <ul className="mt-7 space-y-3">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-[15px] text-[#30242B] font-sans"
              >
                <span className="w-6 h-6 rounded-full bg-[#FFFDFC] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-[#642C4B]" strokeWidth={2.5} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink("Olá! Gostaria de saber mais sobre o Rejuvenescimento Facial.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] text-sm font-medium rounded-full px-7 py-4 transition-all duration-300 hover:shadow-[0_14px_32px_-12px_rgba(100,44,75,0.6)]"
          >
            {t("buttons.more_info")}
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedTreatment;