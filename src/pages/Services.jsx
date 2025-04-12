import React, { useState } from "react";
import ServicesHero from "../components/ServicesHero";
import HeroMain from "../assets/HeroMain.png";
import carpet from "../assets/carpet.png";
import woodfloor from "../assets/woodfloor.jpg";
import spraycarpet from "../assets/spraycarpet.jpg";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("carpet");

  const services = {
    carpet: [
      {
        id: "deep-carpet-cleaning",
        title: "Deep Carpet Cleaning",
        description:
          "Our professional deep carpet cleaning service removes embedded dirt, allergens, stains, and odors that regular vacuuming can't reach. We use advanced hot water extraction methods to restore your carpets to like-new condition.",
        features: [
          "Removes deep-seated dirt and debris",
          "Eliminates allergens and dust mites",
          "Effectively treats stubborn stains",
          "Neutralizes odors at the source",
          "Extends the life of your carpets",
        ],
        image: carpet,
      },
      {
        id: "upholstery-cleaning",
        title: "Upholstery Cleaning",
        description:
          "Revitalize your furniture with our professional upholstery cleaning service. We use specialized equipment and cleaning solutions to safely remove dirt, stains, and odors from all types of upholstery fabrics.",
        features: [
          "Safe for all fabric types",
          "Removes embedded dirt and dust",
          "Eliminates allergens",
          "Stain and spot treatment",
          "Deodorizing treatment",
        ],
        image: spraycarpet,
      },
      {
        id: "area-rug-cleaning",
        title: "Area Rug Cleaning",
        description:
          "Our specialized area rug cleaning service provides gentle but thorough cleaning for all types of rugs, including delicate Oriental and Persian rugs. We remove dirt, stains, and odors while preserving the integrity of your valuable rugs.",
        features: [
          "Hand-cleaning for delicate rugs",
          "Deep soil removal",
          "Stain treatment",
          "Fringe cleaning",
          "Proper drying techniques",
        ],
        image: spraycarpet,
      },
    ],
    floor: [
      {
        id: "floor-buffing",
        title: "Floor Buffing & Polishing",
        description:
          "Restore the shine and luster to your hard floors with our professional buffing and polishing service. We use high-quality equipment and products to bring out the natural beauty of your floors and provide a protective shine.",
        features: [
          "Removes scuff marks and scratches",
          "Restores shine and luster",
          "Creates a protective layer",
          "Works on multiple floor types",
          "Extends floor lifespan",
        ],
        image: woodfloor,
      },
      {
        id: "floor-waxing",
        title: "Floor Waxing",
        description:
          "Protect and beautify your floors with our professional waxing service. We apply premium floor wax that creates a durable, protective layer to shield your floors from damage while enhancing their appearance with a brilliant shine.",
        features: [
          "Creates a protective barrier",
          "Provides high-gloss finish",
          "Prevents scratches and damage",
          "Makes future cleaning easier",
          "Prolongs floor life",
        ],
        image: woodfloor,
      },
      {
        id: "hardwood-refinishing",
        title: "Hardwood Floor Refinishing",
        description:
          "Breathe new life into your worn or damaged hardwood floors with our refinishing service. We carefully sand away imperfections, apply new stain if desired, and finish with a protective sealant for beautiful, long-lasting results.",
        features: [
          "Removes scratches and damage",
          "Options for stain color changes",
          "Satin, semi-gloss, or high-gloss finish",
          "Extends floor lifespan by years",
          "Increases property value",
        ],
        image: woodfloor,
      },
    ],
    residential: [
      {
        id: "residential-carpet-cleaning",
        title: "Residential Carpet Cleaning",
        description:
          "Keep your home's carpets fresh, clean, and healthy with our residential carpet cleaning service. We remove allergens, stains, and odors to create a healthier living environment for you and your family.",
        features: [
          "Whole house or individual room service",
          "Pet stain and odor treatment",
          "Fast drying times",
          "Safe for children and pets",
          "Scheduled maintenance programs available",
        ],
        image: carpet,
      },
      {
        id: "residential-floor-care",
        title: "Residential Floor Care",
        description:
          "Maintain the beauty and durability of your home's hard floors with our comprehensive floor care services. From tile to hardwood, we provide expert cleaning, buffing, and waxing to keep your floors looking their best.",
        features: [
          "Customized care for different floor types",
          "Restoration of dull or worn floors",
          "Protection from daily wear and tear",
          "Enhancement of your home's appearance",
          "Scheduled maintenance available",
        ],
        image: woodfloor,
      },
      {
        id: "move-in-out",
        title: "Move In/Out Services",
        description:
          "Whether you're moving into a new home or leaving your current one, our move in/out cleaning ensures your floors and carpets are spotless. Perfect for rental properties to help ensure deposit returns.",
        features: [
          "Deep carpet cleaning and stain removal",
          "Hard floor buffing and polishing",
          "Complete floor restoration",
          "Removal of previous tenant marks and stains",
          "Property manager and landlord approved results",
        ],
        image: spraycarpet,
      },
    ],
    commercial: [
      {
        id: "commercial-carpet-care",
        title: "Commercial Carpet Care",
        description:
          "Maintain a professional appearance and extend the life of your commercial carpets with our specialized commercial carpet cleaning service. We work around your business hours to minimize disruption.",
        features: [
          "High-traffic area treatment",
          "Stain protection application",
          "After-hours service available",
          "LEED-compliant cleaning methods",
          "Scheduled maintenance programs",
        ],
        image: carpet,
      },
      {
        id: "commercial-floor-maintenance",
        title: "Commercial Floor Maintenance",
        description:
          "Keep your business looking professional with our commercial floor maintenance services. We specialize in maintaining high-traffic commercial floors, from retail spaces to healthcare facilities.",
        features: [
          "Regular maintenance programs",
          "High-traffic area focus",
          "Slip-resistance treatment options",
          "After-hours service available",
          "Emergency service for spills or damage",
        ],
        image: woodfloor,
      },
      {
        id: "industrial-floor-care",
        title: "Industrial Floor Care",
        description:
          "Our industrial floor care services are designed for warehouses, manufacturing facilities, and other industrial spaces that require specialized floor maintenance despite heavy use and equipment.",
        features: [
          "Heavy machinery area treatment",
          "Oil and chemical stain removal",
          "Anti-slip treatments",
          "Concrete sealing and polishing",
          "Schedule that works around production",
        ],
        image: woodfloor,
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Add ServicesHero component at the top */}
      <ServicesHero />

      {/* Service Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Camacho Cleaning specializes in professional deep carpet cleaning
              and floor buffing & waxing services for both residential and
              commercial clients.
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab("carpet")}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 rounded-lg ${
                activeTab === "carpet"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition duration-300`}
            >
              Carpet Cleaning
            </button>
            <button
              onClick={() => setActiveTab("floor")}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 rounded-lg ${
                activeTab === "floor"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition duration-300`}
            >
              Floor Buffing & Waxing
            </button>
            <button
              onClick={() => setActiveTab("residential")}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 rounded-lg ${
                activeTab === "residential"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition duration-300`}
            >
              Residential
            </button>
            <button
              onClick={() => setActiveTab("commercial")}
              className={`px-6 py-3 text-lg font-medium mx-2 mb-2 rounded-lg ${
                activeTab === "commercial"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              } transition duration-300`}
            >
              Commercial
            </button>
          </div>

          {/* Service Content */}
          <div>
            {services[activeTab].map((service, index) => (
              <div
                key={service.id}
                className={`flex flex-col md:flex-row items-center mb-20 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <div className="bg-gray-200 rounded-lg h-64 md:h-96 w-full overflow-hidden shadow-lg">
                    {/* Display service image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/800x600?text=" +
                          service.title;
                      }}
                    />
                  </div>
                </div>
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 1 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <h2 className="text-3xl font-bold text-blue-600 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    {service.description}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Service Includes:
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0"
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
                  <a
                    href="#contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Cleaner Carpets and Floors?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact Camacho Cleaning today for a free estimate and discover
              how our specialized carpet and floor care services can transform
              your space.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-white text-blue-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:6195551234"
                className="bg-blue-800 text-white py-3 px-8 rounded-lg font-bold hover:bg-blue-900 transition duration-300"
              >
                Call Us: (203) 536-0834
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Matches Home.jsx style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read what our satisfied customers have to say about our
              professional carpet cleaning and floor care services.
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
                "I was amazed at how Camacho Cleaning was able to restore my
                carpets to like-new condition. They removed stains I thought
                would be there forever. Their deep cleaning process is truly
                exceptional!"
              </p>
              <div className="font-medium text-gray-800">- Maria Johnson</div>
              <div className="text-gray-500 text-sm">Residential Client</div>
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
                "Our office floors have never looked better since we started
                using Camacho Cleaning for our monthly floor buffing and waxing.
                Clients consistently comment on how impressive our space looks!"
              </p>
              <div className="font-medium text-gray-800">- Robert Smith</div>
              <div className="text-gray-500 text-sm">Commercial Client</div>
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
                "I have a vintage oriental rug that was looking dull and had
                some tough stains. Camacho Cleaning's specialized carpet
                cleaning brought it back to life without damaging the delicate
                fibers. Truly impressive work!"
              </p>
              <div className="font-medium text-gray-800">- Jennifer Davis</div>
              <div className="text-gray-500 text-sm">
                Specialty Carpet Client
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              See More Reviews
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about our carpet cleaning and
              floor care services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How often should carpets be professionally cleaned?
              </h3>
              <p className="text-gray-600">
                Most carpet manufacturers recommend professional deep cleaning
                every 12-18 months for residential carpets. However, homes with
                pets, children, or high traffic may benefit from cleaning every
                6-9 months. Commercial carpets in high-traffic areas often
                require quarterly cleaning to maintain appearance and extend
                lifespan.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How long does it take for carpets to dry after cleaning?
              </h3>
              <p className="text-gray-600">
                With our advanced equipment and techniques, most carpets dry
                within 4-6 hours. Factors that affect drying time include
                humidity, air circulation, and carpet thickness. We use powerful
                extraction methods that remove most moisture, significantly
                reducing drying time compared to standard cleaning methods.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How often should floors be buffed and waxed?
              </h3>
              <p className="text-gray-600">
                For commercial spaces, floor buffing is typically recommended
                monthly, with complete stripping and waxing 2-4 times per year
                depending on traffic. Residential floors generally need buffing
                every 3-6 months and waxing annually. High-traffic areas may
                require more frequent maintenance to maintain appearance and
                protection.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Are your cleaning products safe for children and pets?
              </h3>
              <p className="text-gray-600">
                Yes, we use environmentally responsible cleaning products that
                are safe for your family, pets, and the environment. Our
                cleaning solutions effectively remove dirt, stains, and
                allergens without harsh chemicals. We also offer completely
                green cleaning options upon request for those with sensitivities
                or environmental concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Matching Home.jsx style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Camacho Cleaning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the highest quality carpet cleaning
              and floor care services with attention to detail and customer
              satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Specialized Expertise
              </h3>
              <p className="text-gray-600">
                We focus exclusively on carpet cleaning and floor care, allowing
                us to perfect our techniques and deliver superior results.
              </p>
            </div>

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
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                If you're not completely satisfied with our work, we'll return
                to address any areas of concern at no additional cost.
              </p>
            </div>

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
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Advanced Equipment
              </h3>
              <p className="text-gray-600">
                We invest in state-of-the-art equipment that delivers deeper
                cleaning, faster drying, and better results than standard
                methods.
              </p>
            </div>

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
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                We customize our approach for each job, considering the specific
                type of carpet or floor, level of soiling, and your unique needs
                and concerns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience the Camacho Cleaning Difference
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join our satisfied customers and discover why Camacho Cleaning is
              the preferred choice for carpet cleaning and floor care services
              in San Diego.
            </p>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg shadow-md transition duration-300"
            >
              Schedule Your Service Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
