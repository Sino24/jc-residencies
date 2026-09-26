import { BedDouble, Clock, Phone, Users } from "lucide-react";
import Button from "@/components/common/Button";
import { property } from "@/data/property";
import type { Room } from "@/types";
import { formatPrice } from "@/utils/format";
import { WhatsAppIcon } from "@/utils/iconMap";
import { telLink, whatsappLink } from "@/utils/links";
import { roomEnquiryMessage } from "@/utils/messages";
import styles from "./RoomBooking.module.css";

export default function RoomBooking({ room }: { room: Room }) {
  return (
    <aside className={styles.panel} aria-label={`Book the ${room.name}`}>
      <p className={styles.price}>
        {formatPrice(room.price)} <small>per night</small>
      </p>

      <dl className={styles.facts}>
        <div><dt><Users size={16} aria-hidden="true" /> Guests</dt><dd>Up to {room.capacity}</dd></div>
        <div><dt><BedDouble size={16} aria-hidden="true" /> Bed</dt><dd>{room.beds}</dd></div>
        <div><dt><Clock size={16} aria-hidden="true" /> Check-in</dt><dd>{property.timings.checkIn}</dd></div>
        <div><dt><Clock size={16} aria-hidden="true" /> Check-out</dt><dd>{property.timings.checkOut}</dd></div>
      </dl>

      <div className={styles.actions}>
        <Button to={`/contact?room=${room.id}#booking`} size="lg" fullWidth>Book this room</Button>
        <Button
          href={whatsappLink(roomEnquiryMessage(room))}
          external
          variant="whatsapp"
          icon={<WhatsAppIcon size={18} />}
          fullWidth
        >
          Ask on WhatsApp
        </Button>
        <Button href={telLink} variant="outline" icon={<Phone size={17} />} fullWidth>
          Call the residency
        </Button>
      </div>

      <p className={styles.note}>
        No online payment. We confirm your dates first, and you pay at the property.
      </p>
    </aside>
  );
}
