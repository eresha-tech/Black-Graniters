import { Link } from 'react-router-dom';
import MarbleCollectionsSection from '../components/MarbleCollectionsSection';

const MarbleShop = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Marble Collection</h1>
          <p className="text-xl text-center max-w-4xl mx-auto text-white/90 leading-relaxed">
            Luxurious and timeless natural stone known for elegance, durability, and smooth finish
          </p>
        </div>
      </section>

      {/* About Marble */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#502b21] text-center">About Marble</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Marble is one of the most luxurious and timeless natural stones, known for its elegance, durability, 
                and smooth finish. Widely used in flooring, wall cladding, tiles, kitchen countertops, table tops, 
                bathroom vanities, and decorative elements, marble enhances both modern and traditional spaces with 
                unmatched sophistication.
              </p>
              <p className="mb-4">
                <strong className="text-[#502b21]">Makrana Marble</strong>, famous worldwide and used in the Taj Mahal, 
                is prized for its pure white appearance, strength, and long-lasting polish. Along with Makrana, there 
                are several varieties such as White Marble, Green Marble, and Pink Marble, each offering unique patterns 
                and veining that add natural beauty to interiors and exteriors.
              </p>
              <p className="mb-4">
                Marble is ideal for flooring, wall tiles, staircases, fireplaces, beds, tabletops, sculptures, 
                architectural décor and products like coasters, ash trays, lamps. White Marble brings a clean and 
                classic look, while Green Marble offers a fresh and bold appeal, perfect for accent walls, dining 
                tables, or statement décor.
              </p>
              <p>
                With its ability to withstand time and trends, marble remains the first choice for architects, designers, 
                and homeowners seeking a blend of luxury, durability, and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marble Collections */}
      <MarbleCollectionsSection />

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#502b21] text-center">Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Flooring",
                "Wall Cladding",
                "Kitchen Countertops",
                "Table Tops",
                "Bathroom Vanities",
                "Staircases",
                "Fireplaces",
                "Sculptures",
                "Decorative Elements",
                "Coasters",
                "Ash Trays",
                "Lamps"
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
            <h2 className="text-4xl font-bold mb-6 text-[#502b21]">Interested in Our Marble?</h2>
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

export default MarbleShop;
