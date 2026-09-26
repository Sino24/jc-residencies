import { Link } from "react-router-dom";
import { BedDouble, Ruler, Users } from "lucide-react";
import Button from "@/components/common/Button";
import SmartImage from "@/components/common/SmartImage";
import type { Room } from "@/types";
import { formatPrice } from "@/utils/format";
import styles from "./RoomCard.module.css";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <article className={styles.card}>
      <Link to={`/rooms/${room.id}`} className={styles.media} aria-label={`View ${room.name}`}>
        <SmartImage src={room.images[0]} alt={room.name} />
        {room.badge && <span className={styles.badge}>{room.badge}</span>}
      </Link>

      <div className={styles.head}>
        <h3 className={styles.title}>
          <Link to={`/rooms/${room.id}`}>{room.name}</Link>
        </h3>
        <p className={styles.price}>
          {formatPrice(room.price)} <small>/ night</small>
        </p>
      </div>

      <p className={styles.tagline}>{room.tagline}</p>

      <ul className={styles.meta}>
        <li><Users size={16} aria-hidden="true" /> Up to {room.capacity} guests</li>
        <li><BedDouble size={16} aria-hidden="true" /> {room.beds}</li>
        <li><Ruler size={16} aria-hidden="true" /> {room.size}</li>
      </ul>

      <div className={styles.actions}>
        <Button to={`/rooms/${room.id}`} variant="outline" size="sm">View details</Button>
        <Button to={`/contact?room=${room.id}#booking`} size="sm">Book now</Button>
      </div>
    </article>
  );
}
