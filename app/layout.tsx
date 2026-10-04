import type { Metadata } from "next";
import {
  Space_Grotesk,
  Manrope,
  IBM_Plex_Mono,
  DM_Serif_Display,
} from "next/font/google";

import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const serif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
});

const url = "https://nishantghosle.dev";

export const metadata: Metadata = {
  metadataBase: new URL(url),

  title:
    "Nishant Ghosle | Senior AI Engineer | Generative AI & Agentic AI",

  description:
    "Senior AI Engineer specializing in Generative AI, RAG, Agentic AI, LLMOps and scalable backend systems using Python, FastAPI, LangChain, LangGraph, pgvector, Redis and AWS.",

  keywords: [
    "Nishant Ghosle",
    "AI Engineer",
    "Senior AI Engineer",
    "Generative AI Engineer",
    "Agentic AI Engineer",
    "RAG Engineer",
    "LLMOps",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "Python",
    "OpenAI",
    "pgvector",
    "AWS",
  ],

  authors: [
    {
      name: "Nishant Ghosle",
    },
  ],

  openGraph: {
    title:
      "Nishant Ghosle | Senior AI Engineer | Generative AI & Agentic AI",

    description:
      "Building production Generative AI, RAG and Agentic AI systems with Python, FastAPI, LangChain, LangGraph and scalable cloud infrastructure.",

    url,
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nishant Ghosle | Senior AI Engineer",
    description:
      "Generative AI · RAG · Agentic AI · LLMOps · Backend Systems",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Nishant Ghosle",

  jobTitle: "Senior AI Engineer",

  email: "mailto:nishantghosle7@gmail.com",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Bhopal",
    addressCountry: "IN",
  },

  url,

  sameAs: [
    "https://www.linkedin.com/in/nishant-ghosle-b28a14247",
  ],

  knowsAbout: [
    "Generative AI",
    "Agentic AI",
    "RAG",
    "LLMOps",
    "LangChain",
    "LangGraph",
    "Python",
    "FastAPI",
    "OpenAI",
    "PostgreSQL",
    "pgvector",
    "Redis",
    "AWS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${serif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}