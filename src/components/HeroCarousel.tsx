import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CarouselSlide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: CarouselSlide[] = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
            title: 'From Our Farms',
            subtitle: 'To Your Hands',
            description: 'Experience the finest quality produce directly from our sustainable farms to your table.',
            ctaText: 'Explore Products',
            ctaLink: '#products'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
            title: 'Sustainable Farming',
            subtitle: 'For Future Generations',
            description: 'Our commitment to sustainable agriculture ensures a healthier planet for tomorrow.',
            ctaText: 'Learn More',
            ctaLink: '#about'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
            title: 'Premium Quality',
            subtitle: 'Every Single Time',
            description: 'Handpicked with care, our produce meets the highest standards of quality and freshness.',
            ctaText: 'Shop Now',
            ctaLink: '#shop'
        }
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />
                </div>
            ))}

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        key={currentSlide}
                        className="animate-fade-in-up"
                    >
                        <p className="text-lg sm:text-xl mb-4 opacity-90 animate-fade-in-up animation-delay-200">
                            {slides[currentSlide].subtitle}
                        </p>
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-400">
                            {slides[currentSlide].title}
                        </h1>
                        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90 animate-fade-in-up animation-delay-600">
                            {slides[currentSlide].description}
                        </p>
                        <div className="animate-fade-in-up animation-delay-800">
                            <Button
                                size="lg"
                                className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 group font-semibold"
                            >
                                {slides[currentSlide].ctaText}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>


            {/* Scroll Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="w-6 h-10 border-2 border-secondary/70 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-secondary rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default HeroCarousel;
