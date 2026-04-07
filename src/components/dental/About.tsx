import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Heart, Sparkles } from "lucide-react";
import doctorImg from "@/assets/doctor-portrait.jpg";

const values = [
  { icon: Shield, title: "Profesionalismo", text: "Formación continua y protocolos de atención rigurosos." },
  { icon: Heart, title: "Trato humano", text: "Cada paciente recibe un cuidado cercano y personalizado." },
  { icon: Sparkles, title: "Estética dental", text: "Resultados que combinan función, salud y belleza." },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="nosotros" className="section-padding bg-background">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={doctorImg}
                alt="Dr. Díaz Meyreles"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 glass-card rounded-xl p-4 sm:p-5 shadow-lg max-w-[220px]">
              <p className="font-heading text-2xl font-bold text-primary">+15 años</p>
              <p className="text-sm text-muted-foreground mt-1">de experiencia odontológica</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className={`inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
              Sobre el consultorio
            </span>
            <h2 className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
              Compromiso real con{" "}
              <span className="text-gradient">tu salud dental</span>
            </h2>
            <p className={`text-muted-foreground text-lg leading-relaxed mb-6 ${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
              El Consultorio Odontológico Dr. Díaz Meyreles ofrece una atención integral donde la
              precisión clínica se combina con un enfoque estético de alto nivel. Cada tratamiento
              se planifica de forma personalizada, utilizando tecnología digital moderna para garantizar
              resultados predecibles y duraderos.
            </p>
            <p className={`text-muted-foreground leading-relaxed mb-10 ${isVisible ? "animate-reveal-up delay-300" : "opacity-0"}`}>
              Ubicados en Puerto Plata, República Dominicana, nos especializamos en coronas de zirconia,
              diseño de sonrisa, rehabilitación oral y tratamientos estéticos que devuelven la confianza
              a nuestros pacientes.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className={`${isVisible ? `animate-reveal-up delay-${(i + 4) * 100}` : "opacity-0"}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
