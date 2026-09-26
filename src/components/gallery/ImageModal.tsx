import {
  useCallback,
  useEffect,
  useRef,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { createPortal } from "react-dom";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import type { LightboxImage } from "@/types";

import styles from "./ImageModal.module.css";

interface ImageModalProps {
  images: LightboxImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

/**
 * Full-screen image viewer.
 *
 * Features:
 * - Previous / next navigation
 * - Keyboard navigation
 * - Escape to close
 * - Touch/swipe navigation
 * - Click outside image to close
 * - Body scroll locking
 */
export default function ImageModal({
  images,
  index,
  onChange,
  onClose,
}: ImageModalProps) {
  useLockBodyScroll(true);

  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = images.length;

  /**
   * Previous image.
   */
  const prev = useCallback(() => {
    if (total <= 1) return;

    onChange((index - 1 + total) % total);
  }, [index, total, onChange]);

  /**
   * Next image.
   */
  const next = useCallback(() => {
    if (total <= 1) return;

    onChange((index + 1) % total);
  }, [index, total, onChange]);

  /**
   * Focus close button when modal opens.
   */
  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  /**
   * Keyboard navigation.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          prev();
          break;

        case "ArrowRight":
          next();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, prev, next]);

  /**
   * No images available.
   */
  if (total === 0) {
    return null;
  }

  /**
   * Prevent clicks inside the image/figure
   * from closing the modal.
   */
  const stopPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  /**
   * Start touch/swipe.
   */
  const handleTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  /**
   * Finish touch/swipe.
   */
  const handleTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX;

    if (endX === undefined) {
      touchStartX.current = null;
      return;
    }

    const difference = endX - touchStartX.current;

    /**
     * Ignore very small movements.
     */
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        prev();
      } else {
        next();
      }
    }

    touchStartX.current = null;
  };

  /**
   * Make sure index is valid.
   */
  const safeIndex =
    index >= 0 && index < total ? index : 0;

  const current = images[safeIndex];

  if (!current) {
    return null;
  }

  return createPortal(
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button
        ref={closeRef}
        type="button"
        className={styles.close}
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <X size={24} aria-hidden="true" />
      </button>

      {/* Previous */}
      {total > 1 && (
        <button
          type="button"
          className={`${styles.nav} ${styles.prev}`}
          onClick={(event) => {
            stopPropagation(event);
            prev();
          }}
          aria-label="Previous image"
        >
          <ChevronLeft
            size={28}
            aria-hidden="true"
          />
        </button>
      )}

      {/* Image */}
      <figure
        className={styles.figure}
        onClick={stopPropagation}
      >
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className={styles.image}
        />

        <figcaption className={styles.caption}>
          <span>
            {current.caption ?? current.alt}
          </span>

          <span className={styles.count}>
            {safeIndex + 1} / {total}
          </span>
        </figcaption>
      </figure>

      {/* Next */}
      {total > 1 && (
        <button
          type="button"
          className={`${styles.nav} ${styles.next}`}
          onClick={(event) => {
            stopPropagation(event);
            next();
          }}
          aria-label="Next image"
        >
          <ChevronRight
            size={28}
            aria-hidden="true"
          />
        </button>
      )}
    </div>,
    document.body,
  );
}