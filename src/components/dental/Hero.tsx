import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-dental.jpg";

const WHATSAPP_URL = "https://wa.me/18092612054?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Consultorio odontológico moderno"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-2xl">
          <div className="animate-reveal-up">
            <span className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground backdrop-blur-sm border border-accent/30 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-foreground animate-pulse-soft" />
              Puerto Plata, República Dominicana
            </span>
          </div>

          <h1 className="animate-reveal-up delay-100 font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] tracking-tight mb-6">
            Sonrisas que inspiran{" "}
            <span className="italic text-clinic-accent-light">confianza.</span>
          </h1>

          <p className="animate-reveal-up delay-200 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-xl mb-10 font-light">
            Estética dental, precisión digital y atención profesional de alto nivel.
            Porque tu sonrisa merece el mejor cuidado.
          </p>

          <div className="animate-reveal-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground font-semibold text-base px-8 py-4 rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar cita por WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground border border-primary-foreground/20 font-medium text-base px-8 py-4 rounded-full hover:bg-primary-foreground/20 transition-all duration-300"
            >
              Ver servicios
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-reveal-up delay-500 mt-16 flex flex-wrap gap-8 text-primary-foreground/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80">✓</div>
              Atención profesional
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80">✓</div>
              Precisión digital
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/80">✓</div>
              Resultados confiables
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
}
