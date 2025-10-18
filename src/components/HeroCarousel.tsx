import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { getImageUrl } from '@/lib/utils';

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
    const [direction, setDirection] = useState(0);

    const slides: CarouselSlide[] = [
        {
            id: 1,
            image: getImageUrl('home/home-1.webp'),
            title: 'Premium Natural Stone',
            subtitle: 'Excellence Since 2007',
            description: 'Discover India\'s finest granite, marble, and sandstone. Quality craftsmanship meets timeless elegance.',
            ctaText: 'Explore Collection',
            ctaLink: '/shop/granite'
        },
        {
            id: 2,
            image: getImageUrl('home/granite quarry.webp'),
            title: 'From Quarry to Creation',
            subtitle: 'Direct Source Quality',
            description: 'Experience the journey from raw stone extraction to finished masterpieces. Premium granite from our own quarries.',
            ctaText: 'View Granite',
            ctaLink: '/shop/granite'
        },
        {
            id: 3,
            image: getImageUrl('home/Style1.webp'),
            title: 'Architectural Elegance',
            subtitle: 'Modern Design Solutions',
            description: 'Transform spaces with our contemporary stone designs. Perfect for modern architecture and luxury interiors.',
            ctaText: 'Discover Styles',
            ctaLink: '/shop/marble'
        },
        {
            id: 4,
            image: getImageUrl('home/website image.webp'),
            title: 'Global Export Excellence',
            subtitle: 'Worldwide Delivery',
            description: 'Trusted by clients in 100+ countries. Professional packaging and reliable international shipping.',
            ctaText: 'View Products',
            ctaLink: '/shop/sandstone'
        },
        {
            id: 5,
            image: getImageUrl('home/red sandstone lamp.webp'),
            title: 'Handcrafted Artistry',
            subtitle: 'Custom Creations',
            description: 'Beautiful red sandstone lamps and decorative items. Each piece uniquely crafted by skilled artisans.',
            ctaText: 'Custom Orders',
            ctaLink: '/shop/other-products'
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: "easeOut" as const
            }
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentSlide((prev) => {
            let next = prev + newDirection;
            if (next < 0) next = slides.length - 1;
            if (next >= slides.length) next = 0;
            return next;
        });
    };

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Slides */}
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.5 }
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 flex items-center h-full">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="text-white"
                            >
                                <motion.p
                                    custom={0}
                                    variants={textVariants}
                                    className="text-[#F7A145] text-lg sm:text-xl font-semibold mb-4 tracking-wide uppercase"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>
                                
                                <motion.h1
                                    custom={1}
                                    variants={textVariants}
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                                >
                                    {slides[currentSlide].title}
                                </motion.h1>
                                
                                <motion.p
                                    custom={2}
                                    variants={textVariants}
                                    className="text-lg sm:text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl"
                                >
                                    {slides[currentSlide].description}
                                </motion.p>
                                
                                <motion.div
                                    custom={3}
                                    variants={textVariants}
                                    className="flex flex-wrap gap-4"
                                >
                                    <Link
                                        to={slides[currentSlide].ctaLink}
                                        className="group bg-[#502b21] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F7A145] transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center gap-2"
                                    >
                                        {slides[currentSlide].ctaText}
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                                    >
                                        Learn More
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={() => paginate(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft size={28} />
            </button>
            <button
                onClick={() => paginate(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight size={28} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentSlide ? 1 : -1);
                            setCurrentSlide(index);
                        }}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentSlide
                                ? 'w-12 h-3 bg-[#F7A145]'
                                : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-8 right-8 z-20"
            >
                <div className="flex flex-col items-center gap-2 text-white/70">
                    <span className="text-sm font-medium">Scroll</span>
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1 h-3 bg-white/70 rounded-full mt-2"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroCarousel;
