import frequentlaPosterVideo from "../assets/poster explanation.mp4";
import ProjectCard from "../components/projectCard";
import Reveal from "../components/Reveal";
import { projects, site } from "../data";
import { navigate } from "../useHashRoute";

const marquee = [
  "Motion Design",
  "Fashion Design",
  "Visual Storytelling",
  "Concept",
];

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div>
      {/* Hero */}
      <section className="bg-grid relative overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full opacity-25 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,77,216,0.7), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-28 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:pt-36 lg:gap-16">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.22em] text-accent">
                <span className="inline-block h-px w-8 bg-accent/60" aria-hidden />
                Motion design · {site.location}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
                Hello, I’m a{" "}
                <span className="text-gradient">motion design</span> student
                based in Czech Republic.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                This is my path to creation after transitioning from fashion
                design to motion design.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate("#/portfolio")}
                  className="group inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-ink transition hover:bg-accent"
                >
                  View portfolio
                  <span
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    →
                  </span>
                </button>
                <button
                  onClick={() => navigate("#/about")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-[13px] uppercase tracking-wider text-cream transition hover:border-accent/60 hover:text-accent"
                >
                  About me
                </button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-muted">
                <span>Education · VoŠ SCHOLASTIKA</span>
                <span>Background · Fashion design</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="scanlines glow-ring animate-float relative overflow-hidden rounded-3xl border border-white/10">
              <video
                autoPlay={true}
                muted
                loop={true}
                playsInline
                onEnded={(event) => {
                  const video = event.currentTarget;
                  video.currentTime = 0;
                  void video.play();
                }}
                className="aspect-[9/9] w-full object-cover"
                aria-label="Frequentla motion design poster animation"
              >
                <source src={frequentlaPosterVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-cream/80">
                    Featured work
                  </p>
                  <p className="font-display text-lg font-semibold text-cream">
                    Frequentla
                  </p>
                </div>
                <span className="rounded-full border border-white/15 bg-ink/50 px-3 py-1 font-mono text-[11px] text-cream backdrop-blur">
                  01
                </span>
              </div>
            </div>
            <span className="absolute -left-3 top-8 hidden rounded-full border border-accent/40 bg-ink/80 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text cream-accent backdrop-blur sm:inline-block">
              Alien perception
            </span>
          </Reveal>
        </div>
      </section>

      {/* Marquee */}
      <section
        className="overflow-hidden border-y border-white/5 bg-ink-2 py-4"
        aria-hidden
      >
        <div className="flex w-max animate-marquee items-center gap-8">
          {[...marquee, ...marquee, ...marquee].map((word, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-display text-lg font-medium text-cream/60">
                {word}
              </span>
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-accent">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
                Latest projects
              </h2>
            </div>
            <button
              onClick={() => navigate("#/portfolio")}
              className="font-mono text-[13px] uppercase tracking-wider text-muted transition hover:text-accent"
            >
              All projects →
            </button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>


    </div>
  );
}
