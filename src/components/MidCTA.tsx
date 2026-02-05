import { Button } from "@/components/ui/button";

const MidCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container-narrow text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-4">
          Empieza hoy tu web profesional
        </h2>
        <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
          Tu web lista sin complicaciones técnicas. Da el paso y empieza a vender online.
        </p>
        <Button
          onClick={scrollToContact}
          size="lg"
          variant="secondary"
          className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-base px-10 py-6"
        >
          Escríbeme.
        </Button>
      </div>
    </section>
  );
};

export default MidCTA;
