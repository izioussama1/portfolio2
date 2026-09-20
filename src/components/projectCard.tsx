import type { Project } from "../data";
import { navigate } from "../useHashRoute";

export default function ProjectCard({ project }: { project: Project }) {
  const image = project.images[0];

  return (
    <article className="card-hover group overflow-hidden rounded-2xl border border-white/10 bg-surface">
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex aspect-[16/10] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(124,108,255,0.22),transparent_65%)] font-display text-3xl font-semibold text-cream/30">
          {project.title}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-wider text-muted">
          <span>{project.discipline}</span>
          <span className="text-accent">{project.index}</span>
        </div>
        <h3 className="mt-3 font-display text-2xl font-semibold text-cream">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
        <button
          type="button"
          onClick={() => navigate("#/portfolio")}
          className="mt-5 font-mono text-xs uppercase tracking-wider text-cream transition hover:text-accent"
        >
          View project →
        </button>
      </div>
    </article>
  );
}
