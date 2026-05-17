import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, CheckCircle2, Car, Building2, LineChart,
  Sparkles, ChevronLeft, ChevronRight,
} from "lucide-react";
import { usePageTheme } from "@/hooks/use-page-theme";
import { FAQ } from "@/components/site/FAQ";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lotlite School of Real Estate — The New Era of Real Estate Leadership" },
      { name: "description", content: "Earn, build, and lead from Day 1. A 12-month experiential MBA-equivalent program for the PropTech era." },
    ],
  }),
  component: Home,
});

const lifeCards = [
  {
    icon: Car,
    title: "On-Demand Mobility",
    body: "Dedicated cars and professional drivers during active office hours — exclusively for client negotiations, property assessments, and site visits.",
    tag: "Fleet Access",
  },
  {
    icon: Building2,
    title: "Live Market Classrooms",
    body: "Real-time deal-making environments inside active developer offices replace stale lecture halls. You learn by closing.",
    tag: "Field Immersion",
  },
  {
    icon: LineChart,
    title: "Capital Markets Desk",
    body: "Live trading floor for REIT analytics, valuation modeling, and forward-curve forecasting on Indian metro markets.",
    tag: "Analytics",
  },
  {
    icon: Sparkles,
    title: "Founder Residencies",
    body: "Quarterly week-long sprints with PropTech founders building category-defining ventures across India and the GCC.",
    tag: "Residency",
  },
];

const pillars = [
  { n: "01", title: "Employment from Day One", body: "Salaried role activates on enrollment. No internship limbo, no waiting for placement season." },
  { n: "02", title: "Tech-Driven Property Systems", body: "Build the data stack — CRM, GIS, valuation engines, and listing intelligence platforms." },
  { n: "03", title: "Real Sales by Doing Sales", body: "Close live transactions under structured mentorship. Your commission is your transcript." },
  { n: "04", title: "Advanced PropTech Analytics", body: "Spatial data, predictive modeling, and capital flow forecasting taught against live market signals." },
];

const stepperSteps = [
  { n: 1, title: "Apply", body: "Submit your profile and a 90-second pitch on why real estate." },
  { n: 2, title: "Diagnostic", body: "Case-led interview with a partner developer and a Lotlite faculty lead." },
  { n: 3, title: "Activate", body: "Sign your employment letter. Onboard to the fleet, sandbox, and capital desk." },
  { n: 4, title: "Launch", body: "12 months later — placed, promoted, or funded as a founder." },
];

function Home() {
  usePageTheme("home");
  return (
    <>
      <Hero />
      <StatsBand />
      <LifeCarousel />
      <DemoDay />
      <Pillars />
      <Outcomes />
      <Admissions />
      <FAQ />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80&auto=format&fit=crop"
          alt="Lotlite campus skyline"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%)]" />
        <div className="absolute top-20 left-1/4 h-[480px] w-[480px] rounded-full bg-[var(--gold)]/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[var(--gold)]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest text-[var(--gold-bright)] mb-8 animate-fade-in">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold-bright)] animate-pulse" />
          Cohort 04 · Now open
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] max-w-5xl mx-auto animate-fade-up text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.6)]">
          The New Era of Real Estate Leadership:{" "}
          <span className="text-gradient-gold">Earn, Build, & Lead</span>{" "}
          From Day One.
        </h1>
        <p className="mt-8 text-lg text-white/85 max-w-2xl mx-auto animate-fade-up [text-shadow:0_1px_12px_rgba(0,0,0,0.6)]">
          A 12-month MBA-equivalent program engineered for the PropTech era. Live deals, real capital, and a fleet that moves at the speed of the market.
        </p>

        <HeroCta />
      </div>
    </section>
  );
}

