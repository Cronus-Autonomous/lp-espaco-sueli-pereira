import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { clinic, navLinks, whatsappLink } from "@/lib/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FAF5F0]/85 backdrop-blur-xl border-b border-[#E8DED4]/70 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 flex items-center justify-between">
        <a
          href="#inicio"
          className={`font-serif text-2xl tracking-tight transition-colors duration-300 ${
            scrolled ? "text-[#30242B]" : "text-[#30242B]"
          }`}
        >
          {clinic.name}
          <span className="text-[#B08A45]">.</span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-sans font-medium tracking-wide text-[#30242B]/80 hover:text-[#642C4B] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] text-[13px] font-medium rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-[0_10px_24px_-10px_rgba(100,44,75,0.6)]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            {t("buttons.schedule")}
          </a>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-[#30242B]"
            aria-label="Abrir menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 top-0 bg-[#FAF5F0] z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-5 py-5 border-b border-[#E8DED4]">
              <span className="font-serif text-2xl text-[#30242B]">
                {clinic.name}
                <span className="text-[#B08A45]">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="w-10 h-10 inline-flex items-center justify-center text-[#30242B]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-lg font-serif text-[#30242B] border-b border-[#E8DED4]/60"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-auto p-5">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#642C4B] text-[#FFFDFC] rounded-full px-6 py-4 text-sm font-medium"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t("buttons.agendar_whatsapp")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;