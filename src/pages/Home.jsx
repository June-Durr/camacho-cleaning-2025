import React, { useState } from "react";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";

const Home = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // You'll need to replace this with your actual form submission endpoint
      const response = await fetch("https://api.yourdomain.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Clear form
      e.target.reset();

      // Show success message
      setFormStatus({ submitting: false, success: true, error: null });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        submitting: false,
        success: false,
        error:
          "There was a problem submitting your message. Please try again or call us directly.",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      {/* Services Section */}
      <section className="py-16 bg-white" id="services">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Specialized Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer professional cleaning services focused on deep carpet
              cleaning and floor buffing & waxing for both residential and
              commercial properties throughout Fairfield County, Connecticut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-blue-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Deep Carpet Cleaning
              </h3>
              <p className="text-gray-600 mb-4">
                Our professional deep cleaning services remove embedded dirt,
                allergens, stains, and odors that regular vacuuming can't reach,
                restoring your carpets to like-new condition.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Residential & Commercial Carpets
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Area Rug Cleaning
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Upholstery Cleaning
                </li>
              </ul>
              <a
                href="/services"
                className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Learn More →
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-blue-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
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
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Floor Buffing & Waxing
              </h3>
              <p className="text-gray-600 mb-4">
                Restore shine and protect your floors with our professional
                buffing and waxing services. We bring out the natural beauty of
                your floors while creating a durable protective finish.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Floor Polishing & Restoration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Residential & Commercial Floors
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 text-blue-600 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Protective Wax Application
                </li>
              </ul>
              <a
                href="/services"
                className="text-blue-600 font-medium hover:text-blue-800 transition duration-300"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl font-semibold text-blue-700 mb-4">
              Get Your Free Estimate Today
            </p>
            <p className="text-gray-600 mb-6">
              We provide complimentary quotes for all our services with no
              obligation. Contact us to schedule your free consultation.
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition duration-300"
            >
              Request Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Camacho Cleaning Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality cleaning services
              for homes and businesses throughout Fairfield County, Connecticut.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Reason 1 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-6">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                We're fully licensed and insured for your peace of mind. Our
                professional standards protect both our clients and staff.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-6">
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                If you're not completely satisfied, we'll return to re-clean the
                area at no additional cost to ensure your happiness.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-6">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Experienced Team
              </h3>
              <p className="text-gray-600">
                Our professionally trained cleaning specialists have years of
                experience and undergo thorough background checks.
              </p>
            </div>

            {/* Reason 4 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-5 mx-auto w-20 h-20 flex items-center justify-center mb-6">
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
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Eco-Friendly Products
              </h3>
              <p className="text-gray-600">
                We use environmentally friendly cleaning products that are safe
                for your family, pets, and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read what our satisfied customers throughout Fairfield County have
              to say about our professional cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Camacho Cleaning Services has been cleaning my home for over a
                year now, and I couldn't be happier. Their attention to detail
                with my carpets is amazing, and my house has never looked
                better!"
              </p>
              <div className="font-medium text-gray-800">- Sarah Johnson</div>
              <div className="text-gray-500 text-sm">Stamford, CT</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "We've been using Camacho Cleaning for our office for the past
                six months. Their floor buffing service is exceptional. Our
                workspace has never been cleaner or more professional looking!"
              </p>
              <div className="font-medium text-gray-800">- Michael Torres</div>
              <div className="text-gray-500 text-sm">
                Commercial Client, Fairfield
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "After my renovation project, I called Camacho Cleaning for deep
                carpet cleaning. They did an incredible job removing all the
                dust and debris. I'll definitely use them for regular cleaning
                going forward!"
              </p>
              <div className="font-medium text-gray-800">- Jennifer Lopez</div>
              <div className="text-gray-500 text-sm">Norwalk Resident</div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="/why"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              See More Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Serving Fairfield County, Connecticut
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide premier carpet cleaning and floor care services
              throughout Fairfield County, including these communities:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Stamford</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Greenwich</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Norwalk</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Fairfield</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Westport</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Danbury</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Bridgeport</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Darien</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">New Canaan</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Ridgefield</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Trumbull</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-medium text-gray-800">Shelton</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600">
              Not sure if we serve your area? Contact us today to find out!
            </p>
          </div>
        </div>
      </section>

      <FAQ />

      {/* Contact Section */}
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to experience the Camacho Cleaning difference? Get in touch
              with us today for a free quote.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <form className="space-y-6" onSubmit={handleSubmit}>
                {formStatus.success && (
                  <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Success! </strong>
                    <span className="block sm:inline">
                      Your message has been sent. We'll get back to you shortly.
                    </span>
                  </div>
                )}
                {formStatus.error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                    role="alert"
                  >
                    <strong className="font-bold">Error! </strong>
                    <span className="block sm:inline">{formStatus.error}</span>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="(203) 536-0834"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="deep-carpet-cleaning">
                      Deep Carpet Cleaning
                    </option>
                    <option value="floor-buffing">
                      Floor Buffing & Waxing
                    </option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Address or Zip Code
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Your address or zip code"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    placeholder="Tell us about your cleaning needs..."
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {formStatus.submitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Our Location
                      </h4>
                      <p className="text-gray-600 mt-1">Stamford, CT 06902</p>
                      <p className="text-gray-600">
                        Serving all of Fairfield County
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
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
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Phone Number
                      </h4>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="tel:2035360834"
                          className="hover:text-blue-600 transition-colors"
                        >
                          (203) 536-0834
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Email Address
                      </h4>
                      <p className="text-gray-600 mt-1">
                        <a
                          href="mailto:alberto.camachojr@gmail.com"
                          className="hover:text-blue-600 transition-colors"
                        >
                          alberto.camachojr@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        Business Hours
                      </h4>
                      <p className="text-gray-600 mt-1">
                        Monday - Friday: 8am - 6pm
                      </p>
                      <p className="text-gray-600">Saturday: 9am - 4pm</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition duration-300"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
