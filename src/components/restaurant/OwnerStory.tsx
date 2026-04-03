import ownerImg from "@/assets/owner.png";

const OwnerStory = () => (
  <section className="py-20 bg-dark-surface">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-gold/40 shadow-gold-lg">
              <img
                src={ownerImg}
                alt="సంజీవ్ రెడ్డి గారు - వ్యవస్థాపకుడు"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 gradient-gold text-charcoal font-bold text-xs px-4 py-1.5 rounded-full shadow-gold whitespace-nowrap">
              🔥 10+ సంవత్సరాల అనుభవం
            </div>
          </div>
        </div>

        <div>
          <div className="divider-gold w-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold gradient-gold-text inline-block mb-4">👨‍🍳 మా వ్యవస్థాపకుడు</h2>
          <p className="text-gold-light/70 mb-4 leading-relaxed">
            మా సంజీవ్ రెడ్డి గారు 10+ సంవత్సరాల అనుభవంతో
            లింగసముద్రంలో కస్టమర్లకు అసలైన ఆంధ్ర రుచిని అందించాలనే లక్ష్యంతో ఈ హోటల్‌ను ప్రారంభించారు.
          </p>
          <p className="text-gold-light/70 mb-6 leading-relaxed">
            ప్రారంభం నుండి ఇప్పటి వరకు అదే రుచి, అదే నాణ్యతను
            ఏ విషయంలోనూ రాజీ పడకుండా కొనసాగిస్తున్నారు.
          </p>
          <p className="text-gold/60 italic text-sm mb-6">
            "A passionate expert serving authentic taste with consistency and trust."
          </p>
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 inline-block">
            <p className="text-gold font-bold">🔥 లింగసముద్రంలో ప్రసిద్ధి చెందిన రుచి</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OwnerStory;
