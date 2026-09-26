import type { IconName } from "./icon";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  /** Shown in the home page preview */
  featured?: boolean;
}
