import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, BarChart3, Palette, Code, Megaphone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Desenvolvimento e implementação de lojas virtuais robustas com foco em conversão e experiência do usuário.",
  },
  {
    icon: BarChart3,
    title: "BI / Inteligência",
    description: "Análise de dados e inteligência de mercado para decisões estratégicas baseadas em métricas reais.",
  },
  {
    icon: Code,
    title: "Desenvolvimento",
    description: "Sites, landing pages e aplicações web sob medida com tecnologia de ponta e código limpo.",
  },
  {
    icon: Megaphone,
    title: "Tráfego pago",
    description: "Gestão de mídia paga em Google, Meta e outras plataformas para maximizar ROI das campanhas.",
  },
  {
    icon: Palette,
    title: "UI / UX",
    description: "Interfaces intuitivas e visualmente impactantes que encantam seus clientes e aumentam conversões.",
  },
  {
    icon: Settings,
    title: "Integrações",
    description: "Conectamos seu e-commerce com ERPs, marketplaces e ferramentas essenciais para sua operação.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Soluções
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Soluções do Ecossistema <span className="text-primary">W3</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos um ecossistema completo de serviços para impulsionar sua operação digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <Button
                variant="default"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full w-full font-semibold"
              >
                Saiba mais
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
