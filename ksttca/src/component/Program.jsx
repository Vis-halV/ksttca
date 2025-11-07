// Program.jsx
import Tp1 from "../assets/tp/01.svg";
import Tp2 from "../assets/tp/02.svg";
import Tp3 from "../assets/tp/03.svg";

function Program() {
  return (
    <section id="program" className="py-20 text-[#E2E8F0]">
      <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-bold text-center mb-16 text-[#E63946] uppercase tracking-wide">
        Training Program
      </h2>

      {/* Step 1 */}
      <div className="grid grid-cols-1 md:grid-cols-12 mx-[5%] mb-16 items-center rounded-xl overflow-hidden">
        <div className="md:col-span-6 flex flex-col justify-center h-[30rem] px-[2.5rem] bg-[#F4F5F7] text-[#111827] hover:shadow-md transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-full border-[3px] border-[#E63946] bg-transparent">
              <h2 className="text-lg font-semibold text-[#E63946]">1</h2>
            </div>
          </div>
          <h2 className="text-[clamp(1.3rem,2vw,1.8rem)] font-semibold mb-3 tracking-tight text-[#111827]">
            Join the Training Program
          </h2>
          <p className="text-[clamp(0.9rem,1vw,1rem)] leading-relaxed text-[#1E293B]/85">
            Kickstart your journey with our carefully curated training sessions.
            Each session is designed to enhance technique, build endurance, and
            improve match strategy.
          </p>
        </div>

        <div
          className="md:col-span-6 h-[30rem] bg-center bg-no-repeat bg-contain transition-transform duration-500 hover:scale-[1.03]"
          style={{
            backgroundImage: `url(${Tp1})`,
            filter: "brightness(0.95)",
          }}
        ></div>
      </div>

      {/* Step 2 */}
      <div className="grid grid-cols-1 md:grid-cols-12 mx-[5%] mb-16 items-center rounded-xl overflow-hidden">
        <div className="md:col-span-6 md:order-2 flex flex-col justify-center h-[30rem] px-[2.5rem] bg-[#2A3344] text-[#F1F5F9] hover:shadow-md transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-full border-[3px] border-[#E63946] bg-transparent">
              <h2 className="text-lg font-semibold text-[#E63946]">2</h2>
            </div>
          </div>
          <h2 className="text-[clamp(1.3rem,2vw,1.8rem)] font-semibold mb-3 tracking-tight text-[#F8FAFC]">
            Train with the Best
          </h2>
          <p className="text-[clamp(0.9rem,1vw,1rem)] leading-relaxed text-[#CBD5E1]/85">
            Our skilled coaches provide hands-on guidance, ensuring you refine
            your footwork, strokes, and game awareness with personalized coaching
            and structured drills.
          </p>
        </div>

        <div
          className="md:col-span-6 md:order-1 h-[30rem] bg-center bg-no-repeat bg-contain transition-transform duration-500 hover:scale-[1.03]"
          style={{
            backgroundImage: `url(${Tp2})`,
            filter: "brightness(0.9)",
          }}
        ></div>
      </div>

      {/* Step 3 */}
      <div className="grid grid-cols-1 md:grid-cols-12 mx-[5%] mb-16 items-center rounded-xl overflow-hidden">
        <div className="md:col-span-6 flex flex-col justify-center h-[30rem] px-[2.5rem] bg-[#F4F5F7] text-[#111827] hover:shadow-md transition-all duration-300">
          <div className="flex items-center mb-6">
            <div className="flex items-center justify-center h-[3rem] w-[3rem] rounded-full border-[3px] border-[#E63946] bg-transparent">
              <h2 className="text-lg font-semibold text-[#E63946]">3</h2>
            </div>
          </div>
          <h2 className="text-[clamp(1.3rem,2vw,1.8rem)] font-semibold mb-3 tracking-tight text-[#111827]">
            Compete and Improve
          </h2>
          <p className="text-[clamp(0.9rem,1vw,1rem)] leading-relaxed text-[#1E293B]/85">
            Put your skills to the test with regular practice matches and
            exclusive in-house tournaments. Track your progress and fine-tune
            your technique through video analysis.
          </p>
        </div>

        <div
          className="md:col-span-6 h-[30rem] bg-center bg-no-repeat bg-contain transition-transform duration-500 hover:scale-[1.03]"
          style={{
            backgroundImage: `url(${Tp3})`,
            filter: "brightness(0.95)",
          }}
        ></div>
      </div>
    </section>
  );
}

export default Program;
