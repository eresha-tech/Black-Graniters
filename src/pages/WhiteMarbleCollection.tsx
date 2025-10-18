import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';
import { marbleProducts } from '../data/products';

const WhiteMarbleCollection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Filter white marble products
  const whiteMarbles = marbleProducts.filter(product => 
    product.subcategory === 'white' || 
    product.name.toLowerCase().includes('white') ||
    product.name.toLowerCase().includes('max white')
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whiteMarbles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + whiteMarbles.length) % whiteMarbles.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/shop" className="hover:text-[#502b21]">Shop</Link>
            <span>/</span>
            <Link to="/shop/marble" className="hover:text-[#502b21]">Marble</Link>
            <span>/</span>
            <span className="text-[#502b21] font-semibold">White Marble Collection</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <Link 
            to="/shop/marble"
            className="inline-flex items-center gap-2 text-[#502b21] hover:text-[#F7A145] mb-8 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Marble Collection
          </Link>

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#F7A145]/10 text-[#502b21] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              Premium White Marble Collection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Exquisite White Marble Varieties
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our curated collection of premium white marble stones, featuring the legendary Makrana marble used in the Taj Mahal and other exceptional varieties
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Main Carousel */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-8">
              <div className="relative h-96 md:h-[500px]">
                {whiteMarbles.map((product, index) => (
                  <div
                    key={product.id}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <div className={`h-full bg-gradient-to-br ${product.gradient} relative`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute inset-0 p-8 md:p-12 flex items-end">
                        <div className="text-white max-w-2xl">
                          <div className="flex items-center gap-2 mb-4">
                            <Sparkles className="w-6 h-6 text-[#F7A145]" />
                            <span className="text-lg font-semibold">Premium White Marble</span>
                          </div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h2>
                          <p className="text-white/90 text-lg mb-6 leading-relaxed">
                            {product.description.substring(0, 200)}...
                          </p>
                          {product.origin && (
                            <div className="flex items-center gap-2 mb-6">
                              <MapPin className="w-5 h-5 text-[#F7A145]" />
                              <span className="text-white/90">{product.origin}</span>
                            </div>
                          )}
                          <Link
                            to={product.link}
                            className="inline-flex items-center gap-2 bg-[#F7A145] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e6913d] transition-colors"
                          >
                            Explore Details
                            <ArrowLeft className="w-5 h-5 rotate-180" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-4 overflow-x-auto pb-4">
              {whiteMarbles.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentSlide 
                      ? 'ring-4 ring-[#F7A145] scale-110' 
                      : 'hover:scale-105 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`w-full h-full bg-gradient-to-br ${product.gradient}`}></div>
                </button>
              ))}
            </div>

            {/* Product Info Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {whiteMarbles.map((product, index) => (
                <div
                  key={product.id}
                  className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 ${
                    index === currentSlide 
                      ? 'border-[#F7A145] shadow-xl' 
                      : 'border-gray-200 hover:border-[#F7A145]/50'
                  }`}
                >
                  <div className={`w-full h-32 bg-gradient-to-br ${product.gradient} rounded-lg mb-4`}></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description.substring(0, 120)}...
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.slice(0, 2).map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 text-[#502b21] hover:text-[#F7A145] font-semibold transition-colors"
                  >
                    View Details
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#502b21] to-[#7a3f2e] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us for pricing, samples, and expert consultation on our premium white marble collection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#F7A145] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e6913d] transition-colors"
            >
              Get Quote
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
            >
              Request Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhiteMarbleCollection;
