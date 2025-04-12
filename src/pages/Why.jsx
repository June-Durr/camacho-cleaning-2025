import React from "react";
import WhyHero from "../components/WhyHero";
import woodfloor from "../assets/woodfloor.jpg";
import spray from "../assets/spray.jpg";
import spraycarpet from "../assets/spraycarpet.jpg";
import sponge from "../assets/sponge.png";

const Why = () => {
  const coreValues = [
    {
      id: "excellence",
      title: "Commitment to Excellence",
      description:
        "With over 25 years serving Fairfield County, we've refined our craft to deliver exceptional results on every visit. Our experience has taught us that true excellence is in the details.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
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
    },
    {
      id: "trust",
      title: "Built on Trust",
      description:
        "Our clients trust us in their homes and businesses because of our integrity and reliability. Every team member is thoroughly vetted, background-checked, bonded, and insured for your complete peace of mind.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
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
      ),
    },
    {
      id: "eco-friendly",
      title: "Environmentally Responsible",
      description:
        "We're committed to using environmentally friendly cleaning products that effectively clean and sanitize without harsh chemicals. Our green cleaning approach protects your family, pets, and our planet.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
          ></path>
        </svg>
      ),
    },
    {
      id: "customer-focus",
      title: "Customer-Focused Approach",
      description:
        "We build relationships, not just client lists. Your satisfaction is our highest priority, backed by our 100% satisfaction guarantee. If you're not completely happy, we'll return to address any concerns at no additional cost.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          ></path>
        </svg>
      ),
    },
  ];

  const achievements = [
    {
      value: "25+",
      label: "Years of Experience",
    },
    {
      value: "10,000+",
      label: "Satisfied Clients",
    },
    {
      value: "99%",
      label: "Customer Retention",
    },
    {
      value: "100%",
      label: "Satisfaction Guarantee",
    },
  ];

  const differentiators = [
    {
      title: "Proprietary Cleaning System",
      description:
        "Our Detail-Clean Rotation System ensures comprehensive cleaning with special attention to different areas during each visit.",
    },
    {
      title: "Employee Excellence",
      description:
        "Unlike companies that use contractors, our staff are full employees, thoroughly trained in our methods and committed to our standards.",
    },
    {
      title: "Customized Cleaning Plans",
      description:
        "We build personalized cleaning plans based on your specific needs, preferences, and schedule.",
    },
    {
      title: "Technology Integration",
      description:
        "We use modern scheduling and communication tools to make working with us seamless and convenient.",
    },
    {
      title: "Quality Assurance",
      description:
        "Regular quality checks and feedback systems ensure we consistently deliver exceptional results.",
    },
    {
      title: "Community Commitment",
      description:
        "As a local Fairfield County business, we're invested in our community, understanding the specific needs of homes and businesses in our area.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <WhyHero />

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Camacho Cleaning was founded in 1997 with a simple mission: to
                provide Fairfield County with cleaning services that truly make
                a difference in people's lives. What began as a small family
                business has grown into one of the region's most trusted
                cleaning companies.
              </p>
              <p>
                For over 25 years, we've balanced growth with our commitment to
                personalized service. While we've expanded our team and
                capabilities, we've never lost sight of what matters most – the
                relationships we build with our clients and the quality of our
                work.
              </p>
              <p>
                Today, we continue to be a family-owned and operated business
                that treats our clients like part of the Camacho family. Our
                experienced staff brings professionalism, care, and attention to
                detail to every job, whether it's a cozy home or a large
                commercial facility.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src={spray}
                  alt="Camacho Cleaning founders"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=Our+Founders";
                  }}
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md mt-8">
                <img
                  src={sponge}
                  alt="Camacho Cleaning team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=Our+Team";
                  }}
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src={woodfloor}
                  alt="Cleaning equipment"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=Equipment";
                  }}
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-md mt-8">
                <img
                  src={spraycarpet}
                  alt="Cleaning service"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/300x300?text=In+Action";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Core Values */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {coreValues.map((value) => (
              <div
                key={value.id}
                className="flex bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-blue-100 rounded-full p-4 flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            25 Years of Excellence in Fairfield County
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Sets Camacho Cleaning Apart
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          After 25 years in business, we understand what makes a cleaning
          service truly exceptional. Here's why so many Fairfield County
          residents and businesses choose Camacho Cleaning:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border-t-4 border-blue-500 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
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
                "We've been using Camacho Cleaning for over 10 years now. Their
                team is always professional, thorough, and trustworthy. I never
                worry about the quality of their work - it's consistently
                excellent."
              </p>
              <p className="font-semibold text-gray-800">
                - Margaret R., Westport
              </p>
              <p className="text-gray-500 text-sm">
                Residential Client Since 2012
              </p>
            </div>

            {/* Testimonial 2 */}
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
                "As a medical facility, we require exceptional cleanliness and
                disinfection. Camacho Cleaning consistently delivers the highest
                standards, giving our staff and patients peace of mind."
              </p>
              <p className="font-semibold text-gray-800">- Dr. James Wilson</p>
              <p className="text-gray-500 text-sm">Fairfield Medical Center</p>
            </div>

            {/* Testimonial 3 */}
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
                "What impresses me most about Camacho Cleaning is their
                consistency and attention to detail. They don't just clean the
                obvious areas - they find and address things I wouldn't even
                notice."
              </p>
              <p className="font-semibold text-gray-800">- Sarah Thompson</p>
              <p className="text-gray-500 text-sm">Stamford Resident</p>
            </div>
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
            Join our family of satisfied clients across Fairfield County and
            discover why we've been the trusted choice for over 25 years.
          </p>
          <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-md text-lg transition-colors duration-300">
            Schedule Your Cleaning Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Why;
