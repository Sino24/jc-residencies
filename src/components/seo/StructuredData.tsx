import { useEffect } from "react";
import { contact } from "@/data/contact";
import { property } from "@/data/property";
import { rooms } from "@/data/rooms";

/** Injects schema.org JSON-LD (built from the data files) for search engines. */
export default function StructuredData() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      name: property.name,
      description: property.seo.description,
      image: property.banner,
      telephone: contact.phone,
      email: contact.email,
      priceRange: `From ${Math.min(...rooms.map((r) => r.price))} ${property.currency.code}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
        addressLocality: contact.address.city,
        addressRegion: contact.address.state,
        postalCode: contact.address.pincode,
        addressCountry: contact.address.country,
      },
      checkinTime: property.timings.checkIn,
      checkoutTime: property.timings.checkOut,
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
}
