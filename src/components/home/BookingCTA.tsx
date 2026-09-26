import { Phone } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import { bookNowPath } from "@/data/navigation";
import { property } from "@/data/property";
import { WhatsAppIcon } from "@/utils/iconMap";
import { telLink, whatsappLink } from "@/utils/links";
import { generalEnquiryMessage } from "@/utils/messages";
import styles from "./BookingCTA.module.css";

export default function BookingCTA() {
  const { cta } = property;

  return (
    <section className={styles.cta}>
      <div className={styles.bg} style={{ backgroundImage: `url(${cta.image})` }} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
      <Container>
        <Reveal className={styles.inner}>
          <h2 className={styles.title}>{cta.title}</h2>
          <p className={styles.subtitle}>{cta.subtitle}</p>
          <div className={styles.actions}>
            <Button to={bookNowPath} size="lg">Send an enquiry</Button>
            <Button
              href={whatsappLink(generalEnquiryMessage())}
              external
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon size={18} />}
            >
              WhatsApp
            </Button>
            <Button href={telLink} variant="outlineLight" size="lg" icon={<Phone size={18} />}>
              Call us
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