function HeroCta() {
  return (
    <>
      <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[var(--gold)]/50 bg-[var(--gold)]/15 backdrop-blur px-5 py-3 animate-fade-up">
        <span className="text-xl">⚠️</span>
        <span className="text-sm font-semibold text-white">
          Guaranteed Employment From Day 1 of the Program.
        </span>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up">
        <Link to="/" hash="apply" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--on-accent)] font-bold shadow-gold">
          Apply Now <ArrowRight className="h-4 w-4" />
        </Link>
        <a href="#program" className="px-7 py-3.5 rounded-md border border-white/25 bg-white/10 backdrop-blur hover:bg-white/15 text-white font-medium">
          Explore Program
        </a>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          ["12 Months", "Duration"],
          ["Full-Time", "Experiential"],
          ["Pune / Hybrid", "Format"],
          ["PropTech & Infra", "Focus"],
        ].map(([t, s]) => (
          <div key={s} className="rounded-xl border border-white/15 bg-white/10 backdrop-blur p-5 text-left">
            <div className="text-xs uppercase tracking-wider text-white/60">{s}</div>
            <div className="mt-1.5 text-base font-semibold text-white">{t}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function StatsBand() {
  const stats = [
    ["18L+", "Average CTC"],
    ["100%", "First-Day Employment"],
    ["3.2X", "Average Career Jump"],
    ["350+", "Partner Networks"],
  ];
  return (
    <section id="outcomes" className="border-y border-hairline bg-[var(--navy-deep)]/60">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
        {stats.map(([n, l]) => (
          <div key={l} className="py-12 px-6 text-center">
            <div className="text-5xl md:text-6xl font-bold text-gradient-gold tracking-tight">{n}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-3">{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function LifeCarousel() {
  const [i, setI] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const go = (d: number) => setI((p) => (p + d + lifeCards.length) % lifeCards.length);

  useEffect(() => {
    const el = scrollerRef.current?.children[i] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [i]);

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Life at Lotlite</div>
            <h2 className="text-3xl md:text-5xl font-bold max-w-2xl">Built for operators. Not for theorists.</h2>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => go(-1)} className="h-11 w-11 rounded-full border-hairline bg-white/5 hover:bg-white/10 grid place-items-center"><ChevronLeft className="h-5 w-5" /></button>
            <button type="button" onClick={() => go(1)} className="h-11 w-11 rounded-full border-hairline bg-white/5 hover:bg-white/10 grid place-items-center"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>

        <div ref={scrollerRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none" style={{ scrollbarWidth: "none" }}>
          {lifeCards.map((c, idx) => {
            const Icon = c.icon;
            const active = idx === i;
            return (
              <article
                key={c.title}
                onClick={() => setI(idx)}
                className={`shrink-0 snap-center w-[85%] md:w-[460px] rounded-3xl p-8 border-hairline cursor-pointer transition-all duration-500 ${
                  active ? "bg-card shadow-premium scale-100" : "bg-card/40 scale-[0.96] opacity-70"
                }`}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] grid place-items-center text-[var(--navy-deep)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--gold)] border border-[var(--gold)]/30 rounded-full px-3 py-1">{c.tag}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DemoDay() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border-hairline bg-gradient-to-br from-[var(--navy-deep)] via-card to-[var(--navy-deep)] p-10 md:p-16 shadow-premium relative overflow-hidden">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
          <div className="grid md:grid-cols-2 gap-10 relative">
            <div>
              <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-4">Lotlite Sandbox · Demo Day</div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Pitch PropTech models to real estate funds and VCs.</h2>
              <p className="mt-6 text-muted-foreground">
                Every cohort culminates in Demo Day — a closed-room pitch event where students present production-grade ventures to allocators actively deploying capital into the Indian real estate stack.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border-hairline p-5 bg-white/[0.03]">
                  <div className="text-3xl font-bold text-gradient-gold">50+</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">VCs on Campus</div>
                </div>
                <div className="rounded-xl border-hairline p-5 bg-white/[0.03]">
                  <div className="text-3xl font-bold text-gradient-gold">₹10 Cr</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">Allocation Fund</div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Week 12 — Sandbox onboarding & GTM frameworks",
                "Week 24 — Working prototype review with mentors",
                "Week 36 — VC office hours & technical due diligence",
                "Week 48 — Demo Day pitch + term-sheet conversations",
              ].map((t, idx) => (
                <div key={t} className="flex items-start gap-4 rounded-xl border-hairline bg-white/[0.03] p-5">
                  <div className="h-8 w-8 rounded-md bg-[var(--gold)]/15 grid place-items-center text-[var(--gold)] font-bold text-sm shrink-0">{idx + 1}</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section id="program" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">The Program</div>
          <h2 className="text-3xl md:text-5xl font-bold">Four pillars. One operating system.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div key={p.n} className="group rounded-2xl border-hairline bg-card/40 p-7 hover:bg-card hover:-translate-y-1 transition-all duration-300">
              <div className="text-5xl font-bold text-gradient-gold mb-6">{p.n}</div>
              <h3 className="text-lg font-bold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="py-24 border-y border-hairline bg-[var(--navy-deep)]/40">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Outcomes</div>
          <h2 className="text-3xl md:text-4xl font-bold">Where Lotlite operators land.</h2>
          <p className="mt-4 text-muted-foreground">Developer C-suites, capital allocator desks, and founder roles inside the country's most-watched PropTech ventures.</p>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {[
            ["Asset Manager", "₹22 LPA"],
            ["PropTech PM", "₹19 LPA"],
            ["Capital Markets Analyst", "₹24 LPA"],
            ["Founder · Venture Backed", "₹10Cr+ raised"],
          ].map(([r, c]) => (
            <div key={r} className="rounded-xl border-hairline bg-card/60 p-5">
              <div className="text-sm text-muted-foreground">{r}</div>
              <div className="text-xl font-bold mt-1">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Admissions() {
  return (
    <section id="apply" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Admissions</div>
          <h2 className="text-3xl md:text-5xl font-bold">From application to activation.</h2>
        </div>

        <div className="relative mb-20">
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {stepperSteps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] text-[var(--navy-deep)] font-bold text-lg grid place-items-center shadow-gold mb-5">
                  {s.n}
                </div>
                <h3 className="font-bold text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-[220px] mx-auto">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border-hairline bg-card/60 p-8 shadow-premium">
            <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Investment</div>
            <h3 className="text-3xl font-bold">Full Cohort Program</h3>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gradient-gold">₹4,80,000</span>
              <span className="text-sm text-muted-foreground">/ 12 months</span>
            </div>
            <p className="text-sm text-muted-foreground mt-3">Offset by guaranteed Day 1 employment income from your assigned developer partner.</p>
            <ul className="mt-7 space-y-3">
              {[
                "Day-1 salaried employment letter",
                "On-demand mobility fleet access",
                "Capital Markets Desk + Sandbox seat",
                "Founder mentor pool + Demo Day exposure",
                "Lifetime alumni capital network",
              ].map((p) => (
                <li key={p} className="flex gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-[var(--gold)] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-xl bg-[var(--gold)]/10 border border-[var(--gold)]/20 p-4 text-xs text-foreground/90">
              <strong className="text-[var(--gold)]">Mobility fleet note:</strong> Cars + drivers are provisioned during active hours for client and site work. Personal use is excluded.
            </div>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}
