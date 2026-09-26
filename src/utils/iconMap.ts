import {
  AirVent, BadgeCheck, BedDouble, Bath, Briefcase, Building2, Bus, Camera,
  CarFront, Church, Clock, Coffee, ConciergeBell, Gem, Headset, Heart,
  Hospital, KeyRound, Landmark, Leaf, Mail, MapPin, Phone, Plane,
  Refrigerator, Ruler, ShieldCheck, ShoppingBag, ShowerHead, Sofa, Sparkles,
  Star, Sun, ThumbsUp, TrainFront, Trees, Tv, Users, Utensils, Wallet,
  WashingMachine, Wifi, Zap,
  type LucideIcon,
} from "lucide-react";
import {
  FaFacebookF, FaInstagram, FaXTwitter, FaYoutube, FaWhatsapp,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import type { IconName, SocialPlatform } from "@/types";

/** Data files reference icons by name; this maps the name to the component. */
export const iconMap: Record<IconName, LucideIcon> = {
  wifi: Wifi,
  parking: CarFront,
  ac: AirVent,
  tv: Tv,
  bath: Bath,
  hotWater: ShowerHead,
  roomService: ConciergeBell,
  support: Headset,
  housekeeping: Sparkles,
  bed: BedDouble,
  users: Users,
  coffee: Coffee,
  shield: ShieldCheck,
  key: KeyRound,
  mapPin: MapPin,
  utensils: Utensils,
  leaf: Leaf,
  clock: Clock,
  phone: Phone,
  mail: Mail,
  star: Star,
  heart: Heart,
  camera: Camera,
  sofa: Sofa,
  building: Building2,
  laundry: WashingMachine,
  power: Zap,
  ruler: Ruler,
  landmark: Landmark,
  hospital: Hospital,
  train: TrainFront,
  plane: Plane,
  shopping: ShoppingBag,
  temple: Church,
  gem: Gem,
  thumbsUp: ThumbsUp,
  badgeCheck: BadgeCheck,
  wallet: Wallet,
  fridge: Refrigerator,
  briefcase: Briefcase,
  bus: Bus,
  sparkles: Sparkles,
  sun: Sun,
  trees: Trees,
};

/** Brand icons (Lucide has none) come from react-icons. */
export const socialIconMap: Record<SocialPlatform, IconType> = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
  x: FaXTwitter,
};

export const WhatsAppIcon = FaWhatsapp;
