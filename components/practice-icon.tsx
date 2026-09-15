import {
  Building2,
  GraduationCap,
  HardHat,
  Heart,
  Lightbulb,
  Lock,
  Shield,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

const icons = {
  lightbulb: Lightbulb,
  building: Building2,
  hardhat: HardHat,
  shield: Shield,
  heart: Heart,
  graduation: GraduationCap,
  lock: Lock,
  users: Users,
  user: User,
} satisfies Record<string, LucideIcon>;

export function PracticeIcon({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon className={className} aria-hidden="true" />;
}
