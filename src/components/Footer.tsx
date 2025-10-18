import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { getImageUrl } from '@/lib/utils';

const Footer = () => {
  const shopCategories = [
    { name: 'Granite Collection', href: '/shop/granite' },
    { name: 'Marble Collection', href: '/shop/marble' },
    { name: 'Sandstone Collection', href: '/shop/sandstone' },
    { name: 'Onyx Collection', href: '/shop/onyx' },
    { name: 'Quartzite Collection', href: '/shop/quartzite' },
    { name: 'Tombstones', href: '/shop/other-products/tombstones-monuments' },
    { name: 'Sculptures', href: '/shop/other-products/sculptures-carvings' },
    { name: 'Countertops', href: '/shop/other-products/countertops' }
  ];

  const popularGranites = [
    { name: 'Vizag Blue', href: '/shop/granite/vizag-blue' },
    { name: 'Hassan Green', href: '/shop/granite/hassan-green' },
    { name: 'Eresha Brown', href: '/shop/granite/eresha-brown' },
    { name: 'Alaska Red', href: '/shop/granite/alaska-red' },
    { name: 'Kashmir White', href: '/shop/granite/kashmir-white' },
    { name: 'Absolute Black', href: '/shop/granite/absolute-black' }
  ];

  const aboutUsLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Quality Assurance', href: '/about#quality' },
    { name: 'Sustainability', href: '/about#sustainability' },
    { name: 'Manufacturing Process', href: '/about#process' },
    { name: 'Export Excellence', href: '/about#export' },
    { name: 'Certifications', href: '/about#certifications' },
    { name: 'Global Reach', href: '/about#global' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Products', href: '/shop' },
    { name: 'Request Quote', href: '/#quote' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Testimonials', href: '/#testimonials' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Shop Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Shop</h3>
            <ul className="space-y-3">
              {shopCategories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Granites Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Popular Granites</h3>
            <ul className="space-y-3">
              {popularGranites.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">About Us</h3>
            <ul className="space-y-3">
              {aboutUsLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground hover:text-secondary transition-colors duration-200 text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications & Contact */}
          <div>
            <h3 className="text-xl font-bold text-foreground mb-6">Company & Certifications</h3>
            <div className="space-y-4 mb-8">


              {/* FIEO Certification */}
              <div className="bg-blue-50 p-3 rounded-lg flex items-center justify-center border border-blue-200">
                <img
                  src={getImageUrl('home/FIEO Logo Trans.webp')}
                  alt="FIEO Certification"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* MSME Certification */}
              <div className="bg-orange-50 p-3 rounded-lg flex items-center justify-center border border-orange-200">
                <img
                  src={getImageUrl('home/MSME.webp')}
                  alt="MSME Certification"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Startup India Recognition */}
              <div className="bg-green-50 p-3 rounded-lg flex items-center justify-center border border-green-200">
                <img
                  src={getImageUrl('home/STARTUP.webp')}
                  alt="#startupindia Recognition"
                  className="h-10 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Company Info & Contact */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl flex items-center justify-center">
                  <img src={getImageUrl('/logo.png')} className="text-white font-bold text-lg" />
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary mt-1 flex-shrink-0" />
                  <div className="text-base text-muted-foreground">
                    <div>20/360, West Patel Nagar, New Delhi, Central</div>
                    <div>Delhi, Delhi 110008</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-base text-muted-foreground">+91 9700159159</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-base text-muted-foreground">info@blackgraniters.com</span>
                </div>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div className="flex flex-col lg:items-end space-y-4">
              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/graniters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/graniters.india/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-200"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://in.linkedin.com/company/graniters"
                  target="_blank"
                  rel="noopener noreferrer"
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
                <p className="text-sm text-muted-foreground mt-2 lg:text-right">
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
              <p className="text-base">Black Graniters ©2024. All Rights Reserved</p>
              <div className="flex space-x-4 text-sm">
                <a href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-secondary transition-colors">Terms of Service</a>
                <a href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
