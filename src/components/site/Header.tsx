import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/site/ThemeToggle";

const programs = [
  { to: "/programs/data-science", label: "DS-Data Science in Real Estate", desc: "Predictive land value modeling" },
  { to: "/programs/information-technology", label: "IT-Information Technology in Real Estate", desc: "PropTech infrastructure" },
  { to: "/programs/crm", label: "CRM-Customer Relationship Management in Real Estate", desc: "High-ticket asset clientele" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-glass border-b border-hairline" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] grid place-items-center text-[var(--navy-deep)] font-black">
            L
          </div>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            Lotlite <span className="text-muted-foreground font-normal">School of Real Estate</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className="px-4 py-2 text-sm text-foreground/90 hover:text-foreground inline-flex items-center gap-1">
              PG Programs <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {open && (
              <div className="absolute top-full left-0 pt-3 w-[420px] animate-fade-in">
                <div className="bg-glass border-hairline rounded-xl p-2 shadow-premium">
                  {programs.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      className="block px-4 py-3 rounded-lg hover:bg-white/5 transition"
                    >
                      <div className="text-sm font-semibold text-foreground">{p.label}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{p.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/" hash="outcomes" className="px-4 py-2 text-sm text-foreground/90 hover:text-foreground">
            Outcomes
          </Link>
          <Link to="/incubation" className="px-4 py-2 text-sm text-foreground/90 hover:text-foreground">
            Incubation
          </Link>
          <Link to="/contact" className="px-4 py-2 text-sm text-foreground/90 hover:text-foreground">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/"
            hash="apply"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--navy-deep)] text-sm font-bold shadow-gold hover:opacity-95 transition"
          >
            Apply Now
          </Link>
          <button className="lg:hidden text-foreground" onClick={() => setMobile((v) => !v)}>
            {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="lg:hidden bg-glass border-t border-hairline px-6 py-4 space-y-2 animate-fade-in">
          <div className="text-xs uppercase tracking-wider text-muted-foreground pt-2">PG Programs</div>
          {programs.map((p) => (
            <Link key={p.to} to={p.to} onClick={() => setMobile(false)} className="block py-2 text-sm">
              {p.label}
            </Link>
          ))}
          <Link to="/" hash="outcomes" onClick={() => setMobile(false)} className="block py-2 text-sm">Outcomes</Link>
          <Link to="/incubation" onClick={() => setMobile(false)} className="block py-2 text-sm">Incubation</Link>
          <Link to="/contact" onClick={() => setMobile(false)} className="block py-2 text-sm">Contact Us</Link>
          <Link to="/" hash="apply" onClick={() => setMobile(false)} className="block mt-2 text-center py-2.5 rounded-md bg-gradient-to-r from-[var(--gold)] to-[var(--gold-bright)] text-[var(--navy-deep)] font-bold text-sm">Apply Now</Link>
        </div>
      )}
    </header>
  );
}
