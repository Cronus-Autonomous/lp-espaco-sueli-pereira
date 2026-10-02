import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { clinic, whatsappLink, treatments } from "@/lib/clinicConfig";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { motion } from "framer-motion";
import { t } from "i18next";

type Status = "idle" | "success";

export const Booking: React.FC = () => {
  const reduce = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    tratamento: "",
    mensagem: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nome.trim()) e.nome = t("booking.seu_nome");
    if (!form.whatsapp.trim()) e.whatsapp = t("booking.whatsapp_error");
    else if (form.whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = t("booking.whatsapp_invalid");
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = t("booking.email_invalid");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    // In production, send to backend / notification service here.
    setStatus("success");
  };

  const inputBase =
    "w-full rounded-xl border bg-[#FFFDFC] px-4 py-3 text-sm text-[#30242B] font-sans placeholder:text-[#8a7d83] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#B08A45]/40";
  const okClass = (k: string) =>
    `${inputBase} ${errors[k] ? "border-[#C97A8B]" : "border-[#E0D4C8]"}`;

  return (
    <section id="contato" className="bg-[#FAF5F0] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-4">
            {t("booking.title")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#30242B]">
            {t("booking.title2")} <span className="italic text-[#642C4B]">{t("booking.title3")}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#5c4f54] font-sans max-w-md">
            {t("booking.subtitle")}
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FFFDFC] border border-[#E0D4C8] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#642C4B]" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d83]">{t("booking.phone")}</p>
                <p className="text-sm text-[#30242B] font-sans">{clinic.phone}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FFFDFC] border border-[#E0D4C8] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#642C4B]" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d83]">{t("booking.email")}</p>
                <p className="text-sm text-[#30242B] font-sans">{clinic.email}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FFFDFC] border border-[#E0D4C8] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#642C4B]" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d83]">{t("booking.address")}</p>
                <p className="text-sm text-[#30242B] font-sans">{clinic.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-full bg-[#FFFDFC] border border-[#E0D4C8] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#642C4B]" strokeWidth={1.6} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a7d83]">{t("booking.hours")}</p>
                {clinic.hours.map((h) => (
                  <p key={h.day} className="text-sm text-[#30242B] font-sans">
                    {h.day}: {h.time}
                  </p>
                ))}
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {status === "success" ? (
            <div className="h-full min-h-[420px] flex flex-col items-center justify-center text-center bg-[#FFFDFC] border border-[#E8DED4] rounded-3xl p-10">
              <CheckCircle2 className="w-14 h-14 text-[#B08A45]" strokeWidth={1.4} />
              <h3 className="mt-5 font-serif text-2xl text-[#30242B]">
                {t("booking.submit_success")}
              </h3>
              <p className="mt-3 text-sm text-[#5c4f54] font-sans max-w-sm">
                  {t("booking.submit_success_message")}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] text-sm font-medium rounded-full px-6 py-3 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t("buttons.whatsapp_action")}
              </a>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="bg-[#FFFDFC] border border-[#E8DED4] rounded-3xl p-7 md:p-9"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nome" className="block text-[12px] font-sans font-medium text-[#30242B] mb-1.5">
                    {t("booking.name")}
                  </label>
                  <input
                    id="nome"
                    type="text"
                    value={form.nome}
                    onChange={(e) => set("nome", e.target.value)}
                    className={okClass("nome")}
                    placeholder={t("booking.seu_nome")}
                    aria-invalid={!!errors.nome}
                  />
                  {errors.nome && <p className="mt-1 text-[11px] text-[#C97A8B]">{errors.nome}</p>}
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-[12px] font-sans font-medium text-[#30242B] mb-1.5">
                    {t("booking.whatsapp")}
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    value={form.whatsapp}
                    onChange={(e) => set("whatsapp", e.target.value)}
                    className={okClass("whatsapp")}
                    placeholder="(11) 99999-9999"
                    aria-invalid={!!errors.whatsapp}
                  />
                  {errors.whatsapp && <p className="mt-1 text-[11px] text-[#C97A8B]">{errors.whatsapp}</p>}
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-[12px] font-sans font-medium text-[#30242B] mb-1.5">
                  {t("booking.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className={okClass("email")}
                  placeholder="seu@email.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-[11px] text-[#C97A8B]">{errors.email}</p>}
              </div>
              <div className="mt-4">
                <label htmlFor="tratamento" className="block text-[12px] font-sans font-medium text-[#30242B] mb-1.5">
                  {t("booking.treatment")}
                </label>
                <select
                  id="tratamento"
                  value={form.tratamento}
                  onChange={(e) => set("tratamento", e.target.value)}
                  className={okClass("tratamento")}
                >
                  <option value="">{t("booking.select_treatment")}...</option>
                  {treatments.map((t) => (
                    <option key={t.id} value={t.name}>
                      {t.name}
                    </option>
                  ))}
                  <option value="Outro">{t("booking.outro")} / {t("booking.não_sei")}</option>
                </select>
              </div>
              <div className="mt-4">
                <label htmlFor="mensagem" className="block text-[12px] font-sans font-medium text-[#30242B] mb-1.5">
                  {t("booking.message")}
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => set("mensagem", e.target.value)}
                  className={`${okClass("mensagem")} resize-none`}
                  placeholder={`${t("booking.conte")}...`}
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#642C4B] hover:bg-[#4A1F36] text-[#FFFDFC] text-sm font-medium rounded-full px-6 py-4 transition-all duration-300"
              >
                <Send className="w-4 h-4" />
                {t("buttons.solicitar")}
              </button>
              <p className="mt-5 text-center text-[13px] text-[#5c4f54] font-sans">
                {t("booking.prefere_falar")}
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full inline-flex items-center justify-center gap-2 border border-[#E0D4C8] hover:border-[#642C4B] hover:text-[#642C4B] text-[#30242B] text-sm font-medium rounded-full px-6 py-3 transition-all duration-300"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t("buttons.whatsapp_action")}
              </a>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Booking;