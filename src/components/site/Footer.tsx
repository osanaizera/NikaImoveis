import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/85 mt-32">
      <div className="container-luxe py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
            Curadoria de imóveis de altíssimo padrão no Vale do Itajaí e
            litoral catarinense. Atendimento exclusivo, discreto e estratégico
            em cada etapa da sua decisão imobiliária.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="https://instagram.com/nikaimoveis"
              aria-label="Instagram"
              className="w-10 h-10 grid place-items-center border border-cream/20 hover:border-accent hover:text-accent transition"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 grid place-items-center border border-cream/20 hover:border-accent hover:text-accent transition"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Navegação
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              ["/", "Início"],
              ["/imoveis", "Imóveis"],
              ["/vender", "Anuncie seu imóvel"],
              ["/sobre", "Quem somos"],
              ["/contato", "Contato"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-accent transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.25em] text-accent mb-5">
            Contato
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-1 shrink-0 text-accent" />
              <span>
                Blumenau · Balneário Camboriú
                <br />
                Santa Catarina
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              <span>+55 (47) 99999-0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              <span>contato@nikaimoveis.com.br</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-luxe py-6 flex flex-col md:flex-row justify-between items-center text-xs text-cream/50 gap-3">
          <span>© {new Date().getFullYear()} Nika Imóveis. Todos os direitos reservados.</span>
          <span className="uppercase tracking-[0.25em]">CRECI/SC · Nika Klein</span>
        </div>
      </div>
    </footer>
  );
}
