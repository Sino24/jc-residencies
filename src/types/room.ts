import type { IconName } from "./icon";

export interface Amenity {
  label: string;
  icon: IconName;
}

export interface Room {
  id: string;
  name: string;
  tagline: string;
  description: string;
  /** Price per night in the currency set in property.ts */
  price: number;
  /** Maximum number of guests */
  capacity: number;
  beds: string;
  size: string;
  images: string[];
  amenities: Amenity[];
  features: string[];
  badge?: string;
  featured?: boolean;
}
