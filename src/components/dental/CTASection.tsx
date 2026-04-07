import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, ArrowRight, MapPin } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18092612054?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita";
const MAPS_URL =
  "https://www.google.com/maps/place/Consultorio+Odontol%C3%B3gico+Dr.+Diaz+Meyreles/@19.7973797,-70.6886904,21z/data=!4m14!1m7!3m6!1s0x8eb1ee4098022603:0xd1e9b5d42ab24dd0!2sConsultorio+Odontol%C3%B3gico+Dr.+Diaz+Meyreles!8m2!3d19.7973314!4d-70.688594!16s%2Fg%2F1tf7hqvt!3m5!1s0x8eb1ee4098022603:0xd1e9b5d42ab24dd0!8m2!3d19.7973314!4d-70.688594!16s%2Fg%2F1tf7hqvt?authuser=1&entry=ttu&g_ep=EgoyMDI2MDQwNS4wIKXMDSoASAFQAw%3D%3D";
const MAP_EMBED_URL = "https://www.google.com/maps?q=19.7973314,-70.688594&z=18&output=embed";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contacto" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            Tu sonrisa merece atencion{" "}
            <span className="italic">de primer nivel</span>
          </h2>
          <p className={`text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
            Agenda tu evaluacion con el Dr. Diaz Meyreles y descubre como podemos transformar tu salud y estetica dental con un plan personalizado.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-bold text-lg px-10 py-5 rounded-full hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar cita por WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 font-semibold text-lg px-8 py-5 rounded-full hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Ver ubicacion
            </a>
          </div>
          <p className={`mt-6 text-sm text-primary-foreground/50 ${isVisible ? "animate-reveal-up delay-300" : "opacity-0"}`}>
            Respuesta rapida · Sin compromiso · 809-261-2054
          </p>
        </div>

        <div className={`mt-12 glass-card rounded-3xl overflow-hidden ${isVisible ? "animate-reveal-up delay-400" : "opacity-0"}`}>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <iframe
              src={MAP_EMBED_URL}
              title="Ubicacion del Consultorio Odontologico Dr. Diaz Meyreles"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[320px] lg:h-full min-h-[320px]"
            />
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60 mb-3">
                Ubicacion
              </p>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                Consultorio Odontologico Dr. Diaz Meyreles
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed mb-6">
                Integramos el mapa del consultorio para que la web conserve su estilo original, pero sea mas util y real al momento de reservar o planificar la visita.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-foreground font-semibold hover:text-primary-foreground transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
