import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  Globe,
  Rocket,
  Search,
  PenTool,
  Server,
  BarChart3,
  Megaphone,
  Image,
  Target,
  ArrowRight,
  Check,
  Sparkles,
  Shield,
  RefreshCw,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/proposta")({
  head: () => ({
    meta: [
      { title: "Proposta Comercial — Filip.Digital" },
      {
        name: "robots",
        content: "noindex, nofollow",
      },
    ],
  }),
  component: PropostaPage,
});

/* ─── Data ─── */

const siteFeatures = [
  {
    icon: Globe,
    title: "Site institucional de alto padrão",
    desc: "Design premium, responsivo, otimizado para conversão. Um site que transmite a mesma sofisticação dos imóveis que você vende.",
  },
  {
    icon: PenTool,
    title: "Cadastro e gestão de imóveis",
    desc: "Área dedicada para cadastro, edição e remoção de imóveis com fotos, plantas, vídeos e informações detalhadas.",
  },
  {
    icon: Search,
    title: "Estratégia de SEO e conteúdo",
    desc: "Pesquisa de palavras-chave, otimização técnica, artigos estratégicos mensais para posicionar sua marca no Google organicamente.",
  },
  {
    icon: Rocket,
    title: "Landing Pages de campanhas",
    desc: "Até 04 landing pages por ano para campanhas específicas — lançamentos, empreendimentos ou ações sazonais.",
  },
  {
    icon: RefreshCw,
    title: "Desenvolvimento e atualização contínuos",
    desc: "Evolução constante do site com novas features, melhorias de UX e adequação a novas demandas do mercado.",
  },
  {
    icon: Server,
    title: "Hospedagem e manutenção",
    desc: "Infraestrutura de alta performance, backups, SSL, monitoramento 24/7 e suporte técnico dedicado.",
  },
];

const trafegoFeatures = [
  {
    icon: Megaphone,
    title: "Gestão de campanhas",
    desc: "Operação completa de campanhas Google Ads e Meta Ads, com segmentação avançada para o público de alto padrão.",
  },
  {
    icon: Image,
    title: "Criação de criativos",
    desc: "Design de peças publicitárias, vídeos e carrosséis profissionais alinhados ao posicionamento premium da marca.",
  },
  {
    icon: Target,
    title: "Otimização e relatórios",
    desc: "Testes A/B, otimização contínua de campanhas e relatórios detalhados de performance com métricas claras.",
  },
  {
    icon: BarChart3,
    title: "Estratégia de funil",
    desc: "Campanhas estruturadas em funil: awareness, consideração e conversão para maximizar o retorno do investimento.",
  },
];

const investimento = [
  {
    label: "Setup do site",
    value: "R$ 4.987",
    period: "à vista",
    installment: "ou 12× de R$ 499",
    installmentTotal: "R$ 5.987",
    desc: "Desenvolvimento completo do site institucional, configuração de hospedagem, SEO técnico inicial e estruturação de conteúdo.",
    highlights: [
      "Design exclusivo de alto padrão",
      "Sistema de cadastro de imóveis",
      "Blog integrado com SEO",
      "Até 04 landing pages/ano",
      "Otimização para dispositivos móveis",
      "Configuração de analytics e tracking",
    ],
  },
  {
    label: "Manutenção mensal",
    value: "R$ 380",
    period: "/mês",
    desc: "Hospedagem, manutenção técnica, atualizações de segurança, upload de novos imóveis e estratégia de SEO contínua.",
    highlights: [
      "Hospedagem de alta performance",
      "Upload de novos imóveis",
      "Artigos e conteúdo SEO",
      "Manutenção e atualizações",
      "Suporte técnico dedicado",
      "Backups e monitoramento",
    ],
  },
  {
    label: "Tráfego pago",
    value: "R$ 980",
    period: "/mês",
    desc: "Gestão completa de campanhas Google Ads e Meta Ads, incluindo criação de criativos. Mídia indicativa ~R$ 1.800/mês (Google R$ 1.000 + Meta R$ 800), paga diretamente pela Nika às plataformas.",
    highlights: [
      "Google Ads e Meta Ads",
      "Criação de criativos inclusa",
      "Segmentação alto padrão",
      "Otimização contínua",
      "Relatórios de performance",
      "Mídia paga direto às plataformas*",
    ],
  },
];

/* ─── Component ─── */

