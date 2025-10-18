import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Shield, Award, Globe, ArrowRight } from 'lucide-react';

const QualityProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Sourced from the finest quarries across India with strict quality control",
      color: "from-[#F7A145] to-[#e89035]"
    },
    {
      icon: Shield,
      title: "Durability",
      description: "Natural stones built to last generations with minimal maintenance",
      color: "from-[#502b21] to-[#7a3f2e]"
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Skilled artisans ensuring perfect finishing and precision",
      color: "from-[#F7A145] to-[#e89035]"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Trusted by clients in 100+ countries worldwide",
      color: "from-[#502b21] to-[#7a3f2e]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F7A145]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#502b21]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-gradient-to-r from-[#F7A145] to-[#e89035] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
              Why Choose Us
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#502b21] mb-6">
            Unmatched Quality & Excellence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 17 years, we've been delivering premium natural stones that combine 
            timeless beauty with exceptional durability. Our commitment to quality is unwavering.
          </p>
        </motion.div>

        {/* Features Grid with Glassmorphism */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative backdrop-blur-lg bg-white/70 border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Icon with Gradient Background */}
                  <div className="relative mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#502b21] mb-3 group-hover:text-[#F7A145] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Section with Glassmorphism */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative backdrop-blur-xl bg-gradient-to-r from-[#502b21] to-[#7a3f2e] rounded-3xl p-12 shadow-2xl overflow-hidden"
        >
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-2 text-[#F7A145]">17+</div>
              <div className="text-lg text-white/90">Years of Excellence</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="text-5xl font-bold mb-2 text-[#F7A145]">100+</div>
              <div className="text-lg text-white/90">Countries Served</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="text-5xl font-bold mb-2 text-[#F7A145]">200+</div>
              <div className="text-lg text-white/90">Granite Varieties</div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your space with premium natural stones?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/shop"
              className="group bg-[#502b21] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7A145] transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2"
            >
              Explore Our Collection
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#502b21] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-[#502b21] shadow-lg hover:shadow-2xl"
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityProductsSection;
