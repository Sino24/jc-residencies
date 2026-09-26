import BookingCTA from "@/components/home/BookingCTA";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import ServiceGrid from "@/components/services/ServiceGrid";
import { services } from "@/data/services";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Services() {
  usePageMeta("Services", "Wi-Fi, parking, air conditioning, room service, 24/7 assistance and more at JC Residencies.");

  return (
    <>
      <PageIntro
        title="Services and amenities"
        subtitle="What is included with your stay, and what we can arrange on request."
      />
      <section className="section">
        <Container>
          <ServiceGrid services={services} />
        </Container>
      </section>
      <BookingCTA />
    </>
  );
}
