import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18092612054";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-xl font-bold mb-4">Dr. Díaz Meyreles</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              Consultorio odontológico comprometido con tu salud dental, estética impecable y atención profesional de alto nivel.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li>Diseño de sonrisa</li>
              <li>Coronas de zirconia</li>
              <li>Blanqueamiento dental</li>
              <li>Odontología estética</li>
              <li>Rehabilitación oral</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
                <span className="text-sm text-primary-foreground/60">Puerto Plata, República Dominicana</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-accent shrink-0" />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                  809-261-2054
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-accent shrink-0" />
                <div className="text-sm text-primary-foreground/60">
                  <p>Lunes – Viernes: 9:00 AM – 6:00 PM</p>
                  <p>Sábados: 9:00 AM – 1:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Consultorio Odontológico Dr. Díaz Meyreles. Todos los derechos reservados.</p>
          <p>Diseñado con excelencia en Puerto Plata, RD.</p>
        </div>
      </div>
    </footer>
  );
}
