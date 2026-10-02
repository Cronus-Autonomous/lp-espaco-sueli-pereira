import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, Sparkles, HeartHandshake, Smile } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

const steps = [
{ n: "01", icon: MessageCircle, title: t("journey.step1.title"), text: t("journey.step1.description") },
{ n: "02", icon: ClipboardCheck, title: t("journey.step2.title"), text: t("journey.step2.description") },
{ n: "03", icon: Sparkles, title: t("journey.step3.title"), text: t("journey.step3.description") },
{ n: "04", icon: HeartHandshake, title: t("journey.step4.title"), text: t("journey.step4.description") },
{ n: "05", icon: Smile, title: t("journey.step5.title"), text: t("journey.step5.description") },
];

export const Journey: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#FFFDFC] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-4">
            {t("journey.title")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#30242B]">
            {t("journey.title_2")} <span className="italic text-[#642C4B]">{t("journey.title_3")}</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          {/* connector line desktop */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-[#E8DED4]" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-[#FFFDFC] border border-[#E0D4C8] flex items-center justify-center mb-5">
                  <s.icon className="w-5 h-5 text-[#642C4B]" strokeWidth={1.4} />
                </div>
                <span className="font-serif text-sm text-[#B08A45] mb-1">{s.n}</span>
                <h3 className="font-serif text-lg text-[#30242B]">{s.title}</h3>
                <p className="mt-2 text-[13px] text-[#5c4f54] font-sans leading-relaxed max-w-[200px]">
                  {s.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;