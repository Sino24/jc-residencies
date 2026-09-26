import { property } from "@/data/property";
import type { BookingFormValues, Room } from "@/types";
import { formatDate, nightsBetween } from "./format";

export const generalEnquiryMessage = () =>
  `Hello ${property.name},\n\nI would like to enquire about your rooms.\n\nPlease provide more information about availability and pricing.`;

export const roomEnquiryMessage = (room: Room) =>
  `Hello ${property.name},\n\nI am interested in booking the ${room.name}.\n\nPlease let me know the availability and price.`;

export const bookingMessage = (values: BookingFormValues, room?: Room) => {
  const nights = nightsBetween(values.checkIn, values.checkOut);
  const stay = nights ? ` (${nights} night${nights > 1 ? "s" : ""})` : "";

  const details = [
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email ? `Email: ${values.email}` : "",
    `Room: ${room ? room.name : "Not sure yet"}`,
    `Check-in: ${formatDate(values.checkIn)}`,
    `Check-out: ${formatDate(values.checkOut)}${stay}`,
    `Guests: ${values.guests}`,
  ]
    .filter(Boolean)
    .join("\n");

  const note = values.message ? `\n\nMessage: ${values.message}` : "";

  return `Hello ${property.name},\n\nI would like to request a booking.\n\n${details}${note}\n\nPlease confirm availability and the total price.`;
};
