import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import { doctors } from "@/lib/clinicConfig";
import { SectionHeader } from "./SectionHeader";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

export const Experts: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section id="especialistas" className="bg-[#FAF5F0] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          align="center"
          eyebrow={t("menu.especialistas")}
          title={
            <>
              {t("doctors.title")}{" "}
              <span className="italic text-[#642C4B]">{t("doctors.title_2")}</span>
            </>
          }
          description={t("doctors.description")}
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <motion.article
              key={d.id}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="relative mx-auto w-full max-w-[300px] aspect-[3/4] rounded-[1.75rem] overflow-hidden bg-[#F3E6DF] mb-6">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <h3 className="font-serif text-xl text-[#30242B]">{d.name}</h3>
              <p className="mt-1 text-sm font-sans font-medium text-[#642C4B]">
                {d.title}
              </p>
              <p className="mt-1 text-[13px] text-[#5c4f54] font-sans">
                {d.specialty}
              </p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-[#B08A45]">
                {d.experience}
              </p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a
                  href="#"
                  aria-label={`Instagram de ${d.name}`}
                  className="w-8 h-8 rounded-full border border-[#E0D4C8] flex items-center justify-center text-[#5c4f54] hover:border-[#642C4B] hover:text-[#642C4B] transition-colors"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  aria-label={`LinkedIn de ${d.name}`}
                  className="w-8 h-8 rounded-full border border-[#E0D4C8] flex items-center justify-center text-[#5c4f54] hover:border-[#642C4B] hover:text-[#642C4B] transition-colors"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;