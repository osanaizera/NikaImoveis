import p1 from "@/assets/nika/ap1500-1.jpg";
import p2 from "@/assets/nika/ap1501-1.jpg";
import p3 from "@/assets/nika/lc0006-1.jpg";
import p4 from "@/assets/nika/ap0002.jpg";
import p5 from "@/assets/nika/te0002.jpg";
import p6 from "@/assets/nika/so0005-1.jpg";

export type Property = {
  id: string;
  code: string;
  title: string;
  shortTitle: string;
  type: "Cobertura" | "Apartamento" | "Lançamento" | "Casa" | "Terreno";
  status: "Pronto para morar" | "Em construção" | "Lançamento";
  city: string;
  neighborhood: string;
  price: number | null;
  priceLabel?: string;
  bedrooms: number;
  suites: number;
  bathrooms: number;
  parking: number;
  area: number;
  image: string;
  highlights: string[];
  description: string;
  featured?: boolean;
};

export const properties: Property[] = [
  {
    id: "ap1500-cobertura-alto-padrao",
    code: "AP1500",
    title:
      "Cobertura Alto Padrão — 3 suítes com closet, 4 vagas e condomínio completo",
    shortTitle: "Cobertura com Spa Privativo",
    type: "Cobertura",
    status: "Pronto para morar",
    city: "Blumenau",
    neighborhood: "Vila Nova",
    price: 1599000,
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parking: 4,
    area: 426,
    image: p1,
    highlights: ["Spa ofurô privativo", "Vista panorâmica", "Closet em todas as suítes"],
    description:
      "Cobertura plana com área aberta e ofurô spa individual, para você viver momentos inesquecíveis com sua família. Próxima ao Parque Ramiro Ruedger, com vista privilegiada e acabamento impecável em todos os ambientes.",
    featured: true,
  },
  {
    id: "ap1501-frente-mar-av-atlantica",
    code: "AP1501",
    title: "Apartamento Frente Mar — Mobiliado, 4 suítes e 4 vagas, Av. Atlântica",
    shortTitle: "Frente Mar — Av. Atlântica",
    type: "Apartamento",
    status: "Pronto para morar",
    city: "Balneário Camboriú",
    neighborhood: "Centro",
    price: 9700000,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    parking: 4,
    area: 465,
    image: p2,
    highlights: ["Frente mar", "Totalmente mobiliado", "Av. Atlântica"],
    description:
      "Apartamento totalmente mobiliado e equipado com sofisticação e bom gosto: assinatura de quem busca o melhor de Balneário Camboriú. Frente mar na Av. Atlântica, vista deslumbrante e acabamento luxuoso.",
    featured: true,
  },
  {
    id: "lc0006-lancamento-contemporaneo",
    code: "LC0006",
    title: "Lançamento — Arquitetura Contemporânea, 19 pavimentos",
    shortTitle: "Lançamento Contemporâneo",
    type: "Lançamento",
    status: "Lançamento",
    city: "Itapema",
    neighborhood: "Meia Praia",
    price: null,
    priceLabel: "Sob consulta",
    bedrooms: 3,
    suites: 2,
    bathrooms: 3,
    parking: 2,
    area: 142,
    image: p3,
    highlights: ["Lazer completo", "Hall decorado", "19 pavimentos"],
    description:
      "Empreendimento com arquitetura contemporânea e altíssimo padrão de qualidade: 19 pavimentos, excelente localização, hall de entrada decorado, portaria 24h e área de lazer completa para toda a família.",
    featured: true,
  },
  {
    id: "ap0002-amplo-148m",
    code: "AP0002",
    title: "Apartamento Amplo — 148m², 4 dormitórios, sacada gourmet",
    shortTitle: "Apartamento 4 Dorms — Centro",
    type: "Apartamento",
    status: "Pronto para morar",
    city: "Blumenau",
    neighborhood: "Centro",
    price: 1190000,
    bedrooms: 4,
    suites: 1,
    bathrooms: 3,
    parking: 2,
    area: 148,
    image: p4,
    highlights: ["Sacada gourmet", "Andar alto", "Próximo a tudo"],
    description:
      "Excelente oportunidade para quem busca um apartamento amplo, com 148,06m² de área útil, 4 dormitórios sendo 1 suíte, ótima sacada gourmet, sala de estar e jantar integradas e cozinha planejada.",
  },
  {
    id: "te0002-terreno-vista-vale",
    code: "TE0002",
    title: "Terreno com vista para a serra — alto da cidade",
    shortTitle: "Terreno Vista Serra",
    type: "Terreno",
    status: "Pronto para morar",
    city: "Pomerode",
    neighborhood: "Centro",
    price: 890000,
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parking: 0,
    area: 1240,
    image: p5,
    highlights: ["Vista panorâmica", "1.240m²", "Pronto para construir"],
    description:
      "Terreno de 1.240m² em região nobre, com vista privilegiada para a serra e a mata atlântica. Topografia ideal para projeto residencial de alto padrão.",
  },
  {
    id: "so0005-sobrado-acabamento-diferenciado",
    code: "SO0005",
    title: "Sobrado com acabamento diferenciado, 2 suítes amplas",
    shortTitle: "Sobrado Contemporâneo",
    type: "Casa",
    status: "Pronto para morar",
    city: "Blumenau",
    neighborhood: "Velha",
    price: 1290000,
    bedrooms: 2,
    suites: 2,
    bathrooms: 3,
    parking: 2,
    area: 220,
    image: p6,
    highlights: ["Acabamento diferenciado", "Pátio na frente e fundos", "2 vagas"],
    description:
      "Sobrado com acabamento diferenciado, sendo duas amplas suítes, sala de estar e jantar, duas vagas de garagem, espaço aberto na frente e nos fundos do imóvel. Projeto contemporâneo em bairro nobre de Blumenau.",
  },
];

export const formatPrice = (price: number | null, label?: string) => {
  if (price === null) return label ?? "Sob consulta";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);
};

export const getProperty = (id: string) =>
  properties.find((p) => p.id === id);
