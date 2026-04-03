import ragiSangati from "@/assets/ragi_sangati.jpg";
import meals from "@/assets/meals.jpg";
import curries from "@/assets/curries.jpg";
import pushkaImg from "@/assets/kichidi.jpg";
import chickenCurry from "@/assets/chicken_curry.jpg";
import chickenPakodi from "@/assets/chicken_pakodi.jpg";

const menuItems = [
  { name: "రాగి సంగతి", price: "₹60", img: ragiSangati },
  { name: "పుష్కా", price: "₹70", img: pushkaImg },
  { name: "భోజనం", price: "₹80", img: meals },
  { name: "కూరలు", price: "₹15 / ₹20", img: curries },
  { name: "చికెన్ కూర", price: "", img: chickenCurry },
  { name: "చికెన్ పకోడీ", price: "", img: chickenPakodi },
];

const MenuSection = () => (
  <section id="menu" className="py-20 bg-dark-surface-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <div className="divider-gold w-16 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold gradient-gold-text inline-block mb-2">🍽️ మా మెనూ</h2>
        <p className="text-muted-foreground">రుచికరమైన సంప్రదాయ ఆంధ్ర వంటకాలు</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`bg-card rounded-xl border border-gold/20 hover:border-gold/50 shadow-md hover:shadow-gold transition-all duration-300 overflow-hidden group ${
              item.name === "పుష్కా" ? "border-[3px] border-[#D4AF37] z-10 transform pushka-highlight" : ""
            }`}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {item.name === "పుష్కా" && (
                <>
                  <div className="absolute left-3 top-3 flex flex-col gap-2">
                    <span className="gold-pill text-xs font-semibold px-2 py-1">🔥 Most Loved Item</span>
                    <span className="gold-pill text-xs font-semibold px-2 py-1">🔥 Customer Favorite</span>
                  </div>
                  <div className="absolute right-3 top-3">
                    <span className="gold-pill text-xs font-semibold px-2 py-1">🔥 BEST SELLER</span>
                  </div>
                </>
              )}
            </div>
            <div className="p-4 flex items-center justify-between border-t border-gold/10">
              <h3 className="font-bold text-lg text-gold-light">{item.name}</h3>
              {item.price && (
                <span className="gradient-gold text-charcoal font-bold text-sm px-3 py-1 rounded-full">{item.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuSection;
