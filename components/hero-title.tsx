"use client";

import { Fragment, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const WORDS = ["Seu", "negócio", "merece"];
const PHRASES = ["ser encontrado.", "ser lembrado.", "ser escolhido.", "ser visto."];
const LONGEST = PHRASES.reduce((a, b) => (b.length > a.length ? b : a));
const STEP = 40;
const FIRST_HOLD = 4500;
const HOLD = 3000;

type Props = {
  className?: string;
  highlightClassName?: string;
};

export default function HeroTitle({
  className = "",
  highlightClassName = "italic text-primary",
}: Props) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    let timer: ReturnType<typeof setTimeout>;
    const schedule = (delay: number) => {
      timer = setTimeout(() => {
        if (!document.hidden) setIndex((i) => (i + 1) % PHRASES.length);
        schedule(HOLD);
      }, delay);
    };
    schedule(FIRST_HOLD);
    return () => clearTimeout(timer);
  }, [reduce]);

  let n = 0;
  const typedChars = WORDS.reduce((sum, w) => sum + w.length, 0);

  return (
    <h1 aria-label="Seu negócio merece ser encontrado." className={className}>
      {WORDS.map((word, w) => (
        <Fragment key={w}>
          <span aria-hidden="true" className="inline-block whitespace-nowrap">
            {Array.from(word).map((ch, c) => (
              <span key={c} className="tw-char" style={{ animationDelay: `${n++ * STEP}ms` }}>
                {ch}
              </span>
            ))}
          </span>{" "}
        </Fragment>
      ))}
      <span
        aria-hidden="true"
        className={`tw-fade inline-grid align-baseline whitespace-nowrap ${highlightClassName}`}
        style={{ animationDelay: `${typedChars * STEP + 80}ms` }}
      >
        <span className="invisible select-none [grid-area:1/1]">{LONGEST}</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            className="[grid-area:1/1]"
            initial={{ y: -16, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.35, ease: "easeOut" } }}
            exit={{ y: 16, opacity: 0, filter: "blur(4px)", transition: { duration: 0.25, ease: "easeIn" } }}
          >
            {PHRASES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h1>
  );
}
