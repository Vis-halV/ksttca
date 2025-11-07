// Gallery.jsx
import Img1 from "../assets/gallery/1.jpg";
import Img2 from "../assets/gallery/2.jpg";
import Img3 from "../assets/gallery/3.jpg";
import Img4 from "../assets/gallery/4.jpg";
import Img5 from "../assets/gallery/5.jpg";
import Img6 from "../assets/gallery/6.jpg";
import Img7 from "../assets/gallery/7.jpg";
import Img8 from "../assets/gallery/8.jpg";

function Gallery() {
  const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];

  return (
    <section id="gallery" className="relative py-20 text-[#E2E8F0] overflow-hidden">
      <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-bold text-center mb-12 text-[#E63946] uppercase tracking-wide">
        Gallery
      </h2>

      {/* Cinematic fades (only visible on md+) */}
      <div className="hidden md:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0F1C2B] to-transparent z-10 pointer-events-none" />
      <div className="hidden md:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0F1C2B] to-transparent z-10 pointer-events-none" />

      {/* Static padded wrapper (padding lives here, NOT on the moving track) */}
      <div className="relative overflow-hidden px-[5%] group">
        {/* Moving track: duplicate content once, animate -50% */}
        <div className="track flex gap-6 will-change-transform">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[280px] md:min-w-[380px] h-[240px] md:h-[300px] flex-shrink-0 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={src}
                alt={`Gallery ${i % images.length + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-sm mt-12 text-[#CBD5E1]/80 italic">
        Motion. Focus. Passion. Every frame defines the KSTTA spirit.
      </p>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .track {
          animation: marquee 50s linear infinite;
        }
        .group:hover .track {
          animation-play-state: paused;
        }
        /* Hide scrollbar artifacts just in case */
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

export default Gallery;
