import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.juan24.fit"),
  applicationName: "JUAN24FIT",
  title: {
    default: "JUAN24FIT | Asesoria fitness online y presencial",
    template: "%s | JUAN24FIT",
  },
  description:
    "JUAN24FIT, CORP. brinda asesoria online de alimentacion, rutinas personalizadas y entrenamiento presencial en Miami y Lima. Agenda tu evaluacion fitness.",
  keywords: [
    "JUAN24FIT",
    "JUAN24FIT CORP",
    "asesoria fitness online",
    "asesoria de alimentacion",
    "rutinas personalizadas",
    "entrenador personal Miami",
    "entrenamiento Miami",
    "entrenamiento Lima",
    "gimnasio en Miami",
    "alimentacion fitness",
    "aumento de masa muscular",
    "reduccion de grasa",
    "tonificacion",
  ],
  authors: [{ name: "JUAN24FIT, CORP." }],
  creator: "JUAN24FIT, CORP.",
  publisher: "JUAN24FIT, CORP.",
  alternates: {
    canonical: "/",
  },
  category: "fitness",
  classification: "Fitness coaching, nutrition coaching, personal training",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "JUAN24FIT | Asesoria fitness online y presencial",
    description:
      "Planes de alimentacion, rutinas personalizadas y entrenamiento presencial en Miami y Lima por JUAN24FIT, CORP.",
    url: "https://www.juan24.fit",
    siteName: "JUAN24FIT",
    locale: "es_US",
    type: "website",
    phoneNumbers: ["+17865972641"],
    emails: ["info@juan24.fit"],
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "JUAN24FIT asesoria fitness online y presencial en Miami y Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JUAN24FIT | Asesoria fitness online y presencial",
    description:
      "Asesoria online de alimentacion, rutinas personalizadas y entrenamiento presencial en Miami y Lima.",
    images: ["/opengraph-image"],
  },
  other: {
    "business:contact_data:street_address": "10030 Sw 145 Pl",
    "business:contact_data:locality": "Miami",
    "business:contact_data:region": "FL",
    "business:contact_data:postal_code": "33186",
    "business:contact_data:country_name": "United States",
    "business:contact_data:phone_number": "+17865972641",
    "business:contact_data:email": "info@juan24.fit",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
