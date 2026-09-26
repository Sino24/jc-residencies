import { Link } from "react-router-dom";
import { property } from "@/data/property";
import styles from "./Logo.module.css";

/** Wordmark for dark backgrounds (navbar, menu, footer). */
export default function Logo() {
  return (
    <Link to="/" className={styles.logo} aria-label={`${property.name} — home`}>
      <span className={styles.mark} aria-hidden="true">{property.shortName}</span>
      <span className={styles.text}>
        <span className={styles.name}>{property.name}</span>
        <span className={styles.tag}>{property.tagline}</span>
      </span>
    </Link>
  );
}
