
import { Play, Music, Tv, Gamepad2, BookOpen, Camera, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const serviceCategories = [
    {
      title: "Música",
      icon: <Music className="h-8 w-8" />,
      color: "from-green-500 to-teal-500",
      services: [
        { name: "Spotify", price: "Desde S/10", description: "Plan familiar, mantén tus playlists" },
        { name: "YouTube Premium", price: "Desde S/20", description: "Incluye YouTube Music" },
        { name: "Tidal", price: "S/5", description: "Alta calidad de audio" }
      ]
    },
    {
      title: "Películas y Series",
      icon: <Play className="h-8 w-8" />,
      color: "from-red-500 to-pink-500",
      services: [
        { name: "Netflix", price: "Desde S/15", description: "Series y películas FULL HD" },
        { name: "Amazon Prime", price: "Desde S/10", description: "Incluye Prime Shipping" },
        { name: "Max (HBO)", price: "Desde S/10", description: "Contenido premium HBO" },
        { name: "Disney+", price: "Desde S/10", description: "Sin ESPN / Con ESPN disponible" },
        { name: "Paramount+", price: "Desde S/10", description: "Contenido exclusivo Paramount" },
        { name: "Rakuten Viki", price: "Desde S/10", description: "Contenido asiático" },
        { name: "ViX+", price: "Desde S/10", description: "Contenido en español" }
      ]
    },
    {
      title: "TV en Vivo y Deportes",
      icon: <Tv className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "Disney+ ESPN", price: "Desde S/15", description: "Incluye deportes en vivo" },
        { name: "IPTV", price: "Desde S/15", description: "Canales internacionales" },
        { name: "Movistar Play", price: "Desde S/30", description: "TV nacional y deportes" },
        { name: "FlujoTV", price: "Desde S/15", description: "TV latina en vivo" },
        { name: "TeleLatino", price: "Desde S/10", description: "Canales latinos" }
      ]
    },
    {
      title: "Anime",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "Crunchyroll", price: "Desde S/10", description: "Amplio catálogo de anime" }
      ]
    },
    {
      title: "Adulto",
      icon: <Monitor className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-500",
      services: [
        { name: "Pornhub Premium", price: "Desde S/5", description: "Contenido premium" }
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Catálogo <span className="gradient-text">StreamFEX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más de 15 servicios de streaming premium. Calidad garantizada, 
            entrega en 15-20 minutos. ¡Combos con descuentos especiales!
          </p>
        </div>

        <div className="space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={serviceIndex} 
                    className="card-gradient hover:scale-105 transition-all duration-300 group cursor-pointer"
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                      <div className="text-xl font-bold gradient-text">
                        {service.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">
                        Ver Planes
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="card-gradient p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              💰 <span className="gradient-text">Combos Especiales</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-4">
              ¡Combina servicios y ahorra hasta S/4 por servicio adicional!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <strong>2do servicio:</strong> Descuento S/3
              </div>
              <div className="text-left">
                <strong>3er servicio o más:</strong> Descuento S/4 c/u
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
