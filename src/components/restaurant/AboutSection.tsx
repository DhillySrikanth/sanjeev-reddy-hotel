import cateringImg from "@/assets/catering.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-dark-surface">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="divider-gold w-12 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold gradient-gold-text inline-block mb-4">🏠 మా గురించి</h2>
          <p className="text-gold-light/70 mb-6 leading-relaxed">
            10 సంవత్సరాలుగా మా హోటల్‌లో అదే రుచి మరియు నాణ్యతను అందిస్తున్నాము.
            ఏ విషయంలోనూ రాజీ పడకుండా నమ్మకంతో సేవలు అందిస్తున్నాము.
          </p>
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-5">
            <p className="text-gold font-bold text-lg">🛎️ క్యాటరింగ్ కూడా అందుబాటులో ఉంది</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-gold border border-gold/20">
          <img
            src={cateringImg}
            alt="క్యాటరింగ్ సర్వీసులు"
            className="w-full h-72 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
