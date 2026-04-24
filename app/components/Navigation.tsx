"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/contatti", label: "Contatti" },
    { href: "/social", label: "Social" },
    { href: "/eventi", label: "Eventi" },
  ];

  return (
    <nav className="bg-white/80 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
           <Image 
          src="/sadaga.github.io/logo_round.png"
          alt="Sadaga logo"
          width={40}
          height={40}
          priority // Carica subito, non lazy
          onError={() => console.log("Logo non trovato!")}
          className="w-10 h-10 rounded-full object-cover"
        />
        </Link>

       

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-slate-600 hover:text-accent transition font-medium"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-slate-600 hover:text-accent transition font-medium block py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
