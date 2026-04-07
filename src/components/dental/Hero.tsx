import { useRef } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, MoveRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import clinicImage from "@/assets/hero-dental.jpg";
import smileDetail from "@/assets/Diseño-de-sonrisa-digital--300x141.jpg";

const WHATSAPP_URL =
  "https://wa.me/18092612054?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita";

const trustPoints = [
  "Atencion personalizada",
  "Precision digital",
  "Estetica dental",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], [0, 34]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.01, 1.04]);
  const contentY = useTransform(scrollYProgress, [0, 0.85], [0, -42]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.18]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#F9FBFD_0%,#F1F6FA_100%)]"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute left-[-8%] top-0 h-[24rem] w-[24rem] rounded-full bg-[#DCEEFF]/85 blur-3xl"
          style={prefersReducedMotion ? undefined : { y: glowY }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute right-[4%] top-[18%] h-[26rem] w-[26rem] rounded-full bg-[#DCEEFF]/55 blur-3xl"
          style={prefersReducedMotion ? undefined : { y: mediaY }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 items-center">
          <motion.div
            style={
              prefersReducedMotion
                ? undefined
                : { y: contentY, opacity: contentOpacity }
            }
            className="relative order-2 lg:order-1"
          >
            <div className="relative mx-auto max-w-[36rem] lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_30px_80px_-42px_rgba(18,59,109,0.22)]"
              >
                <motion.img
                  src={clinicImage}
                  alt="Consultorio odontologico moderno"
                  className="h-[20rem] w-full rounded-[1.45rem] object-cover sm:h-[24rem] lg:h-[29rem]"
                  style={
                    prefersReducedMotion
                      ? undefined
                      : { y: mediaY, scale: mediaScale }
                  }
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -right-1 top-5 w-[13rem] rounded-[1.45rem] bg-white/92 p-4 shadow-[0_18px_48px_-30px_rgba(18,59,109,0.25)] backdrop-blur-md sm:right-[-1.25rem] sm:w-[14rem]"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  Direccion clinica
                </p>
                <p className="mt-2 text-sm leading-6 text-[#425468]">
                  Salud oral, estetica y una experiencia profesional bien cuidada.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-7 left-3 w-[12.5rem] rounded-[1.4rem] bg-white p-3 shadow-[0_20px_52px_-30px_rgba(18,59,109,0.25)] sm:left-[-1rem] sm:w-[14.5rem]"
              >
                <div className="overflow-hidden rounded-[1rem]">
                  <img
                    src={smileDetail}
                    alt="Detalle estetico de sonrisa"
                    className="h-24 w-full object-cover sm:h-28"
                  />
                </div>
                <div className="pt-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                    Estetica dental
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#425468]">
                    Resultados mas armonicos, naturales y bien planteados.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={
              prefersReducedMotion
                ? undefined
                : { y: contentY, opacity: contentOpacity }
            }
            className="order-1 lg:order-2"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white/82 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary shadow-[0_12px_30px_-24px_rgba(18,59,109,0.42)] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Atencion personalizada por el Dr. Diaz Meyreles
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 max-w-[38rem]">
              <h1 className="font-heading text-[3rem] font-bold leading-[0.94] tracking-[-0.05em] text-primary sm:text-[4.1rem] lg:text-[5.4rem]">
                Una clinica dental
                <br />
                pensada para
                <br />
                <motion.span
                  initial={
                    prefersReducedMotion ? false : { opacity: 0, filter: "blur(10px)" }
                  }
                  animate={
                    prefersReducedMotion ? undefined : { opacity: 1, filter: "blur(0px)" }
                  }
                  transition={{
                    duration: 0.95,
                    delay: 0.46,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-accent"
                >
                  inspirar confianza real.
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              Cuidamos la salud oral, la estetica dental y la experiencia del
              paciente con una propuesta sobria, actual y profesional desde el
              primer contacto.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.03,
                        boxShadow: "0 24px 52px -24px rgba(18,59,109,0.38)",
                      }
                }
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" />
                Agendar valoracion
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="#servicios"
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 1.02,
                        backgroundColor: "rgba(18,59,109,0.06)",
                      }
                }
                whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/10 bg-white/82 px-7 py-4 text-sm font-semibold text-primary transition-all duration-300"
              >
                Ver tratamientos
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 rounded-[1.65rem] border border-primary/8 bg-white/78 p-5 shadow-[0_18px_48px_-34px_rgba(18,59,109,0.24)] backdrop-blur-sm"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-xl">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
                    Enfoque del consultorio
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#425468]">
                    Una propuesta que combina precision clinica, estetica dental
                    y una relacion mas humana con el paciente.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Puerto Plata, RD
                  <MoveRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="inline-flex items-center gap-2 rounded-full bg-[#F5F7FA] px-4 py-2 text-sm text-[#36506F]"
                  >
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
