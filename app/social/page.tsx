export default function Social() {
  const socials = [
    {
      name: 'Instagram',
      description: 'Segui le nostre storie, foto e aggiornamenti dai nostri eventi.',
      icon: '📸',
      url: '#',
      color: 'bg-gradient-to-r from-pink-500 to-purple-500',
    },
    {
      name: 'YouTube',
      description: 'Guarda i video dei nostri eventi, letture pubbliche e workshop.',
      icon: '▶️',
      url: '#',
      color: 'bg-red-600',
    },
    {
      name: 'Facebook',
      description: 'Resta aggiornato su notizie, eventi e discussioni della comunità.',
      icon: 'f',
      url: '#',
      color: 'bg-blue-600',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Seguici sui Social</h1>
      <p className="text-slate-600 mb-12">
        Connettiti con Sadaga sui social media per rimanere aggiornato su tutti i nostri eventi, condividere articoli e fare parte della comunità.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className={`${social.color} text-white text-4xl font-bold w-12 h-12 rounded flex items-center justify-center mb-4`}>
              {social.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{social.name}</h3>
            <p className="text-slate-600 mb-4">{social.description}</p>
            <span className="text-slate-900 font-semibold group-hover:text-slate-600 transition">
              Visita →
            </span>
          </a>
        ))}
      </div>

      <section className="bg-slate-50 rounded-lg p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Collegati e condividi</h2>
        <p className="text-slate-600 mb-4">
          Segui i nostri canali social per:
        </p>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start">
            <span className="text-slate-900 font-bold mr-3">→</span>
            <span>Ricevere notifiche su nuovi eventi e workshop</span>
          </li>
          <li className="flex items-start">
            <span className="text-slate-900 font-bold mr-3">→</span>
            <span>Partecipare a discussioni e condividere idee</span>
          </li>
          <li className="flex items-start">
            <span className="text-slate-900 font-bold mr-3">→</span>
            <span>Conoscere altri membri della comunità letteraria</span>
          </li>
          <li className="flex items-start">
            <span className="text-slate-900 font-bold mr-3">→</span>
            <span>Accedere a contenuti esclusivi e dietro le quinte</span>
          </li>
        </ul>
      </section>

      <section className="mt-12 bg-slate-900 text-white rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
        <p className="text-slate-300 mb-6">
          Iscriviti alla nostra newsletter per ricevere direttamente via email gli aggiornamenti sui prossimi eventi e le novità da Sadaga.
        </p>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Inserisci la tua email"
            className="flex-1 px-4 py-2 rounded text-slate-900 outline-none"
          />
          <button className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded transition font-semibold">
            Iscriviti
          </button>
        </div>
      </section>
    </div>
  );
}
