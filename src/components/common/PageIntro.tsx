import Container from "./Container";
import Reveal from "./Reveal";
import styles from "./PageIntro.module.css";

interface PageIntroProps {
  title: string;
  subtitle?: string;
}

/**
 * Plain, no-banner page title used at the top of inner pages — just a
 * heading and an optional line of subtext, no image or breadcrumb.
 */
export default function PageIntro({ title, subtitle }: PageIntroProps) {
  return (
    <div className={styles.intro}>
      <Container>
        <Reveal className={styles.inner}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </Reveal>
      </Container>
    </div>
  );
}
