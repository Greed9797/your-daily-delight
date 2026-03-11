import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, BarChart3, Palette, ShoppingCart, Megaphone, Settings } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Plataforma E-commerce",
    description: "Desenvolvimento e implementação de lojas virtuais robustas com foco em conversão e experiência do usuário.",
  },
  {
    icon: BarChart3,
    title: "Performance & Mídia",
    description: "Gestão de tráfego pago e estratégias de mídia para maximizar o ROI das suas campanhas digitais.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Web",
    description: "Sites, landing pages e aplicações web sob medida com tecnologia de ponta e código limpo.",
  },
  {
    icon: Palette,
    title: "Design & UX",
    description: "Interfaces intuitivas e visualmente impactantes que encantam seus clientes e aumentam conversões.",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    description: "Estratégias integradas de SEO, conteúdo e redes sociais para fortalecer sua marca online.",
  },
  {
    icon: Settings,
    title: "Integrações & ERP",
    description: "Conectamos seu e-commerce com ERPs, marketplaces e ferramentas essenciais para sua operação.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solucoes" className="py-24 lg:py-32 relative">
      {/* Subtle bg accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
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
            Tudo que seu e-commerce <span className="text-primary">precisa</span>
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
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
