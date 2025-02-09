"use client";

import { AuroraHero } from "./components/AuroraHero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { GradientShadowButton } from "./components/GradientShadowButton";

export default function Home() {
  const handleDownload = () => {
    window.open('/ActualMktgProfile2025.pdf', '_blank');
  };

  return (
    <main>
      <AuroraHero />
      
      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Digital Marketing */}
            <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                Strategic digital marketing solutions to boost your online presence and drive growth.
              </p>
            </div>

            {/* Brand Strategy */}
            <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Brand Strategy</h3>
              <p className="text-gray-600">
                Develop a powerful brand identity that connects with your target audience.
              </p>
            </div>

            {/* Web Development */}
            <div className="bg-white rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Custom web solutions that deliver exceptional user experiences.
              </p>
            </div>
          </div>

          {/* Download Business Profile */}
          <div className="flex justify-center mt-8">
            <GradientShadowButton 
              text="Download our business profile" 
              onClick={handleDownload}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-indigo-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
          <WhyChooseUs />
        </div>
      </section>
    </main>
  );
}