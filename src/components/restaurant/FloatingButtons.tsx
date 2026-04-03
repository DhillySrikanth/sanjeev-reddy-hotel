import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* Call button - bottom left with pulse */}
    <a
      href="tel:08179051718"
      className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full gradient-gold flex items-center justify-center shadow-gold-lg hover:brightness-110 transition animate-pulse-gold"
      aria-label="కాల్ చేయండి"
    >
      <Phone className="text-charcoal" size={24} />
    </a>

    {/* WhatsApp button - bottom right */}
    <a
      href="https://wa.me/918179051718"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:brightness-110 transition"
      aria-label="వాట్సాప్"
    >
      <MessageCircle className="text-primary-foreground" size={24} />
    </a>
  </>
);

export default FloatingButtons;
