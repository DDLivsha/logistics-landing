import type { Metadata } from "next";
import "./globals.sass";
import "./tailwind.css";
import { Lato, PT_Sans } from 'next/font/google'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactFormModal from "@/components/modals/ContactFormModal";

export const metadata: Metadata = {
  title: "Logistic landing",
  description: "Logistic landing for company",
};

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
  display: 'swap',
})

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${lato.variable} ${ptSans.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
        <ContactFormModal />
      </body>
    </html>
  );
}
