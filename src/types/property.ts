import type { IconName } from "./icon";

export interface Highlight {
  icon: IconName;
  title: string;
  description: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Property {
  name: string;
  shortName: string;
  tagline: string;

  currency: {
    code: string;
    locale: string;
  };

  location: {
    latitude: number;
    longitude: number;
  };

  hero: {
    eyebrow: string;
    subtitle: string;
    images: string[];
  };

  banner: string;

  intro: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    images: string[];
    highlights: Highlight[];
  };

  about: {
    title: string;
    story: string[];
    image: string;
    values: Highlight[];
    suitableFor: string[];
    facilities: string[];
  };

  whyChoose: {
    title: string;
    subtitle: string;
    items: Highlight[];
  };

  atAGlance: Fact[];

  timings: {
    checkIn: string;
    checkOut: string;
  };

  policies: string[];

  cta: {
    title: string;
    subtitle: string;
    image: string;
  };

  seo: {
    title: string;
    description: string;
  };
}