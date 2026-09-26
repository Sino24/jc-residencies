import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cx } from "@/utils/cx";
import styles from "./SmartImage.module.css";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Load immediately (above the fold) instead of lazily */
  priority?: boolean;
}

/** Image with a loading shimmer and a graceful fallback if the file is missing. */
export default function SmartImage({ src, alt, className, priority = false }: SmartImageProps) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <span className={cx(styles.wrap, status === "loading" && styles.loading, className)}>
      {status === "error" ? (
        <span className={styles.fallback} role="img" aria-label={alt}>
          <ImageOff size={28} strokeWidth={1.4} />
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
          className={cx(styles.img, status === "loaded" && styles.loaded)}
        />
      )}
    </span>
  );
}
