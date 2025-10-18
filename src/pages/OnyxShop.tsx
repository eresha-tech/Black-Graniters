import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';
import { onyxProducts } from '@/data/products';

const OnyxShop = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get products by subcategory from the products data
  const onyxByColor = {
    white: onyxProducts.filter(product => product.subcategory === 'white').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    green: onyxProducts.filter(product => product.subcategory === 'green').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    honey: onyxProducts.filter(product => product.subcategory === 'honey').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    red: onyxProducts.filter(product => product.subcategory === 'red').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    }))
  };

  const filters = [
    { id: 'all', label: 'All Onyx' },
    { id: 'white', label: 'White Onyx' },
    { id: 'green', label: 'Green Onyx' },
    { id: 'honey', label: 'Honey Onyx' },
    { id: 'red', label: 'Red Onyx' }
  ];

  const getFilteredProducts = () => {
    if (activeFilter === 'all') {
      return {
        white: onyxByColor.white,
        green: onyxByColor.green,
        honey: onyxByColor.honey,
        red: onyxByColor.red
      };
    } else {
      return { [activeFilter]: onyxByColor[activeFilter as keyof typeof onyxByColor] };
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Onyx Collection</h1>
          <p className="text-xl text-center max-w-4xl mx-auto text-white/90 leading-relaxed">
            Translucent natural stone with stunning backlit capabilities, perfect for luxury interiors
          </p>
        </div>
      </section>

      {/* About Onyx */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-[#502b21] text-center">About Onyx</h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                Onyx is a translucent, crystalline form of limestone that creates breathtaking visual effects when backlit. 
                Known for its luminous appearance and ability to transmit light, onyx is the perfect choice for creating 
                stunning focal points in luxury interiors, hotels, spas, and high-end residential projects.
              </p>
              <p className="mb-4">
                <strong className="text-[#502b21]">Premium Quality Onyx</strong> is quarried primarily in Pakistan, Iran, 
                and Mexico, featuring flowing veins in various colors including white with honey and amber tones, rich greens, 
                warm golds, and dramatic reds. Each slab is unique, offering natural patterns that create mesmerizing effects 
                when illuminated.
              </p>
              <p className="mb-4">
                Onyx is ideal for feature walls, backlit panels, reception desks, bar tops, bathroom vanities, and artistic 
                installations. Its translucent properties make it perfect for creating ambient lighting effects, while its 
                natural beauty adds sophistication and luxury to any space.
              </p>
              <p>
                With its unique combination of natural beauty and light-transmitting properties, onyx remains the premier 
                choice for architects and designers seeking to create dramatic, luxurious environments.
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
            {/* White Onyx */}
            {filteredProducts.white && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">White Onyx</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.white.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/onyx/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-amber-50 to-yellow-100 flex items-center justify-center overflow-hidden">
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

            {/* Green Onyx */}
            {filteredProducts.green && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Green Onyx</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.green.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/onyx/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-green-200 to-green-500 flex items-center justify-center overflow-hidden">
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

            {/* Honey Onyx */}
            {filteredProducts.honey && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Honey Onyx</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.honey.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/onyx/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center overflow-hidden">
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

            {/* Red Onyx */}
            {filteredProducts.red && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Red Onyx</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.red.map((product, index) => {
                    return (
                      <Link
                        key={index}
                        to={`/shop/onyx/${product.id}`}
                        className="group"
                      >
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                          <div className="h-64 bg-gradient-to-br from-red-300 to-red-600 flex items-center justify-center overflow-hidden">
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
                "Feature Walls",
                "Backlit Panels",
                "Reception Desks",
                "Bar Tops",
                "Bathroom Vanities",
                "Luxury Interiors",
                "Artistic Installations",
                "Spa Features",
                "Statement Pieces",
                "Accent Lighting",
                "Decorative Elements",
                "Luxury Retail"
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
            <h2 className="text-4xl font-bold mb-6 text-[#502b21]">Interested in Our Onyx?</h2>
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

export default OnyxShop;
