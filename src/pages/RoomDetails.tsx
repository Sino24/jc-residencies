import { Check } from "lucide-react";
import { useParams } from "react-router-dom";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import RoomAmenities from "@/components/rooms/RoomAmenities";
import RoomBooking from "@/components/rooms/RoomBooking";
import RoomGallery from "@/components/rooms/RoomGallery";
import RoomGrid from "@/components/rooms/RoomGrid";
import { getRoomById, rooms } from "@/data/rooms";
import { usePageMeta } from "@/hooks/usePageMeta";
import NotFound from "./NotFound";
import styles from "./RoomDetails.module.css";

export default function RoomDetails() {
  const { roomId } = useParams();
  const room = getRoomById(roomId);

  usePageMeta(room?.name, room?.description);

  if (!room) return <NotFound message="We could not find that room." />;

  const others = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <>
      <PageIntro
        title={room.name}
        subtitle={room.tagline}
      />

      <section className="section">
        <Container className={styles.layout}>
          <div className={styles.main}>
            <RoomGallery images={room.images} name={room.name} />

            <Reveal className={styles.block}>
              <h2 className={styles.h2}>About this room</h2>
              <p className="lead">{room.description}</p>
              <ul className={styles.features}>
                {room.features.map((feature) => (
                  <li key={feature}><Check size={18} aria-hidden="true" /> {feature}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal className={styles.block}>
              <h2 className={styles.h2}>Amenities</h2>
              <RoomAmenities amenities={room.amenities} />
            </Reveal>
          </div>

          <div className={styles.side}>
            <RoomBooking room={room} />
          </div>
        </Container>
      </section>

      <section className="section section-alt">
        <Container>
          <SectionTitle title="Other rooms" />
          <RoomGrid rooms={others} />
          <div className={styles.back}>
            <Button to="/rooms" variant="outline">Back to all rooms</Button>
          </div>
        </Container>
      </section>
    </>
  );
}

