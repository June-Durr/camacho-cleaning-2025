import React, { useState } from "react";
import QuoteForm from "./QuoteForm";
import HeroMain from "../assets/HeroMain.png";

const Hero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  return (
    <div className="relative bg-blue-50">
      {/* Background image overlay */}
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
          {/* Left side - Hero text */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-tight mb-6">
              Professional Cleaning Services You Can Trust
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Camacho Cleaning Services provides top-quality residential and
              commercial cleaning solutions. Enjoy a spotless home with our
              professional, reliable service.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-800">
                  Professionally Trained Staff
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-800">
                  100% Satisfaction Guarantee
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-800">Eco-Friendly Products</span>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 rounded-full p-2 mr-3">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-800">Licensed & Insured</span>
              </div>
            </div>

            {/* Free Quote Button - Styled differently from navbar */}
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

          {/* Right side - Image */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg shadow-2xl overflow-hidden">
              <img
                src={HeroMain}
                alt="Professional cleaning service"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Professional+Cleaning+Services";
                }}
              />
              {/* Optional overlay to ensure text is visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-semibold">
                  Experience the highest standards of cleanliness
                </p>
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

export default Hero;
