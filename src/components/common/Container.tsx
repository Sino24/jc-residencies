import type { ElementType, ReactNode } from "react";
import { cx } from "@/utils/cx";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  size?: "default" | "narrow";
  as?: ElementType;
  className?: string;
}

export default function Container({
  children,
  size = "default",
  as: Tag = "div",
  className,
}: ContainerProps) {
  return (
    <Tag className={cx(styles.container, size === "narrow" && styles.narrow, className)}>
      {children}
    </Tag>
  );
}
