import heroBg from "../assets/Gemini_Generated_Image_urllniurllniurll.png";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Beyblade battle arena"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-glow mb-4">
          Beyblade Recommendations
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
          The Beyblades and launchers I use in my YouTube battles and reviews.
        </p>
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/25"
        >
          See All Beyblades
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
