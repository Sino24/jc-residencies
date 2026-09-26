import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import SmartImage from "@/components/common/SmartImage";
import { property } from "@/data/property";
import styles from "./PropertyIntro.module.css";

export default function PropertyIntro() {
  const { intro } = property;

  return (
    <section className="section">
      <Container className={styles.grid}>
        <Reveal className={styles.media}>
          <div className={styles.main}>
            <SmartImage src={intro.images[0]} alt={`${property.name} reception`} />
          </div>
          {intro.images[1] && (
            <div className={styles.sub}>
              <SmartImage src={intro.images[1]} alt={`A room at ${property.name}`} />
            </div>
          )}
        </Reveal>

        <div className={styles.content}>
          <SectionTitle eyebrow={intro.eyebrow} title={intro.title} />

          <Reveal className={styles.body}>
            {intro.paragraphs.map((text, i) => (
              <p key={i} className={i === 0 ? "lead" : "text-muted"}>{text}</p>
            ))}

            <ul className={styles.highlights}>
              {intro.highlights.map((item) => (
                <li key={item.title} className={styles.highlight}>
                  <Icon name={item.icon} size={22} />
                  <div>
                    <h3 className={styles.hTitle}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div>
              <Button to="/about" variant="outline">More about us</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
