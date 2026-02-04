import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-serif font-semibold mb-2">Lógica Analógica</h3>
            <p className="text-background/70">Diseño web profesional para emprendedores.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:info@logicaanalogica.es"
              className="text-background/70 hover:text-background transition-colors"
            >
              info@logicaanalogica.es
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Lógica Analógica. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
