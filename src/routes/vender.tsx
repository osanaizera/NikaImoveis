import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Camera, TrendingUp, ShieldCheck } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/vender")({
  head: () => ({
    meta: [
      { title: "Anuncie seu imóvel — Nika Imóveis" },
      {
        name: "description",
        content:
          "Anuncie seu imóvel de alto padrão com quem entende do mercado de luxo em Santa Catarina.",
      },
      { property: "og:title", content: "Anuncie seu imóvel — Nika Imóveis" },
      {
        property: "og:description",
        content: "Avaliação, marketing e venda profissional para imóveis exclusivos.",
      },
    ],
  }),
  component: VenderPage,
});

function VenderPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <span className="divider-gold mr-3" />
              Anuncie seu imóvel
            </span>
            <h1 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
              Seu imóvel apresentado com a sofisticação que ele merece
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              Trabalhamos com base de clientes qualificados, fotografia
              profissional, tour virtual 360° e estratégia de divulgação
              exclusiva — sem cartazes na fachada.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-px bg-border border border-border mt-16">
            {[
              { icon: ShieldCheck, t: "Avaliação técnica", d: "Análise de mercado e precificação estratégica." },
              { icon: Camera, t: "Produção premium", d: "Fotografia, vídeo e tour 360° com produtoras parceiras." },
              { icon: TrendingUp, t: "Divulgação direcionada", d: "Apresentação a clientes qualificados da nossa carteira." },
              { icon: CheckCircle2, t: "Negociação completa", d: "Da proposta à escritura, com suporte jurídico." },
            ].map((s) => (
              <div key={s.t} className="bg-cream p-8">
                <s.icon size={26} className="text-accent" strokeWidth={1.25} />
                <h3 className="font-display text-xl mt-4">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  {s.d}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mt-24">
            <div>
              <h2 className="font-display text-4xl leading-tight">
                Solicite uma avaliação confidencial do seu imóvel
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Preencha as informações ao lado ou fale diretamente com nossa
                equipe. O processo é discreto e personalizado, com retorno em
                até 48 horas.
              </p>
              <Link to="/contato" className="btn-outline mt-8 inline-flex">
                Falar agora
              </Link>
            </div>

            <form className="bg-charcoal text-cream p-8 lg:p-12">
              <h3 className="font-display text-2xl">Avaliação gratuita</h3>
              <div className="mt-6 space-y-3">
                {["Nome", "E-mail", "Telefone / WhatsApp", "Endereço do imóvel", "Tipo (Apto, casa, etc)"].map(
                  (l) => (
                    <input
                      key={l}
                      placeholder={l}
                      className="w-full bg-cream/10 border border-cream/20 px-4 py-3 text-sm placeholder:text-cream/50 outline-none focus:border-accent"
                    />
                  )
                )}
                <textarea
                  rows={3}
                  placeholder="Detalhes (área, dormitórios, diferenciais)"
                  className="w-full bg-cream/10 border border-cream/20 px-4 py-3 text-sm placeholder:text-cream/50 outline-none focus:border-accent"
                />
                <button type="button" className="w-full btn-primary bg-accent hover:bg-cream hover:text-charcoal">
                  Solicitar avaliação
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
