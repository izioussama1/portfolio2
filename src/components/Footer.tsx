import { navLinks, site } from "../data";
import { navigate } from "../useHashRoute";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-ink-2">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-accent/20 to-ember/10 font-mono text-xs font-medium text-cream">
                AP
              </span>
              <span className=" text-gradient font-display text-lg font-semibold text-cream">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Motion design student crafting visual stories between fashion and
              digital worlds.
            </p>
          </div>

          <div>

            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-sm text-cream/80 transition hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>

            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-cream/80 transition hover:text-accent"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cream/80 transition hover:text-accent"
                >
                  Instagram · {site.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-muted">
            © {year} by {site.name}.
          </p>
          <p className="font-mono text-xs text-muted">
            Motion · Fashion · Storytelling
          </p>
        </div>
      </div>
    </footer>
  );
}
