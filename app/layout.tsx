import type { Metadata } from "next";
import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sadaga - Gruppo Letterario",
  description: "Sito ufficiale del gruppo letterario Sadaga",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-slate-50 text-slate-900">
        <Navigation />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">{children}</main>
        <footer className="bg-primary text-slate-300 text-center py-6 mt-20">
          <p>&copy; 2026 Sadaga - Gruppo Letterario. Tutti i diritti riservati.</p>
        </footer>
      </body>
    </html>
  );
}
