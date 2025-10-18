import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { otherProducts } from '../data/products';
import { getImageUrl } from '@/lib/utils';

const OtherProductsCollectionsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Scroll to top of the section when category changes
    const element = document.getElementById('other-products-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = [
    { id: 'all', label: 'All Products', color: 'from-[#502b21] to-[#7a3f2e]' },
    { id: 'tombstone', label: 'Tombstones & Memorials', color: 'from-gray-700 to-gray-900' },
    { id: 'sculpture', label: 'Sculptures & Art', color: 'from-amber-600 to-amber-800' },
    { id: 'washbasin', label: 'Wash Basins & Bath Tubs', color: 'from-blue-500 to-blue-700' },
    { id: 'countertop', label: 'Countertops', color: 'from-green-600 to-green-800' },
    { id: 'tabletop', label: 'Table Tops', color: 'from-purple-600 to-purple-800' },
    { id: 'decorative', label: 'Coasters & Decorative', color: 'from-pink-600 to-pink-800' },
    { id: 'lamp', label: 'Stone Lamps', color: 'from-yellow-600 to-yellow-800' },
    { id: 'vase', label: 'Vases & Stands', color: 'from-indigo-600 to-indigo-800' },
    { id: 'balustrade', label: 'Balustrades', color: 'from-gray-600 to-gray-800' },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? otherProducts 
    : otherProducts.filter(product => product.category === activeCategory);

  return (
    <section id="other-products-section" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Other Stone Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of handcrafted stone products, from functional items to decorative pieces, 
            each showcasing the natural beauty and durability of premium stones.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={`${activeCategory}-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Product Image/Gradient */}
                  <div className="relative">
                    {product.images && product.images.length > 0 ? (
                      <div className="h-64 overflow-hidden">
                        <img 
                          src={getImageUrl(product.images[Math.floor(Math.random() * product.images.length)])} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                    ) : (
                      <div className={`h-64 bg-gradient-to-br ${product.gradient} relative`}>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#502b21] rounded-full text-sm font-medium">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                    </div>

                    {/* Multiple Images Indicator */}
                    {product.images && product.images.length > 1 && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-[#F7A145] text-white rounded-full text-xs font-medium">
                          +{product.images.length - 1}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#502b21] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description.length > 100 
                        ? product.description.substring(0, 100) + '...'
                        : product.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="px-2 py-1 bg-[#F7A145]/10 text-[#502b21] rounded text-xs font-medium">
                            +{product.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Materials for Other Products */}
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-2">Available in:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.materials.slice(0, 3).map((material, idx) => (
                          <span key={idx} className="px-2 py-1 bg-[#502b21]/10 text-[#502b21] rounded-full text-xs">
                            {material}
                          </span>
                        ))}
                        {product.materials.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                            +{product.materials.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={product.link}
                      className="block w-full bg-gradient-to-r from-[#502b21] to-[#7a3f2e] text-white text-center py-3 rounded-xl font-semibold hover:from-[#7a3f2e] hover:to-[#502b21] transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8l-4 4m0 0l-4-4m4 4V3" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
            <p className="text-gray-500">Try selecting a different category to see available products.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#502b21] to-[#7a3f2e] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
            <p className="text-lg mb-6 text-white/90">
              We specialize in creating bespoke stone products tailored to your specific requirements. 
              From unique sculptures to custom architectural elements, our skilled artisans can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F7A145] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#e6913d] transition-colors"
              >
                Discuss Your Project
              </Link>
              <a
                href="https://wa.me/919700159159"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherProductsCollectionsSection;
