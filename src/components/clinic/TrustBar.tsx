import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Stethoscope, ClipboardCheck, Gem, HeartHandshake } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

const items = [
  { icon: Sparkles, label: t("hero.tecnologia") },
  { icon: Stethoscope, label: t("hero.profissionais") },
  { icon: ClipboardCheck, label: t("hero.protocolos") },
  { icon: Gem, label: t("hero.ambiente") },
  { icon: HeartHandshake, label: t("hero.resultados") },
];

export const TrustBar: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#FFFDFC] border-y border-[#E8DED4]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-6">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center gap-3"
            >
              <it.icon className="w-5 h-5 text-[#B08A45] shrink-0" strokeWidth={1.4} />
              <span className="text-[13px] font-sans font-medium text-[#30242B] leading-tight">
                {it.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;