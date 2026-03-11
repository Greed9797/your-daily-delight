import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Anos de mercado" },
  { value: "200+", label: "Projetos entregues" },
  { value: "30+", label: "Profissionais" },
  { value: "50+", label: "Clientes ativos" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
              Quem Somos
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Transformando o digital com{" "}
              <span className="text-primary">inovação</span> e resultado
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O Grupo W3 é um ecossistema de soluções digitais focado em e-commerce. 
              Com sede em Blumenau/SC, reunimos especialistas em tecnologia, design, 
              marketing e estratégia para criar experiências que convertem.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é simplificar o complexo universo do comércio eletrônico, 
              oferecendo desde o desenvolvimento da plataforma até a gestão completa 
              de performance e resultados.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-colors duration-300"
              >
                <span className="font-display text-4xl md:text-5xl font-bold text-primary block mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
