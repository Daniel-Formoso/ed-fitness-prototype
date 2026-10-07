import type { Metadata } from "next";
import { Archivo, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo" });

export const metadata: Metadata = {
  title: "Ed Fitness · Saúde em primeiro lugar",
  description: "Musculação, cardio, aulas coletivas, Pilates e lutas em Nova Iguaçu.",
  icons: { icon: "/assets/favicon-ed.svg" },
  openGraph: {
    title: "Ed Fitness · Saúde em primeiro lugar",
    description: "Musculação, cardio, aulas coletivas, Pilates e lutas em Nova Iguaçu.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${archivo.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
