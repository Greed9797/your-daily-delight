import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    title: "E-commerce de Moda",
    category: "Plataforma + Performance",
    result: "+320% em vendas online",
    description: "Migração de plataforma e estratégia de mídia paga para marca de moda catarinense.",
  },
  {
    title: "Marketplace B2B",
    category: "Desenvolvimento + Integrações",
    result: "R$ 15M em GMV no 1º ano",
    description: "Criação de marketplace completo com integrações de ERP e logística automatizada.",
  },
  {
    title: "Loja de Eletrônicos",
    category: "UX + Marketing",
    result: "+180% taxa de conversão",
    description: "Redesign completo do e-commerce com foco em UX e estratégia de conteúdo integrada.",
  },
];

const CasesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Cases
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Cases de Sucesso <span className="text-primary">Exclusivos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 flex flex-col"
            >
              <span className="text-xs text-primary font-medium tracking-wide uppercase">
                {item.category}
              </span>
              <h3 className="font-display text-xl font-semibold mt-3 mb-2 text-foreground flex items-center gap-2">
                {item.title}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">{item.description}</p>
              <div className="bg-primary/10 rounded-lg px-4 py-2 inline-block mb-4">
                <span className="text-primary font-semibold text-sm">{item.result}</span>
              </div>
              <Button
                variant="outline"
                className="rounded-full border-border hover:border-primary hover:text-primary w-full"
              >
                Ver case completo
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
