import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Compass, Handshake, Search, CalendarDays, Clock } from "lucide-react";
import heroImg from "@/assets/nika/lc0006-1.jpg";
import bcImg from "@/assets/nika/ap1501-1.jpg";
import cityBlumenau from "@/assets/nika/city-blumenau.jpeg";
import cityItapema from "@/assets/nika/city-itapema.jpeg";
import cityItajai from "@/assets/nika/city-itajai.jpeg";
import cityPicarras from "@/assets/nika/city-picarras.jpeg";
import blogA from "@/assets/nika/ap1500-2.jpg";
import blogB from "@/assets/nika/so0005-1.jpg";
import blogC from "@/assets/nika/ap0002.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nika Imóveis — Imóveis de altíssimo padrão em Santa Catarina" },
      {
        name: "description",
        content:
          "Curadoria exclusiva de coberturas, apartamentos frente mar e residências de luxo em Balneário Camboriú, Blumenau, Itapema e Vale do Itajaí.",
      },
      { property: "og:title", content: "Nika Imóveis — Alto Padrão em SC" },
      {
        property: "og:description",
        content:
          "Compre, venda e invista com segurança. Atendimento personalizado em imóveis premium de Santa Catarina.",
      },
    ],
  }),
  component: Home,
});

const cityImages: Record<string, string> = {
  "Balneário Camboriú": bcImg,
  Blumenau: cityBlumenau,
  Itapema: cityItapema,
  Itajaí: cityItajai,
  Piçarras: cityPicarras,
};

