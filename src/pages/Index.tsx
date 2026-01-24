import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PacksSection from "@/components/PacksSection";
import MidCTA from "@/components/MidCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PacksSection />
        <MidCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
