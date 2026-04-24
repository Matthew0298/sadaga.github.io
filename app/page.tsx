"use client";

import Link from "next/link";
import { BookOpen, Users, Calendar, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className={`text-center py-28 bg-gradient-to-br from-primary/5 via-accent/5 to-soft rounded-2xl relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-slate-700">
              Dove le parole prendono vita
            </span>
          </div>

          <h1 className="text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6 tracking-tight">
            Sadaga
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Un gruppo dedicato alla passione per la letteratura, la scrittura
            creativa e lo scambio di idee tra autori e lettori appassionati.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eventi" className="group px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 inline-flex items-center gap-2 font-semibold">
              Scopri gli eventi
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contatti" className="px-8 py-4 border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition-all duration-300 inline-block font-semibold">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`grid grid-cols-1 md:grid-cols-3 gap-8 py-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-accent/20 hover:shadow-xl">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Comunità</h3>
          <p className="text-slate-600 leading-relaxed">
            Unisciti a una comunità di scrittori e lettori appassionati
          </p>
        </div>

        <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-accent/20 hover:shadow-xl">
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Eventi</h3>
          <p className="text-slate-600 leading-relaxed">
            Partecipa a letture pubbliche, workshop e presentazioni
          </p>
        </div>

        <div className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border border-transparent hover:border-accent/20 hover:shadow-xl">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Connessioni</h3>
          <p className="text-slate-600 leading-relaxed">
            Seguici sui social per restare aggiornato
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`relative bg-gradient-to-r from-primary via-accent to-primary text-white rounded-2xl p-12 md:p-16 text-center shadow-2xl overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4">Unisciti a Sadaga</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg leading-relaxed">
            Vuoi far parte della nostra comunità letteraria? Contattaci per
            saperne di più su come aderire e partecipare ai nostri eventi.
          </p>
          <p className="text-white/95 mb-8 text-lg">
            Email:{" "}
            <a href="mailto:grupposadaga@libero.it" className="font-semibold underline decoration-2 underline-offset-4 hover:text-white transition">
              grupposadaga@libero.it
            </a>
          </p>
          <Link href="/contatti" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 hover:shadow-xl transition-all duration-300 group">
            Contattaci ora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}