import { motion } from "framer-motion";
import { MapPin, Users, Globe, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(hsl(0 0% 30%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 30%) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Orange arc glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px]">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-[50%] border-2 border-primary/40 opacity-60" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-[50%] border border-primary/20" />
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/8 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-8">
            Grupo W3: O Ecossistema{" "}
            <br className="hidden md:block" />
            que mais transforma{" "}
            <br className="hidden md:block" />
            <span className="text-primary">E-commerces</span> no Brasil
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Transformamos vidas através do e-commerce, combinando estratégia,
            execução e tecnologia dentro de um sistema integrado.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-transparent border border-border px-5 py-3 rounded-full">
              <MapPin size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Sede física em Blumenau – SC.</span>
            </div>
            <div className="flex items-center gap-2 bg-transparent border border-border px-5 py-3 rounded-full">
              <Users size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Equipe com mais de 30 profissionais.</span>
            </div>
            <div className="flex items-center gap-2 bg-transparent border border-border px-5 py-3 rounded-full">
              <Globe size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Operação nacional.</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-6">
            Conheça mais do ecossistema falando com um de nossos especialistas:
          </p>

          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 h-16 text-base rounded-full uppercase tracking-wide gap-2"
          >
            Quero Conhecer o Grupo W3
            <ArrowUpRight size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
