import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { graniteProducts } from '../data/products';
import { getImageUrl } from '@/lib/utils';

const GraniteCollectionsSection = () => {
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
    { id: 'black', label: 'Black Granite', color: 'from-gray-800 to-black' },
    { id: 'white', label: 'White Granite', color: 'from-gray-200 to-gray-400' },
    { id: 'red', label: 'Red Granite', color: 'from-red-600 to-red-800' },
    { id: 'green', label: 'Green Granite', color: 'from-green-600 to-green-800' },
    { id: 'blue', label: 'Blue Granite', color: 'from-blue-600 to-blue-800' },
    { id: 'brown', label: 'Brown Granite', color: 'from-yellow-700 to-yellow-900' },
    { id: 'gold', label: 'Gold Granite', color: 'from-yellow-400 to-yellow-600' },
    { id: 'grey', label: 'Grey Granite', color: 'from-gray-400 to-gray-600' },
    { id: 'pink', label: 'Pink Granite', color: 'from-pink-400 to-pink-600' },
  ];

  // Use the comprehensive granite products data
  const collections = graniteProducts.map((product, index) => ({
    id: index + 1,
    name: product.name,
    category: product.subcategory || 'other',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F7A145]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#502b21]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F7A145] to-[#e89035] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg mb-6"
          >
            <Sparkles size={16} />
            Premium Collections
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#502b21] mb-6">
            Explore Our Granite Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover over 200 varieties of premium Indian granite, each with unique characteristics 
            and timeless beauty. From deep blacks to vibrant reds, find the perfect stone for your project.
          </p>
        </motion.div>

        {/* Category Filter with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg border-transparent`
                  : 'bg-white/70 text-gray-700 hover:bg-white/90 border border-white/30 hover:border-white/50'
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCollections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <Link to={collection.link}>
                {/* Glassmorphism Card */}
                <div className="relative backdrop-blur-xl bg-white/80 border border-white/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image or Gradient Header */}
                  <div className="h-48 relative overflow-hidden">
                    {collection.hasImages ? (
                      <>
                        <img 
                          src={getImageUrl(collection.images[Math.floor(Math.random() * collection.images.length)])} 
                          alt={collection.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </>
                    ) : (
                      <>
                        <div className={`h-full bg-gradient-to-br ${collection.gradient} relative`}>
                          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
                        </div>
                        {/* Animated Pattern Overlay for gradient backgrounds */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '30px 30px'
                          }}></div>
                        </div>
                      </>
                    )}
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="absolute top-4 right-4 backdrop-blur-sm bg-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white border border-white/30"
                    >
                      Premium
                    </motion.div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#502b21] mb-3 group-hover:text-[#F7A145] transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {collection.description}
                    </p>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-[#F7A145] font-semibold group-hover:gap-3 transition-all">
                      View Details
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#F7A145]/10 to-transparent rounded-tl-full"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop/granite"
            className="group inline-flex items-center gap-3 bg-[#502b21] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7A145] transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            View All Granite Collections
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GraniteCollectionsSection;
