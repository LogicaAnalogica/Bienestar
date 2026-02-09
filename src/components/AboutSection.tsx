import { Button } from "@/components/ui/button";
import aboutDeskImg from "@/assets/about-desk.jpg";

const AboutIllustration = () => (
  <img
    src={aboutDeskImg}
    alt="Laptop en un escritorio con diseño web profesional"
    className="w-full rounded-lg shadow-card"
    loading="lazy"
  />
);



const AboutSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      title: "Rápido",
      description: "Tu web lista en días, no en meses. Para empezar a vivir por fin de tu trabajo.",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Simple",
      description: "Sin jerga técnica. Te lo explico todo claro para que puedas decidir.",
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: "Precio justo",
      description: "Packs cerrados. Sabes lo que pagas desde el principio.",
    },
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in mb-12">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-4">
            Así puedo ayudarte
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight">
            Tu web profesional,
            <br className="hidden sm:block" />
            <span className="text-primary my-[10px]">sin líos técnicos</span>
          </h2>
        </div>

        {/* Two-column: text + illustration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <p className="text-xl md:text-2xl font-serif italic text-muted-foreground" style={{ lineHeight: 1.8 }}>
              No necesitas otra herramienta más.
            </p>
            <p className="text-xl md:text-2xl font-serif italic text-muted-foreground" style={{ lineHeight: 1.8 }}>
              Necesitas una web que te quite peso de encima.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground" style={{ lineHeight: 1.9 }}>
              Una web que explique bien lo que haces, sin que tengas que contarlo mil veces. Que transmita tu valor,
              aunque hoy no tengas tiempo ni energía para "venderte".
            </p>
            <p className="text-lg md:text-xl text-muted-foreground" style={{ lineHeight: 1.9 }}>
              Yo me encargo de la parte técnica, del orden y de la estructura para que tú puedas centrarte en ti, en tu
              familia y en seguir acompañando como sabes hacerlo.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground" style={{ lineHeight: 1.8 }}>
              Una web sencilla, honesta y profesional sin arruinarte por el camino.
            </p>
            <p className="text-lg md:text-xl font-serif italic text-primary" style={{ lineHeight: 1.8 }}>
              De manera rápida y sin complicaciones.
            </p>
          </div>

          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <AboutIllustration />
          </div>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="p-6 rounded-lg bg-card border border-border shadow-soft hover:shadow-card hover:scale-[1.02] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-center">{feature.title}</h3>
              <p className="text-muted-foreground text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={() => scrollToSection("contacto")} size="sm" className="btn-primary">
            Escríbeme
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
