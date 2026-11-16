import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import SpotifyPlayer from "../components/SpotifyPlayer";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/fira-code/index.css"; // headings and the ASCII canvas use "Fira Code"
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const title = "Junho Jeon — Software Developer";
const description =
  "Portfolio of Junho Jeon, a software developer in Toronto building web and mobile apps, backend APIs, and AI integrations. Open to full-time developer roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://junhj.vercel.app/"),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
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
    // The pre-paint script sets data-bs-theme before React hydrates this element.
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* set the color mode before first paint: stored choice wins, OS is the
            fallback. The choice is re-read on every OS change, so a toggle made
            after load still wins. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var m=window.matchMedia('(prefers-color-scheme: dark)');var s=function(){var t=null;try{t=localStorage.getItem('theme')}catch(e){}document.documentElement.setAttribute('data-bs-theme',t||(m.matches?'dark':'light'))};s();m.addEventListener('change',s)})();`,
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
