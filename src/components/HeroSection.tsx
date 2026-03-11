import { motion } from "framer-motion";
import { MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background grid/arc decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orange arc */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] lg:w-[1200px] lg:h-[1200px]">
          <div className="absolute inset-0 rounded-full border border-primary/20" />
          <div className="absolute inset-8 rounded-full border border-primary/15" />
          <div className="absolute inset-16 rounded-full border border-primary/10" />
          <div className="absolute inset-24 rounded-full border border-primary/5" />
        </div>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(25 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(25 100% 50% / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] animate-glow-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border">
                <MapPin size={14} className="text-primary" />
                <span className="text-xs text-muted-foreground">Sede em Blumenau/SC</span>
              </div>
              <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-full border border-border">
                <Users size={14} className="text-primary" />
                <span className="text-xs text-muted-foreground">30+ profissionais</span>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              O ecossistema completo para o seu{" "}
              <span className="text-primary">e-commerce</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Desenvolvimento, performance e estratégia digital integrados para
              impulsionar os resultados do seu negócio online.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 h-14 text-base">
                Conheça nossas soluções
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary h-14 text-base px-8">
                Fale com um especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
