import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import QuoteForm from "./QuoteForm"; // Import the new component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openQuoteForm = () => {
    setIsQuoteFormOpen(true);
    // Close mobile menu if it's open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const closeQuoteForm = () => {
    setIsQuoteFormOpen(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <span className="ml-3 text-xl font-bold text-gray-800">
                  Camacho Cleaning
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-10">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/residential"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Residential
                </Link>
                <Link
                  to="/commercial"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Commercial
                </Link>
                <Link
                  to="/services"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Services
                </Link>
                <Link
                  to="/why"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  Why
                </Link>
              </div>
            </div>

            {/* CTA Button with animation */}
            <div className="hidden md:block">
              <button
                onClick={openQuoteForm}
                className="group bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 group-hover:animate-pulse"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free Quote
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu with smooth transition */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pt-3 border-t border-gray-200">
              <div className="flex flex-col space-y-2 pb-3">
                <Link
                  to="/"
                  className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
                >
                  Home
                </Link>
                <Link
                  to="/residential"
                  className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
                >
                  Residential
                </Link>
                <Link
                  to="/commercial"
                  className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
                >
                  Commercial
                </Link>
                <Link
                  to="/services"
                  className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
                >
                  Services
                </Link>
                <Link
                  to="/why"
                  className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
                >
                  Why Us?
                </Link>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={openQuoteForm}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Quote Form Modal */}
      {isQuoteFormOpen && (
        <QuoteForm isOpen={isQuoteFormOpen} onClose={closeQuoteForm} />
      )}
    </>
  );
};

export default Navbar;
