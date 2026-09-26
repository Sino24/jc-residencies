import { MapPin } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import MapEmbed from "@/components/location/MapEmbed";
import NearbyPlaces from "@/components/location/NearbyPlaces";
import { directionsUrl, formatAddress } from "@/utils/links";
import styles from "./LocationPreview.module.css";

export default function LocationPreview() {
  return (
    <section className="section section-alt">
      <Container className={styles.grid}>
        <div className={styles.text}>
          <SectionTitle title="Easy to find" subtitle="Close to the main road with parking on site." />
          <Reveal className={styles.body}>
            <div className={styles.address}>
              <MapPin size={20} aria-hidden="true" />
              <address>{formatAddress(true)}</address>
            </div>
            <NearbyPlaces />
            <div className={styles.actions}>
              <Button href={directionsUrl()} external>Get directions</Button>
              <Button to="/location" variant="outline">Location details</Button>
            </div>
          </Reveal>
        </div>

        <Reveal className={styles.map}>
          <MapEmbed />
        </Reveal>
      </Container>
    </section>
  );
}
