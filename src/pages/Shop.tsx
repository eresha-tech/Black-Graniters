import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Shop = () => {
  const categories = [
    {
      title: "Granite",
      description: "Premium and colored granite varieties from across India",
      subcategories: ["Premium Products", "Red Granite", "White Granite", "Green Granite", "Brown & Blue Granite"],
      link: "/shop/granite",
      image: "granite"
    },
    {
      title: "Marble",
      description: "Luxurious marble including Makrana and colored varieties",
      subcategories: ["White Marble", "Grey Marble", "Yellow Marble", "River Marble", "Udaipur Pink"],
      link: "/shop/marble",
      image: "marble"
    },
    {
      title: "Sandstone",
      description: "Versatile natural stone with earthy tones and timeless appeal",
      subcategories: ["Beige Sandstone", "Rainbow Sandstone", "Brown Sandstone", "Grey Sandstone"],
      link: "/shop/sandstone",
      image: "sandstone"
    },
    {
      title: "Onyx",
      description: "Translucent stone with stunning backlit capabilities",
      subcategories: ["White Onyx", "Green Onyx", "Honey Onyx", "Red Onyx"],
      link: "/shop/onyx",
      image: "onyx"
    },
    {
      title: "Quartzite",
      description: "Extremely durable metamorphic stone with superior performance",
      subcategories: ["White Quartzite", "Grey Quartzite", "Blue Quartzite", "Golden Quartzite"],
      link: "/shop/quartzite",
      image: "quartzite"
    },
    {
      title: "Other Products",
      description: "Tombstones, sculptures, countertops, and decorative items",
      subcategories: ["Tombstones", "Sculptures", "Wash Basin & Vases", "Countertops", "Table Tops & Coasters", "Decorative Items"],
      link: "/shop/other-products",
      image: "products"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Shop</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            Explore our extensive collection of premium natural stones and products
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#F7A145]">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <span className="text-6xl font-bold text-gray-300 group-hover:text-[#F7A145] transition-colors">
                        {category.title.charAt(0)}
                      </span>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#502b21] mb-3 group-hover:text-[#F7A145] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      {category.subcategories && (
                        <div className="mb-4">
                          <ul className="text-sm text-gray-600 space-y-1">
                            {category.subcategories.slice(0, 3).map((sub, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#F7A145] rounded-full"></span>
                                {sub}
                              </li>
                            ))}
                            {category.subcategories.length > 3 && (
                              <li className="text-[#F7A145] font-semibold">
                                +{category.subcategories.length - 3} more
                              </li>
                            )}
                          </ul>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-[#F7A145] font-semibold group-hover:gap-3 transition-all">
                        Explore {category.title}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#502b21]">
              Why Choose Our Products
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7A145] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
                <h3 className="text-xl font-bold text-[#502b21] mb-3">Premium Quality</h3>
                <p className="text-gray-700">
                  Sourced from the finest quarries across India with strict quality control
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7A145] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-[#502b21] mb-3">Global Delivery</h3>
                <p className="text-gray-700">
                  Shipped to over 100 countries with professional logistics support
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#F7A145] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-[#502b21] mb-3">Expert Craftsmanship</h3>
                <p className="text-gray-700">
                  Advanced processing with skilled experts ensuring perfect finishing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
