import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

const PilotBlack = () => {
  const features = [
    "Deep, jet-black surface with fine-grained structure",
    "Exceptional density and durability",
    "Mirror-like polish finish",
    "High compressive strength",
    "Excellent heat resistance",
    "Scratch and stain resistant",
    "Low porosity",
    "Suitable for indoor and outdoor applications"
  ];

  const applications = [
    "Kitchen Countertops",
    "Flooring",
    "Wall Cladding",
    "Staircases",
    "Monuments",
    "Exterior Facades",
    "Commercial Spaces",
    "Luxury Interiors"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/shop" className="hover:text-[#502b21]">Shop</Link>
            <span>/</span>
            <Link to="/shop/granite" className="hover:text-[#502b21]">Granite</Link>
            <span>/</span>
            <span className="text-[#502b21] font-semibold">Pilot Black</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link 
            to="/shop/granite"
            className="inline-flex items-center gap-2 text-[#502b21] hover:text-[#F7A145] mb-8 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Granite Collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Image Gallery */}
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
                <img
                  src={getImageUrl('product-images/Granite/Premium/Pilot Black/Pilot black.webp')}
                  alt="Pilot Black Granite"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-5xl font-bold text-[#502b21] mb-4">Pilot Black Granite</h1>
              <p className="text-xl text-gray-600 mb-8">Premium Quality Natural Stone from India</p>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Pilot Black Granite is a premium-quality natural stone admired for its deep, jet-black surface 
                  with a fine-grained structure. Quarried in India, this granite is celebrated for its exceptional 
                  density, durability, and ability to achieve a mirror-like polish, making it ideal for both indoor 
                  and outdoor applications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Its uniform texture, high compressive strength, and resistance to heat, scratches, and stains 
                  make it a reliable choice for kitchen countertops, flooring, wall cladding, staircases, monuments, 
                  and exterior facades. The stone's timeless elegance ensures it complements both modern and classic 
                  designs, adding a bold, luxurious touch to any space.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With its balance of aesthetic appeal and technical performance, Pilot Black Granite remains a top 
                  choice for homeowners, architects, and designers seeking sophistication that lasts for generations.
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#502b21] mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Check className="text-[#F7A145] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#502b21] mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-[#502b21] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7A145] transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Request a Quote
                </Link>
                <a
                  href="https://wa.me/919700159159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#502b21] mb-8 text-center">Why Choose Pilot Black?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#502b21] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">💎</span>
                </div>
                <h3 className="text-xl font-bold text-[#502b21] mb-2">Premium Quality</h3>
                <p className="text-gray-700">Exceptional density and fine-grained structure</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#502b21] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✨</span>
                </div>
                <h3 className="text-xl font-bold text-[#502b21] mb-2">Mirror Finish</h3>
                <p className="text-gray-700">Achieves stunning mirror-like polish</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#502b21] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-[#502b21] mb-2">Long Lasting</h3>
                <p className="text-gray-700">Superior durability for generations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PilotBlack;
