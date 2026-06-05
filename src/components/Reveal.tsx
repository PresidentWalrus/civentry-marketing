"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in ms, applied as a transition-delay. */
  delay?: number;
  className?: string;
  /** Render element (section, div, li, ...). Defaults to div. */
  as?: ElementType;
  /** Re-reveal each time it scrolls into view. Off by default (reveal once). */
  repeat?: boolean;
};

/**
 * Fades + rises its children into view as they enter the viewport.
 * Pure CSS transition toggled by an IntersectionObserver; honors
 * prefers-reduced-motion via the .reveal rules in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as,
  repeat = false,
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [repeat]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
