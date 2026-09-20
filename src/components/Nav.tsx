import { navLinks, site } from "../data";
import { navigate } from "../useHashRoute";

export default function Nav({ route }: { route: string }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/80 backdrop-blur-lg">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => navigate("#/")}
          className="flex items-center gap-3 text-left"
          aria-label="Go to home page"
        >
          <span className="hidden font-display text-sm font-semibold text-gradient sm:inline">
            {site.name}
          </span>
        </button>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1 sm:gap-3">
            {navLinks.map((link) => {
              const active = route === link.href.slice(1);
              return (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => navigate(link.href)}
                    className={`rounded-full px-3 py-2 font-mono text-[11px] uppercase tracking-wider transition sm:px-4 ${
                      active
                        ? "bg-white/10 text-cream"
                        : "text-muted hover:text-cream"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
