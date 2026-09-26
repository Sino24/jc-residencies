import { MapPin } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import BookingCTA from "@/components/home/BookingCTA";
import MapEmbed from "@/components/location/MapEmbed";
import NearbyPlaces from "@/components/location/NearbyPlaces";
import { property } from "@/data/property";
import { usePageMeta } from "@/hooks/usePageMeta";
import { directionsUrl, formatAddress } from "@/utils/links";
import styles from "./Location.module.css";

export default function Location() {
  usePageMeta("Location", `Find ${property.name} on the map, get directions and see what is nearby.`);

  return (
    <>
      <PageIntro
        title="Find us"
        subtitle="Get directions, see what is nearby and plan your arrival."
      />

      <section className="section">
        <Container className={styles.grid}>
          <Reveal className={styles.map}>
            <MapEmbed />
          </Reveal>

          <div className={styles.side}>
            <SectionTitle title={property.name} />
            <Reveal className={styles.body}>
              <div className={styles.address}>
                <MapPin size={20} aria-hidden="true" />
                <address>{formatAddress(true)}</address>
              </div>
              <Button href={directionsUrl()} external>Get directions</Button>

              <h3 className={styles.h3}>Nearby</h3>
              <NearbyPlaces />
              <p className={styles.note}>Distances are approximate. Call us for the easiest route from where you are arriving.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <BookingCTA />
    </>
  );
}
