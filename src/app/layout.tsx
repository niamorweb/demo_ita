import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });
const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FFF] ${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
