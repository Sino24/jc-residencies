import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import ServiceGrid from "@/components/services/ServiceGrid";
import { featuredServices } from "@/data/services";
import styles from "./ServicesPreview.module.css";

export default function ServicesPreview() {
  return (
    <section className="section">
      <Container>
        <SectionTitle
          eyebrow="Services and amenities"
          title="Everything a comfortable stay needs"
          subtitle="The essentials are included with every room. Nothing to add at the desk."
        />
        <ServiceGrid services={featuredServices} />
        <div className={styles.more}>
          <Button to="/services" variant="outline">See all services</Button>
        </div>
      </Container>
    </section>
  );
}
