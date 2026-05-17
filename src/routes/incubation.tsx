import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, FlaskConical, Coins, ArrowUpRight, TrendingUp } from "lucide-react";
import { usePageTheme } from "@/hooks/use-page-theme";

export const Route = createFileRoute("/incubation")({
  head: () => ({
    meta: [
      { title: "The Lotlite PropTech Foundry & Incubation Wing" },
      { name: "description", content: "Mentorship, sandbox infrastructure, and a ₹10 Cr micro-VC fund for student-led PropTech ventures." },
    ],
  }),
  component: Incubation,
});

const pillars = [
  { icon: Users, title: "Mentorship Network", body: "Direct desk access to top-tier developers, fund managers, and operator-investors across India and the GCC." },
  { icon: FlaskConical, title: "Co-Working & Sandbox", body: "Dedicated computing labs, spatial mapping tools, and live sandbox environments for testing systems on active construction sites." },
  { icon: Coins, title: "Seed Capital Access", body: "Direct pitching loops to a dedicated ₹10 Crore PropTech micro-VC fund — first checks deployed in under 30 days." },
];

const ventures = [
  { name: "Lotgrid", stage: "Pre-Seed · ₹1.2 Cr raised", thesis: "Fractional ownership rails for Tier-2 commercial inventory.", status: "active" },
  { name: "ParcelOS", stage: "Seed · in diligence", thesis: "GIS-native land-acquisition operating system for tier-1 developers.", status: "diligence" },
  { name: "Brickflow", stage: "Pre-Seed · ₹80 L raised", thesis: "Real-time supply-chain telemetry for cement, steel, and aggregates.", status: "active" },
  { name: "Vastu.ai", stage: "Demo Day · pitching", thesis: "LLM-based zoning, FSI, and DCR interpretation for project pre-feasibility.", status: "pitching" },
];

function Incubation() {
  usePageTheme("inc");
  return (
    <>
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/15 blur-3xl -z-10" />
        <div className="absolute inset-x-0 top-0 h-[500px] grid-overlay opacity-30 -z-10" />
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border-hairline bg-surface-soft px-3 py-1 text-xs uppercase tracking-widest text-[var(--gold)] mb-6 animate-fade-in">
              Founder Track · The Foundry
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.02] animate-fade-up">
              The Lotlite <span className="text-gradient-gold">PropTech Foundry</span> & Incubation Wing.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed animate-fade-up">
              Don't just look for jobs — create industries. We incubate, accelerate, and fund student-led ventures specializing in fractional ownership, smart city grids, and building material supply-chains.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up">
              <Link to="/" hash="apply" className="px-7 py-3.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--on-accent)] font-bold shadow-gold">
                Apply to the Foundry
              </Link>
              <a href="#ventures" className="px-7 py-3.5 rounded-md border-hairline bg-surface-soft hover:bg-[var(--gold)]/10 font-medium">
                See live ventures
              </a>
            </div>
          </div>
          <div className="relative animate-fade-up">
            <div className="absolute -inset-6 bg-gradient-to-br from-[var(--gold)]/30 to-transparent blur-2xl rounded-3xl -z-10" />
            <div className="rounded-3xl overflow-hidden border-hairline shadow-premium aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&q=80&auto=format&fit=crop" alt="Founders building PropTech" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-glass border-hairline rounded-xl p-4 shadow-premium">
              <div className="text-2xl font-bold text-gradient-gold">₹10 Cr</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Micro-VC fund</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline bg-[var(--navy-deep)]/40">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {[["₹10 Cr","Micro-VC Fund"],["28","Active Ventures"],["₹40Cr+","Follow-on Raised"],["6","Operator Partners"]].map(([n,l])=>(
            <div key={l} className="py-10 px-4 text-center">
              <div className="text-4xl font-bold text-gradient-gold">{n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Ecosystem Pillars</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 max-w-2xl">Everything a founder needs, under one roof.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-2xl border-hairline bg-card/50 p-8 hover:bg-card transition group">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] grid place-items-center text-[var(--navy-deep)] mb-6 group-hover:scale-110 transition">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="ventures" className="py-24 border-t border-hairline">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Live Venture Tracker</div>
              <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">Student prototypes, currently getting funded.</h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live updates from the Foundry dashboard
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {ventures.map((v) => (
              <article key={v.name} className="group rounded-2xl border-hairline bg-card/50 p-7 hover:bg-card hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-[var(--gold)]/5 blur-2xl group-hover:bg-[var(--gold)]/15 transition" />
                <div className="flex items-start justify-between mb-4 relative">
                  <div>
                    <h3 className="text-2xl font-bold">{v.name}</h3>
                    <div className="mt-1.5 text-xs uppercase tracking-wider text-[var(--gold)]">{v.stage}</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-[var(--gold)] group-hover:rotate-12 transition" />
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed">{v.thesis}</p>
                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                  Status: <span className="capitalize text-foreground/80">{v.status}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[var(--gold)]/15 via-[var(--gold)]/5 to-transparent border-hairline p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Have a thesis? Bring it to the Foundry.</h3>
              <p className="text-muted-foreground mt-2 max-w-xl">First-check decisions in under 30 days. No cap-table theater.</p>
            </div>
            <Link to="/" hash="apply" className="self-start md:self-auto px-7 py-3.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--navy-deep)] font-bold shadow-gold whitespace-nowrap">
              Apply to Foundry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
