import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const TransformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            Transforme seu <span className="text-primary">e-commerce</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-10">
            Nosso ecossistema de soluções é projetado para cobrir todas as necessidades
            do seu negócio digital, desde a estratégia até a execução.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Estratégia personalizada",
              description: "Cada negócio é único. Criamos planos sob medida para o seu momento e seus objetivos.",
            },
            {
              title: "Execução integrada",
              description: "Todas as frentes trabalhando juntas: tecnologia, design, marketing e dados.",
            },
            {
              title: "Resultados mensuráveis",
              description: "Acompanhamento constante de métricas e KPIs para garantir o retorno do investimento.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="w-3 h-3 rounded-full bg-primary mb-6" />
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TransformSection;
