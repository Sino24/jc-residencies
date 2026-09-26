import type { GalleryFilter, GalleryImage } from "@/types";

import { images } from "./images";

/*
|--------------------------------------------------------------------------
| Gallery categories
|--------------------------------------------------------------------------
*/

export const galleryCategories: GalleryFilter[] = [
  "All",
  "Rooms",
  "Bathrooms",
];

/*
|--------------------------------------------------------------------------
| Gallery images
|--------------------------------------------------------------------------
*/

const gallery: GalleryImage[] = [
  /*
  |--------------------------------------------------------------------------
  | ROOMS
  |--------------------------------------------------------------------------
  */

  {
    id: "room-01",
    src: images.gallery.bedrooms.room01,
    alt: "King size room at JC Residencies",
    category: "Rooms",
    caption: "King Size Room",
  },

  {
    id: "room-02",
    src: images.gallery.bedrooms.room02,
    alt: "Fully furnished room at JC Residencies",
    category: "Rooms",
    caption: "Fully Furnished Room",
  },

  {
    id: "room-03",
    src: images.gallery.bedrooms.room03,
    alt: "Bedroom at JC Residencies",
    category: "Rooms",
    caption: "Comfortable Bedroom",
  },

  {
    id: "room-04",
    src: images.gallery.bedrooms.room04,
    alt: "Bedroom with modern furnishings at JC Residencies",
    category: "Rooms",
    caption: "Comfortable Stay",
  },

  {
    id: "room-05",
    src: images.gallery.bedrooms.room05,
    alt: "Guest room at JC Residencies",
    category: "Rooms",
    caption: "Guest Room",
  },

  {
    id: "room-06",
    src: images.gallery.bedrooms.room06,
    alt: "Furnished bedroom at JC Residencies",
    category: "Rooms",
    caption: "Furnished Bedroom",
  },

  {
    id: "room-07",
    src: images.gallery.bedrooms.room07,
    alt: "Bedroom interior at JC Residencies",
    category: "Rooms",
    caption: "Bedroom Interior",
  },

  {
    id: "room-08",
    src: images.gallery.bedrooms.room08,
    alt: "Guest bedroom at JC Residencies",
    category: "Rooms",
    caption: "Guest Bedroom",
  },

  {
    id: "room-09",
    src: images.gallery.bedrooms.room09,
    alt: "Double room at JC Residencies",
    category: "Rooms",
    caption: "Double Room",
  },

  {
    id: "room-10",
    src: images.gallery.bedrooms.room10,
    alt: "Queen size room at JC Residencies",
    category: "Rooms",
    caption: "Queen Size Room",
  },

  {
    id: "room-11",
    src: images.gallery.bedrooms.room11,
    alt: "Room interior at JC Residencies",
    category: "Rooms",
    caption: "Room Interior",
  },

  {
    id: "room-13",
    src: images.gallery.bedrooms.room13,
    alt: "Bedroom interior at JC Residencies",
    category: "Rooms",
    caption: "Bedroom",
  },

  {
    id: "room-14",
    src: images.gallery.bedrooms.room14,
    alt: "Fully furnished room at JC Residencies",
    category: "Rooms",
    caption: "Fully Furnished Room",
  },

  {
    id: "room-15",
    src: images.gallery.bedrooms.room15,
    alt: "Comfortable room at JC Residencies",
    category: "Rooms",
    caption: "Comfortable Room",
  },

  {
    id: "room-16",
    src: images.gallery.bedrooms.room16,
    alt: "Guest room interior at JC Residencies",
    category: "Rooms",
    caption: "Guest Room",
  },

  {
    id: "room-17",
    src: images.gallery.bedrooms.room17,
    alt: "Room interior at JC Residencies",
    category: "Rooms",
    caption: "Room Interior",
  },

  {
    id: "room-18",
    src: images.gallery.bedrooms.room18,
    alt: "Bedroom at JC Residencies",
    category: "Rooms",
    caption: "Bedroom",
  },

  /*
  |--------------------------------------------------------------------------
  | BATHROOMS
  |--------------------------------------------------------------------------
  */

  {
    id: "bathroom-01",
    src: images.gallery.bathrooms.bathroom01,
    alt: "Attached bathroom at JC Residencies",
    category: "Bathrooms",
    caption: "Attached Bathroom",
  },

  {
    id: "bathroom-02",
    src: images.gallery.bathrooms.bathroom02,
    alt: "Bathroom at JC Residencies",
    category: "Bathrooms",
    caption: "Guest Bathroom",
  },

  {
    id: "bathroom-03",
    src: images.gallery.bathrooms.bathroom03,
    alt: "Clean bathroom at JC Residencies",
    category: "Bathrooms",
    caption: "Clean & Comfortable Bathroom",
  },
];

/*
|--------------------------------------------------------------------------
| Export gallery
|--------------------------------------------------------------------------
*/

export { gallery };

/*
|--------------------------------------------------------------------------
| Featured gallery
|--------------------------------------------------------------------------
*/

export const featuredGallery = gallery.slice(0, 6);