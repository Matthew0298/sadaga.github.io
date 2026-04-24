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
      link: "https://www.amazon.it/SOTTILE-ARTE-FARE-DEGLI-ALTRI/dp/B0G4KRBX3D/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2V5RUQLB9XKR0&dib=eyJ2IjoiMSJ9.YhHUksQTEcqhLlO5ZMUxGcC8onPa22lZ77Lo_gR31zs.WhqARMygVMk35laiY3FYn6kiPuXTyum0nBB0V5qx3EQ&dib_tag=se&keywords=davide+lorusso&qid=1777061781&sprefix=davide+lorusso%2Caps%2C251&sr=8-1"
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
    <div className="space-y-16 font-serif">
      {/* Hero Section - Stretta e con font letterario */}
      <section className={`text-center py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-soft rounded-2xl relative overflow-hidden transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="absolute top-8 right-8 w-24 h-24 bg-accent/10 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-8 left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl hidden sm:block" />

        <div className="relative z-10 px-4 sm:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full mb-4 sm:mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium text-slate-700">
              Dove le parole prendono vita
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight">
            Sadaga
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Un gruppo dedicato alla passione per la letteratura, la scrittura
            creativa e lo scambio di idee tra autori e lettori appassionati.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/eventi" className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent to-accent/90 text-white rounded-xl hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 inline-flex items-center justify-center gap-2 font-semibold text-sm sm:text-base">
              Scopri gli eventi
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contatti" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-white transition-all duration-300 inline-flex items-center justify-center font-semibold text-sm sm:text-base">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Right to Left */}
      <section className={`space-y-8 sm:space-y-12 py-8 sm:py-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="group text-center p-6 sm:p-8 sm:p-12 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border-b border-slate-200 shadow-none">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Comunità</h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Unisciti a una comunità di scrittori e lettori appassionati
          </p>
        </div>

        <div className="group text-center p-6 sm:p-8 sm:p-12 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border-b border-slate-200 shadow-none">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Eventi</h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Partecipa a letture pubbliche, workshop e presentazioni
          </p>
        </div>

        <div className="group text-center p-6 sm:p-8 sm:p-12 hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 transition-all duration-300 border-t border-slate-200 shadow-none">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">Connessioni</h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Seguici sui social per restare aggiornato
          </p>
        </div>
      </section>

      {/* Book Recommendations Section */}
      <section className={`py-12 sm:py-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">Consigli di Lettura</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Scopri alcuni dei nostri libri preferiti che hanno ispirato la nostra comunità letteraria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {bookRecommendations.map((book, index) => (
            <a
              key={index}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 sm:p-8 rounded-xl border border-slate-200 hover:border-accent hover:shadow-lg transition-all duration-300 bg-white hover:bg-gradient-to-br hover:from-primary/3 hover:to-accent/3"
            >
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {book.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold">{book.author}</p>
                </div>
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {book.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className={`relative bg-gradient-to-r from-primary via-accent to-primary text-white rounded-2xl p-8 sm:p-12 md:p-16 text-center shadow-2xl overflow-hidden transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">Unisciti a Sadaga</h2>
          <p className="text-white/90 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
            Vuoi far parte della nostra comunità letteraria? Contattaci per
            saperne di più su come aderire e partecipare ai nostri eventi.
          </p>
          <p className="text-white/95 mb-6 sm:mb-8 text-sm sm:text-lg">
            Email:{" "}
            <a href="mailto:grupposadaga@libero.it" className="font-semibold underline decoration-2 underline-offset-4 hover:text-white transition">
              grupposadaga@libero.it
            </a>
          </p>
          <Link href="/contatti" className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-50 hover:shadow-xl transition-all duration-300 group text-sm sm:text-base">
            Contattaci ora
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}