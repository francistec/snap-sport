import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnapSport — Fotografía Deportiva Profesional en Cancún",
  description:
    "Fotografía deportiva profesional en Cancún y Riviera Maya. Cubrimos fútbol americano, soccer, béisbol, básquetbol, atletismo y más. Entrega en 48h. +200 eventos.",
  keywords: [
    "fotografía deportiva Cancún",
    "fotógrafo de eventos deportivos Cancún",
    "fotos deportivas profesionales",
    "fotografía fútbol americano Cancún",
    "fotógrafo soccer Cancún",
    "fotografía béisbol Cancún",
    "paquetes fotografía deportiva",
    "fotógrafo profesional torneos deportivos Cancún",
    "fotografía de acción deportiva Quintana Roo",
  ],
  openGraph: {
    title: "SnapSport — Fotografía Deportiva Profesional en Cancún",
    description:
      "Capturamos cada instante de acción y victoria en tus eventos deportivos. +200 eventos cubiertos. Entrega en 48h.",
    url: "https://snapsport.com.mx",
    siteName: "SnapSport",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapSport — Fotografía Deportiva Profesional en Cancún",
    description:
      "Fotografía deportiva profesional en Cancún y Riviera Maya. +200 eventos cubiertos.",
  },
  alternates: {
    canonical: "https://snapsport.com.mx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
