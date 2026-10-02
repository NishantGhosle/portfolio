import type { Metadata } from "next";
import { Space_Grotesk, Manrope, IBM_Plex_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

const url = "https://nishantghosle.dev"; // TODO: replace with your domain

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Nishant Ghosle | AI Engineer: RAG, Agents & LLM Systems",
  description:
    "Senior Full-Stack AI Engineer building production Generative AI, RAG and agentic workflow systems with Python, FastAPI, LangGraph and pgvector.",
  openGraph: { title: "Nishant Ghosle | AI Engineer", description: "Turning LLMs into real products.", url, type: "website" },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nishant Ghosle",
  jobTitle: "Senior Full-Stack AI Engineer",
  email: "mailto:nishantghosle7@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Bhopal", addressCountry: "IN" },
  url,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
