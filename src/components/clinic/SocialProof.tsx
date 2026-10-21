import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { t } from "i18next";

// NOTE: Replace these numbers with real clinic data when available.
const stats = [
  { value: 28000, suffix: "+", label: t("social_proof.patients") },
  { value: 17, suffix: " anos", label: t("social_proof.years") },
  { value: 5, suffix: " estrelas", label: t("social_proof.reviews") },
];

const Counter: React.FC<{
  value: number;
  suffix: string;
  reduce: boolean;
}> = ({ value, suffix, reduce }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setN(value);
      return;
    }

    let raf: number;
    const start = performance.now();
    const dur = 1400;

    const tick = (time: number) => {
      const p = Math.min(1, (time - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);

      setN(Math.round(value * eased));

      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {n.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
};

export const SocialProof: React.FC = () => {
  const reduce = useReducedMotion();

  return (
    <section className="bg-[#642C4B] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={
                reduce ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <p className="font-serif text-4xl md:text-5xl text-[#FFFDFC]">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  reduce={reduce}
                />
              </p>

              <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-[#D9C9A8] font-sans">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
