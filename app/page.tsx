export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-6xl font-bold text-slate-900 mb-6">Sadaga</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Un gruppo dedicato alla passione per la letteratura, la scrittura creativa e lo scambio di idee tra autori e lettori appassionati.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-slate-900 text-white rounded hover:bg-slate-800 transition">
            Scopri gli eventi
          </button>
          <button className="px-8 py-3 border border-slate-900 text-slate-900 rounded hover:bg-slate-50 transition">
            Contattaci
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-3 gap-8 py-12 border-y border-slate-200">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Comunità</h3>
          <p className="text-slate-600">
            Unisciti a una comunità di scrittori e lettori appassionati
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Eventi</h3>
          <p className="text-slate-600">
            Partecipa a letture pubbliche, workshop e presentazioni
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Connessioni</h3>
          <p className="text-slate-600">
            Seguici sui social per restare aggiornato
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-900 text-white rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Unisciti a Sadaga</h2>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Vuoi far parte della nostra comunità letteraria? Contattaci per saperne di più su come aderire e partecipare ai nostri eventi.
        </p>
        <button className="px-8 py-3 bg-white text-slate-900 font-semibold rounded hover:bg-slate-100 transition">
          Contattaci ora
        </button>
      </section>
    </div>
  );
}
