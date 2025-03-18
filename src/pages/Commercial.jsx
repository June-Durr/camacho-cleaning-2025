import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Commercial() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <section className="bg-blue-900 text-white text-center py-20">
        <h1 className="text-4xl font-semibold">
          Take Your Business to the Next Level
        </h1>
        <p className="mt-4 text-lg">
          Discover how our solutions can help you grow and succeed in today's
          market.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition duration-300">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform offers unique features designed to accelerate your
            business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Feature One
              </h3>
              <p className="mt-4 text-gray-600">
                Our product provides a cutting-edge solution that simplifies
                your workflow.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Feature Two
              </h3>
              <p className="mt-4 text-gray-600">
                Enhance productivity with our easy-to-use tools and intuitive
                interface.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Feature Three
              </h3>
              <p className="mt-4 text-gray-600">
                Increase collaboration across teams with seamless integration
                options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-800 text-white text-center py-16">
        <h2 className="text-3xl font-semibold">Ready to Start?</h2>
        <p className="mt-4 text-lg">
          Get in touch with our sales team to see how we can help you achieve
          your business goals.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition duration-300">
          Contact Us
        </button>
      </section>
      <Footer />
    </div>
  );
}
