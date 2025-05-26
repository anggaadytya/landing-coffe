import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/common/layout/Header";
import AOSProvider from "@/common/layout/AosProvider";
import Footer from "@/common/layout/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--soraSans-font",
  display: "fallback",
});

export const metadata = {
  icon: "/favicon.ico",
  title: "PT. BUMI KENAWAT ALAM LESTARI",
  description:
    "PT. BUMI KENAWAT ALAM LESTARI Merupakan Perusahaan Pengolahan Biji Kopi di Indonesia",
  keywords: [
    "Biji Kopi Pilihan",
    "Pengolahan Biji Kopi",
    "PT. BUMI KENAWAT ALAM LESTARI",
    "Beans",
    "Coffe",
    "Supreme Beans",
    "Biji Kopi Terbaik",
    "Kopi Terbaik",
    "Coffe Terbaik",
  ],
  authors: {
    name: "Muhammad Angga Adytya",
    url: "https://muhammad-angga-adytya.vercel.app/",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    siteName: "PT. BUMI KENAWAT ALAM LESTARI",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1741537012/muhammad-angga-adytya_ljfhxl.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1741537012/muhammad-angga-adytya_ljfhxl.jpg",
        width: 1200,
        height: 630,
      },
      {
        url: "https://res.cloudinary.com/ddugt5n5v/image/upload/v1741537012/muhammad-angga-adytya_ljfhxl.jpg",
        width: 1600,
        height: 900,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${sora.className} antialiased relative`}
      >
        <Header />
        <AOSProvider>{children}</AOSProvider>
        <Footer />
      </body>
    </html>
  );
}
