
import { useState } from 'react';
import { Menu, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Play className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">StreamHub</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#precios" className="text-sm font-medium hover:text-primary transition-colors">
              Precios
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Iniciar Sesión
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Comenzar
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a href="#servicios" className="block text-sm font-medium hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#precios" className="block text-sm font-medium hover:text-primary transition-colors">
              Precios
            </a>
            <a href="#contacto" className="block text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" size="sm">
                Iniciar Sesión
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600">
                Comenzar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
