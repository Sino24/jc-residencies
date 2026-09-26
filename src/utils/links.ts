import { contact } from "@/data/contact";

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

export const mailtoLink = (subject: string, body: string) =>
  `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const telLink = `tel:${contact.phone}`;

export const emailLink = `mailto:${contact.email}`;

export const mapEmbedUrl = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(contact.map.query)}&z=${contact.map.zoom}&output=embed`;

export const directionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contact.map.query)}`;

export const formatAddress = (multiline = false) => {
  const a = contact.address;
  const parts = [a.line1, a.line2, `${a.city}, ${a.state} ${a.pincode}`, a.country];
  return parts.join(multiline ? "\n" : ", ");
};
