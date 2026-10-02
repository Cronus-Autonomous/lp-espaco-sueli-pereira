import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { testimonials } from "@/lib/clinicConfig";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

const GoogleMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
  </svg>
);

const Stars: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-[#B08A45] fill-[#B08A45]" : "text-[#E0D4C8]"}`}
      />
    ))}
  </div>
);

export const Testimonials: React.FC = () => {
  const reduce = useReducedMotion();
  const { aggregate, reviews, googleUrl } = testimonials;
  return (
    <section id="depoimentos" className="bg-[#FAF5F0] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="block text-[11px] font-sans font-semibold uppercase tracking-[0.28em] text-[#B08A45] mb-4">
              {t("testimonials.title")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] text-[#30242B]">
              {t("testimonials.title_2")} <span className="italic text-[#642C4B]">{t("testimonials.title_3")}</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-[#FFFDFC] border border-[#E8DED4] rounded-2xl px-6 py-4">
            <Stars rating={5} />
            <div>
              <p className="font-serif text-2xl text-[#642C4B] leading-none">
                {aggregate.score}
                <span className="text-base text-[#8a7d83]">/5</span>
              </p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#5c4f54] mt-1">
                {aggregate.source}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.article
              key={r.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl bg-[#FFFDFC] border border-[#E8DED4] p-7"
            >
              <div className="flex items-center justify-between mb-4">
                <GoogleMark className="w-6 h-6" />
                <Stars rating={r.rating} />
              </div>
              <p className="text-[15px] leading-relaxed text-[#30242B] font-sans flex-1">
                “{r.text}”
              </p>
              <div className="mt-5 pt-5 border-t border-[#E8DED4] flex items-center justify-between">
                <span className="text-sm font-sans font-medium text-[#30242B]">
                  {r.author}
                </span>
                <span className="text-[11px] text-[#8a7d83] font-sans">{r.date}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#642C4B] hover:gap-3 transition-all duration-300"
          >
            {t("testimonials.more_source")}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;