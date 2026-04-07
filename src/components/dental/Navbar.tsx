import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import brandLogo from "@/assets/Logo dental moderno y elegante.png";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP_URL = "https://wa.me/18092612054?text=Hola%2C%20me%20gustaria%20agendar%20una%20cita";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-white/72 backdrop-blur-md border-b border-primary/6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20 gap-3">
        <a href="#inicio" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img
            src={brandLogo}
            alt="Logo del Consultorio Odontologico Dr. Diaz Meyreles"
            className="h-10 w-auto object-contain sm:h-14 shrink-0"
          />
          <span className="min-w-0">
            <span
              className={`block font-heading text-base sm:text-xl font-bold tracking-tight leading-tight truncate transition-colors duration-300 ${
                "text-primary"
              }`}
            >
              Dr. Diaz Meyreles
            </span>
            <span
              className={`block text-[11px] sm:text-xs uppercase tracking-[0.18em] truncate transition-colors duration-300 ${
                "text-muted-foreground"
              }`}
            >
              Clinica dental
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full text-muted-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-clinic-accent transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Agendar cita
          </a>
        </div>

        <button
          className="lg:hidden p-2 transition-colors duration-300 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-card/98 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="flex flex-col gap-1 p-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-muted-foreground hover:text-primary py-3 px-4 rounded-lg hover:bg-muted transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full"
            >
              <Phone className="w-4 h-4" />
              Agendar cita por WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
