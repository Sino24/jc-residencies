/**
 * Central image registry.
 * Uses local photos from src/assets/.
 */

/*
|--------------------------------------------------------------------------
| Bedroom images
|--------------------------------------------------------------------------
*/

import room01 from "@/assets/bed-room-01.jpg";
import room02 from "@/assets/bed-room-02.jpg";
import room03 from "@/assets/bed-room-03.jpg";
import room04 from "@/assets/bed-room-04.jpg";
import room05 from "@/assets/bed-room-05.jpg";
import room06 from "@/assets/bed-room-06.jpg";
import room07 from "@/assets/bed-room-07.jpg";
import room08 from "@/assets/bed-room-08.jpg";
import room09 from "@/assets/bed-room-09.jpg";
import room10 from "@/assets/bed-room-10.jpg";
import room11 from "@/assets/bed-room-11.jpg";
import room12 from "@/assets/bed-room-12.jpg";
import room13 from "@/assets/bed-room-13.jpg";
import room14 from "@/assets/bed-room-14.jpg";
import room15 from "@/assets/bed-room-15.jpg";
import room16 from "@/assets/bed-room-16.jpg";
import room17 from "@/assets/bed-room-17.jpg";
import room18 from "@/assets/bed-room-18.jpg";

/*
|--------------------------------------------------------------------------
| Bathroom images
|--------------------------------------------------------------------------
*/

import bathroom01 from "@/assets/wash-room-01.jpg";
import bathroom02 from "@/assets/wash-room-02.jpg";
import bathroom03 from "@/assets/wash-room-03.jpg";

/*
|--------------------------------------------------------------------------
| Other property image
|--------------------------------------------------------------------------
*/

import corridor from "@/assets/corridor.jpg";

/*
|--------------------------------------------------------------------------
| Image Registry
|--------------------------------------------------------------------------
*/

export const images = {
  /*
  |--------------------------------------------------------------------------
  | Hero
  |--------------------------------------------------------------------------
  */

  hero: [
    room01,
    room05,
    room10,
  ],

  /*
  |--------------------------------------------------------------------------
  | Banner
  |--------------------------------------------------------------------------
  */

  banner: room09,

  /*
  |--------------------------------------------------------------------------
  | Intro
  |--------------------------------------------------------------------------
  */

  intro: [
    room10,
    room01,
  ],

  /*
  |--------------------------------------------------------------------------
  | About
  |--------------------------------------------------------------------------
  */

  about: room13,

  /*
  |--------------------------------------------------------------------------
  | CTA
  |--------------------------------------------------------------------------
  */

  cta: room04,

  /*
  |--------------------------------------------------------------------------
  | Room Types
  |--------------------------------------------------------------------------
  |
  | Room categories based on the actual JC Residency details.
  |
  */

  rooms: {
    kingSize: [
      room01,
      room02,
      room03,
      room04,
      room05,
      room06,
    ],

    queenSize: [
      room07,
      room08,
      room09,
      room10,
      room11,
      room12,
    ],

    double: [
      room13,
      room14,
      room15,
      room16,
      room17,
      room18,
    ],
  },

  /*
  |--------------------------------------------------------------------------
  | Bathrooms
  |--------------------------------------------------------------------------
  */

  bathrooms: [
    bathroom01,
    bathroom02,
    bathroom03,
  ],

  /*
  |--------------------------------------------------------------------------
  | Gallery
  |--------------------------------------------------------------------------
  */

  gallery: {
    bedrooms: {
      room01,
      room02,
      room03,
      room04,
      room05,
      room06,
      room07,
      room08,
      room09,
      room10,
      room11,
      room12,
      room13,
      room14,
      room15,
      room16,
      room17,
      room18,
    },

    bathrooms: {
      bathroom01,
      bathroom02,
      bathroom03,
    },
  },

  /*
  |--------------------------------------------------------------------------
  | Other
  |--------------------------------------------------------------------------
  */

  corridor,
};