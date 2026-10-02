import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { clinic, navLinks, treatments } from "@/lib/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { t } from "i18next";

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.3 0 .6.04.88.13V9.4a6.33 6.33 0 0 0-1-.05A6.34 6.34 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.69h-1.04z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3A1726] text-[#F3E6DF] pt-16 pb-8">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#inicio" className="font-serif text-2xl text-[#FFFDFC]">
              {clinic.name}
              <span className="text-[#B08A45]">.</span>
            </a>
            <p className="mt-4 text-sm text-[#F3E6DF]/70 font-sans leading-relaxed max-w-xs">
                  {t("footer.title")}
            </p>
            <div className="mt-6 flex gap-3">
              <a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full border border-[#642C4B] flex items-center justify-center hover:bg-[#642C4B] transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full border border-[#642C4B] flex items-center justify-center hover:bg-[#642C4B] transition-colors">
                <Facebook className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a href={clinic.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-9 h-9 rounded-full border border-[#642C4B] flex items-center justify-center hover:bg-[#642C4B] transition-colors">
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-[#D9C9A8] mb-4 font-sans">
              {t("footer.navegação")}
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-[#F3E6DF]/75 hover:text-[#FFFDFC] transition-colors font-sans">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-[#D9C9A8] mb-4 font-sans">
              {t("menu.tratamentos")}
            </h3>
            <ul className="space-y-2.5">
              {treatments.map((t) => (
                <li key={t.id}>
                  <a href="#tratamentos" className="text-sm text-[#F3E6DF]/75 hover:text-[#FFFDFC] transition-colors font-sans">
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-[#D9C9A8] mb-4 font-sans">
              {t("menu.contato")}
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F3E6DF]/75 font-sans">
              <li>{clinic.address}</li>
              <li>{clinic.phone}</li>
              <li>{clinic.whatsappDisplay}</li>
              <li>{clinic.email}</li>
            </ul>
            <a
              href={`https://wa.me/${clinic.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] text-[13px] font-medium rounded-full px-5 py-2.5 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t("buttons.schedule")}
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[#642C4B]/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-[#F3E6DF]/50 font-sans">
            © 2026 {clinic.name}. {t("footer.direitos")}
          </p>
          <div className="flex gap-5">
            <a href="#" className="text-[12px] text-[#F3E6DF]/50 hover:text-[#FFFDFC] transition-colors font-sans">
              {t("footer.política_privacidade")}
            </a>
            <a href="#" className="text-[12px] text-[#F3E6DF]/50 hover:text-[#FFFDFC] transition-colors font-sans">
              {t("footer.termos_uso")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;