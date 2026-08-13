import type { Metadata } from "next";
import "@/styles/globals.css";
import { ui } from "@/i18n/ui";

export const metadata: Metadata = {
  title: ui.pt.title,
  description: ui.pt.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700&family=JetBrains+Mono:wght@400;600&family=Literata:opsz,wght@7..72,400;7..72,600&display=swap"
        />
        <meta name="theme-color" content="#1a5c5c" />
      </head>
      <body>{children}</body>
    </html>
  );
}
