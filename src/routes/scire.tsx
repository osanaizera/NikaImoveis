import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  MapPin,
  Trees,
  BedDouble,
  MessageCircle,
  Handshake,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

export const Route = createFileRoute("/scire")({
  head: () => ({
    meta: [
      {
        title:
          "Lançamentos Scire Empreendimentos — Nika Imóveis",
      },
      {
        name: "description",
        content:
          "Conheça os lançamentos da Scire Empreendimentos em Santa Catarina. Studios e apartamentos de 1 a 3 dormitórios em Blumenau, São José e Palhoça.",
      },
      {
        property: "og:title",
        content: "Lançamentos Scire — Nika Imóveis",
      },
      {
        property: "og:description",
        content:
          "A maior empresa catarinense do segmento residencial jovem. 13 anos de mercado, +3.000 unidades entregues.",
      },
    ],
  }),
  component: ScirePage,
});

const WHATSAPP_PHONE = "5547999990000";

const launches = [
  {
    name: "Scire View",
    neighborhood: "Praia Comprida",
    city: "São José",
    units: "Studio, 2 e 3 dormitórios",
    leisure: 20,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/19/68f261b003e998.07834958.png",
  },
  {
    name: "Scire Solare",
    neighborhood: "Escola Agrícola",
    city: "Blumenau",
    units: "1 e 2 dormitórios",
    leisure: 17,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/16/68cdbffb364834.16781236.png",
  },
  {
    name: "Scire Terrasse",
    neighborhood: "Vorstadt",
    city: "Blumenau",
    units: "Studios e 2 dormitórios",
    leisure: 21,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/12/67110e4839bdb2.37272615.png",
  },
  {
    name: "Scire Connect",
    neighborhood: "Barreiros",
    city: "São José",
    units: "Studio, 1 e 2 dormitórios",
    leisure: 17,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/11/66b633b7a542c5.48827444.png",
  },
  {
    name: "Scire Boulevard",
    neighborhood: "Pedra Branca",
    city: "Palhoça",
    units: "2 dormitórios",
    leisure: 24,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/5/669ff3688eb152.59533476.png",
  },
  {
    name: "Scire Botanic",
    neighborhood: "Areias",
    city: "São José",
    units: "2 dormitórios",
    leisure: 20,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/3/669e5d542d9be5.41321534.png",
  },
  {
    name: "Scire Norden",
    neighborhood: "Itoupava Norte",
    city: "Blumenau",
    units: "2 dormitórios",
    leisure: 15,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/9/66a25998412282.79104440.png",
  },
  {
    name: "Scire Fortaleza",
    neighborhood: "Fortaleza",
    city: "Blumenau",
    units: "2 dormitórios",
    leisure: 20,
    image:
      "https://admin.scireempreendimentos.com.br/uploads/enterprise/8/66a24bdfb39005.62595717.png",
  },
];

const stats = [
  { value: "13", label: "anos de mercado" },
  { value: "200 mil", label: "m² construídos" },
  { value: "3.111", label: "unidades entregues" },
  { value: "12", label: "empreendimentos" },
];

