import { Link } from "react-router-dom";
import type { MouseEventHandler, ReactNode } from "react";
import { cx } from "@/utils/cx";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "outline" | "outlineLight" | "whatsapp" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  /** Internal route (React Router) */
  to?: string;
  /** External or protocol link (tel:, mailto:, https:) */
  href?: string;
  /** Opens href in a new tab */
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  to,
  href,
  external = false,
  type = "button",
  disabled = false,
  fullWidth = false,
  className,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = cx(styles.btn, styles[variant], styles[size], fullWidth && styles.full, className);
  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} aria-label={ariaLabel} onClick={onClick}>
      {content}
    </button>
  );
}
