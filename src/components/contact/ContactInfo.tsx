import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/contact";
import { WhatsAppIcon } from "@/utils/iconMap";
import { directionsUrl, emailLink, formatAddress, telLink, whatsappLink } from "@/utils/links";
import { generalEnquiryMessage } from "@/utils/messages";
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  return (
    <ul className={styles.grid}>
      <li className={styles.item}>
        <Phone size={22} aria-hidden="true" />
        <div>
          <h3 className={styles.label}>Call</h3>
          <a href={telLink} className={styles.value}>{contact.phoneDisplay}</a>
          <p className={styles.hint}>Tap to open your dialer</p>
        </div>
      </li>

      <li className={styles.item}>
        <WhatsAppIcon size={22} aria-hidden="true" />
        <div>
          <h3 className={styles.label}>WhatsApp</h3>
          <a href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer" className={styles.value}>
            Message us
          </a>
          <p className={styles.hint}>Usually replies within minutes</p>
        </div>
      </li>

      <li className={styles.item}>
        <Mail size={22} aria-hidden="true" />
        <div>
          <h3 className={styles.label}>Email</h3>
          <a href={emailLink} className={styles.value}>{contact.email}</a>
          <p className={styles.hint}>For longer enquiries</p>
        </div>
      </li>

      <li className={styles.item}>
        <MapPin size={22} aria-hidden="true" />
        <div>
          <h3 className={styles.label}>Visit</h3>
          <a href={directionsUrl()} target="_blank" rel="noopener noreferrer" className={styles.value}>
            <address>{formatAddress(true)}</address>
          </a>
          <p className={styles.hint}>Tap for directions</p>
        </div>
      </li>

      <li className={styles.item}>
        <Clock size={22} aria-hidden="true" />
        <div>
          <h3 className={styles.label}>Hours</h3>
          {contact.hours.map((h) => (
            <p key={h.label} className={styles.value}>{h.label}: {h.value}</p>
          ))}
        </div>
      </li>
    </ul>
  );
}
