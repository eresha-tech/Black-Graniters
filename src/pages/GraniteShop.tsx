import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';
import { graniteProducts } from '@/data/products';

const GraniteShop = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get premium products from the products data
  const premiumProducts = graniteProducts.filter(product => 
    ['black-galaxy', 'titanium-black', 'magma-black', 'marquini-black', 'z-brown'].includes(product.id)
  ).map(product => ({
    name: product.name,
    slug: product.id,
    description: product.description,
    category: "premium",
    image: product.images?.[0] || '',
    images: product.images || []
  }));

  // Get products by subcategory from the products data
  const granitesByColor = {
    red: graniteProducts.filter(product => product.subcategory === 'red').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    white: graniteProducts.filter(product => product.subcategory === 'white').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    green: graniteProducts.filter(product => product.subcategory === 'green').map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    })),
    brown_blue: graniteProducts.filter(product => 
      ['brown', 'blue'].includes(product.subcategory || '')
    ).map(product => ({
      name: product.name,
      image: product.images?.[0] || '',
      id: product.id
    }))
  };

  const filters = [
    { id: 'all', label: 'All Granite' },
    { id: 'premium', label: 'Premium Products' },
    { id: 'red', label: 'Red Granite' },
    { id: 'white', label: 'White Granite' },
    { id: 'green', label: 'Green Granite' },
    { id: 'brown_blue', label: 'Brown & Blue' }
  ];

  const getFilteredProducts = () => {
    if (activeFilter === 'all') {
      return {
        premium: premiumProducts,
        red: granitesByColor.red,
        white: granitesByColor.white,
        green: granitesByColor.green,
        brown_blue: granitesByColor.brown_blue
      };
    } else if (activeFilter === 'premium') {
      return { premium: premiumProducts };
    } else {
      return { [activeFilter]: granitesByColor[activeFilter as keyof typeof granitesByColor] };
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Granite Collection</h1>
          <p className="text-xl text-center max-w-4xl mx-auto text-white/90 leading-relaxed">
            India is one of the world's top producers and exporters of granite, valued for its durability, 
            timeless beauty, and wide range of colors. Explore our premium collection sourced from the finest quarries.
          </p>
        </div>
      </section>

      {/* About Indian Granite */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Formed over millions of years, Indian granite is known for its high density, fine to coarse grains, 
              and excellent polish retention, making it ideal for countertops, flooring, wall cladding, monuments, 
              and exterior projects. With over 200 varieties available in black, red, white, blue, green, brown, 
              and multicolored options, Indian granite is globally recognized for its strength, heat resistance, 
              scratch resistance, and low porosity.
            </p>
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
            {/* Premium Products */}
            {filteredProducts.premium && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Premium Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProducts.premium.map((product, index) => (
                    <Link
                      key={index}
                      to={`/shop/granite/${product.slug}`}
                      className="group"
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
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
                          <h3 className="text-2xl font-bold text-[#502b21] mb-3 group-hover:text-[#F7A145] transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {product.description}
                          </p>
                          <div className="flex items-center gap-2 text-[#F7A145] font-semibold group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Red Granite */}
            {filteredProducts.red && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Red Granite</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.red.map((product, index) => {
                    const productSlug = product.id || product.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link
                        key={index}
                        to={`/shop/granite/${productSlug}`}
                        className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="h-48 bg-gradient-to-br from-red-900 to-red-700 flex items-center justify-center overflow-hidden relative">
                          <img
                            src={getImageUrl(product.image)}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-[#502b21] group-hover:text-[#F7A145] transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 text-[#F7A145] font-semibold mt-2 group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* White Granite */}
            {filteredProducts.white && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">White Granite</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.white.map((product, index) => {
                    const productSlug = product.id || product.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link
                        key={index}
                        to={`/shop/granite/${productSlug}`}
                        className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center overflow-hidden relative">
                          <img
                            src={getImageUrl(product.image)}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-[#502b21] group-hover:text-[#F7A145] transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 text-[#F7A145] font-semibold mt-2 group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Green Granite */}
            {filteredProducts.green && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Green Granite</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.green.map((product, index) => {
                    const productSlug = product.id || product.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link
                        key={index}
                        to={`/shop/granite/${productSlug}`}
                        className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="h-48 bg-gradient-to-br from-green-900 to-green-700 flex items-center justify-center overflow-hidden relative">
                          <img
                            src={getImageUrl(product.image)}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-[#502b21] group-hover:text-[#F7A145] transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 text-[#F7A145] font-semibold mt-2 group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Brown & Blue Granite */}
            {filteredProducts.brown_blue && (
              <div>
                <h2 className="text-4xl font-bold mb-8 text-[#502b21]">Brown & Blue Granite</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredProducts.brown_blue.map((product, index) => {
                    const productSlug = product.id || product.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <Link
                        key={index}
                        to={`/shop/granite/${productSlug}`}
                        className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                      >
                        <div className="h-48 bg-gradient-to-br from-blue-900 to-brown-700 flex items-center justify-center overflow-hidden relative">
                          <img
                            src={getImageUrl(product.image)}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold text-[#502b21] group-hover:text-[#F7A145] transition-colors">{product.name}</h3>
                          <div className="flex items-center gap-2 text-[#F7A145] font-semibold mt-2 group-hover:gap-3 transition-all">
                            View Details
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
    </div>
  );
};

export default GraniteShop;
