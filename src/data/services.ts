import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "wifi",
    title: "Free Wi-Fi",
    description:
      "Free Wi-Fi is available for guests throughout the property.",
    icon: "wifi",
    featured: true,
  },

  {
    id: "parking",
    title: "Free Parking",
    description:
      "Free on-site parking is available for cars and two-wheelers.",
    icon: "parking",
    featured: true,
  },

  {
    id: "ac",
    title: "Air Conditioning",
    description:
      "Fully furnished air-conditioned rooms for a comfortable stay.",
    icon: "ac",
    featured: true,
  },

  {
    id: "support",
    title: "24/7 Assistance",
    description:
      "Reception and guest assistance are available around the clock.",
    icon: "support",
    featured: true,
  },

  {
    id: "housekeeping",
    title: "Daily Housekeeping",
    description:
      "Rooms are maintained and cleaned regularly for a comfortable stay.",
    icon: "housekeeping",
    featured: true,
  },

  {
    id: "hot-water",
    title: "Hot Water",
    description:
      "Hot water is available for guests throughout the day.",
    icon: "hotWater",
    featured: true,
  },

  {
    id: "power",
    title: "Power Backup",
    description:
      "Power backup and generator facilities are available at the property.",
    icon: "power",
  },

  {
    id: "travel-assistance",
    title: "Travel Assistance",
    description:
      "Travel and taxi assistance is available for guests on request.",
    icon: "bus",
  },

  {
    id: "security",
    title: "CCTV Security",
    description:
      "CCTV surveillance is provided in common areas for added security.",
    icon: "shield",
  },

  {
    id: "food",
    title: "Food on Request",
    description:
      "Breakfast and food can be arranged on request.",
    icon: "utensils",
  },
];

export const featuredServices = services.filter((s) => s.featured);