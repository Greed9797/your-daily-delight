import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const team = [
  { name: "Carlos Silva", role: "CEO & Fundador", initials: "CS" },
  { name: "Ana Oliveira", role: "Diretora de Tecnologia", initials: "AO" },
  { name: "Roberto Santos", role: "Diretor Comercial", initials: "RS" },
  { name: "Mariana Costa", role: "Head de Design", initials: "MC" },
];

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="time" className="py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 block">
            Nosso Time
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Pessoas que fazem <span className="text-primary">acontecer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça os líderes que conduzem a inovação no Grupo W3.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="aspect-square bg-secondary flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-5xl font-bold text-muted-foreground/30">
                  {member.initials}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{member.role}</p>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 text-sm">
                  <Linkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
