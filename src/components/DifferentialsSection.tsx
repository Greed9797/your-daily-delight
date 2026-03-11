import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, ShoppingBag, Zap, Globe } from "lucide-react";

const metrics = [
  { icon: TrendingUp, value: "R$ 500M+", label: "Em vendas geradas para clientes" },
  { icon: ShoppingBag, value: "200+", label: "Projetos de e-commerce entregues" },
  { icon: Zap, value: "99.9%", label: "Uptime das plataformas" },
  { icon: Globe, value: "15+", label: "Estados atendidos no Brasil" },
];

const DifferentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="diferenciais" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold max-w-3xl mx-auto leading-tight mb-4">
            Não somos apenas prestadores de serviço.{" "}
            <span className="text-primary">Somos o seu time</span> de crescimento.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
            Cada decisão é pensada para gerar impacto real no seu faturamento.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <metric.icon size={28} className="text-primary" />
              </div>
              <span className="font-display text-3xl md:text-4xl font-bold text-foreground block mb-2">
                {metric.value}
              </span>
              <span className="text-muted-foreground text-sm">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
