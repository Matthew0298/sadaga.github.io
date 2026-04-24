import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Social() {
  const socials = [
  {
    name: "Instagram",
    description: "Segui le nostre storie, foto e aggiornamenti dai nostri eventi.",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/sadaga_group",
    color: "bg-[radial-gradient(circle_at_30%_30%,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)]",
  },
  {
    name: "YouTube",
    description: "Guarda i video dei nostri eventi, letture pubbliche e workshop.",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@sadaga_group",
    color: "bg-red-600",
  },
  {
    name: "TikTok",
    description: "Scopri i nostri contenuti brevi e behind-the-scenes.",
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@sadaga_group",
    color: "bg-black",
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
            className="group bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition transform hover:-translate-y-1 text-center"
          >
            <div className={`${social.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl text-white group-hover:scale-110 transition mx-auto`}>
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
    </div>
  );
}
