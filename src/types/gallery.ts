export type GalleryCategory =
  | "Rooms"
  | "Bathrooms"
  | "Property"
  | "Exterior"
  | "Common Areas"
  | "Facilities";

export type GalleryFilter = "All" | GalleryCategory;

/** Anything the lightbox can show */
export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryImage extends LightboxImage {
  id: string;
  category: GalleryCategory;
  /** Controls the tile size in the gallery grid */
  layout?: "normal" | "wide" | "tall";
  /** Shown in the home page preview */
  featured?: boolean;
}
