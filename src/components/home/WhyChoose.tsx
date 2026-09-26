import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import { property } from "@/data/property";
import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  const { whyChoose } = property;

  return (
    <section className="section section-dark">
      <Container className={styles.grid}>
        <SectionTitle title={whyChoose.title} subtitle={whyChoose.subtitle} light className={styles.title} />

        <Reveal>
          <ul className={styles.list}>
            {whyChoose.items.map((item) => (
              <li key={item.title} className={styles.item}>
                <Icon name={item.icon} size={26} />
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
