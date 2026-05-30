import type { SiteEvent } from "@/content/types";
import { events } from "@/content";
import ScrollReveal from "../components/ScrollReveal";

export default function Eventi() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming");
  const specialEvents = events.filter((e) => e.status === "special");
  const pastEvents = events.filter((e) => e.status === "past");

  const EventCard = ({ event }: { event: SiteEvent }) => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-200 h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
          <p className="text-slate-500 text-sm mt-1">{event.date}</p>
        </div>
        <span
          className={`px-3 py-1 rounded text-sm font-semibold ${
            event.status === "upcoming"
              ? "bg-green-100 text-green-800"
              : "bg-slate-100 text-slate-800"
          }`}
        >
          {event.status === "upcoming" ? "In arrivo" : "Passato"}
        </span>
      </div>
      <p className="text-slate-600 mb-4">{event.description}</p>
      <div className="space-y-2 text-sm text-slate-600 border-t border-slate-200 pt-4">
        <p>
          <span className="font-semibold text-slate-900">Ora:</span> {event.time}
        </p>
        <p>
          <span className="font-semibold text-slate-900">Luogo:</span> {event.location}
        </p>
      </div>
      {event.status === "upcoming" && (
        <button className="w-full mt-4 px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition font-semibold">
          Iscriviti
        </button>
      )}
    </div>
  );

  const SpecialEventCard = ({ event }: { event: SiteEvent }) => (
    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-cyan-200 rounded-xl p-8 hover:shadow-lg transition-all duration-200">
      <div className="mb-6">
        <h3 className="text-3xl font-bold text-slate-900 mb-2">{event.title}</h3>
        <p className="text-lg text-cyan-700 font-semibold italic mb-4">
          {event.details?.subtitle}
        </p>
        <p className="text-slate-600 text-lg leading-relaxed mb-6">
          {event.description}
        </p>
      </div>

      <div className="space-y-4 mb-6 bg-white/70 rounded-lg p-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">📍</span>
          <div>
            <p className="font-semibold text-slate-900">Dove</p>
            <p className="text-slate-600">Appuntamento alle 9:45 di fianco a {event.location}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t border-slate-200 pt-4">
          <span className="text-2xl">🗓️</span>
          <div>
            <p className="font-semibold text-slate-900">Quando</p>
            <p className="text-slate-600">{event.date}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t border-slate-200 pt-4">
          <span className="text-2xl">🎒</span>
          <div>
            <p className="font-semibold text-slate-900">Cosa portare</p>
            <p className="text-slate-600">{event.details?.whatToBring}</p>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t border-slate-200 pt-4">
          <span className="text-2xl">🍹</span>
          <div>
            <p className="font-semibold text-slate-900">Dopo la pulizia</p>
            <p className="text-slate-600">{event.details?.refreshment}</p>
          </div>
        </div>
      </div>

      <div className="bg-cyan-100 border border-cyan-300 rounded-lg p-4 mb-6">
        <p className="text-slate-800 font-semibold text-center">
          {event.details?.contact}
        </p>
      </div>

      <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition font-semibold text-lg">
        Voglio Partecipare! 🌊
      </button>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Eventi</h1>
        <p className="text-slate-600 mb-12">
          Scopri i nostri prossimi eventi, dalle letture pubbliche ai workshop di scrittura creativa.
        </p>
      </ScrollReveal>

      {upcomingEvents.length > 0 && (
        <section className="mb-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Prossimi Eventi</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.08}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {specialEvents.length > 0 && (
        <section className="mb-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Progetto Speciale</h2>
          </ScrollReveal>
          {specialEvents.map((event) => (
            <ScrollReveal key={event.id}>
              <SpecialEventCard event={event} />
            </ScrollReveal>
          ))}
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="mt-16">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Eventi Passati</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.08}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
