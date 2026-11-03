import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealSide = "right" | "left" | "up";

interface RevealProps {
  children: ReactNode;
  /** "right" for text blocks, "left" for images, "up" for supporting items */
  side?: RevealSide;
  delay?: number;
  className?: string;
}

/**
 * Scroll-triggered entrance animation.
 * Text enters from the right, images enter from the left.
 */
export function Reveal({ children, side = "right", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        side === "right" && "reveal-right",
        side === "left" && "reveal-left",
        side === "up" && "reveal-up",
        className
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
