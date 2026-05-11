import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Nika Imóveis" },
      {
        name: "description",
        content:
          "Fale com nossa especialista em imóveis de alto padrão em Santa Catarina.",
      },
      { property: "og:title", content: "Contato — Nika Imóveis" },
      {
        property: "og:description",
        content: "Atendimento personalizado e discreto para clientes exigentes.",
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="container-luxe grid lg:grid-cols-2 gap-16">
          <div>
            <span className="eyebrow">
              <span className="divider-gold mr-3" />
              Fale conosco
            </span>
            <h1 className="font-display text-5xl md:text-6xl mt-4 leading-tight">
              Como podemos atendê-lo?
            </h1>
            <p className="text-muted-foreground mt-6 leading-relaxed max-w-md">
              Preencha o formulário ao lado ou entre em contato pelos canais
              abaixo. Respondemos em até 2 horas em dias úteis.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { icon: Phone, label: "Telefone / WhatsApp", value: "+55 (47) 99999-0000" },
                { icon: Mail, label: "E-mail", value: "contato@nikaimoveis.com.br" },
                { icon: MapPin, label: "Escritório", value: "Av. Atlântica, 1500 — Balneário Camboriú/SC" },
                { icon: Clock, label: "Horário", value: "Seg–Sex 9h às 19h · Sáb 9h às 13h" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 border-b border-border pb-5">
                  <div className="w-10 h-10 grid place-items-center border border-accent/40 text-accent shrink-0">
                    <c.icon size={16} />
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                      {c.label}
                    </p>
                    <p className="font-display text-xl mt-1">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="bg-cream border border-border p-8 lg:p-12 h-fit">
            <h2 className="font-display text-3xl">Envie sua mensagem</h2>
            <div className="mt-8 space-y-4">
              <Field label="Nome completo" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="E-mail" type="email" />
                <Field label="Telefone" />
              </div>
              <Field label="Imóvel / interesse" />
              <label className="block">
                <span className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Mensagem
                </span>
                <textarea
                  rows={5}
                  className="mt-1.5 w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-accent"
                />
              </label>
              <button type="button" className="btn-primary w-full">
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
      <input
        type={type}
        className="mt-1.5 w-full bg-background border border-border px-4 py-3 text-sm outline-none focus:border-accent"
      />
    </label>
  );
}
