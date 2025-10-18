import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

const FortuneRed = () => {
  const features = [
    "Vibrant red background",
    "Interlaced with black, grey, and pink patterns",
    "Brings warmth and energy to designs",
    "High hardness and durability",
    "Low porosity",
    "Weather resistant",
    "Suitable for heavy wear",
    "Creates sense of grandeur"
  ];

  const applications = [
    "Luxurious Flooring",
    "Wall Cladding",
    "Kitchen Countertops",
    "Staircases",
    "Outdoor Paving",
    "Decorative Features",
    "Residential Projects",
    "Commercial Spaces"
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
            <span className="text-[#502b21] font-semibold">Fortune Red</span>
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
              <div className="bg-gradient-to-br from-red-900 via-red-700 to-red-800 rounded-lg overflow-hidden shadow-2xl aspect-square flex items-center justify-center">
                <img
                  src={getImageUrl('product-images/Granite/red-granite/Z Brown Red.webp')}
                  alt="Fortune Red Granite"
                  className="w-full h-full object-cover"
                  onError={(e) => e.currentTarget.style.display = 'none'}
                />
              </div>
            </div>

            <div>
              <h1 className="text-5xl font-bold text-[#502b21] mb-4">Fortune Red Granite</h1>
              <p className="text-xl text-gray-600 mb-8">Bold Character with Vibrant Energy</p>

              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Fortune Red Granite is a striking natural stone, instantly recognizable for its vibrant red 
                  background interlaced with black, grey, and pink mineral patterns. This unique color combination 
                  brings warmth, energy, and a bold character to any design.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Quarried in India, the stone is valued not only for its beauty but also for its hardness, low 
                  porosity, and weather resistance, making it suitable for a wide range of applications.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From luxurious flooring and wall cladding to kitchen countertops, staircases, outdoor paving, and 
                  decorative features, Fortune Red Granite enhances spaces with a rich, inviting charm. Its ability 
                  to withstand heavy wear and harsh conditions ensures lasting performance, while its lively tones 
                  create a sense of grandeur and positivity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Perfect for both residential and commercial projects, Fortune Red Granite is chosen by architects 
                  and designers who want to combine durability with a statement-making aesthetic.
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

export default FortuneRed;
