import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SpotifyPlayer from "../components/SpotifyPlayer";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/fira-code";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jun's Portfolio",
  description: "Portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
        <SpotifyPlayer />
        <Analytics />
      </body>
    </html>
  );
}
