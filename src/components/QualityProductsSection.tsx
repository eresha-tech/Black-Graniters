import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductCard {
  id: number;
  image: string;
  title: string;
  location: string;
  ctaText: string;
  ctaLink: string;
}

const QualityProductsSection = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const products: ProductCard[] = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Organic Garden',
      location: 'California, USA',
      ctaText: 'Explore Products',
      ctaLink: '#organic'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fresh Produce',
      location: 'Texas, USA',
      ctaText: 'Shop Now',
      ctaLink: '#fresh'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Premium Quality',
      location: 'Florida, USA',
      ctaText: 'Learn More',
      ctaLink: '#premium'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Sustainable Farming',
      location: 'Oregon, USA',
      ctaText: 'Discover',
      ctaLink: '#sustainable'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1592419044706-39796d40f98c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Greenhouse Growing',
      location: 'Washington, USA',
      ctaText: 'View Details',
      ctaLink: '#greenhouse'
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!isDragging) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % products.length);
      }, 3000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isDragging, products.length]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setDragDistance(0);
    
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    e.preventDefault();
    const distance = e.pageX - startX;
    setDragDistance(distance);
  };

  const handleMouseUp = () => {
    if (isDragging && Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        // Dragged right, go to previous
        setCurrentIndex(prev => prev === 0 ? products.length - 1 : prev - 1);
      } else {
        // Dragged left, go to next
        setCurrentIndex(prev => (prev + 1) % products.length);
      }
    }
    setIsDragging(false);
    setDragDistance(0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragDistance(0);
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragDistance(0);
    
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const distance = e.touches[0].pageX - startX;
    setDragDistance(distance);
  };

  const handleTouchEnd = () => {
    if (isDragging && Math.abs(dragDistance) > 50) {
      if (dragDistance > 0) {
        // Dragged right, go to previous
        setCurrentIndex(prev => prev === 0 ? products.length - 1 : prev - 1);
      } else {
        // Dragged left, go to next
        setCurrentIndex(prev => (prev + 1) % products.length);
      }
    }
    setIsDragging(false);
    setDragDistance(0);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Quality Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Image Carousel - 80% height */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] flex items-center justify-center overflow-hidden">
            {products.map((product, index) => {
              const position = index - currentIndex;
              const isActive = index === currentIndex;
              const isLeft = position < 0;
              const isAdjacent = Math.abs(position) === 1;
              
              return (
                <div
                  key={product.id}
                  className={`absolute transition-all duration-700 ease-in-out ${
                    isActive
                      ? 'z-20 scale-100 opacity-100 transform translate-x-0 rotate-0'
                      : isAdjacent
                      ? `z-10 scale-90 opacity-70 ${
                          isLeft 
                            ? 'transform -translate-x-64 -rotate-12' 
                            : 'transform translate-x-64 rotate-12'
                        }`
                      : 'z-0 scale-75 opacity-0 transform translate-x-0'
                  } ${
                    isDragging ? 'cursor-grabbing' : 'cursor-grab'
                  }`}
                  style={{ userSelect: 'none' }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseLeave}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Pure Image - No Card Wrapper */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl w-80 h-96">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      draggable={false}
                    />
                    
                    {/* Drag Indicator - only show on active image */}
                    {isActive && (
                      <div className="absolute top-4 right-4 bg-secondary/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-primary">
                        Drag
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Separate Text Content Below Images */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            {products[currentIndex].title}
          </h3>
          <p className="text-muted-foreground mb-6">
            {products[currentIndex].location}
          </p>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 group font-semibold"
          >
            {products[currentIndex].ctaText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-secondary w-8'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProductsSection;