function PropostaPage() {
  useEffect(() => {
    (window as any).__SD_SITE_ID__ = "2cKv0YlUoH2a";
    const script = document.createElement("script");
    script.src = "https://cms.draivv.com/proposal-telemetry.js";
    script.defer = true;
    document.head.appendChild(script);
    return () => {
      script.remove();
      delete (window as any).__SD_SITE_ID__;
    };
  }, []);

  return (
    <>
      <Header />

      <main className="pt-32 pb-0">
        {/* HERO */}
        <section className="container-luxe pb-20" data-sd-section="hero">
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-3">
              <span className="divider-gold" />
              Proposta comercial
            </span>
            <h1
              className="font-display mt-5 leading-[1.05]"
              style={{ fontSize: "clamp(2.4rem, 3.4vw, 4.2rem)" }}
            >
              Presença digital de
              <br />
              <span className="text-accent">alto padrão</span>
            </h1>
            <p
              className="mt-6 max-w-2xl leading-relaxed text-muted-foreground"
              style={{ fontSize: "clamp(0.92rem, 1vw, 1.1rem)" }}
            >
              Proposta para desenvolvimento e operação de plataforma digital
              completa — site institucional, estratégia de SEO, gestão de
              conteúdo e tráfego pago — projetados para quem vende imóveis de
              alto padrão e precisa de uma presença digital à altura.
            </p>
          </Reveal>
        </section>

        {/* SERVIÇO 1: SITE + SEO + MANUTENÇÃO */}
        <section className="bg-cream border-t border-border py-24" data-sd-section="servico-site-seo">
          <div className="container-luxe">
            <Reveal>
              <div className="max-w-2xl mb-16">
                <span className="eyebrow">
                  <span className="divider-gold mr-3" />
                  Serviço 01
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                  Site, SEO e operação contínua
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Um ecossistema digital completo: site premium com gestão de
                  imóveis, blog estratégico, landing pages de campanha,
                  hospedagem de alta performance e evolução contínua guiada por
                  dados.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteFeatures.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="p-6 bg-card border border-border h-full">
                    <f.icon
                      size={24}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display text-xl mt-4">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SERVIÇO 2: TRÁFEGO PAGO */}
        <section className="py-24" data-sd-section="servico-trafego-pago">
          <div className="container-luxe">
            <Reveal>
              <div className="max-w-2xl mb-16">
                <span className="eyebrow">
                  <span className="divider-gold mr-3" />
                  Serviço 02
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                  Tráfego pago e criação de criativos
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Gestão completa de campanhas digitais em Google e Meta,
                  incluindo a criação de todo o material visual. O orçamento de
                  mídia (investimento nas plataformas) é definido e custeado
                  diretamente pela contratante.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {trafegoFeatures.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="p-6 bg-card border border-border h-full">
                    <f.icon
                      size={24}
                      className="text-accent"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-display text-xl mt-4">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {f.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INVESTIMENTO */}
        <section className="bg-charcoal text-cream py-24" data-sd-section="precos">
          <div className="container-luxe">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="eyebrow text-accent">
                  <span className="divider-gold mr-3" />
                  Investimento
                </span>
                <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
                  Valores e condições
                </h2>
                <p className="text-cream/70 mt-4 leading-relaxed">
                  Transparência total. Sem taxas ocultas, sem surpresas. Cada
                  serviço é detalhado para que você saiba exatamente o que está
                  contratando.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {investimento.map((item, i) => (
                <Reveal key={item.label} delay={i * 120}>
                  <div
                    className={`p-8 border h-full flex flex-col ${
                      i === 0
                        ? "border-accent bg-accent/5"
                        : "border-cream/15 bg-cream/[0.03]"
                    }`}
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                      {item.label}
                    </p>
                    <p className="font-display text-4xl mt-3">
                      {item.value}
                      <span className="text-base text-cream/50 ml-1">
                        {item.period}
                      </span>
                    </p>
                    {"installment" in item && item.installment && (
                      <p className="text-sm text-cream/50 mt-1.5">
                        {item.installment}{" "}
                        <span className="text-cream/35">
                          (total {item.installmentTotal})
                        </span>
                      </p>
                    )}
                    <p className="text-sm text-cream/60 leading-relaxed mt-4">
                      {item.desc}
                    </p>

                    <ul className="mt-6 space-y-3 flex-1">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-cream/80"
                        >
                          <Check
                            size={14}
                            className="text-accent mt-0.5 shrink-0"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <p className="text-xs text-cream/40 mt-8 text-center">
                * Mídia indicativa de ~R$ 1.800/mês (Google R$ 1.000 + Meta R$ 800),
                paga diretamente pela Nika às plataformas. O valor pode ser
                ajustado conforme estratégia e resultados.
              </p>
            </Reveal>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-24 border-b border-border" data-sd-section="diferenciais">
          <div className="container-luxe">
            <Reveal>
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="eyebrow">
                  <span className="divider-gold mr-3" />
                  Por que nós
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                  Diferenciais da parceria
                </h2>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Sparkles,
                  title: "Design premium nativo",
                  text: "Não usamos templates. Cada pixel é projetado para transmitir a sofisticação da sua marca e dos imóveis que você comercializa.",
                },
                {
                  icon: Shield,
                  title: "Parceiro de longo prazo",
                  text: "Não entregamos um site e sumimos. Somos um braço digital da sua operação, com evolução contínua, suporte e estratégia ativa.",
                },
                {
                  icon: Target,
                  title: "Foco em resultado",
                  text: "Cada decisão — de design, conteúdo ou campanha — é orientada a gerar leads qualificados e fortalecer seu posicionamento.",
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-24" data-sd-section="cta">
          <div className="container-luxe text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="eyebrow">
                <span className="divider-gold mr-3" />
                Próximo passo
              </span>
              <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
                Vamos começar?
              </h2>
              <p className="text-muted-foreground mt-5 leading-relaxed">
                Esta proposta tem validade de 15 dias. Entre em contato para
                alinharmos os detalhes, tirar dúvidas ou ajustar o escopo às
                suas necessidades.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/5519989613455?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20a%20proposta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Aceitar proposta <ArrowRight size={14} />
                </a>
                <a
                  href="https://wa.me/5519989613455?text=Ol%C3%A1!%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20a%20proposta."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Tirar dúvidas
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer minimalista para proposta */}
      <footer className="bg-charcoal text-cream/50 py-8">
        <div className="container-luxe text-center text-xs">
          <p>
            Proposta confidencial — elaborada exclusivamente para a destinatária.
          </p>
          <p className="mt-2 text-cream/30">
            © {new Date().getFullYear()} Filip.Digital
          </p>
        </div>
      </footer>
    </>
  );
}
