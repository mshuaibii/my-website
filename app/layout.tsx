import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mshuaibi.com"),
  alternates: {
    canonical: "https://mshuaibi.com"
  },
  title: "Muhammed Shuaibi",
  description: "",
  keywords: "",
  openGraph: {
    locale: "en_US",
    siteName: "Muhammed Shuaibi",
    type: "website",
    title: "Muhammed Shuaibi",
    description: "",
    url: "https://mshuaibi.com",
    images: [],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="base"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
