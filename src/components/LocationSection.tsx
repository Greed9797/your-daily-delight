import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";

const LocationSection = () => {
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
            Nossa Sede
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Nossa sede em <span className="text-primary">Blumenau – SC</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Localizada no coração de Santa Catarina, nossa sede reúne talentos e tecnologia em um ambiente de inovação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            { value: "500m²", label: "De escritório moderno" },
            { value: "30+", label: "Profissionais no time" },
            { value: "24/7", label: "Monitoramento ativo" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors"
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-primary block mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
