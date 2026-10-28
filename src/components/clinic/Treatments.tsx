import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { treatments, whatsappLink } from "@/lib/clinicConfig";
import { SectionHeader } from "./SectionHeader";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

const treatmentsWithoutCrop = new Set([
  "Pós-Operatório de cirurgia plástica",
  "Drenagem Linfática",
  "Massagem Detox Corporal",
]);

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
              <span className="italic text-[#642C4B]">
                {t("treatments.title_2")}
              </span>
            </>
          }
          description={t("treatments.description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((tt, i) => {
            const showWholeImage = treatmentsWithoutCrop.has(tt.id);

            return (
              <motion.article
                key={tt.id}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={
                  reduce ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8DED4] bg-[#FFFDFC] transition-all duration-300 hover:border-[#D9C9A8] hover:shadow-[0_24px_50px_-24px_rgba(48,36,43,0.25)]"
              >
                {/* Área da imagem com tamanho preservado */}
                <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden">
                  <img
                    src={tt.image}
                    alt={tt.name}
                    loading="lazy"
                    className={`absolute inset-0 m-0 block h-full w-full max-w-none ${
                      showWholeImage
                        ? "object-fill"
                        : "object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    }`}
                    style={
                      showWholeImage
                        ? {
                            objectFit: "fill",
                            objectPosition: "center",
                          }
                        : undefined
                    }
                  />
                </div>

                {/* Conteúdo do card */}
                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c99f96]">
                    {tt.category}
                  </span>

                  <h3 className="font-serif text-xl leading-snug text-[#30242B]">
                    {tt.name}
                  </h3>

                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#5c4f54]">
                    {tt.description}
                  </p>

                  <a
                    href={whatsappLink(
                      `Olá! Vim pelo site e gostaria de saber mais sobre ${tt.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-sans text-[13px] font-medium text-[#642C4B] transition-all duration-300 group-hover:gap-3"
                  >
                    {t("buttons.schedule")}

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Treatments;