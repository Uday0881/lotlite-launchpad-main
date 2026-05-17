import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { applyMode, getInitialMode } from "@/hooks/use-page-theme";

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const m = getInitialMode();
    setMode(m);
    applyMode(m);
  }, []);

  const toggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    applyMode(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color mode"
      className="relative h-9 w-16 rounded-full border-hairline bg-surface-soft hover:bg-[var(--gold)]/10 transition flex items-center px-1"
    >
      <span
        className={`absolute top-1 h-7 w-7 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] shadow-gold transition-transform duration-500 ${
          mode === "dark" ? "translate-x-0" : "translate-x-7"
        }`}
      />
      <Moon className={`h-3.5 w-3.5 ml-1.5 z-10 transition ${mode === "dark" ? "text-[var(--on-accent)]" : "text-muted-foreground"}`} />
      <Sun className={`h-3.5 w-3.5 ml-auto mr-1.5 z-10 transition ${mode === "light" ? "text-[var(--on-accent)]" : "text-muted-foreground"}`} />
    </button>
  );
}
