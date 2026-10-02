import React from "react";
import { motion } from "framer-motion";
import { whatsappLink } from "../../lib/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import {useReducedMotion} from "../../lib/useReducedMotion";

export const CTASection: React.FC = () => {
  const reduce = useReducedMotion();
  function t(arg0: string): React.ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <section className="bg-[#4A1F36] py-20 md:py-32 relative overflow-hidden">
      <svg
        className="absolute -left-16 -bottom-16 w-80 h-80 text-[#642C4B] opacity-50"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
      </svg>
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 relative">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-5xl leading-[1.1] text-[#FFFDFC]">
            Pronta para começar sua{" "}
            <span className="italic text-[#D9C9A8]">transformação?</span>
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#F3E6DF]/80 font-sans leading-relaxed">
            Agende uma avaliação e descubra o protocolo mais adequado para você.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#B08A45] hover:bg-[#9a7838] text-white text-sm font-medium rounded-full px-8 py-4 transition-all duration-300 hover:shadow-[0_14px_32px_-12px_rgba(176,138,69,0.6)]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t("buttons.schedule")}
            </a>
          </div>
          <p className="mt-5 text-[13px] text-[#F3E6DF]/60 font-sans">
            {t("clinic.tagline_2")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;