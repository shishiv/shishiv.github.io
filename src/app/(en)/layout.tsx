import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/portfolio.css";
import "@/styles/case-journey.css";
import "@/styles/case-directory.css";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: ui.en.title,
  description: ui.en.description,
};

export default function EnglishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Source+Sans+3:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,500;1,8..60,500&display=swap"
        />
        <meta name="theme-color" content="#07080b" />
      </head>
      <body>{children}</body>
    </html>
  );
}
