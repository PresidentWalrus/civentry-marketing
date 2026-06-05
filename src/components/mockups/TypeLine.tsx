"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Types a line of text out character-by-character the first time it enters
 * view — the hero's "the AI is writing your brief" touch. Renders the full
 * text instantly under prefers-reduced-motion.
 */
export function TypeLine({
  text,
  speed = 18,
  startDelay = 350,
  className = "",
}: {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let startTimer: ReturnType<typeof setTimeout>;
    let interval: ReturnType<typeof setInterval>;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || started.current) return;
        started.current = true;

        if (reduce) {
          setCount(text.length);
          setDone(true);
          return;
        }

        let i = 0;
        startTimer = setTimeout(() => {
          interval = setInterval(() => {
            i += 1;
            setCount(i);
            if (i >= text.length) {
              clearInterval(interval);
              setDone(true);
            }
          }, speed);
        }, startDelay);
      },
      { threshold: 0.6 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span ref={ref} className={`${!done ? "type-caret" : ""} ${className}`}>
      {text.slice(0, count)}
    </span>
  );
}
