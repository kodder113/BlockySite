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
  title: "Blocky — A Growing Web3 Ecosystem",
  description:
    "Blocky is a Web3-native brand growing beyond $BLOCKY into community experiences, products, and a larger ecosystem. Explore the brand, the token, and what's next.",
  openGraph: {
    title: "Blocky — A Growing Web3 Ecosystem",
    description:
      "Blocky is a Web3-native brand growing beyond $BLOCKY into community experiences, products, and a larger ecosystem.",
    url: siteUrl,
    siteName: "Blocky",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blocky — A Growing Web3 Ecosystem",
    description:
      "Blocky is a Web3-native brand growing beyond $BLOCKY into community experiences, products, and a larger ecosystem.",
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
