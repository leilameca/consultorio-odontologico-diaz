import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo puedo agendar una cita?",
    a: "Puedes agendar tu cita de forma rápida y directa a través de nuestro WhatsApp al 809-261-2054. Solo envía un mensaje y te confirmaremos la fecha y hora disponible.",
  },
  {
    q: "¿Trabajan tratamientos estéticos?",
    a: "Sí. Ofrecemos una amplia gama de tratamientos estéticos que incluyen blanqueamiento dental, carillas, coronas de zirconia y diseño de sonrisa digital personalizado.",
  },
  {
    q: "¿Qué debo llevar a mi primera consulta?",
    a: "Solo necesitas traer una identificación válida. Si tienes radiografías o historial dental previo, también puedes traerlos para que el doctor tenga más contexto sobre tu caso.",
  },
  {
    q: "¿Atienden emergencias dentales?",
    a: "Atendemos urgencias dentro de nuestro horario. Si tienes un dolor agudo o una situación urgente, comunícate por WhatsApp y te daremos orientación inmediata.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Estamos ubicados en Puerto Plata, República Dominicana. Puedes contactarnos por WhatsApp para recibir la dirección exacta y las indicaciones para llegar.",
  },
  {
    q: "¿Cuáles son las formas de pago?",
    a: "Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias. Consulta con nosotros para opciones de financiamiento en tratamientos extensos.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="section-padding bg-background">
      <div ref={ref} className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className={`inline-block text-sm font-semibold text-accent uppercase tracking-widest mb-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
            Preguntas frecuentes
          </span>
          <h2 className={`font-heading text-3xl sm:text-4xl font-bold text-foreground leading-tight ${isVisible ? "animate-reveal-up delay-100" : "opacity-0"}`}>
            Resolvemos tus dudas
          </h2>
        </div>

        <div className={`${isVisible ? "animate-reveal-up delay-200" : "opacity-0"}`}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-accent transition-colors py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
