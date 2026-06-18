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
  title: "Gio Labs AI — The Intelligence Layer Running an Empire",
  description:
    "Gio Labs is the AI operating system behind JTG Ventures — a living network of agents, memory systems, and automation pipelines that think, remember, and execute across every business Joe Galifi builds. Most people automate tasks. Gio Labs automates the empire.",
  metadataBase: new URL("https://giolabs.ai"),
  openGraph: {
    title: "Gio Labs AI",
    description: "The intelligence layer running an empire.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
