import Container from "./Container";
import styles from "./PageIntro.module.css";

interface PageIntroProps {
  title: string;
  subtitle?: string;
}

// Rendered at the top of every page except Home (Home uses <Hero /> instead).
// The "page-intro" class (plain, not CSS-module-scoped) is a marker that
// global.css uses to also beige-out the .section content that follows it —
// see the ".page-intro ~ .section" rule in global.css. Because Home never
// renders this component, that rule can never affect Home.
export default function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <section className={`${styles.intro} page-intro`}>
      <Container>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </Container>
    </section>
  );
}