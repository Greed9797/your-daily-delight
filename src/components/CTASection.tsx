import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contato" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative bg-card border border-border rounded-3xl p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/10 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              O Ecossistema W3 representa a{" "}
              <span className="text-primary">evolução digital</span> que seu negócio precisa
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Vamos conversar sobre como podemos acelerar os resultados do seu e-commerce 
              com tecnologia, estratégia e um time que entende do assunto.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 h-14 text-base gap-2">
              Comece agora
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
