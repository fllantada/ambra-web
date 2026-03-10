import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ambra-restaurant.com"),
  title: {
    template: "%s | Ambra Restaurante",
    default: "Ambra Restaurante | Italian Fine Dining in Palma de Mallorca",
  },
  description:
    "Authentic Italian cuisine in the heart of Palma de Mallorca. Fresh pasta, premium meats, seafood and traditional Pinsa Romana.",
  keywords: [
    "Ambra",
    "restaurante italiano",
    "Italian restaurant",
    "Palma de Mallorca",
    "pasta fresca",
    "Pinsa Romana",
    "fine dining",
    "Mediterranean",
    "cocina italiana",
  ],
  authors: [{ name: "Ambra Restaurante" }],
  creator: "Ambra Restaurante",
  publisher: "Ambra Restaurante",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Ambra Restaurante",
    locale: "es_ES",
    alternateLocale: ["en_GB", "it_IT", "fr_FR", "de_DE"],
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Ambra Restaurante — Italian Fine Dining in Palma de Mallorca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-home.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} ${lato.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
