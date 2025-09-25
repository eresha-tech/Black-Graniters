import { useState } from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface GraniteCollection {
  id: number;
  name: string;
  category: string;
  origin: string;
  image: string;
  description: string;
  features: string[];
  popular: boolean;
}

const GraniteCollectionsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const collections: GraniteCollection[] = [
    {
      id: 1,
      name: 'Absolute Black',
      category: 'black',
      origin: 'Karnataka, India',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Premium deep black granite with consistent color and minimal veining.',
      features: ['Zero Porosity', 'High Durability', 'Mirror Finish'],
      popular: true
    },
    {
      id: 2,
      name: 'Kashmir White',
      category: 'white',
      origin: 'Andhra Pradesh, India',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Elegant white granite with subtle gray veining and burgundy accents.',
      features: ['Natural Beauty', 'Versatile Design', 'Easy Maintenance'],
      popular: true
    },
    {
      id: 3,
      name: 'Tan Brown',
      category: 'brown',
      origin: 'Tamil Nadu, India',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Rich brown granite with golden highlights and intricate patterns.',
      features: ['Warm Tones', 'Unique Patterns', 'Commercial Grade'],
      popular: false
    },
    {
      id: 4,
      name: 'Imperial Red',
      category: 'red',
      origin: 'Telangana, India',
      image: 'https://images.unsplash.com/photo-1600607688066-890987b5ac8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Striking red granite with black and white crystalline structure.',
      features: ['Bold Color', 'Crystalline Beauty', 'Statement Piece'],
      popular: false
    },
    {
      id: 5,
      name: 'Steel Grey',
      category: 'grey',
      origin: 'Rajasthan, India',
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Contemporary grey granite with silver flecks and modern appeal.',
      features: ['Modern Appeal', 'Silver Flecks', 'Consistent Pattern'],
      popular: true
    },
    {
      id: 6,
      name: 'Multicolor Red',
      category: 'multicolor',
      origin: 'Karnataka, India',
      image: 'https://images.unsplash.com/photo-1600607689082-4a57c1618c9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Vibrant multicolor granite with red, black, and gold patterns.',
      features: ['Vibrant Colors', 'Natural Art', 'Unique Each Slab'],
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Collections', count: collections.length },
    { id: 'black', name: 'Black Granite', count: collections.filter(c => c.category === 'black').length },
    { id: 'white', name: 'White Granite', count: collections.filter(c => c.category === 'white').length },
    { id: 'brown', name: 'Brown Granite', count: collections.filter(c => c.category === 'brown').length },
    { id: 'grey', name: 'Grey Granite', count: collections.filter(c => c.category === 'grey').length },
    { id: 'red', name: 'Red Granite', count: collections.filter(c => c.category === 'red').length },
    { id: 'multicolor', name: 'Multicolor', count: collections.filter(c => c.category === 'multicolor').length }
  ];

  const filteredCollections = activeCategory === 'all' 
    ? collections 
    : collections.filter(collection => collection.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Granite Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our premium selection of Indian granites, sourced from the finest quarries 
            across the country. Each stone tells a story of natural beauty and exceptional quality.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-secondary text-primary shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-foreground'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((collection) => (
            <div
              key={collection.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {collection.popular && (
                  <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Popular
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground">{collection.name}</h3>
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full uppercase">
                    {collection.category}
                  </span>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{collection.origin}</span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {collection.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {collection.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary hover:text-primary group/btn"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our experts can help you find the perfect granite for your project. 
              From residential kitchens to commercial installations, we have the right stone for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
                Request Quote
              </Button>
              <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary font-semibold px-8 py-3">
                View All Collections
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraniteCollectionsSection;
