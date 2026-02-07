import heroImage from "@/assets/hero-office.jpg";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const scrollToPacks = () => {
    document.getElementById("packs")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Espacio de trabajo moderno con vistas al campo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40 opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow w-full">
        <div className="max-w-2xl animate-fade-in">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-primary mb-6">
            Lógica Analógica
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight text-foreground mb-6">
            Una web que te sostiene mientras ayudas
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
            Ayudar a los demás y ganar tú también, ahora más fácil.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToPacks} size="lg" className="btn-primary text-base px-8 py-6">
              Ver precios
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="btn-outline-hero text-base px-8 py-6"
            >
              Enviar mensaje
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
