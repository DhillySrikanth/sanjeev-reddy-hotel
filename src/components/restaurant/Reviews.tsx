import { Star } from "lucide-react";

const reviews = [
  { text: "లింగసముద్రంలో మంచి రుచి ఉన్న భోజనం", name: "Manohar" },
  { text: "మంచి భోజనం అందించే ఒకే హోటల్", name: "Arshad" },
  { text: "చాలా మంచి రుచి, మంచి సర్వీస్", name: "Rahul" },
  { text: "Excellent food quality", name: "Raja Sekhar" },
  { text: "Food: 5 | Service: 5", name: "Narala Balu" },
];

const Reviews = () => (
  <section className="py-20 bg-dark-surface">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="divider-gold w-16 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold gradient-gold-text inline-block mb-3">⭐ కస్టమర్ రివ్యూలు</h2>
        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} className="fill-[hsl(43,75%,49%)] text-gold" />
          ))}
        </div>
        <p className="text-gold font-bold text-2xl">4.8 Rating</p>
        <p className="text-muted-foreground text-sm">Trusted by local customers</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card rounded-xl p-6 border border-gold/20 hover:border-gold/40 transition-colors">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[hsl(43,75%,49%)] text-gold" />
              ))}
            </div>
            <p className="text-gold-light/80 mb-4 italic leading-relaxed">"{r.text}"</p>
            <p className="text-gold font-semibold text-sm">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
