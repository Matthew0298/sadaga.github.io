import type { Metadata } from "next";
import Link from "next/link";
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
        <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-slate-900">
              Sadaga
            </Link>
            <ul className="flex gap-8">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contatti"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Contatti
                </Link>
              </li>
              <li>
                <Link
                  href="/social"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Social
                </Link>
              </li>
              <li>
                <Link
                  href="/eventi"
                  className="text-slate-600 hover:text-slate-900 transition"
                >
                  Eventi
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-6 py-12">{children}</main>
        <footer className="bg-slate-900 text-slate-300 text-center py-6 mt-20">
          <p>&copy; 2024 Sadaga - Gruppo Letterario. Tutti i diritti riservati.</p>
        </footer>
      </body>
    </html>
  );
}
