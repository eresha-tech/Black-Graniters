import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import QualityProductsSection from './components/QualityProductsSection';
import OurStorySection from './components/OurStorySection';
import GraniteCollectionsSection from './components/GraniteCollectionsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactCTASection from './components/ContactCTASection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <QualityProductsSection />
      <OurStorySection />
      <GraniteCollectionsSection />
      <TestimonialsSection />
      <ContactCTASection />
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App