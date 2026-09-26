import { cx } from "@/utils/cx";
import Reveal from "./Reveal";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  align?: "left" | "center";
  /** Use on dark backgrounds */
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  title,
  eyebrow,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionTitleProps) {
  return (
    <Reveal
      className={cx(styles.wrap, align === "center" && styles.center, light && styles.light, className)}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Reveal>
  );
}
