
import { Check, Star, Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const featuredServices = [
    {
      name: "Netflix",
      plans: [
        { devices: "1 Dispositivo", prices: ["S/15 (1 mes)", "S/28 (2 meses)"] },
        { devices: "2 Dispositivos", prices: ["S/30 (1 mes)", "S/58 (2 meses)"] },
        { devices: "3 Dispositivos", prices: ["S/36 (1 mes)", "S/70 (2 meses)"] },
        { devices: "5 Dispositivos", prices: ["S/40 (1 mes)", "S/78 (2 meses)"] }
      ],
      popular: true
    },
    {
      name: "Spotify",
      plans: [
        { devices: "Con Playlists", prices: ["S/10 (1 mes)", "S/25 (3 meses)", "S/50 (6 meses)"] },
        { devices: "Sin Playlists", prices: ["S/20 (3 meses)"] }
      ],
      popular: false
    },
    {
      name: "Disney+ ESPN",
      plans: [
        { devices: "1 Dispositivo", prices: ["S/15 (1 mes)", "S/40 (3 meses)"] },
        { devices: "2 Dispositivos", prices: ["S/20 (1 mes)"] },
        { devices: "6 Dispositivos", prices: ["S/25 (1 mes)", "S/90 (4 meses)", "S/200 (12 meses)"] }
      ],
      popular: false
    }
  ];

  const comboExamples = [
    {
      title: "Combo Básico",
      services: ["Netflix (1 dispositivo)", "Max (1 dispositivo)"],
      originalPrice: "S/25",
      finalPrice: "S/22",
      savings: "S/3",
      description: "2do servicio con descuento"
    },
    {
      title: "Trío Popular",
      services: ["Netflix (1 dispositivo)", "Max (1 dispositivo)", "Amazon Prime (1 dispositivo)"],
      originalPrice: "S/35",
      finalPrice: "S/28",
      savings: "S/7",
      description: "Descuentos acumulativos"
    },
    {
      title: "Pack Familiar",
      services: ["Disney+ ESPN", "Spotify", "YouTube Premium", "Crunchyroll"],
      originalPrice: "S/55",
      finalPrice: "S/44",
      savings: "S/11",
      description: "Máximo ahorro familiar"
    }
  ];

  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Planes y <span className="gradient-text">Combos StreamFEX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Precios competitivos, entrega en 15-20 minutos. 
            Combina servicios y ahorra con nuestro sistema de descuentos.
          </p>
        </div>

        {/* Servicios Destacados */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Servicios Más Populares</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card 
                key={index} 
                className={`card-gradient relative ${
                  service.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600">
                    <Star className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold">{service.name}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {service.plans.map((plan, planIndex) => (
                      <div key={planIndex} className="border-b border-border pb-3 last:border-b-0">
                        <div className="font-semibold text-sm mb-2">{plan.devices}</div>
                        <div className="space-y-1">
                          {plan.prices.map((price, priceIndex) => (
                            <div key={priceIndex} className="text-sm text-muted-foreground">
                              {price}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-4" variant={service.popular ? "default" : "outline"}>
                    Contratar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sistema de Combos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              <Calculator className="inline w-6 h-6 mr-2" />
              Sistema de <span className="gradient-text">Combos</span>
            </h3>
            <p className="text-muted-foreground">
              Combina servicios y ahorra automáticamente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {comboExamples.map((combo, index) => (
              <Card key={index} className="card-gradient">
                <CardHeader>
                  <CardTitle className="text-lg">{combo.title}</CardTitle>
                  <CardDescription>{combo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {combo.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-2" />
                        {service}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Precio individual:</span>
                      <span className="line-through text-sm">{combo.originalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Precio combo:</span>
                      <span className="text-lg font-bold gradient-text">{combo.finalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-semibold text-green-500">Ahorras:</span>
                      <span className="text-sm font-bold text-green-500">{combo.savings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="card-gradient p-6 rounded-lg">
            <h4 className="text-xl font-bold mb-4 text-center">Reglas de Descuento</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                <span><strong>2do servicio:</strong> Descuento de S/3</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3+</div>
                <span><strong>3er servicio o más:</strong> Descuento de S/4 cada uno</span>
              </div>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15-20</div>
              <div className="text-sm text-muted-foreground">Minutos entrega</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte disponible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Servicios disponibles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Calidad premium</div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            <strong>Horario de atención:</strong> Lunes a Domingo 10:00 AM - 9:30 PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
