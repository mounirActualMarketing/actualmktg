"use client";

import { BreadcrumbHero } from "../components/BreadcrumbHero";
import { GradientShadowButton } from "../components/GradientShadowButton";

export default function About() {
  const handleDownload = () => {
    window.open('/ActualMktgProfile2025.pdf', '_blank');
  };

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero 
        title="About Us"
        subtitle="We're a team of digital marketing experts passionate about helping businesses grow through innovative solutions and data-driven strategies."
        chip="Our Story 📖"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Actual Marketing Agency was founded with a singular vision: to transform how businesses approach digital marketing. We believe in the power of data-driven strategies combined with creative excellence to deliver exceptional results.
            </p>
            <p className="text-gray-600 mb-8">
              Our team of experts brings together decades of experience in digital marketing, analytics, and brand strategy. We're passionate about helping businesses grow and achieve their marketing objectives through innovative solutions.
            </p>
            <GradientShadowButton 
              text="Download our business profile" 
              onClick={handleDownload}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with data-driven marketing strategies that deliver measurable results and sustainable growth. We're committed to transparency, innovation, and excellence in everything we do.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Core Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Data-Driven Decision Making</li>
                <li>• Innovation & Creativity</li>
                <li>• Client Success Focus</li>
                <li>• Transparency & Integrity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        {/* <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
              </div>
              <h3 className="text-xl font-bold mb-2">John Smith</h3>
              <p className="text-gray-600 mb-2">CEO & Founder</p>
              <p className="text-gray-500 text-sm">15+ years in digital marketing</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
              </div>
              <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Strategy</p>
              <p className="text-gray-500 text-sm">10+ years in brand strategy</p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Chen</h3>
              <p className="text-gray-600 mb-2">Technical Director</p>
              <p className="text-gray-500 text-sm">12+ years in web development</p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
