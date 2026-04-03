import { Phone, MessageCircle } from "lucide-react";
import mealsImg from "@/assets/meals.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center">
    <img
      src={mealsImg}
      alt="సంజీవ్ రెడ్డి హోటల్ భోజనం"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 gradient-hero" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <div className="divider-gold w-24 mx-auto mb-6" />
      <h1 className="text-4xl md:text-6xl font-extrabold text-cream mb-4 drop-shadow-lg">
        సంజీవ్ రెడ్డి హోటల్
      </h1>
      <p className="gradient-gold-text text-xl md:text-2xl font-bold mb-2">
        లింగసముద్రంలో 10+ సంవత్సరాలుగా రుచి & నమ్మకం
      </p>
      <p className="text-gold-light/80 text-base md:text-lg mb-10">
        సంప్రదాయ ఆంధ్ర వంటల అసలైన రుచి
      </p>
      <div className="divider-gold w-16 mx-auto mb-10" />
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:08179051718"
          className="inline-flex items-center justify-center gap-2 gradient-gold text-charcoal font-bold px-10 py-4 rounded-lg hover:brightness-110 transition shadow-gold-lg text-lg"
        >
          <Phone size={20} /> కాల్ చేయండి
        </a>
        <a
          href="https://wa.me/918179051718"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold font-bold px-10 py-4 rounded-lg hover:bg-gold hover:text-charcoal transition text-lg"
        >
          <MessageCircle size={20} /> వాట్సాప్ ఆర్డర్
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
