import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import QuoteForm from "./QuoteForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scrolling effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Spacer div to prevent content from jumping when navbar becomes fixed */}
      <div
        className={`w-full ${
          isScrolled ? "h-20" : "h-24"
        } transition-all duration-300`}
      ></div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white ${
          isScrolled ? "shadow-md py-2" : "py-4"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between">
            {/* Logo Section with Phone Number */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Camacho Cleaning Logo"
                  className={`transition-all duration-300 ${
                    isScrolled ? "h-10 w-auto" : "h-14 w-auto"
                  }`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/140x50?text=Camacho+Cleaning";
                  }}
                />
                <div className="ml-3">
                  <h1
                    className={`font-bold text-blue-700 transition-all duration-300 ${
                      isScrolled ? "text-lg" : "text-xl"
                    }`}
                  >
                    Camacho Cleaning
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Stamford, CT</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Phone number - visible on medium screens and up */}
            <div className="hidden md:flex lg:order-last items-center">
              <div className="mr-3 text-right">
                <p className="text-xs text-gray-500">Call for a free quote</p>
                <a
                  href="tel:2035360834"
                  className="text-blue-600 font-bold hover:text-blue-800 transition-colors"
                >
                  (203) 536-0834
                </a>
              </div>
              <button
                onClick={openQuoteForm}
                className="ml-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
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

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex items-center justify-center space-x-1">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/services")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Services
              </Link>
              <Link
                to="/residential"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/residential")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Residential
              </Link>
              <Link
                to="/commercial"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/commercial")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Commercial
              </Link>
              <Link
                to="/why"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive("/why")
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Why Us
              </Link>
            </div>

            {/* Mobile Controls - Phone + Menu Button */}
            <div className="flex md:hidden items-center">
              <a
                href="tel:2035360834"
                className="mr-2 p-2 text-blue-600 rounded-full hover:bg-blue-50"
                aria-label="Call Us"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
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
              <nav className="flex flex-col space-y-1 pb-3">
                <Link
                  to="/"
                  className={`px-3 py-3 rounded-md text-base font-medium ${
                    isActive("/")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className={`px-3 py-3 rounded-md text-base font-medium ${
                    isActive("/services")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/residential"
                  className={`px-3 py-3 rounded-md text-base font-medium ${
                    isActive("/residential")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Residential
                </Link>
                <Link
                  to="/commercial"
                  className={`px-3 py-3 rounded-md text-base font-medium ${
                    isActive("/commercial")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Commercial
                </Link>
                <Link
                  to="/why"
                  className={`px-3 py-3 rounded-md text-base font-medium ${
                    isActive("/why")
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Us
                </Link>
                <div className="pt-4 border-t border-gray-200 mt-2">
                  <button
                    onClick={openQuoteForm}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
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
                    Get a Free Quote
                  </button>
                </div>
              </nav>
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
