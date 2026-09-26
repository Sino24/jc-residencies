import { useEffect, useState, type CSSProperties } from "react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import { bookNowPath } from "@/data/navigation";
import { property } from "@/data/property";
import { cx } from "@/utils/cx";
import { WhatsAppIcon } from "@/utils/iconMap";
import { whatsappLink } from "@/utils/links";
import { generalEnquiryMessage } from "@/utils/messages";
import HeroEnquiry from "./HeroEnquiry";
import styles from "./Hero.module.css";

const delay = (ms: number) => ({ "--delay": `${ms}ms` }) as CSSProperties;

export default function Hero() {
  const { hero } = property;
  const [active, setActive] = useState(0);

  // Cross-fade between hero photos
  useEffect(() => {
    if (hero.images.length < 2) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % hero.images.length), 6500);
    return () => window.clearInterval(id);
  }, [hero.images.length]);

  return (
    <section className={styles.hero} aria-label="Welcome">
      <div className={styles.slides} aria-hidden="true">
        {hero.images.map((src, i) => (
          <div
            key={src}
            className={cx(styles.slide, i === active && styles.active)}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <Container className={styles.content}>
        <span className={cx(styles.eyebrow, "rise-in")} style={delay(100)}>{hero.eyebrow}</span>
        <h1 className={cx(styles.title, "rise-in")} style={delay(220)}>{property.name}</h1>
        <p className={cx(styles.subtitle, "rise-in")} style={delay(360)}>{hero.subtitle}</p>

        <div className={cx(styles.actions, "rise-in")} style={delay(500)}>
          <Button to="/rooms" size="lg">View rooms</Button>
          <Button to={bookNowPath} variant="outlineLight" size="lg">Book / enquire</Button>
          <Button
            href={whatsappLink(generalEnquiryMessage())}
            external
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon size={18} />}
          >
            WhatsApp
          </Button>
        </div>
      </Container>

      <div className={cx(styles.barWrap, "rise-in")} style={delay(700)}>
        <Container>
          <HeroEnquiry />
        </Container>
      </div>
    </section>
  );
}
