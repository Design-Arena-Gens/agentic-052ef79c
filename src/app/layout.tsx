import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Providers } from "@/components/providers";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-052ef79c.vercel.app"),
  title: "Dream Finds Company | Digital Marketing Agency",
  description:
    "Dream Finds Company crafts data-driven digital marketing that helps lifestyle brands scale with confidence.",
  keywords: [
    "digital marketing",
    "brand strategy",
    "paid media",
    "content marketing",
    "Dream Finds Company"
  ],
  openGraph: {
    title: "Dream Finds Company | Digital Marketing Agency",
    description:
      "Partner with Dream Finds Company for creative, data-powered campaigns that spark growth.",
    url: "https://agentic-052ef79c.vercel.app",
    siteName: "Dream Finds Company",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dream Finds Company marketing visuals"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Finds Company | Digital Marketing Agency",
    description:
      "We design and deploy full-funnel digital marketing for lifestyle and experience-led brands.",
    images: ["/opengraph-image"]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-body bg-slate-950 text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
