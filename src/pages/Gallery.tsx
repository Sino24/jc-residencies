import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import BookingCTA from "@/components/home/BookingCTA";
import { gallery } from "@/data/gallery";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Gallery() {
  usePageMeta("Gallery", "Photos of the rooms, common areas and exterior of JC Residencies.");

  return (
    <>
      <PageIntro
        title="Gallery"
        subtitle="Photos of the rooms, common areas and the property. Tap any image to view it full size."
      />
      <section className="section">
        <Container>
          <GalleryGrid items={gallery} />
        </Container>
      </section>
      <BookingCTA />
    </>
  );
}
