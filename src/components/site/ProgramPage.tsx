import { Link } from "@tanstack/react-router";
import { usePageTheme, type PageTheme } from "@/hooks/use-page-theme";

export function ProgramPage({
  title,
  subtitle,
  semesters,
  ctaLabel,
  theme,
  heroImage,
  eyebrow = "Post Graduate Program",
}: {
  title: string;
  subtitle: string;
  semesters: { name: string; courses: string[] }[];
  ctaLabel: string;
  theme: PageTheme;
  heroImage: string;
  eyebrow?: string;
}) {
  usePageTheme(theme);

  return (
    <div className="pt-32 relative">
      <div className="absolute inset-x-0 top-0 h-[600px] grid-overlay opacity-30 -z-10" />

      <section className="mx-auto max-w-7xl px-6 pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-surface-soft px-3 py-1 text-xs uppercase tracking-widest text-[var(--gold)] mb-6 animate-fade-in">
            {eyebrow}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] animate-fade-up">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-up">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
            <Link to="/" hash="apply" className="px-6 py-3 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--on-accent)] font-bold shadow-gold">
              {ctaLabel}
            </Link>
            <a href="#curriculum" className="px-6 py-3 rounded-md border-hairline bg-surface-soft hover:bg-[var(--gold)]/10 font-medium">
              View Curriculum
            </a>
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 bg-gradient-to-br from-[var(--gold)]/20 to-transparent blur-2xl rounded-3xl -z-10" />
          <div className="rounded-3xl overflow-hidden border-hairline shadow-premium aspect-[4/5]">
            <img src={heroImage} alt={title} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-glass border-hairline rounded-xl p-4 shadow-premium">
            <div className="text-2xl font-bold text-gradient-gold">Day 1</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Employment activates</div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-[var(--navy-mid)]/40">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--hairline)]">
          {[["12","Months"],["4","Semesters"],["100%","Placement"],["18L+","Avg CTC"]].map(([n,l])=>(
            <div key={l} className="py-8 px-4 text-center">
              <div className="text-3xl font-bold text-gradient-gold">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="curriculum" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Curriculum</div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-xl">Four semesters. Engineered for real-world execution.</h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-md">SCDL-sourced academic framework, hyper-customized to the real estate and PropTech ecosystem.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {semesters.map((s, i) => (
            <div key={s.name} className="group relative rounded-2xl border-hairline bg-card/60 p-7 hover:bg-card transition shadow-premium overflow-hidden">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[var(--gold)]/10 blur-2xl group-hover:bg-[var(--gold)]/25 transition" />
              <div className="flex items-center justify-between mb-5 relative">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Semester {["I","II","III","IV"][i]}</div>
                <div className="h-8 w-8 rounded-md border-hairline grid place-items-center text-[var(--gold)] font-bold text-sm">{i+1}</div>
              </div>
              <h3 className="text-xl font-bold mb-5">{s.name}</h3>
              <ul className="space-y-3">
                {s.courses.map((c) => (
                  <li key={c} className="flex gap-3 text-sm text-foreground/90">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gradient-to-r from-[var(--gold)]/15 via-[var(--gold)]/5 to-transparent border-hairline p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to claim your seat?</h3>
            <p className="text-muted-foreground mt-2">Cohorts are capped. Employment activates Day 1.</p>
          </div>
          <Link to="/" hash="apply" className="self-start md:self-auto px-7 py-3.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--on-accent)] font-bold shadow-gold whitespace-nowrap">
            {ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
