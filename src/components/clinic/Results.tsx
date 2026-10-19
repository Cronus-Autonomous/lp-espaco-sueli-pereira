import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { results } from "@/lib/clinicConfig";
import { SectionHeader } from "./SectionHeader";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

type BeforeAfterSliderProps = {
  before?: string;
  after: string;
  treatment: string;
  description: string;
  timeframe: string;
};

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  before,
  after,
  treatment,
  description,
  timeframe,
}) => {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const percentage = ((clientX - rect.left) / rect.width) * 100;

    setPos(Math.max(0, Math.min(100, percentage)));
  }, []);

  const onDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!before) return;

    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    update(e.clientX);
  };

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging.current) {
      update(e.clientX);
    }
  };

  const onUp = () => {
    dragging.current = false;
  };

  return (
    <div className="flex flex-col min-w-0">
      <div
        ref={ref}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-[#F3E6DF] select-none ${
          before ? "touch-none cursor-ew-resize" : ""
        }`}
      >
        {/* Imagem do resultado final */}
        <img
          src={after}
          alt={`${treatment} — ${t("results.depois", {
            defaultValue: "Depois",
          })}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="lazy"
          draggable={false}
        />

        <span className="absolute top-3 right-3 z-20 text-[10px] uppercase tracking-[0.18em] bg-[#642C4B]/85 text-white px-3 py-1.5 rounded-full pointer-events-none">
          {t("results.depois", { defaultValue: "Depois" })}
        </span>

        {/* Imagem anterior: só aparece se estiver configurada */}
        {before && (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - pos}% 0 0)`,
              }}
            >
              <img
                src={before}
                alt={`${treatment} — ${t("results.antes", {
                  defaultValue: "Antes",
                })}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                draggable={false}
              />

              <span className="absolute top-3 left-3 z-20 text-[10px] uppercase tracking-[0.18em] bg-[#30242B]/80 text-white px-3 py-1.5 rounded-full">
                {t("results.antes", { defaultValue: "Antes" })}
              </span>
            </div>

            {/* Linha e controle deslizante */}
            <div
              className="absolute inset-y-0 z-30 pointer-events-none"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute inset-y-0 left-0 w-0.5 bg-white -translate-x-1/2 shadow-md" />

              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-lg border border-[#642C4B]/20">
                <MoveHorizontal
                  size={19}
                  className="text-[#642C4B]"
                />
              </div>
            </div>
          </>
        )}
      </div>

      <div className="mt-4 px-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-serif text-lg text-[#30242B]">
            {treatment}
          </h3>

          {timeframe && (
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#B08A45]">
              {timeframe}
            </span>
          )}
        </div>

        <p className="mt-1 text-sm leading-relaxed text-[#5c4f54] font-sans">
          {description}
        </p>
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
            eyebrow={t("results.eyebrow", {
              defaultValue: "Resultados",
            })}
            title={
              <>
                {t("results.title", {
                  defaultValue: "Resultados que",
                })}{" "}
                <span className="italic text-[#642C4B]">
                  {t("results.title_2", {
                    defaultValue: "inspiram confiança",
                  })}
                </span>
              </>
            }
            description={t("results.description", {
              defaultValue:
                "Conheça os resultados dos tratamentos realizados.",
            })}
          />

          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 text-sm font-sans font-medium text-[#642C4B] hover:gap-3 transition-all duration-300 shrink-0"
          >
            {t("results.ver_todos", {
              defaultValue: "Ver todos",
            })}
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {results.map((r) => (
            <BeforeAfterSlider key={r.id} {...r} />
          ))}
        </motion.div>

        <a
          href="#contato"
          className="md:hidden mt-8 inline-flex items-center gap-2 text-sm font-sans font-medium text-[#642C4B]"
        >
          {t("results.ver_todos", {
            defaultValue: "Ver todos",
          })}
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
};

export default Results;
