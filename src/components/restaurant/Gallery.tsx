import ragiSangati from "@/assets/ragi_sangati.jpg";
import meals from "@/assets/meals.jpg";
import curries from "@/assets/curries.jpg";
import kichidi from "@/assets/kichidi.jpg";
import catering from "@/assets/catering.jpg";
import chickenCurry from "@/assets/chicken_curry.jpg";
import chickenPakodi from "@/assets/chicken_pakodi.jpg";

const images = [
  { src: ragiSangati, alt: "రాగి సంగతి" },
  { src: meals, alt: "భోజనం" },
  { src: curries, alt: "కూరలు" },
  { src: kichidi, alt: "కిచిడి" },
  { src: catering, alt: "క్యాటరింగ్" },
  { src: chickenCurry, alt: "చికెన్ కూర" },
  { src: chickenPakodi, alt: "చికెన్ పకోడీ" },
];

const Gallery = () => (
  <section className="py-20 bg-dark-surface-alt">
    <div className="container mx-auto px-4">
      <div className="text-center mb-10">
        <div className="divider-gold w-16 mx-auto mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold gradient-gold-text inline-block">🖼️ గ్యాలరీ</h2>
      </div>
      <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
        {images.map((img) => (
          <div
            key={img.alt}
            className="flex-shrink-0 w-72 h-52 rounded-xl overflow-hidden shadow-gold border border-gold/20 snap-center hover:border-gold/50 transition-colors"
          >
            <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
