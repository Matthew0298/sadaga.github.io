import type { SiteEvent } from "@/content/types";
import { events } from "@/content";
import { contactUrlForEvent } from "@/lib/event-contact";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";

const cardBase =
  "group flex h-full flex-col rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent/50 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:scale-100";

const ctaClass =
  "mt-5 block w-full rounded-xl px-4 py-2.5 text-center text-sm font-semibold text-white transition";

export default function Eventi() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const specialEvents = events.filter((e) => e.status === "special");
  const pastEvents = events.filter((e) => e.status === "past");

  const EventCard = ({ event, muted = false }: { event: SiteEvent; muted?: boolean }) => (
    <article
      className={`${cardBase} ${
        muted
          ? "border-slate-200/90 opacity-95 hover:opacity-100"
          : "border-slate-200"
      }`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-bold text-slate-900 leading-snug">{event.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">{event.date}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
            event.status === "upcoming"
              ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80"
              : "bg-slate-100 text-slate-600 ring-1 ring-slate-200/80"
          }`}
        >
          {event.status === "upcoming" ? "In arrivo" : "Passato"}
        </span>
      </div>

      <p className="mb-4 flex-grow text-slate-600 leading-relaxed">{event.description}</p>

      <div className="space-y-2 border-t border-slate-100 pt-4 text-sm text-slate-600">
        <p>
          <span className="font-semibold text-slate-900">Ora</span>
          <span className="mx-2 text-slate-300">·</span>
          {event.time}
        </p>
        <p>
          <span className="font-semibold text-slate-900">Luogo</span>
          <span className="mx-2 text-slate-300">·</span>
          {event.location}
        </p>
      </div>

      {event.status === "upcoming" && (
        <Link
          href={contactUrlForEvent(event.title)}
          className={`${ctaClass} bg-slate-900 group-hover:bg-slate-800`}
        >
          Scrivici per iscriverti
        </Link>
      )}
    </article>
  );

  const SpecialEventCard = ({ event }: { event: SiteEvent }) => (
    <article
      className={`${cardBase} border-cyan-200/80 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 p-8 sm:p-10 hover:border-cyan-400/70`}
    >
      <div className="mb-6">
        <h3 className="mb-2 text-3xl font-bold text-slate-900">{event.title}</h3>
        <p className="mb-4 text-lg font-semibold italic text-cyan-800">
          {event.details?.subtitle}
        </p>
        <p className="text-lg leading-relaxed text-slate-600">{event.description}</p>
      </div>

      <div className="mb-6 space-y-4 rounded-xl bg-white/80 p-6 ring-1 ring-slate-200/60">
        <div className="flex items-start gap-3">
          <span className="text-2xl" aria-hidden>
            📍
          </span>
          <div>
            <p className="font-semibold text-slate-900">Dove</p>
            <p className="text-slate-600">
              Appuntamento alle 9:45 di fianco a {event.location}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t border-slate-200/80 pt-4">
          <span className="text-2xl" aria-hidden>
            🗓️
          </span>
          <div>
            <p className="font-semibold text-slate-900">Quando</p>
            <p className="text-slate-600">{event.date}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t border-slate-200/80 pt-4">
          <span className="text-2xl" aria-hidden>
            🎒
          </span>
          <div>
            <p className="font-semibold text-slate-900">Cosa portare</p>
            <p className="text-slate-600">{event.details?.whatToBring}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t border-slate-200/80 pt-4">
          <span className="text-2xl" aria-hidden>
            🍹
          </span>
          <div>
            <p className="font-semibold text-slate-900">Dopo la pulizia</p>
            <p className="text-slate-600">{event.details?.refreshment}</p>
          </div>
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-cyan-200/80 bg-cyan-50/80 p-4">
        <p className="text-center font-semibold text-slate-800">{event.details?.contact}</p>
      </div>

      <Link
        href={contactUrlForEvent(event.title)}
        className="block w-full rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3 text-center text-lg font-semibold text-white transition group-hover:shadow-md group-hover:brightness-105"
      >
        Richiedi info / iscrizione
      </Link>
    </article>
  );

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen max-w-[100vw]">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <header className="mb-12 max-w-2xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Eventi
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Scopri i nostri prossimi eventi, dalle letture pubbliche ai workshop di
              scrittura creativa.
            </p>
          </header>
        </ScrollReveal>

        {upcomingEvents.length > 0 && (
          <section className="mb-20">
            <ScrollReveal>
              <h2 className="mb-8 text-2xl font-bold text-slate-900">Prossimi eventi</h2>
            </ScrollReveal>
            <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:gap-10">
              {upcomingEvents.map((event, index) => (
                <li key={event.id} className="min-h-0">
                  <ScrollReveal delay={index * 0.08} className="h-full">
                    <EventCard event={event} />
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </section>
        )}

        {specialEvents.length > 0 && (
          <section className="mb-20">
            <ScrollReveal>
              <h2 className="mb-8 text-2xl font-bold text-slate-900">Progetto speciale</h2>
            </ScrollReveal>
            <div className="space-y-8">
              {specialEvents.map((event) => (
                <ScrollReveal key={event.id}>
                  <SpecialEventCard event={event} />
                </ScrollReveal>
              ))}
            </div>
          </section>
        )}

        {pastEvents.length > 0 && (
          <section>
            <ScrollReveal>
              <h2 className="mb-8 text-2xl font-bold text-slate-900">Eventi passati</h2>
            </ScrollReveal>
            <ul className="grid list-none grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
              {pastEvents.map((event, index) => (
                <li key={event.id} className="min-h-0">
                  <ScrollReveal delay={index * 0.06} className="h-full">
                    <EventCard event={event} muted />
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
