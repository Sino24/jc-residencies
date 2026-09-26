import type { Property } from "@/types";
import { images } from "./images";

/**
 * Everything the website says about the residency lives here.
 * Edit this file to change copy — no component changes needed.
 */
export const property: Property = {
  name: "JC Residencies",
  shortName: "JC",
  tagline: "Comfortable stays, warm welcome",
  currency: { code: "INR", locale: "en-IN" },

  hero: {
    eyebrow: "Rooms you can book directly",
    subtitle:
      "Quiet, well-kept rooms with the things that matter: clean linen, hot water, fast Wi-Fi and a reception that answers at any hour.",
    images: images.hero,
  },

  banner: images.banner,

  intro: {
    eyebrow: "About the residency",
    title: "A calm place to stay, run by people who live nearby",
    paragraphs: [
      "JC Residencies is a family-run residence built for guests who want a comfortable room without the fuss of a large hotel. Every room is cleaned daily, every bed is freshly made, and the team at the front desk knows the area well.",
      "Whether you are here for work, a family visit or a few days of rest, we keep things simple: honest prices, clear information and quick answers when you get in touch.",
    ],
    images: images.intro,
    highlights: [
      {
        icon: "bed",
        title: "Rooms for every stay",
        description: "From a compact standard room to a family suite.",
      },
      {
        icon: "clock",
        title: "Reception around the clock",
        description: "Late arrival? Someone is always at the desk.",
      },
      {
        icon: "wallet",
        title: "Pay at the property",
        description: "Confirm with us directly. No online payment needed.",
      },
      {
        icon: "shield",
        title: "Safe and secure",
        description: "CCTV in common areas and a well-lit entrance.",
      },
    ],
  },

  about: {
    title: "Our story",
    story: [
      "JC Residencies began with a simple idea: guests should feel looked after from the moment they arrive. We started with a handful of rooms and grew by listening to what visitors asked for — better beds, reliable hot water, a quiet corner to work, a place to park.",
      "Today the residence offers a range of rooms, each kept to the same standard. Our team handles everything in person, so the person who answers your message is the person who prepares your room.",
      "We do not run an online booking engine. You tell us your dates, we confirm availability the same day, and you pay when you arrive. It keeps prices fair and the process human.",
    ],
    image: images.about,
    values: [
      {
        icon: "sparkles",
        title: "Cleanliness first",
        description:
          "Rooms are cleaned daily and inspected before every check-in.",
      },
      {
        icon: "heart",
        title: "Hospitality",
        description:
          "Friendly, attentive service without being intrusive.",
      },
      {
        icon: "badgeCheck",
        title: "Honest pricing",
        description:
          "The rate we quote is the rate you pay. No hidden charges.",
      },
    ],
    suitableFor: [
      "Business travellers",
      "Families",
      "Couples",
      "Pilgrims and tourists",
      "Long stays",
      "Medical visits",
    ],
    facilities: [
      "Air-conditioned rooms",
      "Free Wi-Fi throughout",
      "Covered parking",
      "24-hour hot water",
      "Daily housekeeping",
      "Power backup",
      "Laundry on request",
      "Travel desk",
    ],
  },

  whyChoose: {
    title: "Why guests book with us directly",
    subtitle:
      "No agents, no platform fees. You talk to the residence and get the best rate.",
    items: [
      {
        icon: "wallet",
        title: "Best direct rate",
        description:
          "Booking with us avoids commission, and we pass the saving on to you.",
      },
      {
        icon: "phone",
        title: "Quick replies",
        description:
          "We answer WhatsApp and calls promptly, usually within minutes.",
      },
      {
        icon: "mapPin",
        title: "Easy to reach",
        description:
          "Close to the main road, with clear directions and parking on site.",
      },
      {
        icon: "thumbsUp",
        title: "Flexible arrangements",
        description:
          "Early check-in or late check-out can often be arranged. Just ask.",
      },
    ],
  },

  atAGlance: [
    { label: "Check-in", value: "From 12:00 PM" },
    { label: "Check-out", value: "By 11:00 AM" },
    { label: "Reception", value: "24 hours" },
    { label: "Payment", value: "At the property" },
    { label: "Parking", value: "Free, on site" },
  ],

  timings: { checkIn: "12:00 PM", checkOut: "11:00 AM" },

  policies: [
    "A valid photo ID is required for every guest at check-in.",
    "Bookings are confirmed by the residence after you enquire. Payment is made directly to us.",
    "Early check-in and late check-out depend on availability.",
    "Smoking is not permitted inside the rooms.",
  ],

  cta: {
    title: "Planning a stay?",
    subtitle:
      "Send us your dates and we will confirm availability the same day.",
    image: images.cta,
  },

  seo: {
    title: "JC Residencies | Comfortable Rooms with Direct Booking",
    description:
      "JC Residencies offers comfortable, well-kept rooms with friendly hospitality. View rooms, facilities and location, then enquire directly on WhatsApp or email.",
  },
};
