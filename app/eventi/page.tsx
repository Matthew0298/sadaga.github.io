export default function Eventi() {
  const events = [
    {
      id: 1,
      title: 'Lettura Pubblica Mensile',
      date: '15 Maggio 2026',
      time: '18:30',
      location: 'Centro Culturale',
      description: 'Ascolta gli autori del nostro gruppo leggere le loro opere inedite.',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Workshop: Tecniche di Scrittura Creativa',
      date: '22 Maggio 2026',
      time: '19:00',
      location: 'Biblioteca Civica',
      description: 'Impara le tecniche fondamentali della scrittura creativa con esperti del settore.',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Incontro con Autore Ospite',
      date: '5 Giugno 2026',
      time: '17:00',
      location: 'Sala Conferenze',
      description: 'Incontra un autore affermato e scopri il suo processo creativo.',
      status: 'upcoming',
    },
    {
      id: 4,
      title: 'Beach Clean-Up',
      date: '15 Marzo 2026',
      time: '9:45',
      location: 'Porto Rosso, zona parcheggio',
      description: 'Stiamoorganizzando un Beach Clean-Up e abbiamo bisogno di te! Non serve esperienza, basta solo la voglia di fare la differenza.',
      status: 'special',
      details: {
        subtitle: '𝑒̀ 𝑢𝑛 𝑚𝑎𝑟𝑒 𝑑𝑖 𝑟𝑖𝑓𝑢𝑡𝑖 𝑑𝑖 𝑐𝑢𝑖 𝑝𝑜𝑠𝑠𝑖𝑎𝑚𝑜 𝑓𝑎𝑟𝑒 𝑎 𝑚𝑒𝑛𝑜!',
        whatToBring: 'Nulla, provvederemo noi a fornire gratuitamente guanti, pinze e buste.',
        refreshment: 'A fine pulizia, per tutti i partecipanti ci sarà un piccolo rinfresco offerto da @piazzadispagnacafe 🍹💙',
        contact: 'Scrivici in DM per confermare la tua presenza. 👇🏻📩'
      }
    },
    {
      id: 5,
      title: 'Club di Lettura: "Classici del Novecento"',
      date: '12 Aprile 2026',
      time: '17:00',
      location: 'Centro Culturale',
      description: 'Discussione e analisi di capolavori della letteratura italiana del Novecento.',
      status: 'past',
    },
  ];

  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
  const specialEvents = events.filter((e) => e.status === 'special');
  const pastEvents = events.filter((e) => e.status === 'past');

  const EventCard = ({ event }: { event: typeof events[0] }) => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-200">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{event.title}</h3>
          <p className="text-slate-500 text-sm mt-1">{event.date}</p>
        </div>
        <span
          className={`px-3 py-1 rounded text-sm font-semibold ${
            event.status === 'upcoming'
              ? 'bg-green-100 text-green-800'
              : 'bg-slate-100 text-slate-800'
          }`}
        >
          {event.status === 'upcoming' ? 'In arrivo' : 'Passato'}
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
      {event.status === 'upcoming' && (
        <button className="w-full mt-4 px-4 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition font-semibold">
          Iscriviti
        </button>
      )}
    </div>
  );

  const SpecialEventCard = ({ event }: { event: typeof events[0] }) => (
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
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Eventi</h1>
      <p className="text-slate-600 mb-12">
        Scopri i nostri prossimi eventi, dalle letture pubbliche ai workshop di scrittura creativa.
      </p>

      {upcomingEvents.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Prossimi Eventi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

      {specialEvents.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Progetto Speciale</h2>
          {specialEvents.map((event) => (
            <SpecialEventCard key={event.id} event={event} />
          ))}
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Eventi Passati</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
