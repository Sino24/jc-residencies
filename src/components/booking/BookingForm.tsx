import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { CheckCircle2, Mail, PencilLine } from "lucide-react";
import Button from "@/components/common/Button";
import { getRoomById, rooms } from "@/data/rooms";
import type { BookingFormValues } from "@/types";
import { formatPrice, nightsBetween, todayISO } from "@/utils/format";
import { WhatsAppIcon } from "@/utils/iconMap";
import { mailtoLink, whatsappLink } from "@/utils/links";
import { bookingMessage } from "@/utils/messages";
import styles from "./BookingForm.module.css";

type Channel = "whatsapp" | "email";

interface BookingFormProps {
  /** Pre-filled values, e.g. from the hero enquiry bar or a room page */
  defaults?: Partial<BookingFormValues>;
}

interface FieldProps {
  label: string;
  error?: string;
  optional?: boolean;
  wide?: boolean;
  children: ReactNode;
}

function Field({ label, error, optional, wide, children }: FieldProps) {
  return (
    <label className={`${styles.field} ${wide ? styles.wide : ""}`}>
      <span className={styles.label}>
        {label} {optional && <em>(optional)</em>}
      </span>
      {children}
      {error && <span className={styles.error} role="alert">{error}</span>}
    </label>
  );
}

export default function BookingForm({ defaults }: BookingFormProps) {
  const today = todayISO();
  const [sent, setSent] = useState<{ channel: Channel; link: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    mode: "onTouched",
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      roomId: "",
      checkIn: "",
      checkOut: "",
      guests: 2,
      message: "",
      ...defaults,
    },
  });

  const [roomId, checkIn, checkOut] = watch(["roomId", "checkIn", "checkOut"]);
  const selectedRoom = getRoomById(roomId);
  const nights = nightsBetween(checkIn, checkOut);

  const submit = (channel: Channel) =>
    handleSubmit((values) => {
      const room = getRoomById(values.roomId);
      const message = bookingMessage(values, room);
      const link =
        channel === "whatsapp"
          ? whatsappLink(message)
          : mailtoLink(`Booking enquiry${room ? ` – ${room.name}` : ""}`, message);

      if (channel === "whatsapp") window.open(link, "_blank", "noopener,noreferrer");
      else window.location.href = link;

      setSent({ channel, link });
    });

  if (sent) {
    const viaWhatsApp = sent.channel === "whatsapp";
    return (
      <div className={styles.sent} role="status">
        <CheckCircle2 size={40} strokeWidth={1.4} aria-hidden="true" />
        <h3>Your request is ready to send</h3>
        <p>
          {viaWhatsApp
            ? "WhatsApp should have opened with your details filled in. Press send there and we will reply to confirm availability."
            : "Your email app should have opened with your details filled in. Press send there and we will reply to confirm availability."}
        </p>
        <div className={styles.sentActions}>
          <Button href={sent.link} external={viaWhatsApp} variant={viaWhatsApp ? "whatsapp" : "secondary"} icon={viaWhatsApp ? <WhatsAppIcon size={18} /> : <Mail size={18} />}>
            {viaWhatsApp ? "Open WhatsApp again" : "Open email again"}
          </Button>
          <Button variant="outline" icon={<PencilLine size={17} />} onClick={() => setSent(null)}>
            Edit request
          </Button>
          <Button variant="ghost" onClick={() => { reset(); setSent(null); }}>
            Start a new enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit("whatsapp")} noValidate>
      <div className={styles.grid}>
        <Field label="Full name" error={errors.name?.message}>
          <input
            className={styles.input}
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name", {
              required: "Please enter your name.",
              minLength: { value: 2, message: "Name is too short." },
            })}
          />
        </Field>

        <Field label="Phone number" error={errors.phone?.message}>
          <input
            className={styles.input}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            {...register("phone", {
              required: "Please enter a phone number.",
              pattern: { value: /^\+?[\d\s-]{8,16}$/, message: "Enter a valid phone number." },
            })}
          />
        </Field>

        <Field label="Email" optional error={errors.email?.message}>
          <input
            className={styles.input}
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email", {
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address." },
            })}
          />
        </Field>

        <Field label="Room" error={errors.roomId?.message}>
          <select
            className={styles.input}
            aria-invalid={!!errors.roomId}
            {...register("roomId", { required: "Please choose a room." })}
          >
            <option value="">Select a room</option>
            {rooms.map((room) => (
              <option key={room.id} value={room.id}>
                {room.name} — {formatPrice(room.price)} / night
              </option>
            ))}
          </select>
        </Field>

        <Field label="Check-in" error={errors.checkIn?.message}>
          <input
            className={styles.input}
            type="date"
            min={today}
            aria-invalid={!!errors.checkIn}
            {...register("checkIn", {
              required: "Choose a check-in date.",
              validate: (v) => v >= today || "Check-in cannot be in the past.",
            })}
          />
        </Field>

        <Field label="Check-out" error={errors.checkOut?.message}>
          <input
            className={styles.input}
            type="date"
            min={checkIn || today}
            aria-invalid={!!errors.checkOut}
            {...register("checkOut", {
              required: "Choose a check-out date.",
              validate: (v, form) => v > form.checkIn || "Check-out must be after check-in.",
            })}
          />
        </Field>

        <Field label="Guests" error={errors.guests?.message}>
          <input
            className={styles.input}
            type="number"
            min={1}
            max={10}
            inputMode="numeric"
            aria-invalid={!!errors.guests}
            {...register("guests", {
              valueAsNumber: true,
              required: "Enter the number of guests.",
              min: { value: 1, message: "At least 1 guest." },
              validate: (v, form) => {
                const room = getRoomById(form.roomId);
                return !room || v <= room.capacity || `The ${room.name} sleeps up to ${room.capacity} guests.`;
              },
            })}
          />
        </Field>

        <Field label="Message" optional wide>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            rows={4}
            placeholder="Arrival time, special requests, questions…"
            {...register("message")}
          />
        </Field>
      </div>

      {selectedRoom && nights > 0 && (
        <p className={styles.estimate}>
          {nights} night{nights > 1 ? "s" : ""} × {formatPrice(selectedRoom.price)} ={" "}
          <strong>{formatPrice(selectedRoom.price * nights)}</strong>
          <span> estimated. We confirm the final price when we reply.</span>
        </p>
      )}

      <div className={styles.actions}>
        <Button type="submit" variant="whatsapp" size="lg" icon={<WhatsAppIcon size={18} />}>
          Send on WhatsApp
        </Button>
        <Button variant="outline" size="lg" icon={<Mail size={18} />} onClick={submit("email")}>
          Send by email
        </Button>
      </div>

      <p className={styles.note}>
        Nothing is sent until you press send in WhatsApp or your email app. No payment is taken online.
      </p>
    </form>
  );
}
