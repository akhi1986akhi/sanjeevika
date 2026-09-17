import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Noto_Serif_Devanagari,
  Noto_Sans_Devanagari, Geist, Geist_Mono
} from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import StickyCallBar from "@/components/shared/StickyCallBar";
import WhatsAppFloatButton from "@/components/shared/WhatsAppFloatButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});
const notoSerifDeva = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "600", "700"],
  variable: "--font-hi-serif",
});
const notoSansDeva = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hi-sans",
});

const SITE_URL = "https://sanjeevika-five.vercel.app/"; // TODO: replace with your real domain
const SITE_NAME = "Sanjeevika Mother & Child Care";
const SITE_DESCRIPTION =
  "Sanjeevika Mother & Child Care in Rapti Nagar Phase-2, Gorakhpur brings gynaecology and paediatric care together — led by Dr. Ruby Verma (Gynaecologist & Obstetrician) and Dr. Ashish Verma (Paediatrician). Pregnancy care, deliveries, vaccination and child health checkups, all under one roof.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Gynaecologist & Paediatrician in Gorakhpur`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Sanjeevika Mother & Child Care",
    "gynaecologist in Gorakhpur",
    "paediatrician in Gorakhpur",
    "Dr. Ruby Verma",
    "Dr. Ashish Verma",
    "pregnancy care Gorakhpur",
    "child vaccination Gorakhpur",
    "Rapti Nagar Phase-2 clinic",
  ],
  authors: [{ name: SITE_NAME }],
  applicationName: SITE_NAME,
  category: "healthcare",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Gynaecologist & Paediatrician in Gorakhpur`,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og_image.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Gorakhpur`,
      },
    ],
    // og:image is generated automatically by app/opengraph-image.tsx
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Gynaecologist & Paediatrician in Gorakhpur`,
    description: SITE_DESCRIPTION,
     images: ["/og_image.jpg"],
    // twitter:image falls back to app/opengraph-image.tsx automatically
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <Header />

      <body className={`${fraunces.variable} ${inter.variable} ${notoSerifDeva.variable} ${notoSansDeva.variable}`}>{children}</body>

      <Footer />

      <StickyCallBar />
      <WhatsAppFloatButton />
    </html>
  );
}
