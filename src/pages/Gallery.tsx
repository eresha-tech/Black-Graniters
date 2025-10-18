import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Gallery = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/graniters.india/",
      icon: Instagram,
      description: "Follow us on Instagram for daily updates and stunning stone installations",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/graniters/",
      icon: Facebook,
      description: "Like our Facebook page for company news and project showcases",
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "LinkedIn",
      url: "https://in.linkedin.com/company/graniters",
      icon: Linkedin,
      description: "Connect with us on LinkedIn for business updates and industry insights",
      color: "from-blue-700 to-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Gallery</h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-white/90">
            Explore our stunning collection of natural stone installations and projects
          </p>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-[#502b21]">
              Connect With Us
            </h2>
            <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
              Follow us on social media to see our latest projects, product showcases, and behind-the-scenes content
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#F7A145]">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#502b21] mb-4">{social.name}</h3>
                      <p className="text-gray-700 leading-relaxed">{social.description}</p>
                      <div className="mt-6 text-[#F7A145] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Visit {social.name}
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#502b21]">
              Latest from Instagram
            </h3>
            <p className="text-center text-gray-700 mb-12">
              Visit our Instagram page to see our complete gallery
            </p>

            {/* Instagram Embed Placeholder */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <Instagram size={64} className="text-[#F7A145] mb-6" />
                <h4 className="text-2xl font-bold text-[#502b21] mb-4">
                  @graniters.india
                </h4>
                <p className="text-gray-700 mb-8 max-w-2xl">
                  Follow us on Instagram to see our latest projects, product installations,
                  and the beauty of natural stones in real-world applications.
                </p>
                <a
                  href="https://www.instagram.com/graniters.india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Instagram size={20} />
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#502b21]">
              Our Work Speaks for Itself
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-[#502b21] to-[#7a3f2e] text-white rounded-lg p-8">
                <h4 className="text-2xl font-bold mb-4">Global Reach</h4>
                <p className="text-white/90 leading-relaxed">
                  Our products have been shipped to clients across France, Poland, Slovakia,
                  Azerbaijan, Vietnam, Malaysia, USA, Germany, and many more countries worldwide.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#F7A145] to-[#e89035] text-white rounded-lg p-8">
                <h4 className="text-2xl font-bold mb-4">Premium Quality</h4>
                <p className="text-white/90 leading-relaxed">
                  From residential homes to commercial spaces, monuments to luxury interiors,
                  our natural stones add timeless elegance to every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
