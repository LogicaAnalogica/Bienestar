import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-narrow">
        <div className="flex items-center justify-between">
          <a
            href="https://logicaanalogica.es"
            className="text-xl font-serif font-semibold text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lógica Analógica
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <Button onClick={() => scrollToSection("packs")} size="sm" className="btn-primary">
              Ver precios
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4">
            <button
              onClick={() => scrollToSection("packs")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Packs
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
            <Button onClick={() => scrollToSection("packs")} size="sm" className="w-full btn-primary">
              Ver precios
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
