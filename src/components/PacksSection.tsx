import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface Pack {
  name: string;
  price: number;
  platform: string;
  features: string[];
  limitations?: string[];
  cta: string;
  popular?: boolean;
}

const packs: Pack[] = [
  {
    name: "Pack Inicio",
    price: 180,
    platform: "Si quieres algo ya",
    features: [
      "1 página con 4 secciones",
      "Diseño rápido y limpio",
      "Adaptada a móviles",
      "Con tus datos de contacto",
      "Páginas legales estándar con tus datos",
      "Ajustes mínimos incluidos",
    ],
    limitations: ["Sin formularios", "Sin redes"],
    cta: "Comprar Pack Inicio",
  },
  {
    name: "Pack Crecimiento",
    price: 320,
    platform: "WordPress + Elementor",
    features: [
      "1 página con 5-6 secciones",
      "Branding adaptado a tu marca",
      "Formulario de contacto",
      "Enlaces a redes",
      "Páginas legales estándar con tus datos",
      "Hasta 2 revisiones",
    ],
    limitations: ["Sin newsletter", "Sin reserva de citas"],
    cta: "Elegir Pack Crecimiento",
    popular: true,
  },
  {
    name: "Pack Completo",
    price: 480,
    platform: "WordPress / Tilda",
    features: [
      "1 página con 6-7 secciones",
      "Conexión de email marketing",
      "Formulario de suscripción a newsletter",
      "Páginas legales personalizadas",
      "Hasta 3 revisiones",
    ],
    cta: "Contratar Pack Completo",
  },
];

const PacksSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packs" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Nuestros Packs
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Elige el pack que encaja contigo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sin sorpresas. Precio cerrado. Tú eliges lo que necesitas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {packs.map((pack, index) => (
            <div
              key={pack.name}
              className={`relative card-service rounded-xl p-8 flex flex-col ${
                pack.popular ? "ring-2 ring-primary scale-105 md:scale-110 z-10" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-4 py-1.5 rounded-full">
                    Más popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">{pack.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{pack.platform}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-serif font-bold text-foreground">{pack.price}</span>
                  <span className="text-lg text-muted-foreground">€</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pack.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
                {pack.limitations?.map((limitation) => (
                  <li key={limitation} className="flex items-start gap-3 text-sm opacity-60">
                    <X className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full py-6 ${
                  pack.popular
                    ? "btn-primary"
                    : "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                }`}
              >
                {pack.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
