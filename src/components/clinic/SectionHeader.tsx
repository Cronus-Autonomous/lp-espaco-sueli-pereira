import React from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) => {
  const reduce = useReducedMotion();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <span
          className={`block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] mb-4 ${
            light ? "text-[#D9C9A8]" : "text-[#B08A45]"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight ${
          light ? "text-[#FFFDFC]" : "text-[#30242B]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-[1.05rem] leading-relaxed font-sans ${
            light ? "text-[#F3E6DF]/80" : "text-[#5c4f54]"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;