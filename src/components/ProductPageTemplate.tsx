import { Link } from 'react-router-dom';
import { ArrowLeft, Check, Sparkles, MapPin, ChevronLeft, ChevronRight, MessageCircle, X, ZoomIn } from 'lucide-react';
import type { Product, OtherProduct } from '../data/products';
import { useState, useEffect } from 'react';
import { getImageUrl } from '@/lib/utils';

interface ProductPageTemplateProps {
  product: Product | OtherProduct;
  backLink: string;
  backLabel: string;
}

const ProductPageTemplate = ({ product, backLink, backLabel }: ProductPageTemplateProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const images = product.images || [];
  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // WhatsApp contact function
  const handleWhatsAppContact = () => {
    const phoneNumber = '+919700159159';
    const message = `Hi! I'm interested in ${product.name} from your ${product.category} collection. Could you please provide more details about pricing, availability, and specifications? Thank you!`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Image modal functions
  const openImageModal = () => {
    setIsImageModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImageModal = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImageModal = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isImageModalOpen) return;
      
      switch (event.key) {
        case 'Escape':
          closeImageModal();
          break;
        case 'ArrowLeft':
          if (hasMultipleImages) prevImageModal();
          break;
        case 'ArrowRight':
          if (hasMultipleImages) nextImageModal();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isImageModalOpen, hasMultipleImages]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const isOtherProduct = 'materials' in product;
  const hasOrigin = 'origin' in product && product.origin;
  const hasSubcategory = 'subcategory' in product && product.subcategory;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/shop" className="hover:text-[#502b21]">Shop</Link>
            <span>/</span>
            <Link to={backLink} className="hover:text-[#502b21]">{backLabel}</Link>
            <span>/</span>
            <span className="text-[#502b21] font-semibold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link 
            to={backLink}
            className="inline-flex items-center gap-2 text-[#502b21] hover:text-[#F7A145] mb-8 font-semibold transition-colors"
          >
            <ArrowLeft size={20} />
            Back to {backLabel}
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Product Visual with Carousel */}
            <div className="space-y-6">
              <div className="relative">
                {images.length > 0 ? (
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={openImageModal}>
                    <img 
                      src={getImageUrl(images[currentImageIndex])} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Zoom overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5" />
                        <span className="text-sm font-medium">Premium Quality</span>
                      </div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                    
                    {/* Carousel Controls */}
                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage();
                          }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors z-10"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage();
                          }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-colors z-10"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                        
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                              }}
                              className={`w-2 h-2 rounded-full transition-colors z-10 ${
                                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className={`h-96 rounded-2xl bg-gradient-to-br ${product.gradient} shadow-2xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5" />
                        <span className="text-sm font-medium">Premium Quality</span>
                      </div>
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                    </div>
                  </div>
                )}
                
                {/* Thumbnail Strip for Multiple Images */}
                {hasMultipleImages && (
                  <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                    {images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                          index === currentImageIndex ? 'border-[#F7A145]' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <img 
                          src={getImageUrl(image)} 
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Origin Info */}
              {hasOrigin && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin className="w-5 h-5 text-[#502b21]" />
                    <h4 className="font-semibold text-gray-900">Origin</h4>
                  </div>
                  <p className="text-gray-700">{(product as Product).origin}</p>
                </div>
              )}
              
              {/* Materials Info for Other Products */}
              {isOtherProduct && (
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sparkles className="w-5 h-5 text-[#502b21]" />
                    <h4 className="font-semibold text-gray-900">Available Materials</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(product as OtherProduct).materials.map((material, index) => (
                      <span key={index} className="px-3 py-1 bg-[#F7A145]/10 text-[#502b21] rounded-full text-sm font-medium">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="inline-block px-4 py-2 bg-[#F7A145]/10 text-[#502b21] rounded-full text-sm font-medium mb-6">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  {hasSubcategory && ` • ${(product as Product).subcategory!.charAt(0).toUpperCase() + (product as Product).subcategory!.slice(1)}`}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#F7A145] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.applications.map((application, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg px-4 py-3 text-center">
                      <span className="text-gray-700 font-medium">{application}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-[#502b21] to-[#7a3f2e] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Interested in {product.name}?</h3>
                <p className="mb-6 text-white/90">
                  Contact us for pricing, samples, and custom specifications for your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleWhatsAppContact}
                    className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#20c157] transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact on WhatsApp
                  </button>
                  <Link
                    to="/contact"
                    className="bg-[#F7A145] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e6913d] transition-colors text-center"
                  >
                    Get Quote
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Request Sample
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore More {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our complete range of premium {product.category} products for your next project.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              to={backLink}
              className="inline-flex items-center gap-2 bg-[#502b21] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#7a3f2e] transition-colors"
            >
              View All {backLabel}
              <ArrowLeft className="w-5 h-5 rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full-screen Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Image */}
            <img
              src={getImageUrl(images[currentImageIndex])}
              alt={product.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Navigation Controls for Multiple Images */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={prevImageModal}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={nextImageModal}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-4 right-4 flex gap-2 max-w-xs overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-[#F7A145] scale-110' 
                          : 'border-white/30 hover:border-white/60'
                      }`}
                    >
                      <img
                        src={getImageUrl(image)}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Product Info Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white max-w-sm">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-white/80">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                {hasSubcategory && ` • ${(product as Product).subcategory!.charAt(0).toUpperCase() + (product as Product).subcategory!.slice(1)}`}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPageTemplate;
