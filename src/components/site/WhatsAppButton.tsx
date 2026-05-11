import { MessageCircle } from "lucide-react";

const PHONE = "5547999990000"; // +55 47 99999-0000
const MESSAGE = encodeURIComponent(
  "Olá Nika! Gostaria de conhecer o portfólio de imóveis de alto padrão.",
);

export function WhatsAppButton({
  label = "WhatsApp",
  variant = "floating",
}: {
  label?: string;
  variant?: "floating" | "inline";
}) {
  const href = `https://wa.me/${PHONE}?text=${MESSAGE}`;

  if (variant === "inline") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition hover:bg-[#1ebe5d]"
      >
        <MessageCircle size={16} strokeWidth={1.75} />
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:shadow-[0_20px_50px_-10px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
      </span>
      <MessageCircle size={20} strokeWidth={1.75} />
      <span className="hidden sm:inline text-[0.7rem] uppercase tracking-[0.2em] font-medium">
        Fale com a Nika
      </span>
    </a>
  );
}
