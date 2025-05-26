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
  title: "PT. BUMI KENAWAT ALAM LESTARI",
  description: "PT. BUMI KENAWAT ALAM LESTARI",
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
