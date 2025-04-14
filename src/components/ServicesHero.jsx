import React, { useState } from "react";
import QuoteForm from "../components/QuoteForm";
import CarpetResidential from "../assets/CarpetResidential.jpg";

const ServicesHero = () => {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  const serviceCategories = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          ></path>
        </svg>
      ),
      title: "Deep Carpet Cleaning",
      description: "Removes stains, allergens & odors",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          ></path>
        </svg>
      ),
      title: "Floor Buffing & Waxing",
      description: "Restores shine & protects surfaces",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ></path>
        </svg>
      ),
      title: "Residential & Commercial",
      description: "Customized cleaning solutions",
    },
  ];

  return (
    <div className="relative bg-blue-50">
      {/* Background image overlay - similar height to home hero */}
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

      <div className="container mx-auto px-6 py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content - enhanced for SEO */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-tight mb-6">
              Fairfield Counties Premier Carpet & Floor Care Specialists
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Camacho Cleaning delivers professional deep carpet cleaning and
              floor buffing & waxing services that extend the life of your
              flooring investments while creating a healthier environment.
            </p>

            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Our advanced techniques and commercial-grade equipment remove
              deep-seated dirt, stubborn stains, allergens, and odors from
              carpets while our specialized floor care restores the beauty and
              shine to hardwood, tile, and vinyl surfaces.
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
                  Advanced Extraction Methods
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
                  Professional-Grade Equipment
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
                <span className="text-gray-800">Eco-Friendly Solutions</span>
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
                <span className="text-gray-800">Satisfaction Guaranteed</span>
              </div>
            </div>

            {/* Free Quote Button - Styled consistently with homepage */}
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

          {/* Right side - Image with proper height matching homepage */}
          <div className="md:w-1/2">
            <div className="relative rounded-lg shadow-2xl overflow-hidden h-auto">
              <img
                src={CarpetResidential}
                alt="Professional carpet cleaning service in San Diego"
                className="w-full rounded-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://via.placeholder.com/800x600?text=Professional+Carpet+Cleaning";
                }}
              />
              {/* Optional overlay to ensure text is visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white text-xl font-semibold">
                  Revitalize your carpets and floors with expert care
                </p>
              </div>
            </div>

            {/* Service category boxes */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center flex flex-col items-center"
                >
                  <div className="bg-blue-100 p-3 rounded-full mb-3">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-blue-800 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              ))}
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

export default ServicesHero;
