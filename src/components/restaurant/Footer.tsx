import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-charcoal py-12 border-t border-gold/30">
    <div className="container mx-auto px-4 text-center">
      <div className="flex flex-col items-center gap-2 mb-6">
        <img src={logo} alt="సంజీవ్ రెడ్డి హోటల్" className="h-20 mx-auto" />
        <h3 className="text-2xl font-bold gradient-gold-text">సంజీవ్ రెడ్డి హోటల్</h3>
        <p className="text-gold-light/50 text-xs uppercase tracking-[0.25em]">Sanjeev Reddy Hotel</p>
      </div>
      <p className="text-gold-light/50 text-sm mb-2">లింగసముద్రం, ఆంధ్రప్రదేశ్ – 523114</p>
      <p className="text-gold-light/40 text-sm mb-4">📞 08179051718</p>
      <div className="divider-gold w-24 mx-auto mb-4" />
      <p className="text-gold-light/30 text-xs">© {new Date().getFullYear()} సంజీవ్ రెడ్డి హోటల్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.</p>
    </div>
  </footer>
);

export default Footer;
