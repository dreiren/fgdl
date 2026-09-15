import { Mail, MapPin, Phone } from "lucide-react";
import { StickyNav } from "@/components/sticky-nav";
import { Container } from "@/components/ui";
import { firm } from "@/lib/site";

export function SiteHeader() {
  return (
    <>
      <div className="bg-navy text-[12px] text-white/80">
        <Container className="flex h-9 items-center justify-between gap-4">
          <p className="flex min-w-0 items-center gap-5">
            <a
              href={firm.mapsUrl}
              className="hidden items-center gap-1.5 hover:text-white sm:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              <span className="truncate">
                {firm.address.line1}, {firm.address.short}
              </span>
            </a>
            <a
              href={`tel:${firm.phoneTel}`}
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
              {firm.phoneDisplay}
            </a>
          </p>
          <a
            href={`mailto:${firm.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {firm.email}
          </a>
        </Container>
      </div>
      <header className="sticky top-0 z-50">
        <StickyNav />
      </header>
    </>
  );
}
