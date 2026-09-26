import BookingCTA from "@/components/home/BookingCTA";
import FeaturedRooms from "@/components/home/FeaturedRooms";
import GalleryPreview from "@/components/home/GalleryPreview";
import Hero from "@/components/home/Hero";
import LocationPreview from "@/components/home/LocationPreview";
import PropertyIntro from "@/components/home/PropertyIntro";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChoose from "@/components/home/WhyChoose";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Home() {
  usePageMeta();

  return (
    <>
      <Hero />
      <PropertyIntro />
      <FeaturedRooms />
      <ServicesPreview />
      <WhyChoose />
      <GalleryPreview />
      <LocationPreview />
      <BookingCTA />
    </>
  );
}
