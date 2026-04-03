import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 bg-dark-surface-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="divider-gold w-16 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold gradient-gold-text inline-block">📍 సంప్రదించండి</h2>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            { icon: MapPin, title: "చిరునామా", content: "లింగసముద్రం, ఆంధ్రప్రదేశ్ – 523114" },
            { icon: Phone, title: "ఫోన్", content: "08179051718", href: "tel:08179051718" },
            { icon: Clock, title: "సమయం", content: "ఉదయం నుండి రాత్రి 10 వరకు" },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full border border-gold/30 bg-gold/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-gold" size={20} />
              </div>
              <div>
                <h3 className="font-bold text-gold mb-1">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-gold-light hover:text-gold transition-colors">{item.content}</a>
                ) : (
                  <p className="text-muted-foreground">{item.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden shadow-gold border border-gold/20 h-64 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d79.722588!3d15.088006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDA1JzE2LjgiTiA3OcKwNDMnMjEuMyJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "250px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="సంజీవ్ రెడ్డి హోటల్ లొకేషన్"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
