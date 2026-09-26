import { contact } from "@/data/contact";

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const telLink = `tel:${contact.phone}`;

export const emailLink = `mailto:${contact.email}`;

/**
 * Exact JC Residencies Google Maps location
 *
 * Latitude:  9.699434
 * Longitude: 76.656151
 */
const MAP_LATITUDE = 9.699434;
const MAP_LONGITUDE = 76.656151;

const MAP_COORDINATES = `${MAP_LATITUDE},${MAP_LONGITUDE}`;

export const mapEmbedUrl = () =>
  `https://www.google.com/maps?q=${MAP_COORDINATES}&z=17&output=embed`;

export const directionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${MAP_COORDINATES}`;

export const mapLocationUrl = () =>
  `https://www.google.com/maps/?q=${MAP_COORDINATES}`;

export const formatAddress = (multiline = false) => {
  const a = contact.address;

  const parts = [
    a.line1,
    a.line2,
    `${a.city}, ${a.state} ${a.pincode}`,
    a.country,
  ];

  return parts.join(multiline ? "\n" : ", ");
};