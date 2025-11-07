import AboutImg from "../assets/profic.jpg";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mx-[5%] py-16 text-[#F8FAFC]"
    >
      {/* Image Section */}
      <div className="md:col-span-5 flex items-center justify-center">
        <img
          src={AboutImg}
          alt="KSTTA Coach"
          className="w-[70%] h-[70%] object-cover rounded-xl shadow-lg border border-[#1E3A5F]"
        />
      </div>

      {/* Content Section */}
      <div className="md:col-span-7">
        <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-bold mb-6 text-[#E63946] uppercase tracking-wide">
          About Us
        </h2>

        <p className="text-[clamp(0.9rem,1.1vw,1rem)] leading-relaxed text-[#CBD5E1]">
          At our academy, <span className="text-[#E63946] font-semibold">"Practice. Precision. Perfection."</span> is
          more than just a motto it's the foundation of everything we teach. My
          journey in table tennis began without a mentor, relying only on
          self-learning and determination. That experience drives me today to
          provide the structured guidance I once lacked. As a certified coach
          trained by SAI NIS, I am among the few in Tamil Nadu holding this
          elite certification, setting our academy apart. Our program develops
          both mind and body, ensuring every athlete plays with focus and
          confidence.
        </p>

        <p className="mt-6 text-[clamp(0.9rem,1.1vw,1rem)] leading-relaxed text-[#CBD5E1]">
          We emphasize respect, discipline, and intensity. Every student is
          treated like family yet challenged with rigorous workouts, tactical
          drills, and mental strategy sessions. Our continuous training includes
          mandatory league matches and monthly events sponsored by the academy.
          Specialized programs cater to school and university athletes, as well
          as those preparing for elite competitions  including custom coaching
          for differently-abled players.
        </p>

        <p className="mt-6 text-[clamp(0.9rem,1.1vw,1rem)] leading-relaxed text-[#CBD5E1]">
          With a proven track record of success  including a Commonwealth
          medalist  we are committed to shaping champions. Our mission is to
          redefine table tennis coaching in India, offering world-class training
          that builds not just athletes, but disciplined, confident individuals.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
