import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Providers } from "@/components/Providers";
import { Toaster } from "sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abc-cinematography.vercel.app/"),
  title: "ABC CINEMATOGRAPHY",
  description:
    "Explore the world of ABC Cinematography, where Colombian talent meets cinematic excellence. Discover our portfolio of stunning films, documentaries, and visual storytelling.",
  openGraph: {
    title: "ABC Cinematography - Exquisite Colombian Film Production",
    description:
      "Explore the world of ABC Cinematography, where Colombian talent meets cinematic excellence. Discover our portfolio of stunning films, documentaries, and visual storytelling.",
    type: "website",
    locale: "es_CO",
    url: "https://abc-cinematography.vercel.app/",
    siteName: "ABC Cinematography",
    images: [
      {
        url: "/og-abc.jpg",
        width: 1200,
        height: 630,
        alt: "ABC Cinematography - Colombian Film Excellence",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Providers>
          <Toaster richColors />
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
