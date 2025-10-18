import { Link } from 'react-router-dom';

const OthersShop = () => {
  const onyxProducts = [
    { name: "White Onyx", image: "White Onyx.png" },
    { name: "Green Onyx", image: "Green Onyx.png" },
    { name: "Honey Onyx", image: "Honey Onyx.png" }
  ];

  const quartziteProducts = [
    { name: "White Quartzite", image: "White Quartzite.png" },
    { name: "Grey Quartzite", image: "Grey Quartzite.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Onyx & Quartzite</h1>
          <p className="text-xl text-center max-w-4xl mx-auto text-white/90 leading-relaxed">
            Unique and exotic natural stones for distinctive applications
          </p>
        </div>
      </section>

      {/* Onyx Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-[#502b21]">Onyx</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                Onyx is a stunning translucent natural stone known for its unique banding patterns and ability to be 
                backlit, creating dramatic visual effects. Perfect for feature walls, countertops, bar tops, and 
                decorative applications where you want to make a bold statement. Its luminous quality and rich colors 
                make it a favorite for luxury interiors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {onyxProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-64 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={`/src/assets/Product images/Onyx/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#502b21]">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Onyx Applications */}
            <div className="bg-gray-50 rounded-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-[#502b21] mb-6">Onyx Applications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Feature Walls", "Countertops", "Bar Tops", "Backlighting", "Decorative Panels", "Luxury Interiors", "Reception Desks", "Statement Pieces"].map((app, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow text-center">
                    <p className="text-gray-700 font-semibold text-sm">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quartzite Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-6 text-[#502b21]">Quartzite</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
                Quartzite is an extremely hard and durable natural stone formed from sandstone through intense heat 
                and pressure. Known for its strength, scratch resistance, and beautiful crystalline appearance, 
                quartzite is ideal for high-traffic areas and surfaces that need to withstand heavy use. It combines 
                the beauty of marble with the durability of granite.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {quartziteProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src={`/src/assets/Product images/Quartzite/${product.image}`}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#502b21]">{product.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Quartzite Applications */}
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-[#502b21] mb-6">Quartzite Applications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Kitchen Countertops", "Flooring", "Wall Cladding", "High-Traffic Areas", "Outdoor Applications", "Bathroom Vanities", "Fireplace Surrounds", "Commercial Spaces"].map((app, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow text-center">
                    <p className="text-gray-700 font-semibold text-sm">{app}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#502b21]">Interested in Onyx or Quartzite?</h2>
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

export default OthersShop;
