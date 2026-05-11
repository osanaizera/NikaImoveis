import { Link } from "@tanstack/react-router";
import { BedDouble, Bath, Car, Maximize } from "lucide-react";
import { formatPrice, type Property } from "@/data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to="/imovel/$id"
      params={{ id: property.id }}
      className="group block bg-card border border-border hover:border-accent/60 transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-charcoal/90 text-cream text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1.5">
            {property.type}
          </span>
          {property.status === "Lançamento" && (
            <span className="bg-accent text-cream text-[0.6rem] uppercase tracking-[0.2em] px-3 py-1.5">
              Lançamento
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/80 to-transparent p-5">
          <p className="text-cream text-xs uppercase tracking-[0.25em] opacity-90">
            {property.neighborhood} · {property.city}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl leading-tight text-foreground group-hover:text-accent transition-colors">
            {property.shortTitle}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {property.description}
        </p>

        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground pt-2 border-t border-border">
          {property.bedrooms > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <BedDouble size={14} className="text-accent" /> {property.bedrooms} dorm.
            </span>
          )}
          {property.bathrooms > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <Bath size={14} className="text-accent" /> {property.bathrooms}
            </span>
          )}
          {property.parking > 0 && (
            <span className="inline-flex items-center gap-1.5">
              <Car size={14} className="text-accent" /> {property.parking} vagas
            </span>
          )}
          <span className="inline-flex items-center gap-1.5">
            <Maximize size={14} className="text-accent" /> {property.area} m²
          </span>
        </div>

        <div className="flex items-end justify-between pt-3">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              {property.price ? "A partir de" : "Valor"}
            </p>
            <p className="font-display text-2xl text-foreground">
              {formatPrice(property.price, property.priceLabel)}
            </p>
          </div>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-accent border-b border-accent pb-0.5">
            Ver detalhes
          </span>
        </div>
      </div>
    </Link>
  );
}
