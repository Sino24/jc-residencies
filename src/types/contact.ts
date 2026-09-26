import type { IconName, SocialPlatform } from "./icon";

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface NearbyPlace {
  name: string;
  distance: string;
  icon: IconName;
}

export interface ContactDetails {
  /** Dialable number with country code, e.g. +919876543210 */
  phone: string;
  phoneDisplay: string;
  /** WhatsApp number: country code + number, digits only */
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  hours: { label: string; value: string }[];
  /** Used for the embedded map and the directions button */
  map: { query: string; zoom: number };
  socials: SocialLink[];
  nearbyPlaces: NearbyPlace[];
}
