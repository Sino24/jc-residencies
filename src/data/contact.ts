import type { ContactDetails } from "@/types";

export const contact: ContactDetails = {
  phone: "+9847953921",
  phoneDisplay: "+9847953921",
  whatsapp: "919846504810",
  email: "jiyajoseph@gmail.com",

  address: {
    line1: "JC Residency, Mutholy, Brilliant Road",
    line2: "Near Nearby Smart Supermarket",
    city: "Pala",
    state: "Kerala",
    pincode: "686575",
    country: "India",
  },

  hours: [
    { label: "Reception", value: "Open 24 hours" },
    { label: "Check-in / Check-out", value: "24 hours" },
  ],

  map: {
    query: "JC Residency, Mutholy, Brilliant Road, Pala, Kerala",
    zoom: 15,
  },

  socials: [
    { platform: "facebook", label: "Facebook", url: "https://facebook.com/" },
    { platform: "instagram", label: "Instagram", url: "https://instagram.com/" },
    { platform: "youtube", label: "YouTube", url: "https://youtube.com/" },
  ],

  nearbyPlaces: [
    { name: "Bus Stand", distance: "50 m", icon: "bus" },
    { name: "Railway Station", distance: "25 km", icon: "train" },
    { name: "Airport", distance: "65 km", icon: "plane" },
    { name: "Hospital", distance: "3 km", icon: "hospital" },
    { name: "Pala Town", distance: "4 km", icon: "shopping" },
    { name: "St. Alphonsa Tomb & Pilgrim Centre", distance: "10 km", icon: "temple" },
  ],
};