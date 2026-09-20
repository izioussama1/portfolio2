import heroPortrait from "../assets/image.png";
import Reveal from "../components/Reveal";
import { about, site } from "../data";
import { navigate } from "../useHashRoute";

export default function About() {
  return (
    <div>
      <section className="bg-grid relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(124,108,255,0.8), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-accent">
              About me
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-cream sm:text-6xl">
              {about.headline}
              <span className="text-gradient"> {about.nameheadline}!</span>
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-start lg:gap-16">
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 90}>
                  <p className="text-lg leading-relaxed text-cream/85">{p}</p>
                </Reveal>
              ))}

              <Reveal delay={200}>
                <div className="rounded-2xl border border-white/8 bg-surface p-6 sm:p-8">
                  <h2 className="font-mono text-[12px] uppercase tracking-[0.22em] text-accent">
                    Education
                  </h2>
                  <ul className="mt-5 space-y-4">
                    {about.education.map((edu) => (
                      <li
                        key={edu.school}
                        className="flex items-center justify-between gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0"
                      >
                        <span className="font-display text-lg font-medium text-cream">
                          {edu.school}
                        </span>
                        <span className="font-mono text-sm text-muted">
                          {edu.years}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <button
                  onClick={() => navigate("#/portfolio")}
                  className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 font-mono text-[13px] uppercase tracking-wider text-ink transition hover:bg-accent"
                >
                  {about.cta}
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </button>
              </Reveal>
            </div>

            <Reveal delay={140} className="md:sticky md:top-28">
              <div className="scanlines glow-ring relative overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={heroPortrait}
                  alt="Abstract thermal artwork used across Alexandra's portfolio"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5">
                  <p className="font-mono text-[11px] uppercase tracking-wider text-black/80">
                    {site.name}
                  </p>
                  <span className="font-mono text-[11px] text-black/70">
                    {site.role}
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
                Fashion → Motion
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
