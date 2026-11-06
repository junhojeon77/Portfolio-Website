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
  metadataBase: new URL("https://junhj.vercel.app/"),
  title: "Junho Jeon — Software Developer",
  description:
    "Portfolio of Junho Jeon, a software developer in Toronto building web and mobile apps, backend APIs, and AI integrations. Open to full-time developer roles.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Junho Jeon — Software Developer",
    description:
      "Portfolio of Junho Jeon, a software developer in Toronto building web and mobile apps, backend APIs, and AI integrations. Open to full-time developer roles.",
    url: "/",
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
        {/* set the color mode before first paint: stored choice wins, OS is the
            fallback (and only keeps tracking while there's no stored choice) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)');var s=function(){document.documentElement.setAttribute('data-bs-theme',t||(m.matches?'dark':'light'))};s();if(!t)m.addEventListener('change',s)})();`,
          }}
        />
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
