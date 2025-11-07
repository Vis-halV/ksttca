// Membership.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

function Membership() {
  const plans = [
    {
      name: "Rookie",
      stars: 3,
      features: [
        "5 sessions/week (1.5 hrs)",
        "Small-group coaching format",
        "Weekly match-style drills",
        "Quarterly in-house events",
        "Focus on fundamentals & movement",
        "Intro-level fitness integration",
        "Access to training video library",
      ],
      price: "₹799 / monthly",
      accent: "#CBD5E1",
    },
    {
      name: "Intermediate",
      stars: 4,
      features: [
        "6 sessions/week (2 hrs)",
        "Individual skill plans",
        "Competitive match simulations",
        "Monthly performance events",
        "Advanced technique & tactics",
        "Nutrition & recovery guidance",
        "Full video analysis access",
      ],
      price: "₹999 / monthly",
      accent: "#E63946",
    },
    {
      name: "Pro+",
      stars: 5,
      features: [
        "Custom schedule & session length",
        "High-performance coaching plans",
        "Strength, agility & injury prevention",
        "Dedicated one-on-one coaching",
        "Strategy planning & opponent analysis",
        "Sponsored tournament entries",
        "Mentorship & progress tracking",
        "Priority facility access",
      ],
      price: "₹1499 / monthly",
      accent: "#EF5A68",
    },
  ];

  return (
    <section
      id="membership"
      className="py-20 px-[5%] bg-[#0A1A2F] text-[#E2E8F0]"
    >
      <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-bold text-center mb-10 text-[#E63946] uppercase tracking-wide">
        Membership Plans
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="group flex flex-col bg-[#F1F5F9] text-[#1E293B] rounded-xl shadow-lg p-6 border border-transparent hover:border-[#3B82F6]/40 hover:shadow-xl hover:shadow-[#3B82F6]/20 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Plan Header */}
            <h3
              className={`text-xl font-bold mb-2 text-center`}
              style={{ color: plan.accent }}
            >
              {plan.name}
            </h3>

            {/* Stars */}
            <div className="flex items-center justify-center mb-6 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={i < plan.stars ? solidStar : regularStar}
                  className="mx-[2px]"
                />
              ))}
            </div>

            {/* Features */}
            <ul className="mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="text-sm flex items-start my-2 transition-all duration-200 group-hover:translate-x-1"
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="text-green-600 mr-2 mt-[2px]"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <div className="flex justify-center mt-auto">
              <button
                className="px-6 py-2 rounded-lg font-medium text-white shadow-md hover:shadow-lg active:scale-95 transition-all duration-300"
                style={{
                  backgroundColor:
                    index === 1
                      ? "#E63946"
                      : index === 2
                      ? "#EF5A68"
                      : "#334155",
                }}
              >
                {plan.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Membership;
