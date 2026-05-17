import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { usePageTheme } from "@/hooks/use-page-theme";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Lotlite School of Real Estate" },
      { name: "description", content: "Reach the Lotlite admissions and program team. Pune-based, India-wide." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  usePageTheme("home");
  return (
    <section className="pt-36 pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">Contact</div>
        <h1 className="text-4xl md:text-6xl font-bold">Talk to the program team.</h1>
        <p className="mt-5 text-muted-foreground max-w-2xl">
          Admissions, partnerships, media, or alumni — pick a channel and a Lotlite lead will reply within 24 hours.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {[
            { icon: Phone, label: "Admissions hotline", value: "+91 88058 43309", href: "tel:+918805843309" },
            { icon: MessageCircle, label: "WhatsApp", value: "+91 88058 43309", href: "https://wa.me/918805843309" },
            { icon: Mail, label: "Email", value: "admissions@lotlite.in", href: "mailto:admissions@lotlite.in" },
            { icon: MapPin, label: "Campus", value: "Tech Tower, Baner Road, Pune 411045", href: "#" },
          ].map((c) => (
            <a key={c.label} href={c.href} className="rounded-2xl border-hairline bg-card/60 p-6 flex items-start gap-4 hover:bg-card transition shadow-premium">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-bright)] grid place-items-center text-[var(--on-accent)]">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                <div className="mt-1 font-semibold">{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
