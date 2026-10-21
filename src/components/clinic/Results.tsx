import React, { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
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
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        className={`relative aspect-square w-full overflow-hidden rounded-2xl bg-[#F3E6DF] select-none`} >
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

      </div>

      <div className="mt-4 px-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h3 className="font-serif text-lg text-[#30242B]">
            {treatment}
          </h3>

          {timeframe && (
            <span className="text-[11px] uppercase tracking-[0.16em] text-[#c99f96]">
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
