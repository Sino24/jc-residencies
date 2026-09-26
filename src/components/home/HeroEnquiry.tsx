import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import { rooms } from "@/data/rooms";
import { todayISO } from "@/utils/format";
import styles from "./HeroEnquiry.module.css";

/** Quick availability bar. Sends the visitor to the booking form with the fields pre-filled. */
export default function HeroEnquiry() {
  const navigate = useNavigate();
  const today = todayISO();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [roomId, setRoomId] = useState("");

  const handleCheckIn = (value: string) => {
    setCheckIn(value);
    if (checkOut && checkOut <= value) setCheckOut("");
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (roomId) params.set("room", roomId);
    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    params.set("guests", guests);
    navigate({ pathname: "/contact", search: `?${params.toString()}`, hash: "#booking" });
  };

  return (
    <form className={styles.bar} onSubmit={onSubmit} aria-label="Check availability">
      <label className={styles.field}>
        <span>Check-in</span>
        <input type="date" min={today} value={checkIn} onChange={(e) => handleCheckIn(e.target.value)} />
      </label>
      <label className={styles.field}>
        <span>Check-out</span>
        <input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </label>
      <label className={styles.field}>
        <span>Guests</span>
        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <option key={n} value={n}>{n} guest{n > 1 ? "s" : ""}</option>
          ))}
        </select>
      </label>
      <label className={styles.field}>
        <span>Room</span>
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="">Any room</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.id}>{room.name}</option>
          ))}
        </select>
      </label>
      <Button type="submit" size="lg" className={styles.submit}>Check availability</Button>
    </form>
  );
}
