export default function Eventi() {
  const events = [
    {
      id: 1,
      title: 'Lettura Pubblica Mensile',
      date: '15 Maggio 2024',
      time: '18:30',
      location: 'Centro Culturale',
      description: 'Ascolta gli autori del nostro gruppo leggere le loro opere inedite.',
      status: 'upcoming',
    },
    {
      id: 2,
      title: 'Workshop: Tecniche di Scrittura Creativa',
      date: '22 Maggio 2024',
      time: '19:00',
      location: 'Biblioteca Civica',
      description: 'Impara le tecniche fondamentali della scrittura creativa con esperti del settore.',
      status: 'upcoming',
    },
    {
      id: 3,
      title: 'Incontro con Autore Ospite',
      date: '5 Giugno 2024',
      time: '17:00',
      location: 'Sala Conferenze',
      description: 'Incontra un autore affermato e scopri il suo processo creativo.',
      status: 'upcoming',
    },
    {
      id: 4,
      title: 'Club di Lettura: "Classici del Novecento"',
      date: '12 Aprile 2024',
      time: '17:00',
      location: 'Centro Culturale',
      description: 'Discussione e analisi di capolavori della letteratura italiana del Novecento.',
      status: 'past',
    },
  ];

  const upcomingEvents = events.filter((e) => e.status === 'upcoming');
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

      <section className="mt-16 bg-slate-50 rounded-lg p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ricevi notifiche</h2>
        <p className="text-slate-600 mb-4">
          Non perderti nessun evento! Iscriviti per ricevere notifiche sui nuovi appuntamenti di Sadaga.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Inserisci la tua email"
            className="flex-1 px-4 py-2 border border-slate-300 rounded outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-100"
          />
          <button className="px-6 py-2 bg-slate-900 text-white rounded hover:bg-slate-800 transition font-semibold">
            Iscriviti
          </button>
        </div>
      </section>
    </div>
  );
}
