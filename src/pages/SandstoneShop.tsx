import { Link } from 'react-router-dom';
import SandstoneCollectionsSection from '../components/SandstoneCollectionsSection';

const SandstoneShop = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Sandstone Collection</h1>
          <p className="text-xl text-center max-w-4xl mx-auto text-white/90 leading-relaxed">
            Versatile natural stone with earthy tones, durability, and timeless appeal
          </p>
        </div>
      </section>

      {/* About Sandstone */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#502b21] text-center">About Sandstone</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Sandstone is a versatile natural stone widely admired for its earthy tones, durability, and timeless 
                appeal. With its fine-grained texture and natural charm, sandstone is an excellent choice for both 
                interior and exterior applications.
              </p>
              <p className="mb-4">
                It is commonly used in floor and wall tiles, wall cladding, paving, countertops, decorative pieces, 
                and intricate carvings. In home and commercial spaces, sandstone tiles add warmth and character to 
                walls and floors, while sandstone wall panels create striking accent features.
              </p>
              <p>
                Its easy workability also makes it ideal for stone decor, sculptures, fountains, and architectural 
                carvings. Sandstone's weather-resistant nature makes it suitable for garden landscaping, patios, and 
                outdoor facades as well. Whether in tiles, wall cladding, or decorative sandstone designs, this 
                natural stone blends elegance with strength, offering a long-lasting and eco-friendly solution for 
                modern architecture and interiors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sandstone Collections */}
      <SandstoneCollectionsSection />

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#502b21] text-center">Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Floor & Wall Tiles",
                "Wall Cladding",
                "Paving",
                "Countertops",
                "Decorative Pieces",
                "Sculptures",
                "Fountains",
                "Garden Landscaping",
                "Patios",
                "Outdoor Facades",
                "Architectural Carvings",
                "Accent Features"
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

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#502b21]">Interested in Our Sandstone?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Contact us for samples, quotes, or to discuss your project requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#502b21] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7A145] transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
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
    </div>
  );
};

export default SandstoneShop;
