import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Stethoscope,
  Sparkles,
  Crown,
  Diamond,
  Smile,
  ShieldCheck,
  Paintbrush,
  HeartPulse,
  ScanSearch,
  Droplets,
  ArrowRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import heroImage from "@/assets/hero-dental.jpg";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import diagnosticoImage from "@/assets/diagnostico-odontologico-clave-tratamiento-ideal.png";
import limpiezaImage from "@/assets/limpieza-dental-takahashi-health-group.png";
import blanqueamientoImage from "@/assets/que-es-blanqueamiento-dental-1200x630.original.jpg";
import coronasImage from "@/assets/Creando-Sonrisas-con-coronas-dentales-en-Clinica-Dental-Perez-Draiby-Santo-Domingo-Republica-Dominicana-02.webp";
import zirconiaImage from "@/assets/Full-Contour-Zirconia-Crown-1.jpg";
import restauracionesImage from "@/assets/reconstruccion.webp";
import esteticaImage from "@/assets/estetica5.jpg";
import rehabilitacionImage from "@/assets/rehabilitacion.webp";
import disenoSonrisaImage from "@/assets/Diseño-de-sonrisa-digital--300x141.jpg";
import prevencionImage from "@/assets/prevencion-dental.jpg";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  image: string;
  intro: string;
  procedure: string;
  duration: string;
  idealFor: string;
  points: string[];
};

