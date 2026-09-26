import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cx } from "@/utils/cx";

interface RevealProps {
  children: ReactNode;
  /** Delay in ms */
  delay?: number;
  as?: ElementType;
  className?: string;
}

/** Fades content in once it scrolls into view. Use per section, not per card. */
export default function Reveal({ children, delay = 0, as: Tag = "div", className }: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <Tag
      ref={ref}
      className={cx("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
