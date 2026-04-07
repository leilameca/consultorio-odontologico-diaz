import { useScrollReveal } from "@/hooks/useScrollReveal";
import { UserCheck, Eye, Cpu, BadgeCheck, HandHeart, ShieldPlus } from "lucide-react";

const benefits = [
  { icon: UserCheck, title: "Atención personalizada", desc: "Cada paciente es único. Adaptamos cada tratamiento a sus necesidades, expectativas y condición oral." },
  { icon: Eye, title: "Enfoque estético y funcional", desc: "No solo restauramos dientes: creamos sonrisas que se ven y se sienten naturales." },
  { icon: Cpu, title: "Tecnología y precisión digital", desc: "Equipos modernos y flujos digitales que aseguran diagnósticos exactos y resultados predecibles." },
  { icon: BadgeCheck, title: "Resultados confiables", desc: "Materiales de primera calidad y protocolos clínicos rigurosos para tratamientos duraderos." },
  { icon: HandHeart, title: "Trato cercano al paciente", desc: "Un ambiente cálido, empático y profesional donde cada visita es una experiencia positiva." },
  { icon: ShieldPlus, title: "Ambiente seguro y limpio", desc: "Protocolos estrictos de bioseguridad e higiene que garantizan tu tranquilidad." },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            ¿Por qué elegirnos?
          </span>
          <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
            Un consultorio diseñado para{" "}
            <span className="text-gradient">tu bienestar</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group relative p-8 rounded-2xl border border-border hover:border-accent/30 bg-card hover-lift ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100 + 200}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary group-hover:bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300">
                <b.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
