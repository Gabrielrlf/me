import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Fonseca — Senior Software Engineer | Cloud-Native & AI",
  description:
    "Senior Software Engineer specializing in Cloud-Native Applications, AI-Driven Solutions, Distributed Systems, and FinTech platforms. Expert in .NET, AWS, Kubernetes, and Event-Driven Architecture.",
  keywords: [
    "Gabriel Fonseca",
    "Senior Software Engineer",
    "Cloud-Native",
    "FinTech",
    "Distributed Systems",
    "Event-Driven Architecture",
    ".NET",
    "AWS",
    "Kubernetes",
    "AI Engineering",
    "Microservices",
    "OpenTelemetry",
  ],
  authors: [{ name: "Gabriel Fonseca" }],
  creator: "Gabriel Fonseca",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Gabriel Fonseca — Senior Software Engineer",
    description:
      "Building cloud-native, event-driven systems for fintech platforms at scale. .NET | AWS | Kubernetes | AI-Driven Solutions.",
    siteName: "Gabriel Fonseca Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Fonseca — Senior Software Engineer",
    description:
      "Cloud-Native Applications | AI-Driven Solutions | Distributed Systems | FinTech",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Fonseca",
  jobTitle: "Senior Software Engineer",
  url: "https://gabrielfonseca.dev",
  email: "Gabrieldevce@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fortaleza",
    addressCountry: "Brazil",
  },
  sameAs: [
    "https://linkedin.com/in/gf0212",
    "https://github.com/Gabrielrlf",
  ],
  knowsAbout: [
    "Cloud-Native Applications",
    "Distributed Systems",
    "Event-Driven Architecture",
    ".NET",
    "AWS",
    "Kubernetes",
    "FinTech",
    "Artificial Intelligence",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
