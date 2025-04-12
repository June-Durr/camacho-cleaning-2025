import React, { useState } from "react";
import ServicesHero from "../components/ServicesHero";
import CarpetResidential from "../assets/CarpetResidential.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("residential");

  const services = {
    residential: [
      {
        id: "regular-cleaning",
        title: "Regular Cleaning",
        description:
          "Our regular cleaning service provides a thorough cleaning of your home on a recurring basis. Perfect for busy families who want to maintain a clean, healthy living environment.",
        features: [
          "Dusting of all accessible surfaces",
          "Vacuuming of carpets and floors",
          "Cleaning of kitchen counters and appliances",
          "Bathroom sanitization",
          "Emptying trash bins",
        ],
        image: CarpetResidential,
      },
      {
        id: "deep-cleaning",
        title: "Deep Cleaning",
        description:
          "Our deep cleaning service is a comprehensive cleaning that covers all areas of your home. Ideal for initial cleanings or for homes that haven't been professionally cleaned in a while.",
        features: [
          "All regular cleaning services",
          "Detailed cleaning of baseboards and door frames",
          "Interior window cleaning",
          "Cleaning inside kitchen appliances",
          "Detailed scrubbing of bathroom tile and grout",
        ],
        image: "/images/deep-cleaning.jpg",
      },
      {
        id: "move-in-out",
        title: "Move In/Out Cleaning",
        description:
          "Whether you're moving into a new home or leaving your current one, our move in/out cleaning ensures your property is spotless from top to bottom.",
        features: [
          "Comprehensive deep cleaning of entire home",
          "Cleaning inside all cabinets and drawers",
          "Detailed cleaning of all appliances",
          "Scrubbing of baseboards and door frames",
          "Window sill and track cleaning",
        ],
        image: "/images/move-in-out.jpg",
      },
    ],
    commercial: [
      {
        id: "office-cleaning",
        title: "Office Cleaning",
        description:
          "Keep your office environment clean and professional with our comprehensive office cleaning services tailored to meet your business needs.",
        features: [
          "Reception and common area cleaning",
          "Desk and cubicle dusting",
          "Restroom sanitization",
          "Break room cleaning",
          "Trash removal and recycling",
        ],
        image: "/images/office-cleaning.jpg",
      },
      {
        id: "retail-cleaning",
        title: "Retail Cleaning",
        description:
          "Maintain a pristine shopping environment that attracts customers and enhances their shopping experience with our retail cleaning services.",
        features: [
          "Floor cleaning and polishing",
          "Window and glass cleaning",
          "Fitting room maintenance",
          "Product display dusting",
          "Entryway and checkout area cleaning",
        ],
        image: "/images/retail-cleaning.jpg",
      },
      {
        id: "medical-facility",
        title: "Medical Facility Cleaning",
        description:
          "Our specialized medical facility cleaning follows strict protocols to ensure a sanitary environment for patients and staff.",
        features: [
          "Hospital-grade disinfection",
          "Waiting room and reception area cleaning",
          "Exam room sanitization",
          "Restroom deep cleaning",
          "Proper disposal of medical waste",
        ],
        image: "/images/medical-cleaning.jpg",
      },
    ],
    specialized: [
      {
        id: "carpet-cleaning",
        title: "Carpet Cleaning",
        description:
          "Revitalize your carpets with our professional deep cleaning service that removes dirt, allergens, and stains.",
        features: [
          "Pre-treatment of heavily soiled areas",
          "Hot water extraction cleaning",
          "Spot and stain removal",
          "Deodorizing treatment",
          "Quick drying methods",
        ],
        image: "/images/carpet-cleaning.jpg",
      },
      {
        id: "window-cleaning",
        title: "Window Cleaning",
        description:
          "Enjoy crystal clear views with our professional window cleaning service for both interior and exterior windows.",
        features: [
          "Interior window cleaning",
          "Exterior window cleaning",
          "Window sill and track cleaning",
          "Screen cleaning",
          "Frame dusting and wiping",
        ],
        image: "/images/window-cleaning.jpg",
      },
      {
        id: "post-construction",
        title: "Post-Construction Cleaning",
        description:
          "After renovation or construction, our team will remove all debris and dust to make your space ready for use.",
        features: [
          "Construction debris removal",
          "Dust removal from all surfaces",
          "Detailed cleaning of all fixtures",
          "Floor cleaning and polishing",
          "Window and glass cleaning",
        ],
        image: "/images/post-construction.jpg",
      },
    ],
  };

  return (
    <>
      <div className="bg-white">
        {/* Replace the old hero section with our new ServicesHero component */}
        <ServicesHero />

        {/* Service Tabs */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center mb-8">
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 rounded-md ${
                activeTab === "residential"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 rounded-md ${
                activeTab === "commercial"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setActiveTab("specialized")}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 rounded-md ${
                activeTab === "specialized"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Specialized
            </button>
          </div>

          {/* Service Content */}
          <div className="py-8">
            {services[activeTab].map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row items-center mb-16 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="bg-gray-200 rounded-lg h-64 md:h-96 w-full overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="h-full w-full flex items-center justify-center bg-gray-300">
                      <span className="text-gray-600">
                        Image: {service.title}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`md:w-1/2 md:px-8 ${
                    index % 2 === 1 ? "md:pr-0 md:pl-8" : "md:pl-0 md:pr-8"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Service Includes:
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300">
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready for a Cleaner Space?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact Camacho Cleaning Services today for a free estimate and
              discover the difference professional cleaning can make.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md font-medium text-lg transition-colors duration-300">
              Get a Free Quote
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "Camacho Cleaning Services has been cleaning my home for over a
                year now, and I couldn't be happier with their work. My house
                has never been cleaner!"
              </p>
              <p className="font-semibold text-gray-800">- Maria Johnson</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "As a business owner, I needed a reliable cleaning service for
                my office. Camacho Cleaning exceeded my expectations with their
                professionalism and attention to detail."
              </p>
              <p className="font-semibold text-gray-800">- Robert Smith</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "I hired Camacho Cleaning for a deep clean before hosting a
                family event. They transformed my home in just a few hours! I'm
                now a regular customer."
              </p>
              <p className="font-semibold text-gray-800">- Jennifer Davis</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  How often should I schedule cleaning services?
                </h3>
                <p className="text-gray-600">
                  The frequency depends on your specific needs. Many residential
                  clients prefer weekly or bi-weekly service, while businesses
                  might require daily cleaning. We can help you determine the
                  optimal schedule during your consultation.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Do I need to provide cleaning supplies?
                </h3>
                <p className="text-gray-600">
                  No, Camacho Cleaning Services brings all necessary cleaning
                  supplies and equipment. We use eco-friendly products that are
                  safe for your family, pets, and the environment.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Is your staff bonded and insured?
                </h3>
                <p className="text-gray-600">
                  Yes, all our cleaning professionals are thoroughly
                  background-checked, bonded, and insured. We prioritize your
                  security and peace of mind.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  What if I'm not satisfied with the cleaning?
                </h3>
                <p className="text-gray-600">
                  Customer satisfaction is our top priority. If you're not
                  completely satisfied with any aspect of our service, please
                  let us know within 24 hours, and we'll return to address any
                  areas of concern at no additional cost.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Camacho Cleaning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Trusted Professionals
              </h3>
              <p className="text-gray-600">
                Our team consists of trained, background-checked, and insured
                cleaning specialists.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
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
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                If you're not completely satisfied, we'll return to re-clean at
                no additional cost.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Eco-Friendly Products
              </h3>
              <p className="text-gray-600">
                We use environmentally responsible cleaning products that are
                safe for your family and pets.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Consistent & Reliable
              </h3>
              <p className="text-gray-600">
                We arrive on time and deliver consistent, high-quality cleaning
                on every visit.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Experience the Camacho Cleaning Difference
            </h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Join our satisfied customers and discover why Camacho Cleaning is
              the preferred choice for residential and commercial cleaning
              services.
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
              Schedule Your Cleaning Today
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
