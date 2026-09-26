import { property } from "@/data/property";
import { mapEmbedUrl } from "@/utils/links";
import styles from "./MapEmbed.module.css";

export default function MapEmbed() {
  return (
    <div className={styles.frame}>
      <iframe
        title={`Map showing the location of ${property.name}`}
        src={mapEmbedUrl()}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}