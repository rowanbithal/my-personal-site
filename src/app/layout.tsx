import type { Metadata } from "next";
import { Inter, DM_Sans } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-title',
})

export const metadata: Metadata = {
  title: "Rowan's Portfolio",
  description: "Portfolio of a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
