import { chiSiamo } from "@/content";

export default function ChiSiamo() {
  const {
    hero,
    intro,
    definition,
    activitiesSection,
    activities,
    values,
    cta,
  } = chiSiamo;

  return (
    <div className="space-y-16 font-serif">
      <section className="py-16 sm:py-20 text-center border-b border-slate-200">
        <h1 className="text-5xl sm:text-7xl font-bold text-slate-900 mb-6">
          {hero.title}
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
          {hero.subtitle}
        </p>
      </section>

      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="text-center space-y-6">
          <p className="text-2xl sm:text-3xl font-semibold text-slate-900">
            {intro.heading}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {intro.subheading}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="space-y-6">
          <p className="text-xl sm:text-2xl font-semibold text-slate-900 text-center mb-8">
            {definition.leadPrefix}
            <span className="text-accent font-bold"> {definition.leadHighlight}</span>
          </p>
          {definition.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg text-slate-600 leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {activitiesSection.title}
          </h2>
          <p className="text-slate-600 text-lg">
            {activitiesSection.subtitle}
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

      <section className="py-12 sm:py-16 border-b border-slate-200">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {values.title}
            </h3>
            {values.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg text-slate-600 leading-relaxed ${
                  index < values.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 text-center border-t border-slate-200">
        <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
          {cta.title}
        </p>
        <p className="text-xl text-accent font-semibold">
          {cta.closing}
        </p>
      </section>
    </div>
  );
}
