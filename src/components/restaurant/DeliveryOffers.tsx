import { Truck } from "lucide-react";

const DeliveryOffers = () => (
  <section className="py-16 bg-dark-surface-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <div className="divider-gold w-16 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold gradient-gold-text inline-block mb-2">🚚 మా ప్రత్యేక ఆఫర్లు</h2>
        <div className="mt-4 inline-block gradient-gold text-charcoal font-bold text-sm px-5 py-2 rounded-full shadow-gold">
          🔥 FREE DELIVERY AVAILABLE
        </div>
      </div>

      <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-gold/30 p-6 text-center hover:border-gold/50 transition-colors">
          <div className="w-14 h-14 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mx-auto mb-4">
            <Truck className="text-gold" size={24} />
          </div>
          <p className="text-gold font-bold text-lg mb-2">₹400+ ఆర్డర్</p>
          <p className="text-gold-light/70">5km పరిధిలో ఉచిత హోమ్ డెలివరీ</p>
        </div>

        <div className="bg-card rounded-xl border border-gold/30 p-6 text-center hover:border-gold/50 transition-colors">
          <div className="w-14 h-14 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center mx-auto mb-4">
            <Truck className="text-gold" size={24} />
          </div>
          <p className="text-gold font-bold text-lg mb-2">లింగసముద్రం లో ₹200+</p>
          <p className="text-gold-light/70">ఉచిత డెలివరీ</p>
        </div>
      </div>
    </div>
  </section>
);

export default DeliveryOffers;
