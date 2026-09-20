import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Reveal from "../components/Reveal";
import {
  projects,
  type Project,
  type ProjectImage,
  type ProjectVideo,
} from "../data";

function ClickableImage({
  image,
  className,
}: {
  image: ProjectImage;
  className: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative block w-full overflow-hidden text-left"
        aria-label={`View larger image: ${image.alt}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={`${className} transition duration-500 group-hover:scale-[1.02]`}
        />
        <span className="absolute inset-0 grid place-items-center bg-ink/0 text-2xl text-cream opacity-0 transition group-hover:bg-ink/35 group-hover:opacity-100">
          ⤢
        </span>
      </button>

      {isOpen &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative flex max-h-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink text-xl text-cream transition hover:border-accent hover:text-accent"
              aria-label="Close image preview"
            >
              ×
            </button>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

function DecorativeVisual({ project }: { project: Project }) {
  const isCircus = project.id === "circus";
  return (
    <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-surface">
      <div
        className={`absolute inset-0 opacity-60 ${
          isCircus
            ? "bg-[radial-gradient(circle_at_50%_50%,rgba(255,77,216,0.12),transparent_60%)]"
            : "bg-[linear-gradient(135deg,rgba(124,108,255,0.14),rgba(255,77,216,0.06)_50%,transparent)]"
        }`}
        aria-hidden
      />
      {isCircus && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-40"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0, transparent 90px, rgba(255,255,255,0.05) 90px, rgba(255,255,255,0.05) 92px)",
          }}
          aria-hidden
        />
      )}
      <span className="relative select-none text-center font-display text-6xl font-bold leading-none tracking-tight text-transparent sm:text-8xl [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)]">
        {project.title}
      </span>
      <span className="absolute bottom-4 right-4 rounded-full border border-white/12 bg-ink/50 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted backdrop-blur">
        {project.discipline}
      </span>
    </div>
  );
}

function ProjectImages({ project }: { project: Project }) {
  if (project.images.length === 0) {
    return <DecorativeVisual project={project} />;
  }

  if (project.images.length === 1) {
    const img = project.images[0];
    if (img.video) return <VideoPlayer video={img.video} />;
    return (
      <figure className="overflow-hidden rounded-2xl border border-white/8">
        <ClickableImage image={img} className="aspect-[16/9] w-full object-cover" />
        {img.caption && (
          <figcaption className="flex items-center gap-2 border-t border-white/5 bg-surface px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted">
            <span className="text-accent">●</span> {img.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  if (
    (project.id === "immortality" || project.id === "circus") &&
    project.images.length === 2
  ) {
    return (
      <div className="grid gap-3 sm:grid-cols-2">
        {project.images.map((img) => (
          <figure
            key={img.src}
            className="overflow-hidden rounded-2xl border border-white/8"
          >
            <ClickableImage
              image={img}
              className="aspect-[4/3] w-full object-cover object-[right_top]"
            />
            {img.caption && (
              <figcaption className="px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                {img.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    );
  }

  const [first, ...rest] = project.images;
  return (
    <div className="grid gap-3">
      {first.video ? (
        <VideoPlayer video={first.video} />
      ) : (
        <figure className="overflow-hidden rounded-2xl border border-white/8">
          <ClickableImage
            image={first}
            className="aspect-[16/8] w-full object-cover"
          />
          {first.caption && (
            <figcaption className="flex items-center gap-2 border-t border-white/5 bg-surface px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted">
              <span className="text-accent">●</span> {first.caption}
            </figcaption>
          )}
        </figure>
      )}
      <div className="grid gap-3 sm:grid-cols-3">
        {rest.map((img) =>
          img.video ? (
            <VideoPlayer key={img.src} video={img.video} />
          ) : (
            <figure
              key={img.src}
              className="overflow-hidden rounded-2xl border border-white/8"
            >
              <ClickableImage
                image={img}
                className="aspect-[4/3] w-full object-cover"
              />
              {img.caption && (
                <figcaption className="px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted">
                  {img.caption}
                </figcaption>
              )}
            </figure>
          ),
        )}
      </div>
    </div>
  );
}

function VideoPlayer({
  video,
}: {
  video: ProjectVideo;
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-white/8 bg-ink">
      {isPlaying ? (
        <video
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-black object-cover"
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group relative block aspect-video w-full overflow-hidden bg-black"
          aria-label={`Play ${video.title}`}
        >
          <img
            src={video.poster}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-ink/20 transition group-hover:bg-ink/5" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-ink/70 pl-1 text-xl text-cream backdrop-blur transition group-hover:scale-110 group-hover:border-accent group-hover:bg-accent/20">
            ▶
          </span>
        </button>
      )}
      <figcaption className="border-t border-white/5 bg-surface px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-muted">
        <span className="text-accent">▶</span> {video.title}
      </figcaption>
    </figure>
  );
}

function ProjectSection({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="grid gap-8 border-t border-white/8 py-14 first:border-t-0 first:pt-0 md:grid-cols-[220px_1fr] md:gap-12">
        {/* left meta */}
        <div className="md:sticky md:top-24 md:self-start">
          <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-6">
            <span className="font-mono text-sm text-accent">{project.index}</span>
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-cream">
                {project.discipline}
              </p>
              <p className="mt-2 font-mono text-[12px] uppercase tracking-wider text-muted">
                {project.label}
              </p>
            </div>
          </div>
        </div>

        {/* right content */}
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-cream sm:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">
            {project.summary}
          </p>

          <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-muted">
            {project.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8">
            <ProjectImages project={project} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Portfolio() {
  return (
    <div>
      <section className="bg-grid relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
          <Reveal>
            <p className="font-mono text-[12px] uppercase tracking-[0.22em] text-accent">
              Portfolio
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-gradient sm:text-6xl">
              My projects so far.
            </h1>
            <p className="mt-5 font-mono text-sm uppercase tracking-wider text-muted">
              From my newest to my oldest.
            </p>
          </Reveal>

          <div className="mt-16">
            {projects.map((project) => (
              <ProjectSection key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
