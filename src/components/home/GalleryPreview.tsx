import { Link } from "react-router-dom";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Reveal from "@/components/common/Reveal";
import SectionTitle from "@/components/common/SectionTitle";
import SmartImage from "@/components/common/SmartImage";
import { featuredGallery } from "@/data/gallery";
import { cx } from "@/utils/cx";
import styles from "./GalleryPreview.module.css";

// 5 tiles fill a clean 4 x 2 block: wide + 1 + tall / 1 + wide.
// The photos here are all the same shape, so the variety comes from
// cropping (object-fit: cover) rather than from the source data.
const LAYOUT: Array<"normal" | "wide" | "tall"> = ["wide", "normal", "tall", "normal", "wide"];

export default function GalleryPreview() {
  return (
    <section className="section">
      <Container>
        <div className={styles.head}>
          <SectionTitle title="A look around" subtitle="Rooms, common areas and the property itself." className={styles.title} />
          <Button to="/gallery" variant="outline">Open the gallery</Button>
        </div>

        <Reveal>
          <div className={styles.grid}>
            {featuredGallery.slice(0, 5).map((item, index) => {
              const layout = item.layout ?? LAYOUT[index];
              return (
                <Link
                  key={item.id}
                  to="/gallery"
                  className={cx(styles.tile, layout === "wide" && styles.wide, layout === "tall" && styles.tall)}
                  aria-label={`${item.alt} — open gallery`}
                >
                  <SmartImage src={item.src} alt={item.alt} />
                </Link>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
