import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">W3</span>
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Grupo <span className="text-primary">W3</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O ecossistema completo para o seu e-commerce.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Soluções</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#solucoes" className="hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Performance</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Design & UX</a></li>
              <li><a href="#solucoes" className="hover:text-primary transition-colors">Integrações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#quem-somos" className="hover:text-primary transition-colors">Quem Somos</a></li>
              <li><a href="#time" className="hover:text-primary transition-colors">Time</a></li>
              <li><a href="#cases" className="hover:text-primary transition-colors">Cases</a></li>
              <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary shrink-0" />
                Blumenau/SC — Brasil
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary shrink-0" />
                contato@grupow3.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary shrink-0" />
                (47) 3333-0000
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Grupo W3. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
