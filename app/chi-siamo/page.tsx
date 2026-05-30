import Image from "next/image";
import Link from "next/link";
import { chiSiamo } from "@/content";
import ScrollReveal from "../components/ScrollReveal";

const activityCardClass =
  "group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent/50 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:hover:scale-100";

export default function ChiSiamo() {
  const {
    hero,
    intro,
    definition,
    activitiesSection,
    activities,
    values,
    team,
    cta,
  } = chiSiamo;

  const showPlaceholders =
    team.members.length === 0 && team.placeholderSlots > 0;
  const placeholderCount = showPlaceholders ? team.placeholderSlots : 0;

  return (
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen max-w-[100vw] font-serif">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <header className="border-b border-slate-200 py-14 sm:py-20">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Sadaga
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {hero.subtitle}
            </p>
          </header>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-slate-200 py-14 sm:py-16">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent">
              {intro.eyebrow}
            </p>
            <h2 className="max-w-3xl text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {intro.heading}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
              {intro.subheading}
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-slate-200 py-14 sm:py-16">
            <p className="max-w-3xl text-xl font-semibold leading-snug text-slate-900 sm:text-2xl">
              {definition.leadPrefix}
              <span className="text-accent">{definition.leadHighlight}</span>.
            </p>
            <div className="mt-8 max-w-3xl space-y-6">
              {definition.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-slate-200 py-14 sm:py-16">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                {activitiesSection.title}
              </h2>
              <p className="mt-3 text-lg text-slate-600">{activitiesSection.subtitle}</p>
            </div>

            <ul className="grid list-none gap-6 sm:grid-cols-2 sm:gap-8">
              {activities.map((activity, index) => (
                <li key={activity.title} className="min-h-0">
                  <ScrollReveal delay={index * 0.04} className="h-full">
                    <article className={activityCardClass}>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-slate-900">
                        {activity.title}
                      </h3>
                      {activity.description && (
                        <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                          {activity.description}
                        </p>
                      )}
                    </article>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-slate-200 py-14 sm:py-16">
            <h2 className="mb-8 text-2xl font-bold text-slate-900 sm:text-3xl">
              {values.title}
            </h2>
            <ul className="grid list-none gap-6 md:grid-cols-3">
              {values.items.map((item, index) => (
                <li key={item.title}>
                  <ScrollReveal delay={index * 0.06}>
                    <article className="h-full border-t-2 border-accent pt-5">
                      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="border-b border-slate-200 py-14 sm:py-16">
            <div className="mb-10 max-w-2xl">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{team.title}</h2>
              <p className="mt-3 text-lg text-slate-600">{team.subtitle}</p>
            </div>

            {team.members.length > 0 ? (
              <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {team.members.map((member, index) => (
                  <li key={`${member.name}-${index}`}>
                    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      <div className="relative aspect-[4/5] bg-slate-100">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 320px"
                          />
                        ) : (
                          <div
                            className="flex h-full items-center justify-center text-sm font-medium text-slate-400"
                            aria-hidden
                          >
                            Foto
                          </div>
                        )}
                      </div>
                      <div className="flex flex-grow flex-col p-6">
                        <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                        <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
                        {member.bio && (
                          <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            {member.bio}
                          </p>
                        )}
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: placeholderCount }).map((_, index) => (
                  <li key={index}>
                    <article
                      className="flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-slate-300 bg-slate-50/80"
                      aria-label={`Segnaposto ${index + 1}`}
                    >
                      <div className="aspect-[4/5] animate-pulse bg-slate-200/80" />
                      <div className="space-y-3 p-6">
                        <div className="h-4 w-2/3 rounded bg-slate-200" />
                        <div className="h-3 w-1/2 rounded bg-slate-200" />
                        <div className="h-3 w-full rounded bg-slate-100" />
                        <div className="h-3 w-5/6 rounded bg-slate-100" />
                        <p className="pt-2 text-xs font-medium uppercase tracking-wide text-slate-400">
                          {team.comingSoonNote}
                        </p>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="py-16 text-center sm:py-20">
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">{cta.closing}</p>
            <Link
              href={cta.linkHref}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {cta.linkLabel}
            </Link>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
