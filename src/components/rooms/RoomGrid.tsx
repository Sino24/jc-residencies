import Reveal from "@/components/common/Reveal";
import type { Room } from "@/types";
import RoomCard from "./RoomCard";
import styles from "./RoomGrid.module.css";

export default function RoomGrid({ rooms }: { rooms: Room[] }) {
  return (
    <div className={styles.grid}>
      {rooms.map((room, i) => (
        <Reveal key={room.id} className="h-full" delay={(i % 3) * 80}>
          <RoomCard room={room} />
        </Reveal>
      ))}
    </div>
  );
}
