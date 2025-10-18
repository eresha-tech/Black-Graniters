import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

const SaharaBlack = () => {
  const features = [
    "Gabbroic intrusive rock of Precambrian era",
    "Fine-grained to glassy texture",
    "Composed of plagioclase feldspar and pyroxenes",
    "Deep black tone with dark minerals",
    "High density and durability",
    "Excellent polish retention",
    "Resistant to weathering, acids, and stains",
    "Uniform black finish"
  ];

  const applications = [
    "Construction",
    "Monuments",
    "Luxury Interiors",
    "Flooring",
    "Wall Cladding",
    "Countertops",
    "Memorials",
    "Exterior Applications"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/shop" className="hover:text-[#502b21]">Shop</Link>
            <span>/</span>
            <Link to="/shop/granite" className="hover:text-[#502b21]">Granite</Link>
            <span>/</span>
            <span className="text-[#502b21] font-semibold">Sahara Black</span>
          </div>
        </div>
      </div>

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
            <div>
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
                <img
                  src={getImageUrl('product-images/Granite/Ask Balck granite.webp')}
                  alt="Sahara Black Granite"
                  className="w-full h-full object-cover"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-[#502b21] mb-4">Sahara Black Granite</h1>
              <p className="text-xl text-gray-600 mb-8">Geological Marvel from the Precambrian Era</p>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Sahara Black Granite, geologically a gabbroic intrusive rock of the Precambrian era, is often 
                  associated with dykes and schist formations. It typically displays a fine-grained to glassy texture, 
                  composed mainly of plagioclase feldspar, pyroxenes, and other dark minerals that give it its deep 
                  black tone.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Known for its high density, durability, and excellent polish, it is widely used in construction, 
                  monuments, and luxury interiors. Its resistance to weathering, acids, and stains makes it suitable 
                  for both exterior and interior applications, while its uniform black finish adds elegance and 
                  sophistication.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Major deposits occur in southern India, making it a globally recognized material for flooring, 
                  cladding, countertops, and memorials.
                </p>
              </div>

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

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#502b21] mb-4">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {applications.map((app, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

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
    </div>
  );
};

export default SaharaBlack;
