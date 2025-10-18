import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

const OurStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#502b21]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F7A145]/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            variants={leftVariants} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-[#502b21] to-[#7a3f2e] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                Our Story
              </span>
            </motion.div>

            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-[#502b21] leading-tight">
              17 Years of Passion for
              <span className="text-[#F7A145]"> Indian Natural Stones</span>
            </h2>

            {/* Description with Glassmorphism */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="backdrop-blur-lg bg-gradient-to-br from-[#F7A145]/10 to-[#502b21]/10 border border-[#F7A145]/20 rounded-2xl p-6 shadow-xl"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                Seventeen years ago, an enduring admiration for monumental granite structures such as Bengaluru's Vidhan
                Soudha and the Brihadeeshwar Temple sparked a deep fascination with Indian Granite. This passion led to the
                founding of Graniters in 2012, a company dedicated to the business of premium black granite from India. Our
                journey began with the opening of our first quarry in Karnataka's Coorg District, driven by a commitment to deliver
                authentic, world-class materials to the global market.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-sm bg-white/80 border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl font-bold text-[#F7A145] mb-1">2012</div>
                <div className="text-sm text-gray-600">Founded</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="backdrop-blur-sm bg-white/80 border border-gray-200 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-3xl font-bold text-[#F7A145] mb-1">2021</div>
                <div className="text-sm text-gray-600">Expanded</div>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 bg-[#502b21] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7A145] transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                Read Full Story
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Image Gallery */}
          <motion.div 
            variants={rightVariants} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image with Glassmorphism Frame */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#F7A145]/20 to-[#502b21]/20 rounded-3xl blur-xl"></div>
              
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src={getImageUrl('home/Tiles under transportation.webp')}
                  alt="Exquisite Inlay Table"
                  className="w-full h-auto object-cover"
                />
                
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="backdrop-blur-xl bg-white/90 rounded-xl p-4 shadow-xl border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-gray-600 mb-1">Handcrafted Excellence</div>
                        <div className="text-lg font-bold text-[#502b21]">Marble Inlay Artistry</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F7A145] to-[#e89035] flex items-center justify-center shadow-lg">
                        <Play className="text-white" size={20} fill="white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 1 }}
                className="absolute -left-6 top-1/4 backdrop-blur-xl bg-white/90 rounded-xl p-4 shadow-xl border border-white/20 hidden lg:block"
              >
                <div className="text-2xl font-bold text-[#502b21] mb-1">5+</div>
                <div className="text-sm text-gray-600 whitespace-nowrap">States Sourced</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-6 top-2/3 backdrop-blur-xl bg-white/90 rounded-xl p-4 shadow-xl border border-white/20 hidden lg:block"
              >
                <div className="text-2xl font-bold text-[#502b21] mb-1">100%</div>
                <div className="text-sm text-gray-600 whitespace-nowrap">Quality Assured</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default OurStorySection;
