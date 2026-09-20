import { useEffect, useState } from "react";

function readHash(): string {
  const raw = window.location.hash.replace(/^#/, "");
  return raw || "/";
}

export function useHashRoute(): string {
  const [route, setRoute] = useState<string>(readHash);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(readHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

export function navigate(href: string) {
  if (window.location.hash === href) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.location.hash = href;
}
