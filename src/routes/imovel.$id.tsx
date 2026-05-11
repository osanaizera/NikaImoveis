import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BedDouble, Bath, Car, Maximize, MapPin, Check, ArrowLeft, Phone } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PropertyCard } from "@/components/site/PropertyCard";
import { formatPrice, getProperty, properties } from "@/data/properties";

export const Route = createFileRoute("/imovel/$id")({
  loader: ({ params }) => {
    const property = getProperty(params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.property;
    if (!p) return { meta: [{ title: "Imóvel — Nika" }] };
    return {
      meta: [
        { title: `${p.shortTitle} — Nika Imóveis` },
        { name: "description", content: p.description.slice(0, 155) },
        { property: "og:title", content: p.shortTitle },
        { property: "og:description", content: p.description.slice(0, 155) },
        { property: "og:image", content: p.image },
        { name: "twitter:image", content: p.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-4xl">Imóvel não encontrado</h1>
        <Link to="/imoveis" className="btn-outline mt-6 inline-flex">
          Ver portfólio
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center">
      <p>{error.message}</p>
    </div>
  ),
  component: PropertyPage,
});

function PropertyPage() {
  const { property } = Route.useLoaderData();
  const related = properties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-luxe">
          <Link
            to="/imoveis"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-accent mb-8"
          >
            <ArrowLeft size={14} /> Voltar ao portfólio
          </Link>

          {/* HEADER */}
          <div className="grid lg:grid-cols-3 gap-10 mb-10">
            <div className="lg:col-span-2">
              <span className="eyebrow">
                <span className="divider-gold mr-3" />
                {property.code} · {property.type}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-tight">
                {property.title}
              </h1>
              <p className="mt-4 text-muted-foreground inline-flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                {property.neighborhood}, {property.city} · SC
              </p>
            </div>
            <div className="lg:text-right">
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Valor
              </p>
              <p className="font-display text-4xl md:text-5xl text-foreground mt-2">
                {formatPrice(property.price, property.priceLabel)}
              </p>
              <span className="inline-block mt-3 bg-accent/10 text-accent text-[0.65rem] uppercase tracking-[0.25em] px-3 py-1.5">
                {property.status}
              </span>
            </div>
          </div>

          {/* IMAGE */}
          <div className="aspect-[16/9] overflow-hidden bg-muted mb-12">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* SPECS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border border border-border mb-16">
            {[
              { icon: BedDouble, label: "Dormitórios", value: property.bedrooms || "—" },
              { icon: BedDouble, label: "Suítes", value: property.suites || "—" },
              { icon: Bath, label: "Banheiros", value: property.bathrooms || "—" },
              { icon: Car, label: "Vagas", value: property.parking || "—" },
              { icon: Maximize, label: "Área", value: `${property.area} m²` },
            ].map((s) => (
              <div key={s.label} className="bg-cream p-6 text-center">
                <s.icon size={20} className="text-accent mx-auto mb-2" strokeWidth={1.25} />
                <p className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </p>
                <p className="font-display text-2xl mt-1">{s.value}</p>
              </div>
            ))}
          </div>

          {/* DESC + CTA */}
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl mb-6">Sobre o imóvel</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {property.description}
              </p>

              <h3 className="font-display text-2xl mt-12 mb-5">Diferenciais</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {property.highlights.map((h: string) => (
                  <li key={h} className="flex items-center gap-3 text-sm">
                    <Check size={16} className="text-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="bg-charcoal text-cream p-8 h-fit lg:sticky lg:top-28">
              <p className="eyebrow text-accent">
                <span className="divider-gold mr-3" />
                Atendimento exclusivo
              </p>
              <h3 className="font-display text-2xl mt-3">
                Agende uma visita privativa
              </h3>
              <p className="text-sm text-cream/70 mt-3 leading-relaxed">
                Tour presencial ou virtual com nossa especialista, com total
                discrição e horários flexíveis.
              </p>
              <form className="mt-6 space-y-3">
                <input
                  placeholder="Seu nome"
                  className="w-full bg-cream/10 border border-cream/20 px-4 py-3 text-sm placeholder:text-cream/50 outline-none focus:border-accent"
                />
                <input
                  placeholder="E-mail"
                  className="w-full bg-cream/10 border border-cream/20 px-4 py-3 text-sm placeholder:text-cream/50 outline-none focus:border-accent"
                />
                <input
                  placeholder="Telefone / WhatsApp"
                  className="w-full bg-cream/10 border border-cream/20 px-4 py-3 text-sm placeholder:text-cream/50 outline-none focus:border-accent"
                />
                <button type="button" className="w-full btn-primary bg-accent hover:bg-cream hover:text-charcoal">
                  Solicitar contato
                </button>
              </form>
              <a
                href="tel:+554799990000"
                className="mt-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/80 hover:text-accent"
              >
                <Phone size={14} /> +55 (47) 99999-0000
              </a>
            </aside>
          </div>

          {/* RELATED */}
          <div className="border-t border-border pt-20 pb-8">
            <h2 className="font-display text-3xl mb-10">Você também vai gostar</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {related.map((p) => (
                <PropertyCard key={p.id} property={p} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
