import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { featuredRooms } from "@/data/rooms";
import RoomGrid from "@/components/rooms/RoomGrid";
import styles from "./FeaturedRooms.module.css";

export default function FeaturedRooms() {
  return (
    <section className="section section-alt">
      <Container>
        <div className={styles.head}>
          <SectionTitle
            title="Choose your room"
            subtitle="Every room is air-conditioned, cleaned daily and comes with free Wi-Fi and parking."
            className={styles.title}
          />
          <Button to="/rooms" variant="outline">View all rooms</Button>
        </div>
        <RoomGrid rooms={featuredRooms.slice(0, 3)} />
      </Container>
    </section>
  );
}
