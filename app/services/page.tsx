import { BreadcrumbHero } from "../components/BreadcrumbHero";
import { OutlineCards } from "../components/OutlineCards";

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbHero 
        title="Our Services"
        subtitle="Transform your business with our comprehensive suite of digital marketing services. Each service is tailored to deliver measurable results and drive sustainable growth."
        chip="Expert Solutions 🚀"
      />

      <OutlineCards />

      {/* Detailed Service Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {/* Digital Marketing Section */}
          <section id="digital-marketing" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Digital Marketing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Our digital marketing solutions are designed to boost your online presence and drive meaningful engagement with your target audience. We combine proven strategies with innovative approaches to deliver exceptional results.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Search Engine Optimization (SEO)</li>
                  <li>• Pay-Per-Click Advertising (PPC)</li>
                  <li>• Social Media Marketing</li>
                  <li>• Content Marketing</li>
                  <li>• Email Marketing Campaigns</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Why Choose Our Digital Marketing?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Data-driven strategies</li>
                  <li>• Customized solutions</li>
                  <li>• Continuous optimization</li>
                  <li>• Regular performance reports</li>
                  <li>• Expert team support</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Performance Marketing Section */}
          <section id="performance-marketing" className="scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6">Performance Marketing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Our performance marketing services focus on delivering measurable results and maximizing your ROI. We use advanced analytics and optimization techniques to ensure every marketing dollar is well spent.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li>• Conversion Rate Optimization</li>
                  <li>• Marketing Analytics</li>
                  <li>• A/B Testing</li>
                  <li>• ROI Tracking</li>
                  <li>• Performance Reporting</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Performance Marketing Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>• Clear ROI measurement</li>
                  <li>• Real-time optimization</li>
                  <li>• Data-driven decisions</li>
                  <li>• Scalable campaigns</li>
                  <li>• Transparent reporting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Additional sections for other services */}
        </div>
      </div>
    </main>
  );
}