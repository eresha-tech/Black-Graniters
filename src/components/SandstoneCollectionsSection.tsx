import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { sandstoneProducts } from '../data/products';
import { getImageUrl } from '@/lib/utils';

const SandstoneCollectionsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    // Scroll to top of the section when category changes
    if (ref.current) {
      (ref.current as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const categories = [
    { id: 'all', label: 'All Collections', color: 'from-[#502b21] to-[#7a3f2e]' },
    { id: 'warm', label: 'Warm Tones', color: 'from-yellow-400 to-red-500' },
    { id: 'cool', label: 'Cool Tones', color: 'from-gray-400 to-gray-600' },
    { id: 'specialty', label: 'Specialty', color: 'from-orange-500 to-red-600' },
  ];

  // Use the comprehensive sandstone products data
  const collections = sandstoneProducts.map((product, index) => ({
    id: index + 1,
    name: product.name,
    category: product.name.toLowerCase().includes('grey') || product.name.toLowerCase().includes('cobble') ? 'cool' :
              product.name.toLowerCase().includes('rainbow') || product.name.toLowerCase().includes('teakwood') ? 'specialty' : 'warm',
    description: product.description.length > 100 
      ? product.description.substring(0, 100) + '...'
      : product.description,
    link: product.link,
    gradient: product.gradient,
    images: product.images || [],
    hasImages: product.images && product.images.length > 0
  }));

  const filteredCollections = activeCategory === 'all'
    ? collections
    : collections.filter(c => c.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#F7A145]/10 text-[#502b21] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Heritage Sandstone Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Natural Sandstone Varieties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our authentic sandstone collection, perfect for heritage architecture, temples, and timeless construction projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Collections Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredCollections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white"
            >
              {/* Image or Background Gradient */}
              <div className="h-80 relative overflow-hidden">
                {collection.hasImages ? (
                  <>
                    <img 
                      src={getImageUrl(collection.images[Math.floor(Math.random() * collection.images.length)])} 
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </>
                ) : (
                  <>
                    <div className={`h-full bg-gradient-to-br ${collection.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </>
                )}
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div className="flex items-start justify-between">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium">
                      Natural Sandstone
                    </div>
                    <Sparkles className="w-6 h-6 text-[#F7A145]" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#F7A145] transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 line-clamp-3">
                      {collection.description}
                    </p>
                    
                    <Link
                      to={collection.link}
                      className="inline-flex items-center gap-2 bg-[#F7A145] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#e6913d] transition-colors group-hover:scale-105 transform duration-300"
                    >
                      Explore Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/shop/sandstone"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#502b21] to-[#7a3f2e] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View Complete Sandstone Collection
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SandstoneCollectionsSection;
