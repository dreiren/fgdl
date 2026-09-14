import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { InquiryForm } from "@/components/inquiry-form";
import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui";
import { firm } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a confidential consultation with FGDLaw in San Miguel, Manila.",
};

const details: Array<{
  icon: LucideIcon;
  title: string;
  body: string;
  href?: string;
}> = [
  {
    icon: MapPin,
    title: "Office Address",
    body: firm.address.full,
    href: firm.mapsUrl,
  },
  {
    icon: Phone,
    title: "Phone",
    body: firm.phoneDisplay,
    href: `tel:${firm.phoneTel}`,
  },
  {
    icon: Mail,
    title: "Email",
    body: firm.email,
    href: `mailto:${firm.email}`,
  },
  {
    icon: Clock,
    title: "Office Hours",
    body: firm.hours,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's discuss your legal matter"
        description="Schedule a confidential consultation with our Manila team. Tell us briefly what you need, and we will follow up using the email you provide."
      />
      <section className="bg-cream py-16 md:py-20">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ul className="space-y-6">
            {details.map((item) => {
              const Icon = item.icon;
              const body = item.href ? (
                <a
                  href={item.href}
                  className="hover:text-navy"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.body}
                </a>
              ) : (
                item.body
              );
              return (
                <li key={item.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-navy/55 shadow-sm">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
          <InquiryForm />
        </Container>
      </section>
    </>
  );
}
