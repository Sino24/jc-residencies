import type { LucideProps } from "lucide-react";
import type { IconName } from "@/types";
import { iconMap } from "@/utils/iconMap";

interface IconProps extends LucideProps {
  name: IconName;
}

/** Renders a Lucide icon from the name stored in the data files. */
export default function Icon({ name, ...props }: IconProps) {
  const Component = iconMap[name];
  return <Component aria-hidden="true" strokeWidth={1.6} {...props} />;
}
