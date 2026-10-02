import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { clinic, whatsappLink } from "@/lib/clinicConfig";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

export const Location: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section className="bg-[#FFFDFC] py-20 md:py-32 border-t border-[#E8DED4]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-4">
            {t("location.title")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#30242B]">
            {t("location.subtitle")}
          </h2>
          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#642C4B] mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d83]">{t("booking.address")}</p>
                <p className="text-sm text-[#30242B] font-sans">{clinic.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#642C4B] mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d83]">{t("booking.hours")}</p>
                {clinic.hours.map((h) => (
                  <p key={h.day} className="text-sm text-[#30242B] font-sans">
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#642C4B] mt-0.5 shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d83]">{t("booking.title")}</p>
                <p className="text-sm text-[#30242B] font-sans">{clinic.phone}</p>
                <p className="text-sm text-[#30242B] font-sans">{clinic.whatsappDisplay}</p>
              </div>
            </li>
          </ul>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={clinic.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] text-sm font-medium rounded-full px-6 py-3.5 transition-all duration-300"
            >
              {t("location.getting_here")}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#E0D4C8] hover:border-[#642C4B] hover:text-[#642C4B] text-[#30242B] text-sm font-medium rounded-full px-6 py-3.5 transition-all duration-300"
            >
              {t("buttons.agendar_whatsapp")}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.02 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl overflow-hidden border border-[#E8DED4] min-h-[360px]"
        >
          <iframe
            title="Mapa da clínica Veloura"
            src={clinic.mapsEmbed}
            className="w-full h-full min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Location;