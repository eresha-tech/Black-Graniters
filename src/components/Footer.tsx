import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const shopCategories = [
    { name: 'Vizag Blue', href: '#vizag-blue' },
    { name: 'New Hassan Green', href: '#hassan-green' },
    { name: 'Eresha Brown', href: '#eresha-brown' },
    { name: 'Alaska Red', href: '#alaska-red' },
    { name: 'Kashmir White', href: '#kashmir-white' },
    { name: 'Absolute Black', href: '#absolute-black' },
    { name: 'Steel Grey', href: '#steel-grey' },
    { name: 'Tan Brown', href: '#tan-brown' }
  ];

  const pilotBlackGranite = [
    { name: 'Vizag Blue', href: '#pilot-vizag-blue' },
    { name: 'New Hassan Green', href: '#pilot-hassan-green' },
    { name: 'Eresha Brown', href: '#pilot-eresha-brown' },
    { name: 'Alaska Red', href: '#pilot-alaska-red' },
    { name: 'Premium Black', href: '#premium-black' },
    { name: 'Mirror Black', href: '#mirror-black' }
  ];

  const aboutUsLinks = [
    { name: 'Ceramic Tiles', href: '#ceramic-tiles' },
    { name: 'Teakwood Sandstone', href: '#teakwood-sandstone' },
    { name: 'Countertops', href: '#countertops' },
    { name: 'Tombstones', href: '#tombstones' },
    { name: 'Our Story', href: '#our-story' },
    { name: 'Quality Assurance', href: '#quality' },
    { name: 'Sustainability', href: '#sustainability' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Shop Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Shop</h3>
            <ul className="space-y-3">
              {shopCategories.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot Black Granite Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Pilot Black Granite</h3>
            <ul className="space-y-3">
              {pilotBlackGranite.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">About Us</h3>
            <ul className="space-y-3">
              {aboutUsLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Certifications</h3>
            <div className="space-y-4 mb-8">
              {/* Certification Logos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted p-3 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">FIEO</span>
                  </div>
                </div>
                <div className="bg-muted p-3 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">MSME</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-3 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-secondary font-bold text-sm">#startupindia</div>
                  <div className="text-xs text-muted-foreground">Recognized Startup</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <h4 className="text-md font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Company Info & Contact */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BG</span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <div>20/360, West Patel Nagar, New Delhi, Central</div>
                    <div>Delhi, Delhi 110008</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">+91 9700159159</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">care@graniters.com</span>
                </div>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="flex flex-col lg:items-end space-y-4">
              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              {/* Newsletter Signup */}
              <div className="w-full lg:w-auto">
                <div className="flex flex-col sm:flex-row gap-2 max-w-sm lg:ml-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                  <Button className="bg-secondary hover:bg-secondary/90 text-primary px-4 py-2 whitespace-nowrap">
                    Subscribe
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 lg:text-right">
                  Get updates on new products and offers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-sm">Black Graniters ©2023. All Rights Reserved</p>
              <div className="flex space-x-4 text-xs">
                <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
