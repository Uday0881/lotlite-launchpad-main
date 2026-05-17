import { useEffect } from "react";

export type PageTheme = "home" | "ds" | "it" | "crm" | "inc";

export function usePageTheme(theme: PageTheme) {
  useEffect(() => {
    const html = document.documentElement;
    const prev = html.getAttribute("data-theme");
    html.setAttribute("data-theme", theme);
    return () => {
      if (prev) html.setAttribute("data-theme", prev);
      else html.removeAttribute("data-theme");
    };
  }, [theme]);
}

export function getInitialMode(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem("lotlite-mode");
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

export function applyMode(mode: "light" | "dark") {
  const html = document.documentElement;
  html.classList.toggle("dark", mode === "dark");
  html.classList.toggle("light", mode === "light");
  try { localStorage.setItem("lotlite-mode", mode); } catch {}
}
