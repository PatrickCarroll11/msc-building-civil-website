import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-shed.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative container py-32 md:py-40">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-6 opacity-90">
            Building & Civil Engineering · Longford
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-7">
            Expert Building & Civil<br />
            Services in <span className="text-accent">Longford</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-12 leading-relaxed max-w-xl">
            Delivering top-quality construction and civil engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:opacity-90 font-bold shadow-lg px-8 py-4 h-auto text-base rounded-lg transition-all duration-300"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-white/15 border border-white/40 text-white hover:bg-white/25 font-semibold px-8 py-4 h-auto text-base rounded-lg transition-all duration-300"
            >
              <a href="tel:0868447778" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call 086 844 7778
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;