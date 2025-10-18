import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';
import { quartziteProducts } from '@/data/products';

const QuartziteShop = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get products by subcategory from the products data
  const quartziteByColor = {
    white: quartziteProducts.filter(product => product.subcategory === 'white').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    grey: quartziteProducts.filter(product => product.subcategory === 'grey').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    blue: quartziteProducts.filter(product => product.subcategory === 'blue').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    golden: quartziteProducts.filter(product => product.subcategory === 'golden').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    }))
  };

  const filters = [
    { id: 'all', label: 'All Quartzite' },
    { id: 'white', label: 'White Quartzite' },
    { id: 'grey', label: 'Grey Quartzite' },
    { id: 'blue', label: 'Blue Quartzite' },
    { id: 'golden', label: 'Golden Quartzite' }
  ];

  const getFilteredProducts = () => {
    if (activeFilter === 'all') {
      return {
        white: quartziteByColor.white,
        grey: quartziteByColor.grey,
        blue: quartziteByColor.blue,
        golden: quartziteByColor.golden
      };
    } else {
      return { [activeFilter]: quartziteByColor[activeFilter as keyof typeof quartziteByColor] };
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Quartzite Collection</h1>
          <p className="text-xl text-center max-w-4xl mx-auto text-white/90 leading-relaxed">
            Extremely durable metamorphic stone with superior performance and natural beauty
          </p>
        </div>
      </section>

      {/* About Quartzite */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#502b21] text-center">About Quartzite</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Quartzite is a hard, non-porous metamorphic rock formed from sandstone that has been subjected to heat 
                and pressure. Known for its exceptional durability and resistance to heat, acid, and scratches, quartzite 
                offers the beauty of natural stone with superior performance characteristics that surpass many other materials.
              </p>
              <p className="mb-4">
                <strong className="text-[#502b21]">Premium Quartzite</strong> is quarried primarily in Brazil and India, 
                featuring stunning natural patterns and colors including pristine whites, elegant greys, exotic blues, and 
                warm golden tones. Each slab showcases unique veining and crystalline structures that create breathtaking 
                visual appeal.
              </p>
              <p className="mb-4">
                Quartzite is ideal for kitchen countertops, bathroom vanities, flooring, wall cladding, and high-traffic 
                commercial applications. Its non-porous nature makes it highly resistant to staining, while its hardness 
                ensures long-lasting beauty with minimal maintenance requirements.
              </p>
              <p>
                With its combination of natural beauty, exceptional durability, and low maintenance requirements, quartzite 
                is the preferred choice for architects, designers, and homeowners seeking premium performance and timeless elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#502b21] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* White Quartzite */}
            {filteredProducts.white && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">White Quartzite</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.white.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/quartzite/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center overflow-hidden">
                            <img
                              src={getImageUrl(product.image)}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#502b21] group-hover:text-[#F7A145] transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center text-[#502b21] font-semibold group-hover:text-[#F7A145] transition-colors">
                              <span>View Details</span>
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Grey Quartzite */}
            {filteredProducts.grey && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Grey Quartzite</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.grey.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/quartzite/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-500 flex items-center justify-center overflow-hidden">
                            <img
                              src={getImageUrl(product.image)}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#502b21] group-hover:text-[#F7A145] transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center text-[#502b21] font-semibold group-hover:text-[#F7A145] transition-colors">
                              <span>View Details</span>
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Blue Quartzite */}
            {filteredProducts.blue && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Blue Quartzite</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.blue.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/quartzite/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-blue-200 to-blue-600 flex items-center justify-center overflow-hidden">
                            <img
                              src={getImageUrl(product.image)}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#502b21] group-hover:text-[#F7A145] transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center text-[#502b21] font-semibold group-hover:text-[#F7A145] transition-colors">
                              <span>View Details</span>
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Golden Quartzite */}
            {filteredProducts.golden && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Golden Quartzite</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.golden.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/quartzite/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-yellow-200 to-yellow-500 flex items-center justify-center overflow-hidden">
                            <img
                              src={getImageUrl(product.image)}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 text-[#502b21] group-hover:text-[#F7A145] transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center text-[#502b21] font-semibold group-hover:text-[#F7A145] transition-colors">
                              <span>View Details</span>
                              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#502b21] text-center">Applications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Kitchen Countertops",
                "Bathroom Vanities",
                "Flooring",
                "Wall Cladding",
                "Kitchen Islands",
                "Bathroom Surfaces",
                "Commercial Spaces",
                "Exterior Cladding",
                "High-traffic Areas",
                "Luxury Kitchens",
                "Feature Walls",
                "Statement Countertops"
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
            <h2 className="text-4xl font-bold mb-6 text-[#502b21]">Interested in Our Quartzite?</h2>
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

export default QuartziteShop;
