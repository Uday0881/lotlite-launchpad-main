import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  const phone = "918805843309";
  const text = encodeURIComponent("Hi Lotlite team — I'd like to know more about your PG programs.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[60] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 blur-xl animate-pulse" />
      <span className="relative h-14 w-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-2xl ring-4 ring-[#25D366]/20 group-hover:scale-105 transition-transform">
        <MessageCircle className="h-7 w-7" fill="currentColor" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:group-hover:block whitespace-nowrap rounded-md bg-black/85 text-white text-xs px-3 py-1.5 shadow-lg">
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
