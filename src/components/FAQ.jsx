import React, { useState } from "react";

const CompactFAQ = () => {
  // FAQ data with questions and answers - reduced to most important ones
  const faqData = [
    {
      id: 1,
      question: "How often should I have my carpets professionally cleaned?",
      answer:
        "For residential carpets, we recommend professional cleaning every 12-18 months. Homes with pets, children, or high traffic may need service every 6-9 months. Commercial spaces typically require quarterly service to maintain appearance and extend carpet life.",
    },
    {
      id: 2,
      question: "How long will it take for my carpets to dry after cleaning?",
      answer:
        "With our advanced hot water extraction method, most carpets dry within 4-8 hours. We use powerful extraction equipment that removes most moisture during cleaning, significantly reducing drying time compared to standard methods.",
    },
    {
      id: 3,
      question: "Are your cleaning products safe for children and pets?",
      answer:
        "Yes, we use environmentally friendly cleaning solutions that are safe for your family, pets, and the environment. We also offer completely green cleaning options for those with sensitivities or environmental concerns.",
    },
    {
      id: 4,
      question: "How often should commercial floors be buffed and waxed?",
      answer:
        "For commercial spaces, we recommend floor buffing every 1-2 months with complete stripping and waxing 2-4 times per year, depending on foot traffic. Regular maintenance keeps floors looking their best and extends flooring life.",
    },
    {
      id: 5,
      question: "What areas of Fairfield County do you serve?",
      answer:
        "We provide services throughout Fairfield County, including Stamford, Greenwich, Norwalk, Fairfield, Westport, Danbury, Bridgeport, Darien, New Canaan, Ridgefield, Trumbull, and Shelton.",
    },
    {
      id: 6,
      question: "Do you guarantee your work?",
      answer:
        "Yes, we stand behind our services with a 100% satisfaction guarantee. If you're not completely satisfied, we'll return to re-clean the areas in question at no additional cost.",
    },
  ];

  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ item open/closed
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Quick answers to common questions about our services
          </p>
        </div>

        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>
                <span
                  className={`text-blue-600 transition-transform duration-200 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`transition-all duration-200 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-60 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 pt-0 border-t border-gray-100 text-sm text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-700 text-sm mb-2">Have more questions?</p>
          <a
            href="tel:2035360834"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 text-sm"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            Call us at (203) 536-0834
          </a>
        </div>
      </div>
    </section>
  );
};

export default CompactFAQ;
