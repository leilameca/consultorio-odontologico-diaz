import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Zap, Smile, MessageCircle } from "lucide-react";

const stats = [
  { icon: Award, label: "Atención profesional", value: "Certificada" },
  { icon: Smile, label: "Tratamientos estéticos", value: "Premium" },
  { icon: Zap, label: "Precisión digital", value: "Avanzada" },
  { icon: MessageCircle, label: "Citas por WhatsApp", value: "Rápidas" },
];

export default function Trust() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 sm:py-20 bg-primary overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`text-center ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="w-7 h-7 text-primary-foreground/90" />
              </div>
              <p className="font-heading text-2xl sm:text-3xl font-bold text-primary-foreground mb-1">{s.value}</p>
              <p className="text-sm text-primary-foreground/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
