import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Nosso Diretor
          </span>

          <Quote size={48} className="text-primary/30 mx-auto mb-8" />

          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed mb-10 text-foreground">
            "Acreditamos que tecnologia e estratégia caminham juntas. Nosso papel é transformar 
            a complexidade do digital em resultados reais para nossos clientes."
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-display font-bold text-primary text-lg">CS</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Carlos Silva</p>
              <p className="text-sm text-muted-foreground">CEO & Fundador — Grupo W3</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
