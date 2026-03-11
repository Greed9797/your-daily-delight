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
      <div className="container mx-auto px-6 max-w-7xl" ref={ref}>
        <div className="grid lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Photo placeholder */}
              <div className="aspect-[3/4] bg-secondary flex items-center justify-center relative overflow-hidden">
                <span className="font-display text-6xl font-bold text-muted-foreground/20">
                  {member.initials}
                </span>
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              </div>
              {/* Info overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display font-semibold text-lg text-foreground">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
