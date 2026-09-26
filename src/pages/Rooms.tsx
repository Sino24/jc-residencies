import BookingCTA from "@/components/home/BookingCTA";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import RoomGrid from "@/components/rooms/RoomGrid";
import { rooms } from "@/data/rooms";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Rooms() {
  usePageMeta("Rooms", "Browse all rooms at JC Residencies with prices, bed types and amenities.");

  return (
    <>
      <PageIntro
        title="Our rooms"
        subtitle="Four room types, one standard of cleanliness. Rates are per night for the room, not per guest."
      />
      <section className="section">
        <Container>
          <RoomGrid rooms={rooms} />
        </Container>
      </section>
      <BookingCTA />
    </>
  );
}
