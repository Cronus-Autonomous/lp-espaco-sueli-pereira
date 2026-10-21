import React from "react";
import { motion } from "framer-motion";
import { doctors } from "@/lib/clinicConfig";
import { SectionHeader } from "./SectionHeader";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

export const Experts: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section
      id="especialistas"
      className="bg-[#FAF5F0] py-20 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <SectionHeader
          align="center"
          eyebrow={t("menu.especialistas")}
          title={
            <>
              {t("doctors.title")}{" "}
              <span className="italic text-[#642C4B]">
                {t("doctors.title_2")}
              </span>
            </>
          }
          description={t("doctors.description")}
        />

        {/* Card centralizado abaixo do título */}
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {doctors.map((d, i) => (
            <motion.article
              key={d.id}
              initial={
                reduce ? false : { opacity: 0, y: 28 }
              }
              whileInView={
                reduce ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{
                once: true,
                margin: "-60px",
              }}
              transition={{
                duration: 0.55,
                delay: i * 0.1,
              }}
              className="group w-full max-w-[300px] text-center"
            >
              <div className="relative mx-auto w-full aspect-[3/4] rounded-[1.75rem] overflow-hidden bg-[#F3E6DF] mb-6">
                <img
                  src={d.image}
                  alt={d.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              <h3 className="font-serif text-xl text-[#30242B]">
                {d.name}
              </h3>

              <p className="mt-1 text-sm font-sans font-medium text-[#642C4B]">
                {d.title}
              </p>

              <p className="mt-1 text-[13px] text-[#5c4f54] font-sans">
                {d.specialty}
              </p>

              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-[#B08A45]">
                {d.experience}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
