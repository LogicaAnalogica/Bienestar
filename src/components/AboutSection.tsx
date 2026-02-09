import { Button } from "@/components/ui/button";

const AboutIllustration = () => (
  <svg viewBox="0 0 400 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm mx-auto">
    {/* Browser wireframe */}
    <rect x="40" y="30" width="320" height="220" rx="12" className="stroke-primary" strokeWidth="2" fill="hsl(var(--sand) / 0.3)" />
    <rect x="40" y="30" width="320" height="36" rx="12" className="fill-primary/10" />
    <circle cx="64" cy="48" r="6" className="fill-primary/30" />
    <circle cx="84" cy="48" r="6" className="fill-olive/40" />
    <circle cx="104" cy="48" r="6" className="fill-primary/20" />
    <rect x="140" y="42" width="140" height="12" rx="6" className="fill-muted" />

    {/* Content lines */}
    <rect x="64" y="86" width="180" height="10" rx="4" className="fill-primary/15" />
    <rect x="64" y="106" width="140" height="8" rx="4" className="fill-muted" />
    <rect x="64" y="124" width="160" height="8" rx="4" className="fill-muted" />
    <rect x="64" y="142" width="120" height="8" rx="4" className="fill-muted" />

    {/* Image placeholder */}
    <rect x="260" y="86" width="76" height="64" rx="8" className="fill-olive/15 stroke-olive/30" strokeWidth="1.5" />
    <circle cx="280" cy="110" r="10" className="fill-olive/20" />
    <path d="M264 142 L280 120 L296 130 L312 108 L332 142Z" className="fill-olive/15" />

    {/* CTA button wireframe */}
    <rect x="64" y="170" width="100" height="28" rx="6" className="fill-primary/20 stroke-primary/30" strokeWidth="1.5" />
    <rect x="80" y="180" width="68" height="8" rx="4" className="fill-primary/30" />

    {/* Decorative leaf branch - right side */}
    <g className="text-olive" opacity="0.6">
      <path d="M340 100 C350 140, 360 180, 350 240" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="355" cy="130" rx="14" ry="8" transform="rotate(30 355 130)" className="fill-olive/20" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="360" cy="165" rx="12" ry="7" transform="rotate(20 360 165)" className="fill-olive/20" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="355" cy="200" rx="14" ry="8" transform="rotate(35 355 200)" className="fill-olive/20" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="345" cy="230" rx="11" ry="6" transform="rotate(15 345 230)" className="fill-olive/20" stroke="currentColor" strokeWidth="1.2" />
    </g>

    {/* Decorative leaf branch - left side */}
    <g className="text-olive" opacity="0.45">
      <path d="M60 260 C50 290, 45 320, 55 360" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <ellipse cx="48" cy="290" rx="12" ry="7" transform="rotate(-25 48 290)" className="fill-olive/15" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="45" cy="320" rx="10" ry="6" transform="rotate(-35 45 320)" className="fill-olive/15" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="50" cy="348" rx="11" ry="6" transform="rotate(-20 50 348)" className="fill-olive/15" stroke="currentColor" strokeWidth="1" />
    </g>

    {/* Floating geometric accents */}
    <circle cx="100" cy="290" r="24" className="fill-primary/5 stroke-primary/15" strokeWidth="1.5" />
    <rect x="280" y="280" width="40" height="40" rx="8" className="fill-olive/8 stroke-olive/20" strokeWidth="1.5" transform="rotate(15 300 300)" />
    <circle cx="200" cy="380" r="16" className="fill-sand/40 stroke-primary/10" strokeWidth="1.5" />
  </svg>
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
          <div className="space-y-4 animate-fade-in">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              No necesitas otra herramienta más.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Necesitas una web que te quite peso de encima.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-loose">
              Una web que explique bien lo que haces, sin que tengas que contarlo mil veces. Que transmita tu valor,
              aunque hoy no tengas tiempo ni energía para "venderte".
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-loose">
              Yo me encargo de la parte técnica, del orden y de la estructura para que tú puedas centrarte en ti, en tu
              familia y en seguir acompañando como sabes hacerlo.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Una web sencilla, honesta y profesional sin arruinarte por el camino.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">De manera rápida y sin complicaciones.</strong>
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
