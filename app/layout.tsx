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
  title: "Jun Ho Jeon — Full Stack Developer",
  description:
    "Portfolio of Jun Ho Jeon, a full stack developer in Toronto bridging software development with AI/ML.",
  openGraph: {
    title: "Jun Ho Jeon — Full Stack Developer",
    description:
      "Portfolio of Jun Ho Jeon, a full stack developer in Toronto bridging software development with AI/ML.",
    type: "website",
    images: ["/me.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
  },
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
