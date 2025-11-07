import { useState } from "react";

function Faq() {
  const faqs = [
    {
      question: "What age groups can join the KSTTA academy?",
      answer:
        "We train students from ages 6 and above. Players are grouped by skill level rather than just age, ensuring everyone receives appropriate coaching intensity and challenge.",
    },
    {
      question: "Do I need prior experience to enroll?",
      answer:
        "Not at all. We welcome beginners, intermediate players, and professionals. Our structured training modules adapt to your current level of play and progress.",
    },
    {
      question: "How many sessions are conducted per week?",
      answer:
        "Our core programs run 5-6 sessions per week depending on your chosen membership plan. Weekend sessions and special boot camps are also available.",
    },
    {
      question: "Are personal coaching sessions available?",
      answer:
        "Yes. We provide 1-on-1 sessions for focused skill refinement, tournament preparation, and video-based match analysis.",
    },
    {
      question: "Do you organize tournaments or events?",
      answer:
        "Yes. KSTTA hosts monthly internal leagues and sponsors players for state and national tournaments, helping them gain competitive exposure.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-[#0F1C2B] text-[#E2E8F0] px-[5%] transition-colors duration-500"
    >
      <h2 className="text-[clamp(1.8rem,2.5vw,2.5rem)] font-bold text-center mb-12 text-[#E63946] uppercase tracking-wide">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto divide-y divide-[#E2E8F0]/10">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full text-left focus:outline-none"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#E2E8F0]">
                {faq.question}
              </h3>
              <span
                className={`text-[#E63946] text-2xl font-bold transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`mt-3 text-[#CBD5E1] text-[0.95rem] leading-relaxed transition-all duration-500 overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
