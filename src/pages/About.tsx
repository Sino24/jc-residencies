import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Icon from "@/components/common/Icon";
import PageIntro from "@/components/common/PageIntro";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import SmartImage from "@/components/common/SmartImage";
import BookingCTA from "@/components/home/BookingCTA";
import WhyChoose from "@/components/home/WhyChoose";
import { property } from "@/data/property";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Check } from "lucide-react";
import styles from "./About.module.css";

export default function About() {
  const { about, atAGlance, policies } = property;
  usePageMeta("About", `Learn about ${property.name}, our story, facilities and who we host.`);

  return (
    <>
      <PageIntro
        title={`About ${property.name}`}
        subtitle={property.tagline}
      />

      <section className="section">
        <Container className={styles.story}>
          <Reveal className={styles.image}>
            <SmartImage src={about.image} alt={`${property.name} exterior`} />
          </Reveal>
          <div>
            <SectionTitle title={about.title} />
            <Reveal className={styles.text}>
              {about.story.map((paragraph, i) => (
                <p key={i} className={i === 0 ? "lead" : "text-muted"}>{paragraph}</p>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container>
          <SectionTitle title="What we stand for" />
          <Reveal>
            <ul className={styles.values}>
              {about.values.map((value) => (
                <li key={value.title} className={styles.value}>
                  <Icon name={value.icon} size={26} />
                  <h3 className={styles.vTitle}>{value.title}</h3>
                  <p>{value.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="section">
        <Container className={styles.facts}>
          <div>
            <SectionTitle title="At a glance" />
            <Reveal>
              <dl className={styles.glance}>
                {atAGlance.map((fact) => (
                  <div key={fact.label}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div>
            <SectionTitle title="Facilities" />
            <Reveal>
              <ul className={styles.checks}>
                {about.facilities.map((item) => (
                  <li key={item}><Check size={18} aria-hidden="true" /> {item}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container className={styles.facts}>
          <div>
            <SectionTitle title="Who we host" subtitle="Guests come to us for many reasons. These are the most common." />
            <Reveal>
              <ul className={styles.chips}>
                {about.suitableFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <SectionTitle title="House rules" />
            <Reveal>
              <ul className={styles.policies}>
                {policies.map((policy) => (
                  <li key={policy}>{policy}</li>
                ))}
              </ul>
              <div className={styles.cta}>
                <Button to="/contact#booking">Send a booking enquiry</Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <WhyChoose />
      <BookingCTA />
    </>
  );
}
