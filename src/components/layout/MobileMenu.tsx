import { useEffect, type CSSProperties } from "react";
import { NavLink } from "react-router-dom";
import { Phone, X } from "lucide-react";
import Button from "@/components/common/Button";
import { contact } from "@/data/contact";
import { bookNowPath, mainNav } from "@/data/navigation";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cx } from "@/utils/cx";
import { socialIconMap, WhatsAppIcon } from "@/utils/iconMap";
import { generalEnquiryMessage } from "@/utils/messages";
import { telLink, whatsappLink } from "@/utils/links";
import Logo from "./Logo";
import styles from "./MobileMenu.module.css";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useLockBodyScroll(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div id="mobile-menu" className={cx(styles.root, open && styles.open)} aria-hidden={!open}>
      <div className={styles.backdrop} onClick={onClose} />

      <aside className={styles.panel} aria-label="Mobile navigation">
        <div className={styles.top}>
          <Logo />
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close menu">
            <X size={26} strokeWidth={1.6} />
          </button>
        </div>

        <nav className={styles.links}>
          {mainNav.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) => cx(styles.link, isActive && styles.active)}
              style={{ "--i": i } as CSSProperties}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.footer}>
          <Button to={bookNowPath} fullWidth>Book now</Button>
          <Button
            href={whatsappLink(generalEnquiryMessage())}
            external
            variant="whatsapp"
            icon={<WhatsAppIcon size={18} />}
            fullWidth
          >
            WhatsApp us
          </Button>
          <Button href={telLink} variant="outlineLight" icon={<Phone size={18} />} fullWidth>
            {contact.phoneDisplay}
          </Button>

          <div className={styles.socials}>
            {contact.socials.map((s) => {
              const SocialIcon = socialIconMap[s.platform];
              return (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <SocialIcon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
