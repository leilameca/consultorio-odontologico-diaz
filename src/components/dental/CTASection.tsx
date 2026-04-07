import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18092612054?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contacto" className="section-padding bg-primary relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          Tu sonrisa merece atención{" "}
          <span className="italic">de primer nivel</span>
        </h2>
        <p className={`text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
          Agenda tu evaluación con el Dr. Díaz Meyreles y descubre cómo podemos transformar tu salud y estética dental con un plan personalizado.
        </p>
        <div className={`${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-accent text-accent-foreground font-bold text-lg px-10 py-5 rounded-full hover:shadow-2xl hover:scale-[1.03] transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar cita por WhatsApp
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <p className={`mt-6 text-sm text-primary-foreground/50 ${isVisible ? "animate-reveal-up delay-300" : "opacity-0"}`}>
          Respuesta rápida · Sin compromiso · 809-261-2054
        </p>
      </div>
    </section>
  );
}
