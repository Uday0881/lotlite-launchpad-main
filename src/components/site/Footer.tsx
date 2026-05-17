import { Link } from "@tanstack/react-router";

// Footer is force-dark across the site regardless of global light/dark mode.
// We scope a fixed dark palette via inline CSS variable overrides.
const darkVars: React.CSSProperties = {
  ["--background" as any]: "oklch(0.14 0.03 250)",
  ["--foreground" as any]: "oklch(0.98 0.005 250)",
  ["--muted-foreground" as any]: "oklch(0.72 0.02 250)",
  ["--hairline" as any]: "oklch(1 0 0 / 0.08)",
  ["--gold" as any]: "oklch(0.82 0.16 78)",
  ["--gold-bright" as any]: "oklch(0.88 0.18 85)",
  ["--navy-deep" as any]: "oklch(0.10 0.025 250)",
  background: "oklch(0.10 0.025 250)",
  color: "oklch(0.98 0.005 250)",
};

export function Footer() {
  return (
    <footer style={darkVars} className="mt-32 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] grid place-items-center text-[var(--navy-deep)] font-black">L</div>
            <span className="font-semibold text-white">Lotlite</span>
          </Link>
          <p className="text-sm text-white/60 leading-relaxed">
            Lotlite School of Real Estate<br />
            Tech Tower, Baner Road<br />
            Pune, MH 411045 · India
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4">Programs</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/programs/data-science" className="text-white/80 hover:text-[var(--gold)]">Data Science</Link></li>
            <li><Link to="/programs/information-technology" className="text-white/80 hover:text-[var(--gold)]">Information Technology</Link></li>
            <li><Link to="/programs/crm" className="text-white/80 hover:text-[var(--gold)]">CRM</Link></li>
            <li><Link to="/incubation" className="text-white/80 hover:text-[var(--gold)]">Incubation</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-white/80 hover:text-[var(--gold)]">Home</Link></li>
            <li><Link to="/" hash="outcomes" className="text-white/80 hover:text-[var(--gold)]">Outcomes</Link></li>
            <li><Link to="/" hash="apply" className="text-white/80 hover:text-[var(--gold)]">Apply Now</Link></li>
            <li><Link to="/contact" className="text-white/80 hover:text-[var(--gold)]">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-wider text-white/50 mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy" className="text-white/80 hover:text-[var(--gold)]">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-white/80 hover:text-[var(--gold)]">Terms of Service</Link></li>
            <li><Link to="/code-of-conduct" className="text-white/80 hover:text-[var(--gold)]">Code of Conduct</Link></li>
            <li><Link to="/refund-policy" className="text-white/80 hover:text-[var(--gold)]">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Lotlite School of Real Estate. All rights reserved.</p>
          <p>Crafted for the next era of PropTech leaders.</p>
        </div>
      </div>
    </footer>
  );
}
