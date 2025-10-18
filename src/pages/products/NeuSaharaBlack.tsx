import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

const NeuSaharaBlack = () => {
  const features = [
    "Rich dark background with silvery mineral specks",
    "Distinctive starry-night appeal",
    "Exceptional durability",
    "Low porosity",
    "Withstands wear, heat, and weathering",
    "Fine-grained texture",
    "High-gloss polish capability",
    "Retains elegance for decades"
  ];

  const applications = [
    "Monuments",
    "Countertops",
    "Flooring",
    "High-end Architectural Projects",
    "Luxury Interiors",
    "Outdoor Installations",
    "Wall Cladding",
    "Premium Spaces"
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
            <span className="text-[#502b21] font-semibold">Neu Sahara Black</span>
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
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
                <img
                  src={getImageUrl('product-images/Granite/Premium/New Sahara Black/Neu Sahara Granite Washroom.webp')}
                  alt="Neu Sahara Black Granite"
                  className="w-full h-full object-cover"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-[#502b21] mb-4">Neu Sahara Black Granite</h1>
              <p className="text-xl text-gray-600 mb-8">Starry-Night Appeal with Timeless Elegance</p>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Neu Sahara granite is a premium variety of black granite admired for its rich dark background 
                  highlighted with fine silvery mineral specks, giving it a distinctive starry-night appeal.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Known for its durability and low porosity, it withstands wear, heat, and weathering, making it 
                  highly versatile for both indoor luxury spaces and outdoor installations. Its fine-grained texture 
                  allows a high-gloss polish that enhances depth and shine, ensuring it retains elegance for decades.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a timeless balance of strength and sophistication, Neu Sahara granite is especially favored 
                  for monuments, countertops, flooring, and high-end architectural projects.
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

export default NeuSaharaBlack;
