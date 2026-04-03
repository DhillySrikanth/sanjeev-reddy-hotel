import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "హోమ్", href: "#home" },
  { label: "మెనూ", href: "#menu" },
  { label: "మా గురించి", href: "#about" },
  { label: "సంప్రదించండి", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-gold-subtle">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="సంజీవ్ రెడ్డి హోటల్ లోగో" className="h-14 w-auto" />
          <div className="flex flex-col">
            <span className="text-gold font-bold text-sm sm:text-lg leading-tight tracking-wide">సంజీవ్ రెడ్డి హోటల్</span>
            <span className="text-gold-light/60 text-[8px] sm:text-[10px] uppercase tracking-[0.2em]">Sanjeev Reddy Hotel</span>
          </div>
        </a>

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gold-light hover:text-gold transition-colors text-sm font-semibold uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-gold">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-charcoal border-t border-gold-subtle px-4 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-gold-light hover:text-gold transition-colors font-semibold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
