import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import broker from "@/assets/broker.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Quem somos — Nika Imóveis" },
      {
        name: "description",
        content:
          "Conheça a história e a equipe por trás do Nika Imóveis, referência em alto padrão em Santa Catarina.",
      },
      { property: "og:title", content: "Quem somos — Nika Imóveis" },
      {
        property: "og:description",
        content: "Mais de uma década curando os melhores imóveis de Santa Catarina.",
      },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow">
              <span className="divider-gold mr-3" />
              Quem somos
            </span>
            <h1 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
              Uma assinatura de confiança no mercado de alto padrão
            </h1>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Há mais de uma década, o Nika Imóveis atua na curadoria
                de propriedades extraordinárias em Santa Catarina —
                especialmente em Balneário Camboriú, Blumenau, Itapema
                e Joinville.
              </p>
              <p>
                Nascemos com a missão de oferecer uma experiência diferente
                em compra, venda e investimento imobiliário: discrição,
                proximidade e inteligência de mercado em cada decisão.
              </p>
              <p>
                Cada imóvel do nosso portfólio é selecionado pessoalmente,
                com critérios rigorosos de qualidade arquitetônica,
                localização e potencial de valorização.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-border pt-10">
              {[
                ["+12", "anos de mercado"],
                ["+480M", "em vendas"],
                ["98%", "clientes recomendam"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-4xl text-accent">{n}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden bg-muted">
              <img
                src={broker}
                alt="Corretora especialista em imóveis de alto padrão"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-charcoal text-cream p-6 max-w-xs">
              <p className="font-display text-2xl">Nika Klein</p>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent mt-1">
                Corretora · CRECI/SC 00000-J
              </p>
              <p className="text-xs text-cream/70 mt-3 leading-relaxed">
                "Cada cliente merece um atendimento à altura do seu sonho."
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
