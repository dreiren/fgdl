import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { firm } from "@/lib/site";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fgdlaw.net"),
  title: {
    default: "FGDLaw | Established 2002",
    template: "%s | FGDLaw",
  },
  description: firm.description,
  keywords: [
    "FGDLaw",
    "Frederick G. Dedace",
    "Manila law firm",
    "labor law Philippines",
    "data privacy",
    "corporate counsel",
  ],
  openGraph: {
    title: "FGDLaw | Established 2002",
    description: firm.description,
    url: "https://fgdlaw.net",
    siteName: "FGDLaw",
    locale: "en_PH",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: firm.name,
  legalName: firm.legalName,
  url: "https://fgdlaw.net",
  email: firm.email,
  telephone: firm.phoneTel,
  foundingDate: String(firm.established),
  areaServed: ["PH", "Worldwide"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${firm.address.line1}, ${firm.address.line2}`,
    addressLocality: "Manila",
    postalCode: "1008",
    addressCountry: "PH",
  },
  openingHours: "Mo-Fr 09:00-18:00",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-gold focus:px-3 focus:py-2 focus:text-navy-deep"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
