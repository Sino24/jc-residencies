import Icon from "@/components/common/Icon";
import type { Amenity } from "@/types";
import styles from "./RoomAmenities.module.css";

export default function RoomAmenities({ amenities }: { amenities: Amenity[] }) {
  return (
    <ul className={styles.list}>
      {amenities.map((item) => (
        <li key={item.label} className={styles.item}>
          <span className={styles.icon}><Icon name={item.icon} size={20} /></span>
          {item.label}
        </li>
      ))}
    </ul>
  );
}
