
import { useState } from 'react';
import { Mail, Phone, Clock, CreditCard, MessageCircle, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const paymentMethods = [
    { name: "BCP", number: "19435559616002", icon: "🏦" },
    { name: "BBVA", number: "001103230200780392", icon: "🏦" },
    { name: "Interbank", number: "4503164706568", icon: "🏦" },
    { name: "Yape", number: "994516143", icon: "📱" },
    { name: "Plin", number: "994516143", icon: "📱" },
    { name: "Binance ID", number: "205278237", icon: "₿" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppClick = () => {
    const message = formData.name && formData.service 
      ? `Hola! Soy ${formData.name}, me interesa el servicio de ${formData.service}.`
      : "Hola! Me interesa conocer más sobre los servicios de StreamFEX.";
    
    const whatsappUrl = `https://wa.me/51994516143?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppClick();
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contáctanos <span className="gradient-text">StreamFEX</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contrata tu servicio favorito 
            o resuelve cualquier duda sobre nuestros planes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">WhatsApp / Teléfono</div>
                    <div className="text-muted-foreground">+51 994 516 143</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Horario de Atención</div>
                    <div className="text-muted-foreground">Lunes a Domingo</div>
                    <div className="text-muted-foreground">10:00 AM - 9:30 PM</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Send className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Tiempo de Entrega</div>
                    <div className="text-muted-foreground">15-20 minutos post-pago</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Métodos de Pago */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Métodos de Pago
                </CardTitle>
                <CardDescription>
                  Titular: <strong>Hernan Luis Ccenchó Alfaro</strong>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{method.icon}</span>
                        <div>
                          <div className="font-semibold text-sm">{method.name}</div>
                          <div className="text-xs text-muted-foreground">{method.number}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    ⚠️ <strong>Importante:</strong> Envía el comprobante de pago para validar tu transferencia.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de Contacto */}
          <div>
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Envíanos un Mensaje</CardTitle>
                <CardDescription>
                  Completa el formulario y te contactaremos por WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Tu número de WhatsApp"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Servicio de Interés</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder="Ej: Netflix, Spotify, Combo..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntanos qué necesitas..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contactar por WhatsApp
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    ¿Prefieres contactarnos directamente?
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    variant="outline" 
                    className="w-full"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Abrir WhatsApp Directo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Referencias */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            📍 <strong>Referencias:</strong> 
            <a 
              href="https://g.co/kgs/hzgUAC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline ml-1"
            >
              Ver en Google Maps
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
