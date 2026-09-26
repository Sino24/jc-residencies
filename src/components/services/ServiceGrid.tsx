import Icon from "@/components/common/Icon";
import Reveal from "@/components/common/Reveal";
import type { Service } from "@/types";
import styles from "./ServiceGrid.module.css";

export default function ServiceGrid({ services }: { services: Service[] }) {
  return (
    <Reveal>
      <ul className={styles.grid}>
        {services.map((service) => (
          <li key={service.id} className={styles.item}>
            <span className={styles.icon}>
              <Icon name={service.icon} size={22} />
            </span>
            <div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.text}>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
