import logo from "@/assets/nika/logo-orange.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logo}
        alt="Nika Imóveis"
        className="h-10 w-auto"
        loading="eager"
      />
      <span className="hidden sm:flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.18em] text-current">
          NIKA
        </span>
        <span className="text-[0.55rem] uppercase tracking-[0.4em] text-current/70 mt-0.5">
          Imóveis · Alto Padrão
        </span>
      </span>
    </div>
  );
}
