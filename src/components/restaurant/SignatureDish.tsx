import pushkaImg from "@/assets/kichidi.jpg";

const SignatureDish = () => (
  <section id="signature" className="py-16 signature-section">
    <div className="container mx-auto px-4">
      <div className="gold-divider mb-6 max-w-5xl mx-auto" />

      <div className="max-w-5xl mx-auto signature-panel p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden gold-glow gold-animated">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="gold-pill px-3 py-1 text-sm">🔥 BEST SELLER</span>
            <span className="text-sm text-gray-300">Signature Dish Loved by Every Customer</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-extrabold mb-2 signature-title">
            మా ప్రసిద్ధ వంటకం
          </h3>

          <p className="text-2xl md:text-3xl font-black mb-3 signature-main">
            సంజీవ్ రెడ్డి హోటల్ ప్రత్యేకం
            <br />
            <span>🔥 పుష్కా + గోంగుర + చికెన్ షర్వా 🔥</span>
          </p>

          <p className="text-gray-300 mb-4 leading-relaxed signature-subtext">
            ప్రతి కస్టమర్‌కి ఎంతో ఇష్టమైన వంటకం
            <br />
            ఒక్కసారి తింటే… మళ్లీ మళ్లీ రావాలనిపించే రుచి
          </p>

          <p className="font-semibold text-lg signature-title">
            ఈ ఒక్క వంటకం కోసం మాత్రమే మా హోటల్‌కి వచ్చే కస్టమర్లు ఉన్నారు
          </p>
        </div>

        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="relative overflow-hidden">
            <img src={pushkaImg} alt="పుష్కా కంపో" className="w-full h-56 object-cover signature-img" loading="lazy" />

            <div className="absolute inset-0 signature-img-overlay" />

            <div className="absolute left-3 top-3 flex flex-col gap-2">
              <span className="gold-pill text-xs px-2 py-1">🔥 Most Loved Item</span>
              <span className="gold-pill text-xs px-2 py-1">🔥 Customer Favorite</span>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-divider mt-6 max-w-5xl mx-auto" />
    </div>
  </section>
);

export default SignatureDish;
