import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is Day 1 employment really guaranteed?",
    a: "Yes. Every admitted student receives a salaried role with a partner developer or PropTech firm activated on enrollment day. Your offer letter is signed before the first class begins.",
  },
  {
    q: "What is the total program investment?",
    a: "₹4,80,000 for the 12-month cohort. This is materially offset by the salaried Day 1 employment income you earn from your assigned developer partner.",
  },
  {
    q: "Who is this program for?",
    a: "Graduates, working professionals, and founders who want to build inside the Indian real estate stack — sales, asset management, PropTech product, or venture creation.",
  },
  {
    q: "How does the Lotlite Sandbox & Demo Day work?",
    a: "Through the 12 months you build a production-grade PropTech venture inside our Sandbox. Demo Day is a closed-room pitch to 50+ VCs and a ₹10 Cr allocation fund actively deploying into the category.",
  },
  {
    q: "Is the program full-time? Where is it based?",
    a: "Full-time and experiential. Pune-headquartered with hybrid field immersion across partner offices. On-demand mobility fleet is included for client and site work.",
  },
  {
    q: "What is the admissions timeline?",
    a: "Cohort 04 is open. Submit your application → diagnostic interview within 7 days → activation letter within 14 days of acceptance.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-[var(--gold)] mb-3">FAQ</div>
          <h2 className="text-3xl md:text-5xl font-bold">Questions, answered.</h2>
          <p className="mt-4 text-muted-foreground">Everything you need to decide if Lotlite is your next 12 months.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="rounded-2xl border-hairline bg-card/60 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="font-semibold text-base md:text-lg">{f.q}</span>
                  <span className="h-9 w-9 shrink-0 rounded-full bg-[var(--gold)]/15 text-[var(--gold)] grid place-items-center">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 md:px-6 pb-6 -mt-1 text-sm md:text-base text-muted-foreground leading-relaxed animate-fade-in">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
