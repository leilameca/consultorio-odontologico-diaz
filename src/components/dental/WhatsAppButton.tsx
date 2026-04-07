import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18092612054?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-float"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
