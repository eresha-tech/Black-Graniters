import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Gallery from './pages/Gallery';
import Shop from './pages/Shop';
import GraniteShop from './pages/GraniteShop';
import SandstoneShop from './pages/SandstoneShop';
import MarbleShop from './pages/MarbleShop';
import OnyxShop from './pages/OnyxShop';
import QuartziteShop from './pages/QuartziteShop';
import OthersShop from './pages/OthersShop';
import OtherProductsShop from './pages/OtherProductsShop';

// Product Pages
import DynamicProductPage from './pages/DynamicProductPage';
import WhiteMarbleCollection from './pages/WhiteMarbleCollection';
// Legacy product pages (keeping for backward compatibility)
import PilotBlack from './pages/products/PilotBlack';
import SaharaBlack from './pages/products/SaharaBlack';
import NeuSaharaBlack from './pages/products/NeuSaharaBlack';
import FortuneRed from './pages/products/FortuneRed';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/gallery" element={<Gallery />} />
            
            {/* Shop Routes */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/granite" element={<GraniteShop />} />
            <Route path="/shop/sandstone" element={<SandstoneShop />} />
            <Route path="/shop/marble" element={<MarbleShop />} />
            <Route path="/shop/onyx" element={<OnyxShop />} />
            <Route path="/shop/quartzite" element={<QuartziteShop />} />
            <Route path="/shop/others" element={<OthersShop />} />
            <Route path="/shop/other-products" element={<OtherProductsShop />} />
            
            {/* Product Detail Routes */}
            {/* Dynamic routes for all products */}
            <Route path="/shop/:category/:productId" element={<DynamicProductPage />} />
            
            {/* Special collection pages */}
            <Route path="/shop/marble/white-marble-collection" element={<WhiteMarbleCollection />} />
            
            {/* Legacy product routes (keeping for backward compatibility) */}
            <Route path="/shop/granite/pilot-black" element={<PilotBlack />} />
            <Route path="/shop/granite/sahara-black" element={<SaharaBlack />} />
            <Route path="/shop/granite/neu-sahara-black" element={<NeuSaharaBlack />} />
            <Route path="/shop/granite/fortune-red" element={<FortuneRed />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  );
};

export default App;