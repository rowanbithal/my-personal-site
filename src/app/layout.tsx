import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import LayoutShell from "./LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-title",
});

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
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🪴</text></svg>"
      />
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
