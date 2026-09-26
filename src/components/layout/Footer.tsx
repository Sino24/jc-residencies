import { Link } from "react-router-dom";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/common/Container";
import { contact } from "@/data/contact";
import { mainNav } from "@/data/navigation";
import { property } from "@/data/property";
import { socialIconMap, WhatsAppIcon } from "@/utils/iconMap";
import { emailLink, formatAddress, telLink, whatsappLink } from "@/utils/links";
import { generalEnquiryMessage } from "@/utils/messages";
import Logo from "./Logo";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo />
            <p>{property.seo.description}</p>
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

          <nav aria-label="Footer">
            <h3 className={styles.heading}>Explore</h3>
            <ul className={styles.list}>
              {mainNav.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={styles.link}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className={styles.heading}>Contact</h3>
            <ul className={styles.list}>
              <li className={styles.row}>
                <Phone size={16} aria-hidden="true" />
                <a href={telLink} className={styles.link}>{contact.phoneDisplay}</a>
              </li>
              <li className={styles.row}>
                <WhatsAppIcon size={16} aria-hidden="true" />
                <a href={whatsappLink(generalEnquiryMessage())} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Chat on WhatsApp
                </a>
              </li>
              <li className={styles.row}>
                <Mail size={16} aria-hidden="true" />
                <a href={emailLink} className={styles.link}>{contact.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Find us</h3>
            <ul className={styles.list}>
              <li className={styles.row}>
                <MapPin size={16} aria-hidden="true" />
                <address>{formatAddress()}</address>
              </li>
              {contact.hours.map((h) => (
                <li key={h.label} className={styles.row}>
                  <Clock size={16} aria-hidden="true" />
                  <span>{h.label}: {h.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {year} {property.name}. All rights reserved.</p>
          <p>Bookings are confirmed directly with the residence.</p>
        </div>
      </Container>
    </footer>
  );
}
