import Icon from "@/components/common/Icon";
import { contact } from "@/data/contact";
import styles from "./NearbyPlaces.module.css";

export default function NearbyPlaces() {
  return (
    <ul className={styles.list}>
      {contact.nearbyPlaces.map((place) => (
        <li key={place.name} className={styles.row}>
          <Icon name={place.icon} size={18} />
          <span className={styles.name}>{place.name}</span>
          <span className={styles.distance}>{place.distance}</span>
        </li>
      ))}
    </ul>
  );
}
