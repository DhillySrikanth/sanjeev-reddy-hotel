import { Clock, ShieldCheck, Utensils, Sparkles } from "lucide-react";

const badges = [
  { icon: Clock, text: "10+ సంవత్సరాల అనుభవం" },
  { icon: ShieldCheck, text: "నాణ్యమైన ఆహారం" },
  { icon: Utensils, text: "సంప్రదాయ ఆంధ్ర రుచి" },
  { icon: Sparkles, text: "శుభ్రత & విశ్వాసం" },
];

const TrustBadges = () => (
  <section className="bg-dark-surface py-10 border-y border-gold-subtle">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {badges.map((b) => (
          <div key={b.text} className="flex flex-col items-center text-center gap-3 p-4">
            <div className="w-14 h-14 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center">
              <b.icon className="text-gold" size={24} />
            </div>
            <span className="text-gold-light font-semibold text-sm">{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
