import { useState } from "react";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import SmartImage from "@/components/common/SmartImage";
import ImageModal from "@/components/gallery/ImageModal";
import type { LightboxImage } from "@/types";
import { cx } from "@/utils/cx";
import styles from "./RoomGallery.module.css";

interface RoomGalleryProps {
  images: string[];
  name: string;
}

export default function RoomGallery({ images, name }: RoomGalleryProps) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);

  const slides: LightboxImage[] = images.map((src, i) => ({
    src,
    alt: `${name} — photo ${i + 1}`,
    caption: `${name} — ${i + 1} of ${images.length}`,
  }));

  const go = (step: number) => setActive((i) => (i + step + images.length) % images.length);

  return (
    <div className={styles.gallery}>
      <div className={styles.stage}>
        <button type="button" className={styles.main} onClick={() => setOpen(true)} aria-label="Open photo full screen">
          <SmartImage key={slides[active].src} src={slides[active].src} alt={slides[active].alt} priority />
        </button>

        {images.length > 1 && (
          <>
            <button type="button" className={cx(styles.arrow, styles.prev)} onClick={() => go(-1)} aria-label="Previous photo">
              <ChevronLeft size={22} />
            </button>
            <button type="button" className={cx(styles.arrow, styles.next)} onClick={() => go(1)} aria-label="Next photo">
              <ChevronRight size={22} />
            </button>
          </>
        )}
        <span className={styles.expand} aria-hidden="true"><Expand size={16} /></span>
      </div>

      {images.length > 1 && (
        <ul className={styles.thumbs}>
          {slides.map((slide, i) => (
            <li key={slide.src + i}>
              <button
                type="button"
                className={cx(styles.thumb, i === active && styles.thumbActive)}
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === active}
              >
                <SmartImage src={slide.src} alt="" />
              </button>
            </li>
          ))}
        </ul>
      )}

      {open && <ImageModal images={slides} index={active} onChange={setActive} onClose={() => setOpen(false)} />}
    </div>
  );
}
