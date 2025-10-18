import { motion } from 'framer-motion';
import HeroCarousel from '../components/HeroCarousel';
import QualityProductsSection from '../components/QualityProductsSection';
import OurStorySection from '../components/OurStorySection';
import GraniteCollectionsSection from '../components/GraniteCollectionsSection';
import MarbleCollectionsSection from '../components/MarbleCollectionsSection';
import SandstoneCollectionsSection from '../components/SandstoneCollectionsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import RequestQuoteSection from '../components/RequestQuoteSection';
import ContactCTASection from '../components/ContactCTASection';

const Home = () => {
  // Animation variants for smooth fade-in effects
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {/* Hero section - no animation needed as it has its own */}
      <HeroCarousel />

      {/* Animated sections with staggered delays */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <QualityProductsSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <OurStorySection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <GraniteCollectionsSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <MarbleCollectionsSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <SandstoneCollectionsSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        <RequestQuoteSection />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        <ContactCTASection />
      </motion.div>
    </>
  );
};

export default Home;
