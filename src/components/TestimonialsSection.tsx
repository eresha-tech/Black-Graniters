import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  content: string;
  project: string;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Architect',
      company: 'Kumar & Associates',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'Black Graniters provided exceptional quality granite for our luxury residential project. Their attention to detail and timely delivery exceeded our expectations. The Absolute Black granite we used has maintained its pristine appearance even after two years.',
      project: 'Luxury Villa Complex, Bangalore'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Interior Designer',
      company: 'Elegant Interiors',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'Working with Black Graniters has been a game-changer for our projects. Their Kashmir White granite transformed our client\'s kitchen into a masterpiece. The quality is unmatched and their customer service is outstanding.',
      project: 'Modern Kitchen Renovation, Delhi'
    },
    {
      id: 3,
      name: 'Mohammed Ali',
      role: 'Construction Manager',
      company: 'Elite Constructions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'For our commercial project, we needed large quantities of consistent quality granite. Black Graniters delivered exactly what we needed on time and within budget. Their Steel Grey granite gave our office building a sophisticated look.',
      project: 'Corporate Office Building, Mumbai'
    },
    {
      id: 4,
      name: 'Anita Patel',
      role: 'Homeowner',
      company: 'Private Residence',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'I was looking for the perfect granite for my dream home\'s countertops. Black Graniters helped me choose the ideal Tan Brown granite that complements my kitchen perfectly. The installation was flawless and professional.',
      project: 'Dream Home Kitchen, Pune'
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'Hotel Manager',
      company: 'Grand Palace Hotel',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      content: 'Our hotel renovation required premium quality granite that could withstand heavy usage while maintaining elegance. Black Graniters\' Imperial Red granite in our lobby has been receiving compliments from guests worldwide.',
      project: 'Five-Star Hotel Renovation, Goa'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-secondary fill-secondary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what architects, designers, and homeowners 
            have to say about their experience with Black Graniters.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-secondary/20"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-secondary/30 mb-4 mx-auto md:mx-0" />

                {/* Rating */}
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                  <p className="text-sm text-secondary font-medium">
                    Project: {testimonials[currentIndex].project}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full p-2 border-secondary text-secondary hover:bg-secondary hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-secondary w-8'
                      : 'bg-muted-foreground hover:bg-secondary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full p-2 border-secondary text-secondary hover:bg-secondary hover:text-primary"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {isAutoPlaying ? 'Pause' : 'Resume'} auto-play
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">1000+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Granite Varieties</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
