import React, { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { t } from "i18next";

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("buttons.agendar_whatsapp")}
        className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] rounded-full shadow-[0_14px_30px_-10px_rgba(100,44,75,0.6)] transition-all duration-500 whatsapp-breathe ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ padding: "0.9rem 1.1rem" }}
      >
        <WhatsAppIcon className="w-6 h-6" />
        <span className="hidden md:inline text-sm font-medium pr-1">
          {t("buttons.agendar_whatsapp")}
        </span>
      </a>
      <style>{`
        @keyframes whatsappBreathe {
          0%, 100% { box-shadow: 0 14px 30px -10px rgba(100,44,75,0.5); }
          50% { box-shadow: 0 14px 36px -8px rgba(100,44,75,0.8); }
        }
        .whatsapp-breathe { animation: whatsappBreathe 3s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .whatsapp-breathe { animation: none !important; }
        }
      `}</style>
    </>
  );
};

export default FloatingWhatsApp;