const services: ServiceItem[] = [
  {
    icon: ScanSearch,
    title: "Evaluacion odontologica",
    desc: "Diagnostico completo con tecnologia digital para un plan preciso y personalizado.",
    image: diagnosticoImage,
    intro: "La evaluacion es el primer paso para entender tu caso con claridad y definir el tratamiento mas adecuado.",
    procedure:
      "Se realiza una revision clinica completa, se estudian prioridades y se explican hallazgos para construir una ruta de tratamiento clara.",
    duration: "Consulta inicial",
    idealFor: "Pacientes que desean una orientacion profesional antes de iniciar cualquier procedimiento.",
    points: [
      "Revision detallada del estado oral",
      "Diagnostico claro y facil de entender",
      "Plan de tratamiento personalizado",
    ],
  },
  {
    icon: Droplets,
    title: "Limpieza dental",
    desc: "Eliminacion profesional de placa y sarro para mantener encias sanas y una sonrisa fresca.",
    image: limpiezaImage,
    intro: "Un procedimiento preventivo importante para conservar salud oral, frescura y una mejor base para otros tratamientos.",
    procedure:
      "Se retiran placa y calculos acumulados, se pulen superficies y se dejan indicaciones para mantener mejores habitos de cuidado oral.",
    duration: "Sesion clinica breve",
    idealFor: "Pacientes que desean mantener encias sanas y prevenir problemas a futuro.",
    points: [
      "Reduce acumulacion de placa y sarro",
      "Mejora la sensacion de limpieza oral",
      "Ayuda a cuidar la salud de las encias",
    ],
  },
  {
    icon: Sparkles,
    title: "Blanqueamiento",
    desc: "Aclaramiento seguro y controlado que devuelve luminosidad natural a tus dientes.",
    image: blanqueamientoImage,
    intro: "Tratamiento estetico pensado para mejorar el tono de la sonrisa sin perder naturalidad.",
    procedure:
      "Se valora primero el estado dental y luego se aplica el protocolo indicado para lograr una sonrisa mas luminosa de forma controlada.",
    duration: "Segun protocolo indicado",
    idealFor: "Pacientes que buscan una sonrisa mas clara y cuidada.",
    points: [
      "Mejora el aspecto general de la sonrisa",
      "Resultado progresivo y supervisado",
      "Aporta luminosidad con criterio clinico",
    ],
  },
  {
    icon: Crown,
    title: "Coronas dentales",
    desc: "Restauraciones resistentes y esteticas que recuperan funcion y apariencia natural.",
    image: coronasImage,
    intro: "Las coronas permiten restaurar piezas debilitadas con una solucion estable y visualmente armoniosa.",
    procedure:
      "Se analiza la pieza dental, se prepara la zona y se coloca una restauracion diseñada para recuperar soporte, funcion y presencia natural.",
    duration: "Varias citas segun el caso",
    idealFor: "Dientes debilitados, fracturados o con gran perdida de estructura.",
    points: [
      "Recupera funcion y soporte",
      "Mejora la apariencia del diente",
      "Aporta resistencia y estabilidad",
    ],
  },
  {
    icon: Diamond,
    title: "Zirconia",
    desc: "Material de ultima generacion para coronas y protesis con alta estetica y durabilidad.",
    image: zirconiaImage,
    intro: "La zirconia es una opcion muy valorada por su resistencia y por su apariencia limpia y natural.",
    procedure:
      "Se utiliza dentro del plan restaurador cuando el caso requiere una solucion duradera con buen comportamiento estetico y funcional.",
    duration: "Segun tipo de restauracion",
    idealFor: "Pacientes que buscan materiales de alta calidad para restauraciones fijas.",
    points: [
      "Material moderno y resistente",
      "Acabado estetico muy cuidado",
      "Integra durabilidad y presencia natural",
    ],
  },
  {
    icon: Stethoscope,
    title: "Restauraciones",
    desc: "Reconstruccion de piezas danadas con materiales de alta calidad y acabado preciso.",
    image: restauracionesImage,
    intro: "Las restauraciones ayudan a devolver forma, funcion y seguridad a dientes afectados.",
    procedure:
      "Se remueve el tejido comprometido, se reconstruye la pieza con el material adecuado y se ajusta para lograr un resultado comodo y estable.",
    duration: "Segun extension del caso",
    idealFor: "Piezas con danos que requieren recuperacion funcional y estetica.",
    points: [
      "Recupera forma y funcionalidad",
      "Mejora la comodidad al masticar",
      "Mantiene una apariencia cuidada",
    ],
  },
  {
    icon: Paintbrush,
    title: "Odontologia estetica",
    desc: "Tratamientos disenados para armonizar tu sonrisa con resultados naturales y elegantes.",
    image: esteticaImage,
    intro: "Enfoque orientado a mejorar la sonrisa con cambios bien pensados y proporcionados al rostro del paciente.",
    procedure:
      "Se estudia la sonrisa, se definen objetivos esteticos y se plantean tratamientos para mejorar forma, tono y armonia general.",
    duration: "Segun plan estetico",
    idealFor: "Pacientes que desean mejorar la apariencia de su sonrisa de forma profesional.",
    points: [
      "Enfoque estetico personalizado",
      "Resultados mas armonicos y naturales",
      "Integra salud y presencia visual",
    ],
  },
  {
    icon: HeartPulse,
    title: "Rehabilitacion oral",
    desc: "Recuperacion funcional y estetica completa para pacientes con necesidades complejas.",
    image: rehabilitacionImage,
    intro: "La rehabilitacion oral aborda casos que necesitan una vision mas amplia del tratamiento.",
    procedure:
      "Se evalua el caso de manera integral y se organiza el tratamiento por fases para recuperar estabilidad, funcion y comodidad.",
    duration: "Plan por etapas",
    idealFor: "Pacientes con desgastes, perdidas dentales o necesidades funcionales complejas.",
    points: [
      "Enfoque completo del caso",
      "Recupera estabilidad y funcion",
      "Permite ordenar tratamientos por fases",
    ],
  },
  {
    icon: Smile,
    title: "Diseno de sonrisa",
    desc: "Planificacion digital personalizada para lograr la sonrisa que siempre has deseado.",
    image: disenoSonrisaImage,
    intro: "Tratamiento orientado a construir una sonrisa mas armonica con planificacion previa y criterio estetico.",
    procedure:
      "Se analizan forma, proporcion y objetivos del paciente para definir un plan que combine estetica, naturalidad y funcion.",
    duration: "Variable segun el plan",
    idealFor: "Pacientes que desean transformar la apariencia de su sonrisa de forma integral.",
    points: [
      "Planificacion personalizada",
      "Mejora la armonia de la sonrisa",
      "Busca resultados elegantes y naturales",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Prevencion dental",
    desc: "Programas de cuidado preventivo que protegen tu salud oral a largo plazo.",
    image: prevencionImage,
    intro: "La prevencion ayuda a reducir complicaciones y a mantener el tratamiento dental en mejor estado con el tiempo.",
    procedure:
      "Incluye controles, orientacion de higiene y seguimiento segun el estado oral y las necesidades de cada paciente.",
    duration: "Controles periodicos",
    idealFor: "Pacientes que desean cuidar su salud oral de forma constante.",
    points: [
      "Favorece la deteccion temprana",
      "Ayuda a mantener resultados a largo plazo",
      "Reduce el riesgo de problemas mayores",
    ],
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <>
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
              Ofrecemos una gama completa de tratamientos con enfoque estetico y funcional,
              respaldados por tecnologia moderna y atencion profesional.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setSelectedService(s)}
                className={`group bg-card rounded-2xl overflow-hidden text-left hover-lift border border-transparent hover:border-accent/20 ${
                  isVisible ? "animate-reveal-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${(i % 5) * 80 + 200}ms` }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                  <div className="absolute left-4 bottom-4 w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center shadow-md">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading font-semibold text-foreground mb-2 text-lg leading-tight">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                    Ver mas detalle
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={Boolean(selectedService)} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService ? (
          <DialogContent className="w-[min(980px,calc(100vw-1rem))] max-w-none max-h-[92vh] overflow-hidden rounded-3xl p-0 border border-border bg-background">
            <div className="overflow-y-auto max-h-[92vh]">
              <div className="relative h-64 sm:h-80">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/20" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center mb-4 shadow-lg">
                    <selectedService.icon className="w-6 h-6 text-primary" />
                  </div>
                  <DialogTitle className="font-heading text-3xl sm:text-4xl font-bold text-white">
                    {selectedService.title}
                  </DialogTitle>
                  <DialogDescription className="mt-3 max-w-2xl text-white/80 text-base leading-relaxed">
                    {selectedService.intro}
                  </DialogDescription>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
                  <div>
                    <div className="mb-8">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                        En que consiste
                      </h3>
                      <p className="text-muted-foreground leading-8">
                        {selectedService.procedure}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                        Lo mas importante
                      </h3>
                      <div className="space-y-3">
                        {selectedService.points.map((point) => (
                          <div key={point} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                            <p className="text-muted-foreground leading-7">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                        Galeria referencial
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="rounded-2xl overflow-hidden border border-border bg-card">
                          <img src={selectedService.image} alt={`${selectedService.title} referencia 1`} className="w-full h-48 object-cover" />
                          <div className="p-4">
                            <p className="text-sm text-muted-foreground">
                              Imagen referencial del tratamiento. Puedes reemplazarla por una foto real.
                            </p>
                          </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden border border-border bg-card">
                          <img src={selectedService.image === heroImage ? doctorPortrait : heroImage} alt={`${selectedService.title} referencia 2`} className="w-full h-48 object-cover" />
                          <div className="p-4">
                            <p className="text-sm text-muted-foreground">
                              Espacio ideal para mostrar procedimiento, resultado o detalle clinico.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <aside className="space-y-5">
                    <div className="bg-secondary rounded-2xl p-5">
                      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                        Resumen
                      </p>
                      <p className="text-foreground font-semibold mb-2">
                        Ideal para
                      </p>
                      <p className="text-sm text-muted-foreground leading-7">
                        {selectedService.idealFor}
                      </p>
                    </div>

                    <div className="bg-card rounded-2xl p-5 border border-border">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock3 className="w-5 h-5 text-primary" />
                        <p className="text-foreground font-semibold">Duracion orientativa</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-7">
                        {selectedService.duration}
                      </p>
                    </div>

                    <div className="bg-card rounded-2xl p-5 border border-border">
                      <p className="font-heading text-2xl font-bold text-foreground mb-3">
                        Nota
                      </p>
                      <p className="text-sm text-muted-foreground leading-7">
                        Esta ficha esta pensada como una mini pagina informativa, breve y elegante. Si quieres, luego la conecto con fotos reales y textos exactos de cada procedimiento.
                      </p>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </>
  );
}
