import { socialPage } from "@/content";
import { socialCardBgClass } from "@/lib/social-card-styles";
import { socialIconFor } from "@/lib/social-icons";
import ScrollReveal from "../components/ScrollReveal";

export default function Social() {
  const { intro, links, benefitsSection } = socialPage;

  return (
    <div className="max-w-4xl mx-auto">
      <ScrollReveal>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Seguici sui Social</h1>
        <p className="text-slate-600 mb-12">{intro}</p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {links.map((social, index) => (
          <ScrollReveal key={social.id} delay={index * 0.1}>
            <a
              href={social.url}
              className="group block bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition transform hover:-translate-y-1 text-center h-full"
            >
              <div
                className={`${socialCardBgClass[social.id]} w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl text-white group-hover:scale-110 transition mx-auto`}
              >
                {socialIconFor(social.id)}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{social.name}</h3>
              <p className="text-slate-600 mb-4">{social.description}</p>
              <span className="text-slate-900 font-semibold group-hover:text-slate-600 transition">
                Visita →
              </span>
            </a>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal>
        <section className="bg-slate-50 rounded-lg p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">{benefitsSection.title}</h2>
          <p className="text-slate-600 mb-4">{benefitsSection.intro}</p>
          <ul className="space-y-3 text-slate-600">
            {benefitsSection.bullets.map((line, index) => (
              <li key={index} className="flex items-start">
                <span className="text-slate-900 font-bold mr-3">→</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </section>
      </ScrollReveal>
    </div>
  );
}
