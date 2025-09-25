import { Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const OurStorySection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
                HOUSE FRAMES
              </h3>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                THE BLACK GRANITERS
              </h2>
              <div className="bg-card border-l-4 border-secondary p-6 rounded-r-lg shadow-sm">
                <p className="text-lg text-foreground font-medium italic mb-4">
                  "Our continuous endeavor is to seek out the best product for our clients!"
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Your dream project should feel truly yours. At Black Graniters, we happily 
                  customize every order so you get stones that fit your vision perfectly.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Seventeen years ago</strong>, an enduring admiration for monumental granite structures such as Bengaluru's Vidhan Soudha and the Brihadeshwar Temple sparked a deep fascination with <strong className="text-foreground">Indian Granite</strong>. This passion led to the founding of <strong className="text-foreground">Graniters in 2012</strong>, a company dedicated to the business of premium black granite from India.
                </p>
                <p>
                  Our journey began with the opening of our first quarry in Karnataka's Coorg District, driven by a commitment to deliver authentic, world-class materials to the global market.
                </p>
                <p>
                  In <strong className="text-foreground">2021, Black Graniters Private Limited</strong> was established, marking our strategic expansion into a wider spectrum of natural stones—granite in varied colors, marble, and sandstone. India is home to an <strong className="text-foreground">incredible diversity of granite</strong>, with stunning textures and hues that span from pink to black.
                </p>
              </div>
            </div>

            <Button className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-3 rounded-md group">
              PORTFOLIO
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Content - Images and Video */}
          <div className="space-y-6">
            {/* Top Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern interior with granite surfaces"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Video Section */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              {!isVideoPlaying ? (
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Modern architecture with granite"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="bg-white/90 hover:bg-white text-primary rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <Play className="h-8 w-8 ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-80">
                  <iframe
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                    title="Black Graniters Story"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="bg-card p-6 rounded-xl shadow-sm border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Today, our sourcing network extends across <strong className="text-foreground">Andhra Pradesh, Telangana, Tamil Nadu, Kerala, and Madhya Pradesh</strong>, with renowned quarries in <strong className="text-foreground">Central India and Ballari District, Karnataka</strong>, recognized for producing superior-quality granite.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
