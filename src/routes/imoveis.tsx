import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PropertyCard } from "@/components/site/PropertyCard";
import { properties } from "@/data/properties";

export const Route = createFileRoute("/imoveis")({
  head: () => ({
    meta: [
      { title: "Imóveis — Nika Imóveis" },
      {
        name: "description",
        content:
          "Coberturas, apartamentos, casas e terrenos de alto padrão em Santa Catarina.",
      },
      { property: "og:title", content: "Portfólio de Imóveis — Nika" },
      {
        property: "og:description",
        content: "Explore nossa curadoria de imóveis premium em SC.",
      },
    ],
  }),
  component: ImoveisPage,
});

const types = ["Todos", "Cobertura", "Apartamento", "Casa", "Lançamento", "Terreno"];
const cities = ["Todas", "Balneário Camboriú", "Blumenau", "Itapema", "Joinville", "Pomerode"];

function ImoveisPage() {
  const [type, setType] = useState("Todos");
  const [city, setCity] = useState("Todas");
  const [sort, setSort] = useState("Padrão");

  const filtered = useMemo(() => {
    let list = properties.filter(
      (p) =>
        (type === "Todos" || p.type === type) &&
        (city === "Todas" || p.city === city)
    );
    if (sort === "Maior preço") list = [...list].sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
    if (sort === "Menor preço") list = [...list].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity));
    return list;
  }, [type, city, sort]);

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-luxe">
          <div className="mb-12 max-w-2xl">
            <span className="eyebrow">
              <span className="divider-gold mr-3" />
              Portfólio
            </span>
            <h1 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
              Imóveis à venda
            </h1>
            <p className="text-muted-foreground mt-4">
              {filtered.length} imóveis disponíveis em nossa curadoria.
            </p>
          </div>

          {/* filters */}
          <div className="grid md:grid-cols-4 gap-3 border border-border p-4 bg-cream mb-12">
            <Select label="Tipo" value={type} onChange={setType} options={types} />
            <Select label="Cidade" value={city} onChange={setCity} options={cities} />
            <Select
              label="Ordenar"
              value={sort}
              onChange={setSort}
              options={["Padrão", "Maior preço", "Menor preço"]}
            />
            <button
              onClick={() => {
                setType("Todos");
                setCity("Todas");
                setSort("Padrão");
              }}
              className="btn-outline"
            >
              Limpar filtros
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-24 text-muted-foreground">
              Nenhum imóvel encontrado com esses filtros.
            </p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex flex-col">
      <span className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground mb-1.5 px-1">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-background border border-border px-4 py-3 text-sm outline-none focus:border-accent"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
