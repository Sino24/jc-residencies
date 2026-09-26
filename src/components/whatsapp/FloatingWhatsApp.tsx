import { useMatch } from "react-router-dom";
import { getRoomById } from "@/data/rooms";
import { useScrolled } from "@/hooks/useScrolled";
import { cx } from "@/utils/cx";
import { WhatsAppIcon } from "@/utils/iconMap";
import { whatsappLink } from "@/utils/links";
import { generalEnquiryMessage, roomEnquiryMessage } from "@/utils/messages";
import styles from "./FloatingWhatsApp.module.css";

/**
 * Fixed WhatsApp button. On a room page the message mentions that room.
 * Hidden until the page is scrolled a little, since it is pinned to the
 * viewport corner and would otherwise sit on top of the hero content that
 * happens to load in that same corner.
 */
export default function FloatingWhatsApp() {
  const match = useMatch("/rooms/:roomId");
  const room = getRoomById(match?.params.roomId);
  const message = room ? roomEnquiryMessage(room) : generalEnquiryMessage();
  const visible = useScrolled(140);

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(styles.fab, visible && styles.visible)}
      aria-label="Chat with us on WhatsApp"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <span className={styles.pulse} aria-hidden="true" />
      <WhatsAppIcon size={28} aria-hidden="true" />
      <span className={styles.label}>Chat with us</span>
    </a>
  );
}
