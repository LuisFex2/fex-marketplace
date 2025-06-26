
import { Play, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Play className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">StreamHub</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Tu plataforma de confianza para acceder a todos los servicios de streaming 
              y entretenimiento digital. Calidad garantizada, precios justos.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Tu email para ofertas exclusivas" 
                className="max-w-xs"
              />
              <Button>Suscribirse</Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Video Streaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Música</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TV en Vivo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gaming</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Productividad</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>soporte@streamhub.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad, País</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 StreamHub. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Términos de Servicio
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Soporte
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
