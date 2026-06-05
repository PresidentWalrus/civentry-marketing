"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  animate,
  type Variants,
} from "motion/react";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ----------------------------------------------------------------
   Reveal - fade + rise as the element scrolls into view.
   Renders final state immediately under reduced motion.
---------------------------------------------------------------- */
export function Reveal({
  children,
  className,
  style,
  delay = 0,
  y = 26,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** seconds */
  delay?: number;
  y?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   Stagger - sequences its StaggerItem children into view.
---------------------------------------------------------------- */
const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export function Stagger({
  children,
  className,
  style,
  amount = 0.25,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  amount?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      variants={reduce ? undefined : container}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
  lift = false,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Adds a hover lift (transform handled by motion; pair with .hover-shadow). */
  lift?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      style={style}
      variants={reduce ? undefined : item}
      whileHover={
        lift && !reduce ? { y: -4, transition: { duration: 0.2, ease: EASE } } : undefined
      }
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------------
   CountUp - animates a figure to its target the first time it is seen.
---------------------------------------------------------------- */
function fmt(value: number, decimals: number) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.2,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  // Initialize to the final value so SSR / no-JS / background tabs show the
  // real figure; the count-up replays from 0 once it scrolls into a live view.
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration,
      ease: EASE,
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, reduce, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {fmt(display, decimals)}
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------
   AnimatedBar - a progress fill that grows from 0 to `pct` on view.
   Uses scaleX (transform only) for performance.
---------------------------------------------------------------- */
export function AnimatedBar({
  pct,
  color,
  height = "h-1.5",
  track = "bg-off-white",
  delay = 0,
  className = "",
}: {
  pct: number;
  color: string;
  height?: string;
  track?: string;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  return (
    <div
      ref={ref}
      className={`${height} w-full overflow-hidden rounded-full ${track} ${className}`}
    >
      <motion.div
        className="h-full origin-left rounded-full"
        style={{ width: `${Math.min(pct, 100)}%`, background: color }}
        initial={reduce ? false : { scaleX: 0 }}
        animate={inView || reduce ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      />
    </div>
  );
}

/** Bare re-export for ad-hoc one-off motion (floating chips, etc.). */
export { motion };
