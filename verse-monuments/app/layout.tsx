import type { Metadata } from "next";
import { Inter, UnifrakturCook } from "next/font/google";
import "./globals.css";
import VerseHeader from "@/components/VerseHeader";
import VerseFooter from "@/components/VerseFooter";
import { CartProvider } from "@/contexts/CartContext";
import Cart from "@/components/Cart";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const unifraktur = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-unifraktur",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VERSE — RIP NYC Monuments",
  description: "Quiet acknowledgments of what ended—and what remains. Limited apparel pieces as monuments.",
  keywords: "RIP NYC, monuments, apparel, streetwear, New York City, contemporary fashion, memorial clothing",
  authors: [{ name: "VERSE" }],
  creator: "VERSE",
  openGraph: {
    title: "VERSE — RIP NYC Monuments",
    description: "Live in the Monument. Quiet acknowledgments of what ended—and what remains.",
    type: "website",
    siteName: "VERSE",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VERSE — RIP NYC Monuments",
    description: "Live in the Monument. Quiet acknowledgments of what ended—and what remains.",
    creator: "@verse",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0B0B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${unifraktur.variable}`}>
      <body>
        <CartProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <VerseHeader />
          <main id="main-content">{children}</main>
          <VerseFooter />
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
