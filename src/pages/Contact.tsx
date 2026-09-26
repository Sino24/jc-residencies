import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import BookingForm from "@/components/booking/BookingForm";
import Container from "@/components/common/Container";
import PageIntro from "@/components/common/PageIntro";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import ContactInfo from "@/components/contact/ContactInfo";
import { getRoomById } from "@/data/rooms";
import { property } from "@/data/property";
import { usePageMeta } from "@/hooks/usePageMeta";
import type { BookingFormValues } from "@/types";
import styles from "./Contact.module.css";

const isDate = (value: string | null): value is string => !!value && /^\d{4}-\d{2}-\d{2}$/.test(value);

export default function Contact() {
  usePageMeta("Contact", `Call, WhatsApp or email ${property.name}, or send a booking enquiry.`);
  const [params] = useSearchParams();
  const query = params.toString();

  // Pre-fill the form from ?room=&checkIn=&checkOut=&guests=
  const defaults = useMemo<Partial<BookingFormValues>>(() => {
    const room = getRoomById(params.get("room") ?? undefined);
    const checkIn = params.get("checkIn");
    const checkOut = params.get("checkOut");
    const guests = Number(params.get("guests"));
    return {
      ...(room && { roomId: room.id }),
      ...(isDate(checkIn) && { checkIn }),
      ...(isDate(checkOut) && { checkOut }),
      ...(guests >= 1 && guests <= 10 && { guests }),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <PageIntro
        title="Contact and booking"
        subtitle="Send us your dates or just say hello. We reply the same day."
      />

      <section className="section">
        <Container className={styles.grid}>
          <div className={styles.info}>
            <SectionTitle title="Get in touch" />
            <Reveal>
              <ContactInfo />
            </Reveal>
          </div>

          <div id="booking" className={styles.booking}>
            <SectionTitle
              title="Booking enquiry"
              subtitle={`Tell us when you would like to stay. We check availability and confirm directly. Check-in is from ${property.timings.checkIn}, check-out by ${property.timings.checkOut}.`}
            />
            <Reveal>
              <BookingForm key={query} defaults={defaults} />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