function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      <Header transparent />

      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Empreendimento de altíssimo padrão em Santa Catarina"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover animate-hero-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 via-transparent to-transparent" />

        <div className="container-luxe relative z-10 pb-28 pt-40 text-cream">
          <div className="max-w-3xl">
            <span className="eyebrow text-accent animate-rise">
              <span className="divider-gold mr-3" />
              Imóveis de altíssimo padrão · Santa Catarina
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] mt-6 leading-[1.02] animate-rise delay-150">
              O endereço certo
              <br />
              <em className="text-accent not-italic">para a sua próxima história.</em>
            </h1>
            <p className="mt-8 text-lg text-cream/85 max-w-xl leading-relaxed font-light animate-rise delay-300">
              Curadoria exclusiva de coberturas, residências frente mar e
              empreendimentos assinados — com a discrição, o cuidado e a
              consultoria que o seu patrimônio merece.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 animate-rise delay-500">
              <Link to="/imoveis" className="btn-primary bg-accent hover:bg-cream hover:text-charcoal">
                Explorar portfólio <ArrowRight size={14} />
              </Link>
              <WhatsAppButton variant="inline" label="Conversar no WhatsApp" />
            </div>
          </div>
        </div>

        {/* search bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:block animate-fade-soft delay-700">
          <div className="container-luxe pb-10">
            <div className="bg-background/95 backdrop-blur border border-border p-3 flex items-center gap-3 shadow-2xl">
              <input
                placeholder="Endereço, cidade, bairro ou código do imóvel"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <select className="bg-secondary px-4 py-3 text-xs uppercase tracking-[0.2em] text-foreground outline-none">
                <option>Todos os tipos</option>
                <option>Cobertura</option>
                <option>Apartamento</option>
                <option>Casa</option>
                <option>Lançamento</option>
                <option>Terreno</option>
              </select>
              <Link to="/imoveis" className="btn-primary bg-accent hover:bg-charcoal">
                <Search size={14} /> Pesquisar
              </Link>
            </div>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block z-10">
          <div className="w-px h-10 bg-cream/40 animate-pulse" />
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="bg-cream border-b border-border">
        <div className="container-luxe py-24 grid md:grid-cols-3 gap-12">
          {[
            {
              icon: Award,
              title: "Curadoria exclusiva",
              text: "Selecionamos apenas empreendimentos e residências que entregam excelência em arquitetura, localização e acabamento.",
            },
            {
              icon: Handshake,
              title: "Atendimento boutique",
              text: "Acompanhamento próximo e discreto em cada etapa: da visita à escritura, com total confidencialidade.",
            },
            {
              icon: Compass,
              title: "Inteligência de mercado",
              text: "Atuação consolidada em Santa Catarina, com leitura precisa de valorização, oportunidades e tendências de bairro.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <item.icon size={28} className="text-accent" strokeWidth={1.25} />
              <h3 className="font-display text-2xl mt-5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-28">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow">
                  <span className="divider-gold mr-3" />
                  Imóveis em destaque
                </span>
                <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-2xl leading-tight">
                  Endereços assinados para um morar incomparável
                </h2>
              </div>
              <Link to="/imoveis" className="text-xs uppercase tracking-[0.25em] text-accent border-b border-accent pb-1 self-start md:self-end hover:text-charcoal hover:border-charcoal transition-colors">
                Ver todo o portfólio →
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 140}>
                <PropertyCard property={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONS */}
      <section className="bg-charcoal text-cream py-28">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="eyebrow text-accent">
                <span className="divider-gold mr-3" />
                Onde atuamos
              </span>
              <h2 className="font-display text-4xl md:text-5xl mt-4">
                O imóvel ideal na sua cidade desejada
              </h2>
              <p className="text-cream/70 mt-5 leading-relaxed">
                A Nika Imóveis atende em todo o Vale do Itajaí e litoral
                catarinense, com construtoras renomadas e imóveis prontos
                para morar.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-cream/10">
            {[
              { city: "Blumenau", count: "24 imóveis" },
              { city: "Balneário Camboriú", count: "02 imóveis" },
              { city: "Itapema", count: "05 imóveis" },
              { city: "Itajaí", count: "Sob consulta" },
            ].map((r, i) => (
              <Reveal key={r.city} delay={i * 100}>
                <Link
                  to="/imoveis"
                  className="relative bg-charcoal aspect-[4/5] block overflow-hidden group"
                >
                  <img
                    src={cityImages[r.city]}
                    alt={r.city}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-[1400ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-8">
                    <p className="text-[0.6rem] uppercase tracking-[0.3em] text-cream/60">
                      Região
                    </p>
                    <h3 className="font-display text-3xl mt-2">{r.city}</h3>
                    <p className="text-xs text-accent uppercase tracking-[0.25em] mt-4">
                      {r.count} →
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <span className="eyebrow">
              <span className="divider-gold mr-3" />
              Pronto para vender?
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Avaliamos seu imóvel com a discrição que o seu patrimônio merece
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-lg">
              Apresentação profissional, base de clientes qualificados e
              estratégia comercial sob medida. Anuncie com quem entende de
              alto padrão.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/vender" className="btn-primary">
                Anunciar meu imóvel
              </Link>
              <Link to="/contato" className="btn-outline">
                Falar com a Nika
              </Link>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative aspect-[4/5] bg-muted overflow-hidden">
              <img
                src={featured[1]?.image}
                alt="Apartamento de luxo Av. Atlântica"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-cream/95 backdrop-blur p-6">
                <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent">
                  Vendas concluídas
                </p>
                <p className="font-display text-4xl mt-2">+ R$ 480M</p>
                <p className="text-xs text-muted-foreground mt-1">
                  em transações de imóveis de alto padrão
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BLOG / INSIGHTS */}
      <section className="bg-cream border-t border-border py-28">
        <div className="container-luxe">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
              <div>
                <span className="eyebrow">
                  <span className="divider-gold mr-3" />
                  Diário Nika
                </span>
                <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-2xl leading-tight">
                  Inspiração, mercado e bastidores do morar bem
                </h2>
              </div>
              <Link
                to="/"
                className="text-xs uppercase tracking-[0.25em] text-accent border-b border-accent pb-1 self-start md:self-end hover:text-charcoal hover:border-charcoal transition-colors"
              >
                Ver todas as publicações →
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: blogA,
                tag: "Mercado",
                date: "12 Mai 2026",
                read: "5 min",
                title: "Por que Balneário Camboriú segue valorizando acima da média nacional",
                excerpt:
                  "Um panorama dos lançamentos verticais, da nova orla e das oportunidades de investimento na cidade que mais cresce em SC.",
              },
              {
                img: blogB,
                tag: "Arquitetura",
                date: "28 Abr 2026",
                read: "7 min",
                title: "Residências assinadas: o que define o verdadeiro alto padrão",
                excerpt:
                  "Materiais nobres, integração com a paisagem e projetos sob medida. Os pilares de uma casa que se torna patrimônio.",
              },
              {
                img: blogC,
                tag: "Lifestyle",
                date: "10 Abr 2026",
                read: "4 min",
                title: "Morar frente mar em Santa Catarina: 5 detalhes que fazem a diferença",
                excerpt:
                  "Da orientação solar à curadoria de acabamentos resistentes à maresia, um guia para escolher seu apartamento beira-mar.",
              },
            ].map((post, i) => (
              <Reveal key={post.title} delay={i * 140}>
                <article className="group cursor-pointer">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img
                      src={post.img}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-cream/95 px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.25em] text-charcoal">
                      {post.tag}
                    </div>
                  </div>
                  <div className="pt-6">
                    <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays size={12} /> {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock size={12} /> {post.read}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl mt-3 leading-snug group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 mt-5 text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                      Ler matéria <ArrowRight size={12} />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
