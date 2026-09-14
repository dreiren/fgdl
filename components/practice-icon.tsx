import {
  Activity,
  Building2,
  Heart,
  Shield,
  Star,
  User,
  type LucideIcon,
} from "lucide-react";
import type { PracticeArea } from "@/lib/site";

const icons: Record<PracticeArea["icon"], LucideIcon> = {
  building: Building2,
  shield: Shield,
  heart: Heart,
  star: Star,
  activity: Activity,
  user: User,
};

export function PracticeIcon({
  name,
  className,
}: {
  name: PracticeArea["icon"];
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
