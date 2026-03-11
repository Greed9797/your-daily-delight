import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
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
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Depoimento
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Resultados Reais, <span className="text-primary">Exemplo</span> Reais
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Photo */}
          <div className="relative rounded-2xl overflow-hidden bg-secondary aspect-[4/3] flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="font-display font-bold text-primary text-4xl">CS</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-8">
              <p className="font-display font-semibold text-lg text-foreground">Carlos Silva</p>
              <p className="text-sm text-muted-foreground">CEO & Fundador — Grupo W3</p>
            </div>
          </div>

          {/* Quote */}
          <div>
            <Quote size={40} className="text-primary/40 mb-6" />
            <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8 text-foreground">
              "Acreditamos que tecnologia e estratégia caminham juntas. Nosso papel é transformar
              a complexidade do digital em resultados reais para nossos clientes."
            </blockquote>
            <div>
              <p className="font-semibold text-foreground text-lg">Nosso Diretor</p>
              <p className="text-muted-foreground">
                Mais de 10 anos de experiência no mercado digital, liderando equipes e projetos de alto impacto.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
