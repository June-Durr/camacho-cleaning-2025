import React, { useState } from "react";
import QuoteForm from "./QuoteForm";

const WhyHero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  return (
    <div className="relative bg-blue-50">
      {/* Background image overlay - Similar to main Hero */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/api/placeholder/1920/1080')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: "0.1",
        }}
      ></div>

      <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-tight mb-6">
              Fairfield County's Premier Cleaning Service
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-4">
              With over{" "}
              <span className="font-bold text-blue-700">
                25 years of experience
              </span>
              , Camacho Cleaning has built a reputation for excellence in
              Fairfield County.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Our mission is simple: to provide the highest quality cleaning
              services with integrity, reliability, and attention to detail that
              exceeds your expectations every time.
            </p>

            <button
              onClick={openQuoteForm}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg transition duration-300 transform hover:scale-105 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              Get Your Free Quote
            </button>
          </div>

          {/* Right content - Image with overlay text */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg shadow-2xl overflow-hidden">
              <img
                src="/api/placeholder/600/500"
                alt="Camacho Cleaning Team"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/600x500?text=Trusted+Cleaning+Professionals";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/80 to-transparent flex flex-col justify-end p-6">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-blue-800 mb-3">
                    Our Promise
                  </h2>
                  <p className="text-gray-700">
                    "We don't just clean spaces – we create environments where
                    families thrive, businesses succeed, and peace of mind is
                    standard."
                  </p>
                  <p className="text-blue-700 mt-2 font-bold">
                    — The Camacho Family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Form Modal */}
      {isQuoteFormOpen && (
        <QuoteForm isOpen={isQuoteFormOpen} onClose={closeQuoteForm} />
      )}
    </div>
  );
};

export default WhyHero;
