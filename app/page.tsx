"use client";

import Link from "next/link";
import { BookOpen, Users, Calendar, ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  const bookRecommendations = [
    {
      title: "Il Nome della Rosa",
      author: "Umberto Eco",
      description: "Un capolavoro di narrativa storica e mistero",
      link: "https://www.goodreads.com/book/show/119073.The_Name_of_the_Rose",
    },
    {
      title: "Cent'anni di Solitudine",
      author: "Gabriel García Márquez",
      description: "Un'epopea famigliare tra magia e realismo",
      link: "https://www.goodreads.com/book/show/320.One_Hundred_Years_of_Solitude",
    },
    {
      title: "Il Maestro e Margherita",
      author: "Michail Bulgakov",
      description: "Un romanzo affascinante tra il diabolico e il divino",
      link: "https://www.goodreads.com/book/show/117833.The_Master_and_Margarita",
    },
    {
      title: "Orgoglio e Pregiudizio",
      author: "Jane Austen",
      description: "Un romanzo senza tempo sull'amore e la società",
      link: "https://www.goodreads.com/book/show/4895.Pride_and_Prejudice",
    },
    {
      title: "La sottile arte di fare i FR**I col culo degli altri: Storie, Poesie e Cose",
      author: "Davide Lorusso",
      description: "Nel volume conclusivo, qui, troverete la storia di Freddy. Il povero Fred è nato dall’incrocio tra un uroboro dissenterico e un leghista cieco. Gli hobby preferiti di Fred sono: piantare chiodi nel muro utilizzando la fronte, ridurre tutto a uno stereotipo culturale e, nel fine settimana, pontificare sui conflitti internazionali.",
      link: "https://www.amazon.it/SOTTILE-ARTE-FARE-DEGLI-ALTRI/dp/B0G4KRBX3D/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2V5RUQLB9XKR0&dib=eyJ2IjoiMSJ9.YhHUksQTEcqhLlO5ZMUxGcC8onPa22lZ77Lo_gR31zs.WhqARMygVMk35laiY3FYn6kiPuXTyum0nBB0V5qx3EQ&dib_tag=se&keywords=davide+lorusso&qid=1777061781&sprefix=davide+lorusso%2Caps%2C251&sr=8-1",
    },
    {
      title: "LE OMBRE ALLA SERA: Digressioni ed Esequie vol. 2",
      author: "Davide Lorusso",
      description: "L'autore del saggio compie un viaggio intimo ed esplora i confini tra luce e buio, vita e morte, amore e solitudine. Attraverso digressioni profonde e versi evocativi, l’autore si interroga sul mistero delle ombre: Dove si celano le ombre quando la luce del giorno svanisce? Questo libro è un invito a cercare risposte nel silenzio.",
      link: "https://www.amazon.it/OMBRE-ALLA-SERA-Digressioni-Esequie/dp/B0D56X844S?ref_=ast_author_dp&th=1&psc=1#customerReviews"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="space-y-32 font-serif text-slate-900">
      {/* Hero Section */}
      <section className={`relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-white py-24 sm:py-32 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-6">
              Il collettivo letterario di giovani voci
            </p>
            <h1 className="font-light tracking-tight text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-slate-900 mb-8">
              Dove ogni parola trova spazio.
            </h1>
            <p className="text-xl sm:text-2xl leading-9 text-slate-600 max-w-2xl">
              SADAGA sostiene la democraticità della parola e accompagna il panorama culturale emergente con eventi, workshop e progetti dedicati a scrittori, artisti e lettori.
            </p>
          </div>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/eventi" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
              Scopri gli eventi
            </Link>
            <Link href="/chi-siamo" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
              Chi siamo
            </Link>
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">
                Il nostro approccio
              </p>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-[1.02] mb-6">
                Minimalismo nella forma, intensità nei contenuti.
              </h2>
              <p className="text-lg leading-9 text-slate-600 max-w-xl">
                Lavoriamo per creare esperienze culturali aperte, eleganti e vicine alle persone. Autenticità, spazio e chiarezza guidano tutto quello che facciamo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">Comunità</p>
                <p className="text-xl font-semibold text-slate-900 leading-8">
                  Spazio per chi ama scrivere e leggere, in un ambiente inclusivo e collaborativo.
                </p>
              </div>
              <div className="rounded-[2rem] bg-white p-10 shadow-sm">
                <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">Eventi</p>
                <p className="text-xl font-semibold text-slate-900 leading-8">
                  Workshop, incontri e momenti condivisi progettati per far emergere nuove voci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Readings Section */}
      <section className={`relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-white py-24 sm:py-32 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">
              Consigli di lettura
            </p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-[1.02]">
              Libro, ispirazione, community.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {bookRecommendations.map((book, index) => (
              <a
                key={index}
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[2rem] bg-slate-50 p-10 transition hover:bg-slate-100"
              >
                <div className="mb-4">
                  <p className="text-lg font-semibold text-slate-900 mb-2">{book.title}</p>
                  <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">{book.author}</p>
                </div>
                <p className="text-base leading-8 text-slate-600">
                  {book.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-slate-50 py-24 sm:py-32 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">
              Unisciti a noi
            </p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-[1.02] mb-8">
              Segui le novità del collettivo e resta aggiornato.
            </h2>
            <p className="text-lg leading-9 text-slate-600 mb-10">
              Se desideri ricevere informazioni sugli eventi e sui progetti futuri, entra in contatto con noi. La nostra community cresce con ogni voce nuova.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contatti" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-9 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
                Contattaci
              </Link>
              <Link href="/social" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-9 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
                Seguici
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
