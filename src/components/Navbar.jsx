import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              {/* Replace with your actual logo or icon */}
              <img src={logo} alt="Logo" className="h-10 w-10" />
              <span className="ml-3 text-xl font-bold text-gray-800">
                Camacho Cleaning
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Centered */}
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

          {/* CTA Button - Right */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
              Free Quote
            </button>
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
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block"
              >
                Contact
              </a>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
