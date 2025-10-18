import { useState, useEffect, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Globe } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  project: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Katarina Novak',
      role: 'Import Manager',
      company: 'Slovakia',
      rating: 5,
      content: 'We recently imported granite slabs from Black Graniters, and the experience was seamless from start to finish. The quality of the material exceeded our expectations — perfectly polished, uniform, and exactly as described. Shipment was well-coordinated, and all documentation was handled professionally, saving us time and stress. Highly recommend them for reliability and transparency.',
      project: 'International Import, Slovakia'
    },
    {
      id: 2,
      name: 'Nguyen H.',
      role: 'Stone Importer',
      company: 'Vietnam',
      rating: 5,
      content: 'Black Graniters made our first import experience worry-free. The team was responsive, guided us through every step, and ensured the shipment reached on time. The granite arrived in flawless condition, packaged securely. Their attention to proper paperwork and export formalities was impressive. We felt supported throughout the process.',
      project: 'First Import Experience, Vietnam'
    },
    {
      id: 3,
      name: 'Johann M.',
      role: 'Stone Distributor',
      company: 'Germany',
      rating: 5,
      content: 'What stood out for us was not just the superior quality of granite, but the professionalism in handling logistics and export documentation. Everything was clear, timely, and hassle-free. Our consignment arrived without a single issue, which speaks volumes about their efficiency. We look forward to working with them again.',
      project: 'Commercial Import, Germany'
    },
    {
      id: 4,
      name: 'Li Wei',
      role: 'Natural Stone Importer',
      company: 'China',
      rating: 5,
      content: 'I\'ve been importing natural stones for years, and working with Black Graniters has been one of the smoothest experiences. The slabs were true to sample, the shipment was punctual, and every document was in order. It\'s rare to find this level of consistency and commitment in today\'s market.',
      project: 'Long-term Partnership, China'
    },
    {
      id: 5,
      name: 'David Kowalski',
      role: 'Construction Materials Buyer',
      company: 'Poland',
      rating: 5,
      content: 'Excellent service and even better products! The granite we imported was of outstanding quality, and the shipment process was remarkably well-managed. The documentation was accurate and delivered on time, making customs clearance easy. We appreciate their professionalism and would happily recommend them to others.',
      project: 'Quality Import, Poland'
    },
    {
      id: 6,
      name: 'Rajesh Malhotra',
      role: 'Architect',
      company: 'New Delhi, India',
      rating: 5,
      content: 'As an architect in Delhi, I often source natural stone for premium projects. Working with Black Graniters has been an absolute pleasure — the quality of granite was excellent, delivery was on schedule. Their professionalism gives me confidence to recommend them to clients.',
      project: 'Premium Architecture Projects, New Delhi'
    },
    {
      id: 7,
      name: 'Anita Deshpande',
      role: 'Project Manager',
      company: 'Mumbai, India',
      rating: 5,
      content: 'For our project in Mumbai, we sourced sandstone slabs and marble from Black Graniters and had a very smooth experience. The quality was outstanding and consistent, and the delivery was timely without any hassles. The overall process felt very professional yet personal. Would happily work with them again.',
      project: 'Premium Residential Project, Mumbai'
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 20 : -20
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 20 : -20
    })
  };

  const statsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-[#F7A145] fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-[#F7A145]/5 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#502b21]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F7A145]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#502b21]/5 to-[#F7A145]/5 rounded-full blur-3xl"></div>
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
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="bg-gradient-to-r from-[#502b21] to-[#7a3f2e] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
              Client Testimonials
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-5xl font-bold text-[#502b21] mb-6"
          >
            Trusted by Clients
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[#F7A145]"
            >
              {" "}Worldwide
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            From Slovakia to China, from Germany to India - discover why businesses across the globe
            choose Black Graniters for their premium natural stone requirements.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-[600px] flex items-center justify-center"
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                  rotateY: { duration: 0.3 }
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="backdrop-blur-xl bg-white/90 border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Quote Icon */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        <Quote className="h-8 w-8 text-[#F7A145]/30 mb-4 mx-auto md:mx-0" />
                      </motion.div>

                      {/* Rating */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.3 }}
                        className="flex justify-center md:justify-start space-x-1 mb-4"
                      >
                        {renderStars(testimonials[currentIndex].rating)}
                      </motion.div>

                      {/* Testimonial Content */}
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.3 }}
                        className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic"
                      >
                        "{testimonials[currentIndex].content}"
                      </motion.blockquote>

                      {/* Author Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.3 }}
                        className="space-y-2"
                      >
                        <h4 className="text-xl font-bold text-[#502b21]">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600 flex items-center justify-center md:justify-start gap-2">
                          <Globe className="w-4 h-4" />
                          {testimonials[currentIndex].role} • {testimonials[currentIndex].company}
                        </p>
                        <p className="text-sm text-[#F7A145] font-medium">
                          {testimonials[currentIndex].project}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex justify-center items-center space-x-6 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white/80 backdrop-blur-sm border border-[#502b21]/20 text-[#502b21] hover:bg-[#502b21] hover:text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronLeft className="h-5 w-5" />
            </motion.button>

            {/* Dots Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex space-x-2"
            >
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                      ? 'bg-[#F7A145] w-8 shadow-lg'
                      : 'bg-gray-300 hover:bg-[#F7A145]/50'
                    }`}
                />
              ))}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white/80 backdrop-blur-sm border border-[#502b21]/20 text-[#502b21] hover:bg-[#502b21] hover:text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronRight className="h-5 w-5" />
            </motion.button>
          </motion.div>

          {/* Auto-play indicator */}
          <div className="text-center mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-gray-500 hover:text-[#502b21] transition-colors duration-300"
            >
              {isAutoPlaying ? 'Pause' : 'Resume'} auto-play
            </motion.button>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-sm bg-white/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F7A145] mb-2">500+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-sm bg-white/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F7A145] mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-sm bg-white/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F7A145] mb-2">17+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-sm bg-white/50 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-3xl md:text-4xl font-bold text-[#F7A145] mb-2">200+</div>
            <div className="text-gray-600 font-medium">Granite Varieties</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
