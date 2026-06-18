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
  title: "JUAN24FIT | Asesoria fitness online y presencial",
  description:
    "JUAN24FIT, CORP. ofrece asesoria online de alimentacion, rutinas personalizadas y entrenamiento presencial en Miami y Lima.",
  keywords: [
    "JUAN24FIT",
    "asesoria fitness online",
    "rutinas personalizadas",
    "entrenamiento Miami",
    "entrenamiento Lima",
    "alimentacion fitness",
  ],
  openGraph: {
    title: "JUAN24FIT | Asesoria fitness online y presencial",
    description:
      "Planes de alimentacion, rutinas y entrenamiento presencial en Miami y Lima.",
    type: "website",
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
