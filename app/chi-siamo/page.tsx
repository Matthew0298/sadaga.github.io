export default function ChiSiamo() {
  const activities = [
    { emoji: '✍🏻', text: 'Workshop di scrittura poetica' },
    { emoji: '📖👩🏼‍💻', text: 'Assistenza editoriale' },
    { emoji: '🎭', text: 'Sponsorizzazione di autori e artisti' },
    { emoji: '💻', text: 'Recensioni, consigli, critica' },
    { emoji: '🥇🥈🥉', text: 'Concorsi letterari' },
    { emoji: '🖼️', text: 'Organizzazione di mostre e collettivi' },
    { emoji: '📝', text: 'Incontri con autori' },
    { emoji: '🎙️', text: 'Interviste e podcasting' },
  ];

  return (
    <div className="space-y-16 font-serif">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 text-center border-b border-slate-200">
        <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 mb-6">
          Chi Siamo
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
          Scopri la storia e la missione di SADAGA
        </p>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="text-center space-y-6">
          <p className="text-2xl sm:text-3xl font-semibold text-slate-900">
            Qualcuno si starà, giustamente, chiedendo: cosa è SADAGA? 🤔
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            È giunto dunque il momento delle presentazioni ✨
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl font-semibold text-slate-900 text-center mb-8">
            SADAGA è un collettivo di giovani che crede fermamente della 
            <span className="text-accent font-bold"> democraticità della parola 🗣️</span>
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Vorremmo concretamente essere parte attiva nel processo di valorizzazione del panorama culturale emergente. Crediamo che ogni voce meriti di essere ascoltata, che ogni storia abbia valore, e che la letteratura sia uno strumento potentissimo di connessione e cambiamento.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Il nostro obiettivo è semplice ma ambizioso: creare uno spazio dove la creatività possa fiorire, dove scrittori e lettori possano incontrarsi, e dove il panorama culturale locale possa arricchirsi di nuove voci e prospettive.
          </p>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Le Nostre Attività
          </h2>
          <p className="text-slate-600 text-lg">
            Ecco come portiamo avanti la nostra missione
          </p>
        </div>

        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 border-l-4 border-accent bg-gradient-to-r from-accent/5 to-transparent hover:from-accent/10 transition-all duration-300"
            >
              <p className="text-lg sm:text-xl font-semibold text-slate-900 flex items-center gap-3">
                <span className="text-2xl">{activity.emoji}</span>
                {activity.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              I Nostri Valori
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Sostenibilità culturale: crediamo che la cultura emergente meriti supporto e attenzione genuina.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Inclusività: la nostra comunità è aperta a tutti, indipendentemente dal livello di esperienza o dal background.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Autenticità: crediamo nell`importanza di dare visibilità alle voci genuine e originali, non alle tendenze passeggere.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 text-center border-t border-slate-200">
        <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          Seguiteci per non perdere le prossime novità 🥰
        </p>
        <p className="text-xl text-accent font-semibold">
          A presto!
        </p>
      </section>
    </div>
  );
}
