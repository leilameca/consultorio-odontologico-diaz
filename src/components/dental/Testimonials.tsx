import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María Fernanda R.",
    role: "Paciente de diseño de sonrisa",
    text: "Desde la primera consulta sentí confianza. El Dr. Díaz Meyreles me explicó todo con claridad y los resultados superaron mis expectativas. Mi sonrisa se ve completamente natural.",
  },
  {
    name: "Carlos A. Mejía",
    role: "Paciente de coronas de zirconia",
    text: "Necesitaba varias coronas y tenía muchas dudas. El trato fue excelente, el trabajo impecable y el resultado estético increíble. Recomiendo este consultorio sin dudar.",
  },
  {
    name: "Laura Martínez P.",
    role: "Paciente de blanqueamiento",
    text: "El ambiente del consultorio es muy limpio y profesional. Me hicieron un blanqueamiento dental y quedé encantada. El equipo es atento y muy cuidadoso con cada detalle.",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonios" className="section-padding bg-clinic-gray">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            Testimonios
          </span>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
            Lo que dicen nuestros{" "}
            <span className="text-gradient">pacientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-card rounded-2xl p-8 border border-border hover-lift ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 150 + 200}ms` }}
            >
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
