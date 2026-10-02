import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { results } from "@/lib/clinicConfig";
import { SectionHeader } from "./SectionHeader";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

const BeforeAfterSlider: React.FC<{
  before: string;
  after: string;
  treatment: string;
  description: string;
  timeframe: string;
}> = ({ before, after, treatment, description, timeframe }) => {
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  const onDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    update(e.clientX);
  };
  const onMove = (e: React.PointerEvent) => {
    if (dragging.current) update(e.clientX);
  };
  const onUp = () => {
    dragging.current = false;
  };

  return (
    <div className="flex flex-col">
      <div
        ref={ref}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        className="relative aspect-square w-full overflow-hidden rounded-2xl bg-[#F3E6DF] cursor-ew-resize select-none touch-none"
      >
        <img
          src={after}
          alt={`${treatment} — ${t("results.depois")}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 z-20 text-[10px] uppercase tracking-[0.18em] bg-[#642C4B]/80 text-white px-2 py-1 rounded-full pointer-events-none">
          {t("results.depois")}
        </span>
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${pos}%` }}
        >
          <img
            src={before}
            alt={`${treatment} — ${t("results.antes")}`}
            className="absolute inset-0 h-full object-cover"
            style={{ width: `${width}px`, maxWidth: "none" }}
            loading="lazy"
          />
          <span className="absolute top-3 left-3 z-20 text-[10px] uppercase tracking-[0.18em] bg-[#30242B]/70 text-white px-2 py-1 rounded-full">
            {t("results.antes")}
          </span>
        </div>
        <div
          className="absolute top-0 bottom-0 w-px bg-white pointer-events-none z-30"
          style={{ left: `${pos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center">
            <MoveHorizontal className="w-4 h-4 text-[#642C4B]" />
          </div>
        </div>
      </div>
      <div className="mt-4 px-1">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-lg text-[#30242B]">{treatment}</h3>
          <span className="text-[11px] uppercase tracking-[0.16em] text-[#B08A45]">
            {timeframe}
          </span>
        </div>
        <p className="mt-1 text-sm text-[#5c4f54] font-sans">{description}</p>
      </div>
    </div>
  );
};

export const Results: React.FC = () => {
  const reduce = useReducedMotion();
  return (
    <section id="resultados" className="bg-[#FFFDFC] py-20 md:py-32">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow={t("results.eyebrow")}
            title={
              <>
                {t("results.title")} <span className="italic text-[#642C4B]">{t("results.title_2")}</span>
              </>
            }
            description={t("results.description")}
          />
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 text-sm font-sans font-medium text-[#642C4B] hover:gap-3 transition-all duration-300 shrink-0"
          >
            {t("results.ver_todos")}
          </a>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid sm:grid-cols-2 gap-8"
        >
          {results.map((r) => (
            <BeforeAfterSlider key={r.id} {...r} />
          ))}
        </motion.div>

        <p className="mt-6 text-xs text-[#8a7d83] font-sans">
          {t("results.aviso")}
        </p>

        <a
          href="#contato"
          className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-sans font-medium text-[#642C4B]"
        >
          {t("results.ver_todos")} →
        </a>
      </div>
    </section>
  );
};

export default Results;