function ScirePage() {
  return (
    <>
      <Header transparent />

      {/* HERO */}
      <section className="relative bg-charcoal text-cream overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-accent/8" />

        <div className="container-luxe relative z-10 pt-40 pb-20">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent animate-rise inline-flex items-center gap-3">
              <span className="divider-gold" />
              Parceira Nika Imóveis
            </span>
            <h1
              className="font-display mt-5 leading-[1.05] animate-rise delay-150"
              style={{ fontSize: "clamp(2.6rem, 3.8vw, 5rem)" }}
            >
              Scire Empreendimentos
            </h1>
            <p className="mt-2 font-display text-xl md:text-2xl text-accent/80 animate-rise delay-150">
              O melhor 1º imóvel da sua vida
            </p>
            <p
              className="mt-6 max-w-xl leading-relaxed font-light text-cream/75 animate-rise delay-300"
              style={{ fontSize: "clamp(0.92rem, 1vw, 1.1rem)" }}
            >
              A maior empresa catarinense do segmento residencial jovem. São 13
              anos transformando o mercado imobiliário de Santa Catarina com
              empreendimentos modernos, áreas de lazer completas e o compromisso
              de entregar qualidade em cada detalhe.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 animate-rise delay-500">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá Nika! Tenho interesse nos lançamentos da Scire Empreendimentos.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-accent hover:bg-accent-dark"
              >
                Falar sobre lançamentos <ArrowRight size={14} />
              </a>
              <a
                href="https://www.scireempreendimentos.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
              >
                Site da construtora
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 border-t border-cream/10">
          <div className="container-luxe grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-8 ${i > 0 ? "border-l border-cream/10" : ""} ${i === 2 ? "max-md:border-l-0 max-md:border-t border-cream/10" : ""} ${i === 3 ? "max-md:border-t border-cream/10" : ""}`}
              >
                <p className="font-display text-3xl md:text-4xl text-accent">
                  {s.value}
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-cream/50 mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAUNCHES GRID */}
      <section className="py-28">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow">
                <span className="divider-gold mr-3" />
                Lançamentos disponíveis
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
                Empreendimentos Scire em Santa Catarina
              </h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Studios e apartamentos de 1 a 3 dormitórios nas melhores
                localizações de Blumenau, Grande Florianópolis e região. Todos
                com amplas áreas de lazer e condições facilitadas.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {launches.map((launch, i) => (
              <Reveal key={launch.name} delay={i * 100}>
                <div className="group bg-card border border-border hover:border-accent/60 transition-all duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={launch.image}
                      alt={launch.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1.5">
                        Lançamento
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-5">
                      <p className="text-cream text-xs uppercase tracking-[0.25em] opacity-90 inline-flex items-center gap-1.5">
                        <MapPin size={12} />
                        {launch.neighborhood} · {launch.city}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="font-display text-2xl leading-tight text-foreground group-hover:text-accent transition-colors">
                      {launch.name}
                    </h3>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground pt-2 border-t border-border">
                      <span className="inline-flex items-center gap-1.5">
                        <BedDouble size={14} className="text-accent" />
                        {launch.units}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Trees size={14} className="text-accent" />
                        {launch.leisure} áreas de lazer
                      </span>
                    </div>

                    <div className="pt-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Olá Nika! Gostaria de saber mais sobre o ${launch.name} em ${launch.city}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.65rem] uppercase tracking-[0.25em] text-accent border-b border-accent pb-0.5 hover:text-accent-dark hover:border-accent-dark transition-colors"
                      >
                        Tenho interesse →
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS */}
      <section className="bg-cream border-t border-border py-28">
        <div className="container-luxe grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Building2,
              title: "Segmento residencial jovem",
              text: "A Scire é referência no primeiro imóvel em Santa Catarina, com projetos pensados para quem busca qualidade, lazer e localização estratégica.",
            },
            {
              icon: Trees,
              title: "Lazer completo",
              text: "De 15 a 24 áreas de lazer por empreendimento: piscinas, espaços gourmet, coworking, pet place, academias e muito mais.",
            },
            {
              icon: Handshake,
              title: "Consultoria Nika",
              text: "A Nika Imóveis é parceira oficial da Scire. Atendimento personalizado, análise de crédito e acompanhamento do início à entrega das chaves.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <item.icon
                size={28}
                className="text-accent"
                strokeWidth={1.25}
              />
              <h3 className="font-display text-2xl mt-5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-cream py-28">
        <div className="container-luxe text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="eyebrow text-accent">
              <span className="divider-gold mr-3" />
              Seu novo endereço
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Interessado em um empreendimento Scire?
            </h2>
            <p className="text-cream/70 mt-5 leading-relaxed">
              Fale com a equipe Nika Imóveis para conhecer plantas, condições de
              pagamento e disponibilidade de unidades. Atendimento exclusivo e
              sem compromisso.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent("Olá Nika! Quero saber mais sobre os empreendimentos da Scire.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-accent hover:bg-accent-dark"
              >
                <MessageCircle size={14} /> Falar no WhatsApp
              </a>
              <Link
                to="/contato"
                className="btn-outline border-cream/30 text-cream hover:bg-cream hover:text-charcoal"
              >
                Solicitar contato
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
