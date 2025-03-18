import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const buttonRef = useRef(null);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isFormOpen &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        !event.target.closest(".form-container") // Make sure the form itself isn't closed
      ) {
        setIsFormOpen(false); // Close when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Or 'click'

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up
    };
  }, [isFormOpen]); // Re-run effect when isFormOpen changes

  return (
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

          {/* CTA Button */}
          <div className="hidden md:block">
            <div>
              <button
                onClick={toggleForm}
                ref={buttonRef}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                {isFormOpen ? "Close Form" : "Free Quote"}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200">
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
                  onClick={toggleForm}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Free Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div
            className="form-container bg-white p-8 rounded shadow-lg w-full md:w-1/2"
            ref={buttonRef} // Keeping reference here in case it's needed to track clicks outside
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get Your Free Cleaning Estimate
            </h2>

            {/* Your form */}
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="zipCode"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Tell us about your cleaning needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md transition duration-300"
              >
                Request Free Estimate
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
