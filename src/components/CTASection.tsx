import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-card to-secondary/30 border border-border rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight max-w-3xl mx-auto">
              O Ecossistema W3{" "}
              <span className="text-primary">representa...</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              A evolução digital que seu negócio precisa. Vamos conversar sobre como
              podemos acelerar os resultados do seu e-commerce.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-10 h-16 text-base rounded-full uppercase tracking-wide gap-2"
            >
              Quero Conhecer o Grupo W3
              <ArrowUpRight size={20} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
