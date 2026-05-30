import Link from "next/link";
import { bookRecommendations, gallery } from "@/content";
import GalleryMarquee from "./components/GalleryMarquee";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <div className="space-y-32 font-serif text-slate-900">
      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <ScrollReveal>
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
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/eventi" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
                Scopri gli eventi
              </Link>
              <Link href="/chi-siamo" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition hover:bg-slate-50">
                Chi siamo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <ScrollReveal>
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
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal delay={0.1}>
                <div className="rounded-[2rem] bg-white p-10 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">Comunità</p>
                  <p className="text-xl font-semibold text-slate-900 leading-8">
                    Spazio per chi ama scrivere e leggere, in un ambiente inclusivo e collaborativo.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="rounded-[2rem] bg-white p-10 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">Eventi</p>
                  <p className="text-xl font-semibold text-slate-900 leading-8">
                    Workshop, incontri e momenti condivisi progettati per far emergere nuove voci.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <ScrollReveal className="mx-auto max-w-3xl text-center mb-16">
            <p className="text-sm uppercase tracking-[0.32em] font-semibold text-slate-500 mb-4">
              Consigli di lettura
            </p>
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-slate-900 leading-[1.02]">
              Libro, ispirazione, community.
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {bookRecommendations.map((book, index) => (
              <ScrollReveal key={index} delay={index * 0.08}>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-[2rem] bg-slate-50 p-10 transition hover:bg-slate-100"
                >
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-slate-900 mb-2">{book.title}</p>
                    <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">{book.author}</p>
                  </div>
                  <p className="text-base leading-8 text-slate-600">
                    {book.description}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <GalleryMarquee
        title={gallery.title}
        subtitle={gallery.subtitle}
        photos={gallery.photos}
      />

      <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-slate-50 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <ScrollReveal className="max-w-3xl text-center mx-auto">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
