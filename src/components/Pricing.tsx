
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "$9.99",
      period: "/mes",
      description: "Perfecto para empezar",
      features: [
        "3 servicios de streaming",
        "Calidad HD",
        "2 dispositivos simultáneos",
        "Soporte por email",
        "Sin compromisos"
      ],
      popular: false,
      buttonText: "Empezar Gratis"
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/mes",
      description: "El más popular",
      features: [
        "8 servicios de streaming",
        "Calidad 4K Ultra HD",
        "5 dispositivos simultáneos",
        "Soporte prioritario 24/7",
        "Descuentos exclusivos",
        "Acceso anticipado"
      ],
      popular: true,
      buttonText: "Obtener Premium"
    },
    {
      name: "Familiar",
      price: "$29.99",
      period: "/mes",
      description: "Para toda la familia",
      features: [
        "Servicios ilimitados",
        "Calidad 4K Ultra HD",
        "10 dispositivos simultáneos",
        "Soporte VIP 24/7",
        "Perfiles familiares",
        "Control parental",
        "Garantía de devolución"
      ],
      popular: false,
      buttonText: "Elegir Familiar"
    }
  ];

  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Planes y <span className="gradient-text">Precios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. 
            Todos incluyen garantía de satisfacción y puedes cambiar en cualquier momento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`card-gradient relative ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              } hover:scale-105 transition-all duration-300`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600">
                  <Star className="w-3 h-3 mr-1" />
                  Más Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center mt-4">
                  <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                      : ''
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            ¿Necesitas algo personalizado? 
            <a href="#contacto" className="text-primary hover:underline ml-1">
              Contáctanos para planes empresariales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
