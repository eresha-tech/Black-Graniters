import { Link } from 'react-router-dom';
import OtherProductsCollectionsSection from '../components/OtherProductsCollectionsSection';

const OtherProductsShop = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Other Products</h1>
          <p className="text-xl text-center max-w-4xl mx-auto text-white/90 leading-relaxed">
            Handcrafted stone products and accessories for every need
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond our premium slabs and tiles, we offer a wide range of handcrafted stone products. 
              From functional items like countertops and wash basins to decorative pieces like sculptures 
              and lamps, each product showcases the natural beauty and durability of Indian stones combined 
              with expert craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Dynamic Other Products Collections */}
      <OtherProductsCollectionsSection />

      {/* Featured Products Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#502b21] text-center">Why Choose Our Products?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#502b21] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-[#502b21] mb-4">Handcrafted Quality</h3>
                <p className="text-gray-700 leading-relaxed">
                  Each piece is carefully crafted by skilled artisans with attention to detail and quality
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#502b21] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-bold text-[#502b21] mb-4">Premium Materials</h3>
                <p className="text-gray-700 leading-relaxed">
                  Made from the finest granite, marble, and sandstone sourced from across India
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="w-16 h-16 bg-[#502b21] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-[#502b21] mb-4">Custom Options</h3>
                <p className="text-gray-700 leading-relaxed">
                  We offer customization to meet your specific requirements and design preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#502b21] to-[#7a3f2e] rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Custom Orders Welcome</h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Have a specific design in mind? We specialize in custom stone products tailored to your exact 
              specifications. From unique sculptures to bespoke countertops, our team can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-[#502b21] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7A145] hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Discuss Your Project
              </Link>
              <a
                href="https://wa.me/919700159159"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#502b21] text-center">Perfect For</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Homes",
                "Hotels",
                "Restaurants",
                "Offices",
                "Retail Spaces",
                "Gardens",
                "Memorial Parks",
                "Luxury Interiors"
              ].map((app, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <p className="text-gray-700 font-semibold">{app}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherProductsShop;
