import { useMemo, useState, type CSSProperties } from "react";
import { ZoomIn } from "lucide-react";

import SmartImage from "@/components/common/SmartImage";
import { galleryCategories } from "@/data/gallery";
import type { GalleryFilter, GalleryImage } from "@/types";
import { cx } from "@/utils/cx";

import ImageModal from "./ImageModal";
import styles from "./GalleryGrid.module.css";

interface GalleryGridProps {
  items: GalleryImage[];
}

/**
 * Repeating size pattern so the grid has visual rhythm even when the data
 * doesn't set a `layout` per image (every photo here is the same shape —
 * cropping some tiles larger via object-fit is what creates the variety).
 * An item's own `layout`, if set, always wins.
 */
const AUTO_LAYOUT: Record<number, "wide" | "tall"> = {
  0: "wide",
  3: "tall",
  8: "tall",
  11: "wide",
};
const PATTERN_LENGTH = 12;

function layoutFor(item: GalleryImage, index: number): "normal" | "wide" | "tall" {
  if (item.layout) return item.layout;
  return AUTO_LAYOUT[index % PATTERN_LENGTH] ?? "normal";
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /**
   * Filter gallery images based on selected category.
   */
  const visible = useMemo(() => {
    if (filter === "All") {
      return items;
    }

    return items.filter((item) => item.category === filter);
  }, [items, filter]);

  /**
   * Count images for each category.
   */
  const countFor = (category: GalleryFilter) => {
    if (category === "All") {
      return items.length;
    }

    return items.filter((item) => item.category === category).length;
  };

  /**
   * Change category.
   */
  const handleFilterChange = (category: GalleryFilter) => {
    setFilter(category);

    // Close the modal when changing categories.
    setOpenIndex(null);
  };

  /**
   * Open image modal.
   */
  const handleOpenImage = (index: number) => {
    setOpenIndex(index);
  };

  /**
   * Close image modal.
   */
  const handleCloseModal = () => {
    setOpenIndex(null);
  };

  return (
    <>
      {/* Gallery Filters */}
      <div
        className={styles.filters}
        role="tablist"
        aria-label="Gallery categories"
      >
        {galleryCategories
          .filter((category) => countFor(category) > 0)
          .map((category) => {
            const isActive = filter === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={cx(
                  styles.filter,
                  isActive && styles.filterActive,
                )}
                onClick={() => handleFilterChange(category)}
              >
                <span>{category}</span>

                <span className={styles.filterCount}>
                  {countFor(category)}
                </span>
              </button>
            );
          })}
      </div>

      {/* Gallery Grid */}
      <div
        key={filter}
        className={styles.grid}
        role="tabpanel"
        aria-label={`${filter} gallery`}
      >
        {visible.map((item, index) => {
          const layout = layoutFor(item, index);
          return (
            <button
              key={item.id}
              type="button"
              className={cx(
                styles.tile,
                layout === "wide" && styles.wide,
                layout === "tall" && styles.tall,
              )}
              style={
                {
                  "--delay": `${Math.min(index, 8) * 50}ms`,
                } as CSSProperties
              }
              onClick={() => handleOpenImage(index)}
              aria-label={`Open photo: ${item.alt}`}
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
              />

              <span className={styles.overlay}>
                <span className={styles.zoomIcon}>
                  <ZoomIn
                    size={20}
                    aria-hidden="true"
                  />
                </span>

                <span className={styles.caption}>
                  {item.caption ?? item.alt}
                </span>
              </span>
            </button>
          );
        })}

        {/* Empty State */}
        {visible.length === 0 && (
          <div className={styles.empty}>
            <p>No images available in this category.</p>
          </div>
        )}
      </div>

      {/* Full Screen Image Viewer */}
      {openIndex !== null && visible.length > 0 && (
        <ImageModal
          images={visible}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}