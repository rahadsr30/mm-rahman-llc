import type { Metadata } from "next";
import { Public_Sans, Inter } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public",
});

const interSans = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MM Rahman",
  description: "LLC Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.className} ${publicSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
