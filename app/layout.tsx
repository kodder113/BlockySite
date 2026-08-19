import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://www.blockyaiagent.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Blocky — Community. Competition. What's Next.",
  description:
    "Blocky is a digital brand growing from its crypto roots into products, competitive experiences, and a community built around what comes next.",
  openGraph: {
    title: "Blocky — Community. Competition. What's Next.",
    description:
      "Blocky is a digital brand growing from its crypto roots into products, competitive experiences, and a community built around what comes next.",
    url: siteUrl,
    siteName: "Blocky",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blocky — Community. Competition. What's Next.",
    description:
      "Blocky is a digital brand growing from its crypto roots into products, competitive experiences, and a community built around what comes next.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text font-sans">
        {children}
      </body>
    </html>
  );
}
