import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Stethoscope, Sparkles, Crown, Diamond, Smile,
  ShieldCheck, Paintbrush, HeartPulse, ScanSearch, Droplets
} from "lucide-react";

const services = [
  {
    icon: ScanSearch,
    title: "Evaluación odontológica",
    desc: "Diagnóstico completo con tecnología digital para un plan de tratamiento preciso y personalizado.",
  },
  {
    icon: Droplets,
    title: "Limpieza dental",
    desc: "Eliminación profesional de placa y sarro para mantener encías sanas y una sonrisa fresca.",
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento",
    desc: "Aclaramiento seguro y controlado que devuelve luminosidad natural a tus dientes.",
  },
  {
    icon: Crown,
    title: "Coronas dentales",
    desc: "Restauraciones resistentes y estéticas que recuperan la función y apariencia natural del diente.",
  },
  {
    icon: Diamond,
    title: "Zirconia",
    desc: "Material de última generación para coronas y prótesis con máxima estética y durabilidad.",
  },
  {
    icon: Stethoscope,
    title: "Restauraciones",
    desc: "Reconstrucción de piezas dañadas con materiales de alta calidad y acabado impecable.",
  },
  {
    icon: Paintbrush,
    title: "Odontología estética",
    desc: "Tratamientos diseñados para armonizar tu sonrisa con resultados naturales y elegantes.",
  },
  {
    icon: HeartPulse,
    title: "Rehabilitación oral",
    desc: "Recuperación funcional y estética completa para pacientes con necesidades complejas.",
  },
  {
    icon: Smile,
    title: "Diseño de sonrisa",
    desc: "Planificación digital personalizada para lograr la sonrisa que siempre has deseado.",
  },
  {
    icon: ShieldCheck,
    title: "Prevención dental",
    desc: "Programas de cuidado preventivo que protegen tu salud oral a largo plazo.",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicios" className="section-padding bg-clinic-gray">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            Nuestros servicios
          </span>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5 ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
            Soluciones dentales de{" "}
            <span className="text-gradient">alto nivel</span>
          </h2>
          <p className={`text-muted-foreground text-lg ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
            Ofrecemos una gama completa de tratamientos con enfoque estético y funcional,
            respaldados por tecnología moderna y atención profesional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-card rounded-2xl p-6 hover-lift cursor-default border border-transparent hover:border-accent/20 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${(i % 5) * 80 + 200}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300">
                <s.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2 text-[15px]">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
