import HeroImg from "../assets/ma-long.avif";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A1A2F]/70"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-white leading-tight drop-shadow-lg">
          <span>Practice</span> ·{" "}
          <span>Precision</span> ·{" "}
          <span>Perfection</span>
        </h1>

        <p className="mt-6 text-[#CBD5E1] text-[clamp(1rem,1.3vw,1.2rem)] max-w-[42rem] mx-auto leading-relaxed">
          We don't just build players we build character, confidence, and champions.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#tp"
            className="px-6 py-3 rounded-xl bg-[#E63946] text-white font-medium hover:bg-[#EF5A68] transition-colors duration-300 shadow-md"
          >
            Explore Programs
          </a>
          <a
            href="#membership"
            className="px-6 py-3 rounded-xl border border-[#E63946] text-[#E63946] font-medium hover:bg-[#E63946] hover:text-white transition-colors duration-300"
          >
            Join Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
