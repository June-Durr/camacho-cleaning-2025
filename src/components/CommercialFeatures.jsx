import React from "react";

const CommercialFeatures = () => {
  const features = [
    {
      title: "Customized Commercial Solutions",
      description:
        "Every business has unique cleaning needs. We create custom cleaning plans designed specifically for your facility, schedule, and budget.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      points: [
        "Tailored cleaning checklists for your industry",
        "Frequency options from daily to monthly",
        "Focus on high-priority areas you specify",
        "Flexible scheduling around your business hours",
      ],
    },
    {
      title: "Advanced Equipment & Techniques",
      description:
        "We invest in commercial-grade equipment and specialized techniques that deliver superior results for your business space.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      points: [
        "Commercial-grade carpet extraction systems",
        "High-speed floor buffers and polishers",
        "HEPA filtration vacuum systems",
        "Eco-friendly cleaning solutions",
      ],
    },
    {
      title: "Professional Staff",
      description:
        "Our fully trained, insured, and uniformed cleaning professionals work efficiently while maintaining the highest standards.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      points: [
        "Background-checked and thoroughly vetted",
        "Trained in industry-specific protocols",
        "Uniformed and professional appearance",
        "Supervised for consistent quality",
      ],
    },
    {
      title: "Client Satisfaction System",
      description:
        "We implement a comprehensive quality control system to ensure your complete satisfaction with every cleaning service.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      points: [
        "Regular quality inspections",
        "Detailed cleaning checklists",
        "Direct communication with management",
        "100% satisfaction guarantee",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Commercial Cleaning Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We deliver professional commercial cleaning solutions designed to
            enhance your business environment, impress your clients, and
            maintain a healthy workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-1">
                    {feature.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <svg
                          className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            Ready to experience the difference of professional commercial
            cleaning?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-sm">
            Get Your Free Commercial Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommercialFeatures;
