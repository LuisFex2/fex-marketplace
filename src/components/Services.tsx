
import { Play, Music, Tv, Gamepad2, BookOpen, Camera } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Play className="h-8 w-8" />,
      title: "Video Streaming",
      description: "Netflix, Disney+, Amazon Prime Video, HBO Max y más",
      features: ["4K Ultra HD", "Múltiples dispositivos", "Sin anuncios"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Música",
      description: "Spotify, Apple Music, YouTube Music, Deezer",
      features: ["Audio de alta calidad", "Descargas offline", "Playlists ilimitadas"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Tv className="h-8 w-8" />,
      title: "TV en Vivo",
      description: "Canales de TV, deportes en vivo, noticias",
      features: ["Canales premium", "Transmisión en vivo", "Grabación DVR"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Gaming",
      description: "Xbox Game Pass, PlayStation Plus, Steam",
      features: ["Juegos premium", "Multijugador online", "Actualizaciones automáticas"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Lectura",
      description: "Kindle Unlimited, Audible, revistas digitales",
      features: ["Biblioteca ilimitada", "Audiolibros", "Sincronización de dispositivos"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Edición",
      description: "Adobe Creative Suite, Canva Pro, Figma",
      features: ["Herramientas profesionales", "Almacenamiento en la nube", "Colaboración en equipo"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Servicios <span className="gradient-text">Disponibles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tenemos todo lo que necesitas para entretenimiento digital. 
            Desde streaming de video hasta gaming y productividad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-gradient hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant="outline">
                  Ver Opciones
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
