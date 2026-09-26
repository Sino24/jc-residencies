import type { Room } from "@/types";

import { images } from "./images";

export const rooms: Room[] = [
  {
    id: "king-size-room",

    name: "King Size Room",

    tagline: "Spacious, comfortable and fully furnished",

    description:
      "A fully furnished air-conditioned room with an attached bathroom, designed for a comfortable stay. The room includes Wi-Fi, TV, hot water and an additional bed facility for up to three guests.",

    price: 2000,

    capacity: 3,

    beds: "1 king size bed + additional bed",

    size: "108 × 108",

    images: images.rooms.kingSize,

    amenities: [
      { label: "Air conditioning", icon: "ac" },
      { label: "Free Wi-Fi", icon: "wifi" },
      { label: "Attached bathroom", icon: "bath" },
      { label: "Television", icon: "tv" },
      { label: "Hot water", icon: "hotWater" },
      { label: "Free parking", icon: "parking" },
    ],

    features: [
      "Fully furnished",
      "Additional bed facility",
      "Cupboard / almari",
      "Dressing table with mirror",
      "Daily housekeeping",
      "Complimentary drinking water",
    ],

    badge: "Most booked",

    featured: true,
  },

  {
    id: "queen-size-room",

    name: "Queen Size Room",

    tagline: "Comfortable and great value",

    description:
      "A fully furnished air-conditioned room with an attached bathroom and essential amenities. A comfortable choice for guests looking for a convenient and budget-friendly stay in Pala.",

    price: 1600,

    capacity: 3,

    beds: "1 queen size bed + additional bed",

    size: "90 × 108",

    images: images.rooms.queenSize,

    amenities: [
      { label: "Air conditioning", icon: "ac" },
      { label: "Free Wi-Fi", icon: "wifi" },
      { label: "Attached bathroom", icon: "bath" },
      { label: "Television", icon: "tv" },
      { label: "Hot water", icon: "hotWater" },
      { label: "Free parking", icon: "parking" },
    ],

    features: [
      "Fully furnished",
      "Additional bed facility",
      "Cupboard with dressing table",
      "Mirror",
      "Daily housekeeping",
      "Complimentary drinking water",
    ],

    badge: "Best value",

    featured: true,
  },

  {
    id: "double-room",

    name: "Double Room",

    tagline: "Simple, comfortable and affordable",

    description:
      "A fully furnished air-conditioned double room with an attached bathroom and the essential amenities you need for a comfortable stay. A practical choice for couples, families and short stays.",

    price: 1300,

    capacity: 2,

    beds: "1 double bed",

    size: "90 × 108",

    images: images.rooms.double,

    amenities: [
      { label: "Air conditioning", icon: "ac" },
      { label: "Free Wi-Fi", icon: "wifi" },
      { label: "Attached bathroom", icon: "bath" },
      { label: "Television", icon: "tv" },
      { label: "Hot water", icon: "hotWater" },
      { label: "Free parking", icon: "parking" },
    ],

    features: [
      "Fully furnished",
      "Cupboard with dressing table",
      "Daily housekeeping",
      "Complimentary drinking water",
    ],

    badge: "Best value",

    featured: true,
  },
];

export const getRoomById = (id: string | undefined) =>
  rooms.find((room) => room.id === id);

export const featuredRooms = rooms.filter((room) => room.featured);